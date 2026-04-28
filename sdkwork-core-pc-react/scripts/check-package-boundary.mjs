import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const packageRoot = path.resolve(import.meta.dirname, "..");
const packageJsonPath = path.join(packageRoot, "package.json");
const sourceRoot = path.join(packageRoot, "src");

function collectSourceFiles(dir) {
  const entries = readdirSync(dir, {
    withFileTypes: true,
  });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return collectSourceFiles(fullPath);
    }

    return /\.(ts|tsx)$/.test(entry.name) ? [fullPath] : [];
  });
}

const sourceFiles = collectSourceFiles(sourceRoot);
const offenders = [];

for (const filePath of sourceFiles) {
  const contents = readFileSync(filePath, "utf8");
  const matches = contents.matchAll(/from\s+["'](\.{1,2}\/[^"']+\.ts)["']/g);

  for (const match of matches) {
    offenders.push(`${path.relative(packageRoot, filePath)} -> ${match[1]}`);
  }
}

assert.deepEqual(
  offenders,
  [],
  `Source files must not use relative .ts import specifiers.\n${offenders.join("\n")}`,
);

const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
const rootExport = packageJson.exports?.["."] ?? {};
const rootExportKeys = Object.keys(rootExport);
const requireIndex = rootExportKeys.indexOf("require");
const defaultIndex = rootExportKeys.indexOf("default");

assert.notEqual(requireIndex, -1, "Root exports must expose a require condition.");
assert.notEqual(defaultIndex, -1, "Root exports must expose a default condition.");
assert.ok(
  requireIndex < defaultIndex,
  `Root exports must place require before default. Current order: ${rootExportKeys.join(", ")}`,
);

console.log("@sdkwork/core-pc-react package boundary is valid.");
