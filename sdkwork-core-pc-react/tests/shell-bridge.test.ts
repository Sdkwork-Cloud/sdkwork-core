import { beforeEach, describe, expect, it } from "vitest";

describe("pc react shell bridge runtime helpers", () => {
  beforeEach(async () => {
    const { configurePcReactRuntime, resetPcReactRuntime } = await import("../src");
    resetPcReactRuntime();
    configurePcReactRuntime({
      envSource: {
        VITE_ACCESS_TOKEN: "tenant-access-token",
        VITE_API_BASE_URL: "https://api.example.com",
      },
      preferences: {
        defaults: {
          locale: "ar-SA",
          themeColor: "zinc",
          themeSelection: "dark",
        },
      },
    });
  });

  it("derives locale direction, locale formatters, and a shell bridge snapshot from runtime state", async () => {
    const coreModule = await import("../src");
    const createPcReactLocaleFormatting = (coreModule as Record<string, any>).createPcReactLocaleFormatting;
    const persistPcReactRuntimeSession = (coreModule as Record<string, any>).persistPcReactRuntimeSession;
    const readPcReactShellBridgeValue = (coreModule as Record<string, any>).readPcReactShellBridgeValue;
    const resolvePcReactLocaleDirection = (coreModule as Record<string, any>).resolvePcReactLocaleDirection;

    persistPcReactRuntimeSession({
      accessToken: "bridge-access-token",
      authToken: "bridge-auth-token",
    });

    expect(resolvePcReactLocaleDirection("ar-SA")).toBe("rtl");
    expect(resolvePcReactLocaleDirection("en-US")).toBe("ltr");

    const formatters = createPcReactLocaleFormatting("zh-CN");
    const expectedDate = new Intl.DateTimeFormat("zh-CN", {
      day: "numeric",
      month: "long",
      timeZone: "UTC",
      year: "numeric",
    }).format(new Date("2026-04-04T00:00:00.000Z"));

    expect(
      formatters.formatDate("2026-04-04T00:00:00.000Z", {
        day: "numeric",
        month: "long",
        timeZone: "UTC",
        year: "numeric",
      }),
    ).toBe(expectedDate);

    const bridge = readPcReactShellBridgeValue();
    const expectedBridgeDate = new Intl.DateTimeFormat("ar-SA", {
      day: "numeric",
      month: "short",
      timeZone: "UTC",
      year: "numeric",
    }).format(new Date("2026-04-04T00:00:00.000Z"));

    expect(bridge).toMatchObject({
      dir: "rtl",
      locale: "ar-SA",
      preferences: {
        colorMode: "dark",
        locale: "ar-SA",
        themeColor: "zinc",
        themeSelection: "dark",
      },
      session: {
        accessToken: "bridge-access-token",
        authToken: "bridge-auth-token",
      },
    });
    expect(
      bridge.formatters.formatDate("2026-04-04T00:00:00.000Z", {
        day: "numeric",
        month: "short",
        timeZone: "UTC",
        year: "numeric",
      }),
    ).toBe(expectedBridgeDate);
  });

  it("exposes shell preference actions through the bridge snapshot", async () => {
    const coreModule = await import("../src");
    const readPcReactShellBridgeValue = (coreModule as Record<string, any>).readPcReactShellBridgeValue;

    const bridge = readPcReactShellBridgeValue();

    bridge.actions.setThemeSelection("light");
    bridge.actions.setThemeColor("rose");
    bridge.actions.setLocalePreference("zh-CN");

    const nextBridge = readPcReactShellBridgeValue();

    expect(nextBridge.preferences).toMatchObject({
      colorMode: "light",
      locale: "zh-CN",
      localePreference: "zh-CN",
      themeColor: "rose",
      themeSelection: "light",
    });
    expect(nextBridge.locale).toBe("zh-CN");
    expect(nextBridge.dir).toBe("ltr");
  });
});
