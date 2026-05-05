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
  const workspaceRoot = path.resolve(packageRoot, "..");
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

  test("workspace metadata and source files do not reference deprecated chat packages", () => {
    const deprecatedBrand = `open${"chat"}`;
    const deprecatedPackageScope = `@${deprecatedBrand}/`;
    const deprecatedPattern = new RegExp(`${deprecatedBrand}|${deprecatedPackageScope}`, "i");
    const files = [
      path.join(workspaceRoot, "package.json"),
      path.join(workspaceRoot, "pnpm-workspace.yaml"),
      path.join(packageRoot, "package.json"),
      path.join(packageRoot, "README.md"),
      path.join(packageRoot, "vite.config.ts"),
      path.join(packageRoot, "vitest.config.ts"),
      ...collectSourceFiles(sourceRoot),
      ...collectSourceFiles(path.join(packageRoot, "tests"))
    ];
    const offenders = files
      .map((filePath) => ({
        filePath,
        contents: readFileSync(filePath, "utf8")
      }))
      .filter(({ contents }) => deprecatedPattern.test(contents))
      .map(({ filePath }) => path.relative(workspaceRoot, filePath));

    expect(offenders).toEqual([]);
  });

  test("consumer metadata does not expose the private generated IM package", () => {
    const privateGeneratedPackage = `@sdkwork-${"internal"}/im-sdk-generated`;
    const files = [
      path.join(workspaceRoot, "package.json"),
      path.join(workspaceRoot, "pnpm-workspace.yaml"),
      path.join(packageRoot, "package.json"),
      path.join(packageRoot, "vite.config.ts"),
      path.join(packageRoot, "vitest.config.ts")
    ];
    const offenders = files
      .filter((filePath) => readFileSync(filePath, "utf8").includes(privateGeneratedPackage))
      .map((filePath) => path.relative(workspaceRoot, filePath));

    expect(offenders).toEqual([]);
  });

  test("runtime SDK dependencies are portable across consumer workspaces and npm installs", () => {
    const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8")) as {
      dependencies?: Record<string, string>;
    };
    const runtimeSdkDependencies = [
      "@sdkwork/app-sdk",
      "@sdkwork/im-sdk",
      "@sdkwork/rtc-sdk"
    ];
    const offenders = runtimeSdkDependencies
      .filter((dependencyName) => {
        const specifier = packageJson.dependencies?.[dependencyName] ?? "";
        return specifier.startsWith("workspace:") || specifier.startsWith("file:");
      })
      .map((dependencyName) => `${dependencyName}: ${packageJson.dependencies?.[dependencyName]}`);

    expect(offenders).toEqual([]);
  });
});
