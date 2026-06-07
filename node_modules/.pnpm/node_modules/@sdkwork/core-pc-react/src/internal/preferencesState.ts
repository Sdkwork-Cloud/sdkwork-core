import type {
  PcReactPreferenceOptions,
  PcReactResolvedShellPreferences,
  PcReactShellPreferences,
  PcReactThemeColor,
  PcReactThemeSelection,
} from "./contracts";
import {
  getRuntimeOptions,
  resolveStorageAdapter,
  subscribePcReactRuntime,
} from "./runtimeState";
import {
  safeParseJson,
  safeStringifyJson,
} from "./helpers";

const DEFAULT_SHELL_PREFERENCES_STORAGE_KEY = "sdkwork.core.pc-react.preferences";
const DEFAULT_SYSTEM_PREFERS_DARK = true;

let preferencesVersion = 0;
let runtimeBridgeBound = false;
let systemThemeBridgeBound = false;
let lastPreferencesSignature = "";
let lastResolvedPreferencesSignature = "";
let cachedSystemPrefersDark = readSystemPrefersDark();

const preferenceListeners = new Set<() => void>();

function normalizeThemeSelection(value: unknown): PcReactThemeSelection | undefined {
  const normalized = typeof value === "string" ? value.trim().toLowerCase() : "";

  if (normalized === "dark" || normalized === "light" || normalized === "system") {
    return normalized;
  }

  return undefined;
}

function normalizeThemeColor(value: unknown): PcReactThemeColor | undefined {
  const normalized = typeof value === "string" ? value.trim().toLowerCase() : "";

  if (
    normalized === "green-tech"
    || normalized === "lobster"
    || normalized === "rose"
    || normalized === "tech-blue"
    || normalized === "violet"
    || normalized === "zinc"
  ) {
    return normalized;
  }

  return undefined;
}

function normalizeLocale(value: unknown): string | undefined {
  const normalized = typeof value === "string" ? value.trim() : "";
  return normalized || undefined;
}

function normalizeLocalePreference(value: unknown): string | "system" | undefined {
  const normalized = typeof value === "string" ? value.trim() : "";
  if (!normalized) {
    return undefined;
  }

  if (normalized.toLowerCase() === "system") {
    return "system";
  }

  return normalizeLocale(normalized);
}

function resolveNavigatorLanguage(): string | undefined {
  if (typeof navigator === "undefined") {
    return undefined;
  }

  return normalizeLocale(navigator.language);
}

function resolveDocumentLanguage(): string | undefined {
  if (typeof document === "undefined") {
    return undefined;
  }

  return normalizeLocale(document.documentElement.lang);
}

function resolveRuntimeLocale(
  options: {
    documentLanguage?: string;
    navigatorLanguage?: string;
  } = {},
): string {
  return normalizeLocale(options.documentLanguage)
    || normalizeLocale(options.navigatorLanguage)
    || resolveDocumentLanguage()
    || resolveNavigatorLanguage()
    || "en-US";
}

function resolvePreferencesOptions(): PcReactPreferenceOptions | undefined {
  return getRuntimeOptions().preferences;
}

function resolvePreferencesStorageKey(): string {
  const configuredKey = normalizeLocale(resolvePreferencesOptions()?.storageKey);
  return configuredKey || DEFAULT_SHELL_PREFERENCES_STORAGE_KEY;
}

function readStoredPreferences(): Partial<PcReactShellPreferences> | null {
  const payload = resolveStorageAdapter().getItem(resolvePreferencesStorageKey());
  return safeParseJson<Partial<PcReactShellPreferences>>(payload);
}

function resolveDefaultShellPreferences(
  options: {
    documentLanguage?: string;
    navigatorLanguage?: string;
  } = {},
): PcReactShellPreferences {
  const configuredDefaults = resolvePreferencesOptions()?.defaults ?? {};
  const localePreference = normalizeLocalePreference(
    configuredDefaults.localePreference ?? configuredDefaults.locale,
  ) || "system";

  return {
    locale: localePreference === "system" ? resolveRuntimeLocale(options) : localePreference,
    localePreference,
    themeColor: normalizeThemeColor(configuredDefaults.themeColor) || "lobster",
    themeSelection: normalizeThemeSelection(configuredDefaults.themeSelection) || "system",
  };
}

function normalizeShellPreferences(
  value: Partial<PcReactShellPreferences> | null | undefined,
  options: {
    documentLanguage?: string;
    navigatorLanguage?: string;
  } = {},
): PcReactShellPreferences {
  const defaults = resolveDefaultShellPreferences(options);
  const localePreference = normalizeLocalePreference(value?.localePreference ?? value?.locale)
    || defaults.localePreference;

  return {
    locale: localePreference === "system"
      ? resolveRuntimeLocale(options)
      : localePreference,
    localePreference,
    themeColor: normalizeThemeColor(value?.themeColor) || defaults.themeColor,
    themeSelection: normalizeThemeSelection(value?.themeSelection) || defaults.themeSelection,
  };
}

