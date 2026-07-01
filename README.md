# SDKWork Core
repository-kind: foundation-dependency

`apps/sdkwork-core` is the shared framework workspace for reusable SDKWork client runtimes.

Current deliverables:

- `sdkwork-core-pc-react`
  - Unified Vite env contract for Tauri + React desktop apps
  - Unified app sdk / im sdk runtime
  - Unified dual-token + api-key session handling
  - Standard `useAppClient` / `useImClient` hooks

Planned deliverables:

- `sdkwork-core-mobile-react`
- `sdkwork-core-mobile-flutter`

Use this workspace as the single integration entry for SDKWork application clients. App projects should not duplicate env parsing, token propagation, or SDK bootstrap logic.

## SDKWork Documentation Contract

Domain: platform
Capability: workspace
Package type: node-package
Status: standardizing

### Public API

Public exports are declared in `specs/component.spec.json` under `contracts.publicExports`.

### Required SDK Surface

- None declared in `specs/component.spec.json`.

### Configuration

Configuration keys and runtime entrypoints are declared in `specs/component.spec.json`.

### SaaS/Private/Local Behavior

This module follows the canonical standards linked from `specs/component.spec.json`, including deployment and runtime configuration rules where applicable.

### Security

Do not add secrets, live tokens, manual auth headers, or app-local credential handling to this module.

### Extension Points

Extension points are limited to declared public exports, runtime entrypoints, SDK clients, events, and config keys.

### Verification

- `pnpm --filter sdkwork-core-workspace typecheck`

### Owner And Status

Owner and lifecycle status are tracked in `specs/component.spec.json`.

## Documentation Canon

- [docs/README.md](docs/README.md)
- [docs/product/prd/PRD.md](docs/product/prd/PRD.md)
- [docs/architecture/tech/TECH_ARCHITECTURE.md](docs/architecture/tech/TECH_ARCHITECTURE.md)

