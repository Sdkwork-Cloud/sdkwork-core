# SDKWork Core

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
