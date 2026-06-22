import { createTestJwt } from "../../src/env";

export const TEST_DEPLOYMENT_ACCESS_TOKEN = createTestJwt({
  tenant_id: "tenant-access",
  app_id: "appbase",
  environment: "dev",
  deployment_mode: "saas",
});

export function testDeploymentAccessToken(
  overrides: Record<string, unknown> = {},
): string {
  return createTestJwt({
    tenant_id: "tenant-access",
    app_id: "appbase",
    environment: "dev",
    deployment_mode: "saas",
    ...overrides,
  });
}
