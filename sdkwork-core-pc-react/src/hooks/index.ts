import { useMemo, useSyncExternalStore } from "react";
import { getAppClientWithSession } from "../app/index";
import { getImClient } from "../im/index";
import {
  getPcReactShellPreferencesVersion,
  readPcReactShellPreferences,
  resolvePcReactShellPreferences,
  subscribePcReactShellPreferences,
} from "../internal/preferencesState";
import {
  getPcReactEnv,
  getPcReactRuntimeVersion,
  readPcReactShellBridgeValue,
  readRuntimeSession,
  subscribePcReactRuntime,
} from "../runtime/index";

function useRuntimeSubscription(): void {
  useSyncExternalStore(subscribePcReactRuntime, getPcReactRuntimeVersion, getPcReactRuntimeVersion);
}

function usePreferenceSubscription(): void {
  useSyncExternalStore(
    subscribePcReactShellPreferences,
    getPcReactShellPreferencesVersion,
    getPcReactShellPreferencesVersion,
  );
}

export function useAppClient() {
  useRuntimeSubscription();
  return getAppClientWithSession();
}

export function useImClient() {
  useRuntimeSubscription();
  return getImClient();
}

export function usePcReactEnv() {
  useRuntimeSubscription();
  return getPcReactEnv();
}

export function usePcReactRuntimeSession() {
  useRuntimeSubscription();
  return readRuntimeSession();
}

export function usePcReactShellPreferences() {
  usePreferenceSubscription();
  return readPcReactShellPreferences();
}

export function usePcReactResolvedShellPreferences() {
  usePreferenceSubscription();
  return resolvePcReactShellPreferences();
}

export function usePcReactShellBridgeValue() {
  useRuntimeSubscription();
  usePreferenceSubscription();

  const env = getPcReactEnv();
  const preferences = resolvePcReactShellPreferences();
  const session = readRuntimeSession();

  return useMemo(
    () => readPcReactShellBridgeValue(),
    [env, preferences, session],
  );
}
