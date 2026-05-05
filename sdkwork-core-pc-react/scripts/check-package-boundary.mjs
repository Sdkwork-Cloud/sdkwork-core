import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const packageRoot = path.resolve(import.meta.dirname, "..");
const workspaceRoot = path.resolve(packageRoot, "..");
const packageJsonPath = path.join(packageRoot, "package.json");
const sourceRoot = path.join(packageRoot, "src");
const testRoot = path.join(packageRoot, "tests");

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

const deprecatedBrand = `open${"chat"}`;
const deprecatedPackageScope = `@${deprecatedBrand}/`;
const deprecatedPattern = new RegExp(`${deprecatedBrand}|${deprecatedPackageScope}`, "i");
const deprecatedReferenceFiles = [
  path.join(workspaceRoot, "package.json"),
  path.join(workspaceRoot, "pnpm-workspace.yaml"),
  packageJsonPath,
  path.join(packageRoot, "README.md"),
  path.join(packageRoot, "vite.config.ts"),
  path.join(packageRoot, "vitest.config.ts"),
  ...collectSourceFiles(sourceRoot),
  ...collectSourceFiles(testRoot),
];
const deprecatedReferenceOffenders = deprecatedReferenceFiles
  .filter((filePath) => deprecatedPattern.test(readFileSync(filePath, "utf8")))
  .map((filePath) => path.relative(workspaceRoot, filePath));

assert.deepEqual(
  deprecatedReferenceOffenders,
  [],
  `Workspace metadata and source files must not reference deprecated chat packages.\n${deprecatedReferenceOffenders.join("\n")}`,
);

const privateGeneratedPackage = `@sdkwork-${"internal"}/im-sdk-generated`;
const privateGeneratedPackageFiles = [
  path.join(workspaceRoot, "package.json"),
  path.join(workspaceRoot, "pnpm-workspace.yaml"),
  packageJsonPath,
  path.join(packageRoot, "vite.config.ts"),
  path.join(packageRoot, "vitest.config.ts"),
];
const privateGeneratedPackageOffenders = privateGeneratedPackageFiles
  .filter((filePath) => readFileSync(filePath, "utf8").includes(privateGeneratedPackage))
  .map((filePath) => path.relative(workspaceRoot, filePath));

assert.deepEqual(
  privateGeneratedPackageOffenders,
  [],
  `Consumer metadata must not expose the private generated IM package.\n${privateGeneratedPackageOffenders.join("\n")}`,
);

const runtimeSdkDependencies = [
  "@sdkwork/app-sdk",
  "@sdkwork/im-sdk",
  "@sdkwork/rtc-sdk",
];
const workspaceRuntimeDependencyOffenders = runtimeSdkDependencies
  .filter((dependencyName) => {
    const specifier = packageJson.dependencies?.[dependencyName] ?? "";
    return specifier.startsWith("workspace:") || specifier.startsWith("file:");
  })
  .map((dependencyName) => `${dependencyName}: ${packageJson.dependencies?.[dependencyName]}`);

assert.deepEqual(
  workspaceRuntimeDependencyOffenders,
  [],
  `Runtime SDK dependencies must be portable across consumer workspaces and npm installs.\n${workspaceRuntimeDependencyOffenders.join("\n")}`,
);

console.log("@sdkwork/core-pc-react package boundary is valid.");
