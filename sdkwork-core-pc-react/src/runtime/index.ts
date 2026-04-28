import type { ConfigurePcReactRuntimeOptions, PcReactRuntimeSession } from "../internal/contracts";
import { applyRuntimeSessionToAppClient } from "../app/index";
import {
  clearStoredPcReactRuntimeSession,
  configureRuntime,
  getPcReactEnv,
  getPcReactRuntimeVersion,
  persistPcReactRuntimeSession as persistStoredPcReactRuntimeSession,
  readPcReactRuntimeSession as readStoredPcReactRuntimeSession,
  resetRuntime,
  SDKWORK_PC_REACT_LEGACY_ACCESS_TOKEN_STORAGE_KEY,
  SDKWORK_PC_REACT_LEGACY_AUTH_TOKEN_STORAGE_KEY,
  SDKWORK_PC_REACT_LEGACY_REFRESH_TOKEN_STORAGE_KEY,
  subscribePcReactRuntime
} from "../internal/runtimeState";

export function configurePcReactRuntime(options: ConfigurePcReactRuntimeOptions = {}): ConfigurePcReactRuntimeOptions {
  return configureRuntime(options);
}

export function resetPcReactRuntime(options: { clearStorage?: boolean; clearConfiguration?: boolean } = {}): void {
  resetRuntime(options);
}

export function persistRuntimeSession(session: PcReactRuntimeSession): PcReactRuntimeSession {
  const nextSession = persistStoredPcReactRuntimeSession(session);
  applyRuntimeSessionToAppClient(nextSession);
  return nextSession;
}

export const persistPcReactRuntimeSession = persistRuntimeSession;

export function readRuntimeSession(): PcReactRuntimeSession {
  return readStoredPcReactRuntimeSession();
}

export const readPcReactRuntimeSession = readRuntimeSession;

export async function clearPcReactRuntimeSession(): Promise<void> {
  clearStoredPcReactRuntimeSession();
  applyRuntimeSessionToAppClient(readStoredPcReactRuntimeSession());
}

export const SDKWORK_PC_REACT_LEGACY_STORAGE_KEYS = {
  authToken: SDKWORK_PC_REACT_LEGACY_AUTH_TOKEN_STORAGE_KEY,
  accessToken: SDKWORK_PC_REACT_LEGACY_ACCESS_TOKEN_STORAGE_KEY,
  refreshToken: SDKWORK_PC_REACT_LEGACY_REFRESH_TOKEN_STORAGE_KEY
} as const;

export {
  createPcReactLocaleFormatting,
  readPcReactShellBridgeValue,
  resolvePcReactLocaleDirection,
} from "./shell-bridge";

export {
  getPcReactEnv,
  getPcReactRuntimeVersion,
  SDKWORK_PC_REACT_LEGACY_ACCESS_TOKEN_STORAGE_KEY,
  SDKWORK_PC_REACT_LEGACY_AUTH_TOKEN_STORAGE_KEY,
  SDKWORK_PC_REACT_LEGACY_REFRESH_TOKEN_STORAGE_KEY,
  subscribePcReactRuntime
};
