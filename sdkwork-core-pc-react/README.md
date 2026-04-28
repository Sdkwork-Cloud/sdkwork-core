# `@sdkwork/core-pc-react`

`@sdkwork/core-pc-react` is the unified desktop React runtime for SDKWork Tauri applications.

It centralizes:

- Vite env parsing
- owner-scoped `baseUrl` and `accessToken` resolution
- app sdk bootstrap
- dual-token and api-key auth mode handling
- shell preference persistence for theme selection, theme color, locale preference, and resolved locale
- standard `useAppClient` hook
- runtime session persistence
- legacy desktop storage migration
- injected desktop env compatibility
- app client compatibility aliases

## Runtime model

One package owns four concerns:

1. Env
   - resolves `VITE_*` keys into one normalized desktop runtime contract
   - supports owner-scoped `root`, `tenant`, `organization` `baseUrl` and `accessToken`
   - supports compatibility keys from older desktop apps
   - detects Tauri runtime through `__TAURI__`, `__TAURI_IPC__`, or `__TAURI_INTERNALS__`

2. Session
   - persists `authToken`, `accessToken`, and `refreshToken`
   - keeps `authToken` and `accessToken` separated
   - automatically reads legacy desktop storage keys during migration

3. Clients
   - provides one shared app sdk client
   - applies runtime session changes to the app client after login, refresh, and logout

4. Hooks
   - `useAppClient()`
   - `usePcReactEnv()`
   - `usePcReactRuntimeSession()`
   - `usePcReactShellPreferences()`
   - `usePcReactResolvedShellPreferences()`

## Standard usage

```ts
import {
  SDKWORK_PC_REACT_DEFAULT_APP_CLIENT_COMPAT_ALIASES,
  configurePcReactRuntime,
  persistPcReactRuntimeSession,
  persistPcReactShellPreferences,
  useAppClient,
  usePcReactResolvedShellPreferences,
} from "@sdkwork/core-pc-react";

function getAppLanguage(): string {
  return "zh-CN";
}

configurePcReactRuntime({
  envSource: import.meta.env,
  envGlobalKeys: ["__SDKWORK_NOTES_ENV__"],
  appClientCompatAliases: SDKWORK_PC_REACT_DEFAULT_APP_CLIENT_COMPAT_ALIASES,
  preferences: {
    defaults: {
      localePreference: "zh-CN",
      themeColor: "lobster",
      themeSelection: "system"
    }
  },
  headersResolver: ({ target }) => ({
    "Accept-Language": getAppLanguage(),
    "X-SDK-Client": "desktop-app"
  })
});

persistPcReactRuntimeSession({
  authToken: "user-auth-token",
  accessToken: "tenant-access-token",
  refreshToken: "refresh-token"
});

persistPcReactShellPreferences({
  localePreference: "zh-CN",
  themeColor: "lobster",
  themeSelection: "dark"
});

const appClient = useAppClient();
const shellPreferences = usePcReactResolvedShellPreferences();
```

## Env standard

Primary env keys:

- `VITE_APP_ENV`
- `VITE_OWNER_MODE`
- `VITE_API_BASE_URL`
- `VITE_ROOT_API_BASE_URL`
- `VITE_TENANT_API_BASE_URL`
- `VITE_ORGANIZATION_API_BASE_URL`
- `VITE_ACCESS_TOKEN`
- `VITE_ROOT_ACCESS_TOKEN`
- `VITE_TENANT_ACCESS_TOKEN`
- `VITE_ORGANIZATION_ACCESS_TOKEN`
- `VITE_API_KEY`
- `VITE_TENANT_ID`
- `VITE_ORGANIZATION_ID`
- `VITE_PLATFORM`
- `VITE_DISTRIBUTION_ID`
- `VITE_APP_ID`
- `VITE_RELEASE_CHANNEL`
- `VITE_ENABLE_STARTUP_UPDATE_CHECK`

Compatibility env keys that are still supported for migration:

- `VITE_APP_API_BASE_URL`
- `VITE_APP_BASE_URL`
- `VITE_APP_ACCESS_TOKEN`
- `VITE_APP_PLATFORM`
- `SDKWORK_API_BASE_URL`
- `SDKWORK_ACCESS_TOKEN`
- `SDKWORK_API_KEY`
- `SDKWORK_TENANT_ID`
- `SDKWORK_ORGANIZATION_ID`
- `SDKWORK_PLATFORM`
- `SDKWORK_OWNER_MODE`

Injected desktop env compatibility:

- `configurePcReactRuntime({ envGlobalKeys: ["__SDKWORK_NOTES_ENV__"] })`
- any named global object in `globalThis` can be merged into runtime env before explicit `envSource`

## Storage standard

Standard storage keys:

- `sdkwork.core.pc-react.auth-token`
- `sdkwork.core.pc-react.access-token`
- `sdkwork.core.pc-react.refresh-token`
- `sdkwork.core.pc-react.preferences`

Automatically supported legacy migration keys:

- `sdkwork_token`
- `sdkwork_access_token`
- `sdkwork_refresh_token`
- `sdkwork-notes-auth-session`
- `sdkwork-drive-auth-session`
- `claw-studio-auth-session`

Legacy JSON session keys are read as:

```json
{
  "authToken": "user-auth-token",
  "refreshToken": "refresh-token"
}
```

## App client compatibility aliases

The exported `SDKWORK_PC_REACT_DEFAULT_APP_CLIENT_COMPAT_ALIASES` adds plural compatibility getters for desktop apps that previously wrapped the generated app sdk:

```json
{
  "analytics": "analytic",
  "assets": "asset",
  "coupons": "coupon",
  "notes": "note",
  "orders": "order",
  "payments": "payment",
  "projects": "project",
  "settings": "setting",
  "workspaces": "workspace"
}
```

This is intended for Magic Studio style compatibility migration while keeping the generated sdk as the actual source of truth.

## Header standard

Dual-token mode:

- app sdk sends `Access-Token: <owner-scoped-access-token>`
- app sdk sends `Authorization: Bearer <auth-token>`

API key mode:

- app sdk uses `Authorization: Bearer <apiKey>`

Runtime header extension:

- use `headersResolver` to inject shared desktop headers such as `Accept-Language`
- resolver `target` is `app`
- resolver output is merged into the app sdk config
- explicit per-client `headers` overrides still win