function readSystemPrefersDark(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return DEFAULT_SYSTEM_PREFERS_DARK;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function computePreferencesSignature(preferences: PcReactShellPreferences): string {
  return safeStringifyJson(preferences);
}

function computeResolvedPreferencesSignature(preferences: PcReactResolvedShellPreferences): string {
  return safeStringifyJson(preferences);
}

function readShellPreferencesSnapshot(
  options: {
    documentLanguage?: string;
    navigatorLanguage?: string;
  } = {},
): PcReactShellPreferences {
  return normalizeShellPreferences(readStoredPreferences(), options);
}

function resolveShellPreferencesSnapshot(
  options: {
    documentLanguage?: string;
    navigatorLanguage?: string;
    prefersDark?: boolean;
  } = {},
): PcReactResolvedShellPreferences {
  const preferences = readShellPreferencesSnapshot(options);
  const prefersDark = options.prefersDark ?? cachedSystemPrefersDark;
  const colorMode = preferences.themeSelection === "system"
    ? (prefersDark ? "dark" : "light")
    : preferences.themeSelection;

  return {
    ...preferences,
    colorMode,
  };
}

function emitPreferencesChange(): void {
  preferencesVersion += 1;
  for (const listener of preferenceListeners) {
    listener();
  }
}

function refreshPreferenceSignatures(): void {
  lastPreferencesSignature = computePreferencesSignature(readShellPreferencesSnapshot());
  lastResolvedPreferencesSignature = computeResolvedPreferencesSignature(resolveShellPreferencesSnapshot());
}

function emitPreferencesChangeIfNeeded(): void {
  const nextPreferencesSignature = computePreferencesSignature(readShellPreferencesSnapshot());
  const nextResolvedPreferencesSignature = computeResolvedPreferencesSignature(resolveShellPreferencesSnapshot());

  if (
    nextPreferencesSignature === lastPreferencesSignature
    && nextResolvedPreferencesSignature === lastResolvedPreferencesSignature
  ) {
    return;
  }

  lastPreferencesSignature = nextPreferencesSignature;
  lastResolvedPreferencesSignature = nextResolvedPreferencesSignature;
  emitPreferencesChange();
}

function ensureRuntimeBridge(): void {
  if (runtimeBridgeBound) {
    return;
  }

  refreshPreferenceSignatures();
  subscribePcReactRuntime(() => {
    emitPreferencesChangeIfNeeded();
  });
  runtimeBridgeBound = true;
}

function ensureSystemThemeBridge(): void {
  if (systemThemeBridgeBound) {
    return;
  }

  cachedSystemPrefersDark = readSystemPrefersDark();

  if (typeof window !== "undefined" && typeof window.matchMedia === "function") {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      const nextPrefersDark = event.matches;
      if (cachedSystemPrefersDark === nextPrefersDark) {
        return;
      }

      cachedSystemPrefersDark = nextPrefersDark;
      emitPreferencesChangeIfNeeded();
    };

    mediaQuery.addEventListener?.("change", handleChange);
    mediaQuery.addListener?.(handleChange);
  }

  systemThemeBridgeBound = true;
}

export function getPcReactShellPreferencesVersion(): number {
  return preferencesVersion;
}

export function readPcReactShellPreferences(): PcReactShellPreferences {
  ensureRuntimeBridge();
  return readShellPreferencesSnapshot();
}

export function persistPcReactShellPreferences(
  patch: Partial<PcReactShellPreferences>,
): PcReactShellPreferences {
  ensureRuntimeBridge();
  const currentPreferences = readPcReactShellPreferences();
  const nextPreferences = normalizeShellPreferences({
    ...currentPreferences,
    ...patch,
    ...(patch.localePreference !== undefined
      ? { localePreference: patch.localePreference }
      : patch.locale !== undefined
        ? { localePreference: patch.locale }
        : {}),
  });

  resolveStorageAdapter().setItem(
    resolvePreferencesStorageKey(),
    safeStringifyJson(nextPreferences),
  );

  emitPreferencesChangeIfNeeded();
  return nextPreferences;
}

export function clearPcReactShellPreferences(): void {
  ensureRuntimeBridge();
  resolveStorageAdapter().removeItem(resolvePreferencesStorageKey());
  emitPreferencesChangeIfNeeded();
}

export function resolvePcReactShellPreferences(
  options: {
    documentLanguage?: string;
    navigatorLanguage?: string;
    prefersDark?: boolean;
  } = {},
): PcReactResolvedShellPreferences {
  return resolveShellPreferencesSnapshot(options);
}

export function subscribePcReactShellPreferences(listener: () => void): () => void {
  ensureRuntimeBridge();
  ensureSystemThemeBridge();
  preferenceListeners.add(listener);

  return () => {
    preferenceListeners.delete(listener);
  };
}
