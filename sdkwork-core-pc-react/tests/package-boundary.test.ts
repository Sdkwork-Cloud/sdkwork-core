import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { describe, expect, test } from "vitest";

function collectSourceFiles(dir: string): string[] {
  const entries = readdirSync(dir, {
    withFileTypes: true,
  });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return collectSourceFiles(fullPath);
    }

    if (!entry.isFile()) {
      return [];
    }

    return /\.(ts|tsx)$/.test(entry.name) ? [fullPath] : [];
  });
}

describe("@sdkwork/core-pc-react package boundary", () => {
  const packageRoot = path.resolve(import.meta.dirname, "..");
  const packageJsonPath = path.join(packageRoot, "package.json");
  const sourceRoot = path.join(packageRoot, "src");

  test("source files do not use relative .ts import specifiers", () => {
    const sourceFiles = collectSourceFiles(sourceRoot);
    const offenders: string[] = [];

    for (const filePath of sourceFiles) {
      const contents = readFileSync(filePath, "utf8");
      const matches = contents.matchAll(/from\s+["'](\.{1,2}\/[^"']+\.ts)["']/g);

      for (const match of matches) {
        offenders.push(`${path.relative(packageRoot, filePath)} -> ${match[1]}`);
      }
    }

    expect(offenders).toEqual([]);
  });

  test("root exports place require before default when both are present", () => {
    const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8")) as {
      exports?: Record<string, Record<string, string>>;
    };
    const rootExport = packageJson.exports?.["."] ?? {};
    const rootExportKeys = Object.keys(rootExport);
    const requireIndex = rootExportKeys.indexOf("require");
    const defaultIndex = rootExportKeys.indexOf("default");

    expect(requireIndex).not.toBe(-1);
    expect(defaultIndex).not.toBe(-1);
    expect(requireIndex).toBeLessThan(defaultIndex);
  });
});
