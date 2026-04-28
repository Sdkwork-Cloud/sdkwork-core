import type {
  PcReactLocaleFormatting,
  PcReactLocalePreference,
  PcReactResolvedShellPreferences,
  PcReactShellBridgeValue,
  PcReactShellPreferences,
  PcReactTextDirection,
  PcReactThemeColor,
  PcReactThemeSelection,
} from "../internal/contracts";
import { persistPcReactShellPreferences, resolvePcReactShellPreferences } from "../internal/preferencesState";
import { getPcReactEnv, readPcReactRuntimeSession } from "../internal/runtimeState";

function isRtlLocale(locale: string): boolean {
  const normalized = String(locale).trim().toLowerCase();
  return normalized.startsWith("ar")
    || normalized.startsWith("fa")
    || normalized.startsWith("he")
    || normalized.startsWith("ps")
    || normalized.startsWith("ur");
}

function normalizeLocale(locale?: string | null): string {
  const normalized = String(locale || "").trim();
  return normalized || "en-US";
}

function resolveDateValue(value: Date | number | string | null | undefined): Date | null {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value;
  }

  if (typeof value === "number") {
    const nextDate = new Date(value);
    return Number.isNaN(nextDate.getTime()) ? null : nextDate;
  }

  if (typeof value === "string") {
    const normalized = value.trim();
    if (!normalized) {
      return null;
    }

    if (/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
      const [year, month, day] = normalized.split("-").map(Number);
      const nextDate = new Date(year, month - 1, day);
      return Number.isNaN(nextDate.getTime()) ? null : nextDate;
    }

    const nextDate = new Date(normalized);
    return Number.isNaN(nextDate.getTime()) ? null : nextDate;
  }

  return null;
}

function patchShellPreferences(patch: Partial<PcReactShellPreferences>): PcReactResolvedShellPreferences {
  persistPcReactShellPreferences(patch);
  return resolvePcReactShellPreferences();
}

export function resolvePcReactLocaleDirection(locale?: string | null): PcReactTextDirection {
  return isRtlLocale(normalizeLocale(locale)) ? "rtl" : "ltr";
}

export function createPcReactLocaleFormatting(locale?: string | null): PcReactLocaleFormatting {
  const resolvedLocale = normalizeLocale(locale);

  return {
    formatDate(value, options) {
      const nextDate = resolveDateValue(value);
      if (!nextDate) {
        return "";
      }

      return new Intl.DateTimeFormat(resolvedLocale, options).format(nextDate);
    },
    formatDateTime(value, options) {
      const nextDate = resolveDateValue(value);
      if (!nextDate) {
        return "";
      }

      return new Intl.DateTimeFormat(
        resolvedLocale,
        options ?? {
          dateStyle: "medium",
          timeStyle: "short",
        },
      ).format(nextDate);
    },
    locale: resolvedLocale,
  };
}

export function readPcReactShellBridgeValue(): PcReactShellBridgeValue {
  const preferences = resolvePcReactShellPreferences();
  const locale = preferences.locale;

  return {
    actions: {
      patchPreferences: patchShellPreferences,
      setLocalePreference(next: PcReactLocalePreference) {
        return patchShellPreferences({
          localePreference: next,
        });
      },
      setThemeColor(next: PcReactThemeColor) {
        return patchShellPreferences({
          themeColor: next,
        });
      },
      setThemeSelection(next: PcReactThemeSelection) {
        return patchShellPreferences({
          themeSelection: next,
        });
      },
    },
    dir: resolvePcReactLocaleDirection(locale),
    env: getPcReactEnv(),
    formatters: createPcReactLocaleFormatting(locale),
    locale,
    preferences,
    session: readPcReactRuntimeSession(),
  };
}
