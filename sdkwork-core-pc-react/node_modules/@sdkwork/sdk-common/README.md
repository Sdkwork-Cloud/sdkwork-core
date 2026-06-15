# @sdkwork/sdk-common

Common foundation package for generated TypeScript SDKs.

## Install

```bash
npm install @sdkwork/sdk-common
```

## Authentication Modes

Choose one mode per client instance.

1. API Key mode
- `Authorization: Bearer {apiKey}`

2. Dual-token mode
- `Access-Token: {accessToken}`
- `Authorization: Bearer {authToken}`

## Quick Start

```typescript
import { createBaseHttpClient, createTokenManager } from '@sdkwork/sdk-common';

const tokenManager = createTokenManager({
  accessToken: 'your-access-token',
  authToken: 'your-auth-token',
});

const client = createBaseHttpClient({
  baseUrl: 'https://api.example.com',
  tokenManager,
});

const profile = await client.get<{ id: string; name: string }>('/v1/profile');
console.log(profile.name);
```

API key mode example:

```typescript
import { createBaseHttpClient } from '@sdkwork/sdk-common';

const client = createBaseHttpClient({
  baseUrl: 'https://api.example.com',
  apiKey: 'your-api-key',
});
```

## Exported Modules

- `core`: request/result types, constants, retry/cache/logger config types
- `auth`: token manager and auth header builder
- `http`: `BaseHttpClient` and `createBaseHttpClient`
- `errors`: SDK error hierarchy and type guards
- `utils`: retry, cache, logger, string/encoding/date/object helpers


## Publishing

This SDK includes cross-platform publish scripts in `bin/`:
- `bin/publish-core.mjs`
- `bin/publish.sh`
- `bin/publish.ps1`

### Check

```bash
./bin/publish.sh --action check
```

### Publish

```bash
./bin/publish.sh --action publish --channel release
```

```powershell
.\bin\publish.ps1 --action publish --channel test --dry-run
```

> Set `NPM_TOKEN` (and optional `NPM_REGISTRY_URL`) before release publish.

## License

MIT

## SDKWork Documentation Contract

Domain: platform
Capability: sdk-common
Package type: node-package
Status: standard

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

- `pnpm typecheck`

### Owner And Status

Owner and lifecycle status are tracked in `specs/component.spec.json`.
