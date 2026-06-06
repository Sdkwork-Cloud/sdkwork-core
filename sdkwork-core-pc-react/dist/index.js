import { createClient as e } from "@sdkwork/app-sdk";
import { useMemo as t, useSyncExternalStore as n } from "react";
//#region src/internal/helpers.ts
var r = 3e4;
function i(...e) {
	for (let t of e) {
		let e = typeof t == "string" ? t.trim() : "";
		if (e) return e;
	}
}
function a(e) {
	return (e || "").trim();
}
function o(e) {
	let t = a(e);
	return t ? t.replace(/^Bearer\s+/i, "").trim() : "";
}
function s(e) {
	return a(e).replace(/\/+$/g, "");
}
function c(e, t = r) {
	let n = Number(e);
	return !Number.isFinite(n) || n <= 0 ? t : n;
}
function ee(e) {
	let t = Number(e);
	return !Number.isFinite(t) || t <= 0 ? null : t;
}
function l(e, t) {
	if (typeof e == "boolean") return e;
	let n = a(typeof e == "string" ? e : String(t)).toLowerCase();
	return n === "true" || n === "1";
}
function u(e) {
	return JSON.parse(JSON.stringify(e));
}
function d(e) {
	if (!e) return null;
	try {
		return JSON.parse(e);
	} catch {
		return null;
	}
}
function f(e) {
	return JSON.stringify(e);
}
function te(e) {
	switch (e) {
		case "production": return "https://api.sdkwork.com";
		case "test": return "https://api-test.sdkwork.com";
		case "staging": return "https://staging-api.sdkwork.com";
		default: return "https://api-dev.sdkwork.com";
	}
}
function ne(e) {
	let t = s(e);
	if (!t) return "";
	try {
		let e = new URL(t);
		return e.protocol = e.protocol === "https:" ? "wss:" : "ws:", e.pathname = "/ws", e.search = "", e.hash = "", e.toString().replace(/\/+$/g, "");
	} catch {
		return "";
	}
}
function re(...e) {
	let t = i(...e)?.toLowerCase();
	return t === "production" || t === "prod" ? "production" : t === "test" ? "test" : t === "staging" || t === "stage" ? "staging" : "development";
}
function ie(e, t, n, r) {
	return r || (a(e) && !a(t) && !a(n) ? "apikey" : "dual-token");
}
//#endregion
//#region src/env/index.ts
var ae = /* @__PURE__ */ "VITE_APP_ENV.VITE_APP_OWNER_MODE.VITE_OWNER_MODE.VITE_API_BASE_URL.VITE_APP_BASE_URL.VITE_APP_ROOT_API_BASE_URL.VITE_APP_TENANT_API_BASE_URL.VITE_APP_ORGANIZATION_API_BASE_URL.VITE_ROOT_API_BASE_URL.VITE_APP_ROOT_API_BASE_URL.VITE_TENANT_API_BASE_URL.VITE_APP_TENANT_API_BASE_URL.VITE_ORGANIZATION_API_BASE_URL.VITE_APP_ORGANIZATION_API_BASE_URL.VITE_IM_WS_URL.VITE_APP_IM_WS_URL.VITE_ACCESS_TOKEN.VITE_APP_ACCESS_TOKEN.VITE_APP_ROOT_ACCESS_TOKEN.VITE_APP_TENANT_ACCESS_TOKEN.VITE_APP_ORGANIZATION_ACCESS_TOKEN.VITE_ROOT_ACCESS_TOKEN.VITE_APP_ROOT_ACCESS_TOKEN.VITE_TENANT_ACCESS_TOKEN.VITE_APP_TENANT_ACCESS_TOKEN.VITE_ORGANIZATION_ACCESS_TOKEN.VITE_APP_ORGANIZATION_ACCESS_TOKEN.VITE_API_KEY.VITE_TIMEOUT.VITE_TENANT_ID.VITE_APP_TENANT_ID.VITE_ORGANIZATION_ID.VITE_APP_ORGANIZATION_ID.VITE_PLATFORM.VITE_APP_PLATFORM.VITE_APP_NAME.VITE_APP_VERSION.VITE_DISTRIBUTION_ID.VITE_APP_ID.VITE_RELEASE_CHANNEL.VITE_ENABLE_STARTUP_UPDATE_CHECK.VITE_DEBUG.VITE_LOG_LEVEL".split(".");
function p() {
	return {
		BASE_URL: "/",
		DEV: !1,
		MODE: "production",
		PROD: !0,
		SSR: !1
	};
}
function m() {
	return globalThis.process?.env ?? {};
}
function h() {
	return {
		...m(),
		...p()
	};
}
function g(e = []) {
	let t = globalThis;
	return e.reduce((e, n) => {
		let r = t[n];
		return !r || typeof r != "object" ? e : {
			...e,
			...r
		};
	}, {});
}
function oe() {
	if (typeof window > "u") return !1;
	let e = window;
	return !!(e.__TAURI__ || e.__TAURI_IPC__ || e.__TAURI_INTERNALS__);
}
function se(e, t) {
	return t ? "desktop" : i(a(e.VITE_PLATFORM), a(e.VITE_APP_PLATFORM), a(e.SDKWORK_PLATFORM)) || "web";
}
function ce(e) {
	let t = i(a(e.VITE_APP_OWNER_MODE), a(e.VITE_OWNER_MODE), a(e.SDKWORK_OWNER_MODE))?.toLowerCase();
	return t === "organization" || t === "org" ? "organization" : t === "tenant" ? "tenant" : t === "root" ? "root" : i(a(e.VITE_TENANT_ID), a(e.VITE_APP_TENANT_ID), a(e.SDKWORK_TENANT_ID), a(e.VITE_TENANT_ACCESS_TOKEN), a(e.VITE_APP_TENANT_ACCESS_TOKEN), a(e.VITE_TENANT_API_BASE_URL), a(e.VITE_APP_TENANT_API_BASE_URL)) ? "tenant" : i(a(e.VITE_ORGANIZATION_ID), a(e.VITE_APP_ORGANIZATION_ID), a(e.SDKWORK_ORGANIZATION_ID), a(e.VITE_ORGANIZATION_ACCESS_TOKEN), a(e.VITE_APP_ORGANIZATION_ACCESS_TOKEN), a(e.VITE_ORGANIZATION_API_BASE_URL), a(e.VITE_APP_ORGANIZATION_API_BASE_URL)) ? "organization" : "root";
}
function le(e, t) {
	let n = s(i(a(e.VITE_API_BASE_URL), a(e.VITE_APP_API_BASE_URL), a(e.VITE_APP_BASE_URL), a(e.SDKWORK_API_BASE_URL), te(t)));
	return {
		default: n,
		root: s(i(a(e.VITE_ROOT_API_BASE_URL), a(e.VITE_APP_ROOT_API_BASE_URL), n)),
		tenant: s(i(a(e.VITE_TENANT_API_BASE_URL), a(e.VITE_APP_TENANT_API_BASE_URL), n)),
		organization: s(i(a(e.VITE_ORGANIZATION_API_BASE_URL), a(e.VITE_APP_ORGANIZATION_API_BASE_URL), n))
	};
}
function ue(e) {
	let t = o(i(a(e.VITE_ACCESS_TOKEN), a(e.VITE_APP_ACCESS_TOKEN)));
	return {
		default: t,
		root: o(i(a(e.VITE_ROOT_ACCESS_TOKEN), a(e.VITE_APP_ROOT_ACCESS_TOKEN), t)),
		tenant: o(i(a(e.VITE_TENANT_ACCESS_TOKEN), a(e.VITE_APP_TENANT_ACCESS_TOKEN), t)),
		organization: o(i(a(e.VITE_ORGANIZATION_ACCESS_TOKEN), a(e.VITE_APP_ORGANIZATION_ACCESS_TOKEN), t))
	};
}
function de(e, t) {
	return e === "tenant" ? t.tenant ?? t.default : e === "organization" ? t.organization ?? t.default : t.root ?? t.default;
}
function _(e = h()) {
	let t = re(a(e.VITE_APP_ENV), a(e.MODE), a(e.NODE_ENV)), n = ce(e), r = le(e, t), u = ue(e), d = s(de(n, r) || te(t)), f = o(de(n, u)), ae = a(i(a(e.VITE_API_KEY), a(e.SDKWORK_API_KEY))), p = oe(), m = se(e, p), g = s(i(a(e.VITE_IM_WS_URL), a(e.VITE_APP_IM_WS_URL), ne(d))), _ = a(i(a(e.VITE_TENANT_ID), a(e.VITE_APP_TENANT_ID), a(e.SDKWORK_TENANT_ID))), v = a(i(a(e.VITE_ORGANIZATION_ID), a(e.VITE_APP_ORGANIZATION_ID), a(e.SDKWORK_ORGANIZATION_ID)));
	return {
		appEnv: t,
		mode: t,
		isDev: t === "development",
		isTest: t === "test",
		isStaging: t === "staging",
		isProduction: t === "production",
		metadata: {
			name: a(e.VITE_APP_NAME) || "SDKWork Desktop",
			version: a(e.VITE_APP_VERSION) || "0.1.0"
		},
		log: {
			debug: l(e.VITE_DEBUG, t === "development"),
			level: a(e.VITE_LOG_LEVEL) || (t === "development" ? "debug" : t === "test" ? "info" : "warn")
		},
		owner: {
			mode: n,
			tenantId: _,
			organizationId: v
		},
		api: {
			baseUrl: d,
			baseUrls: r,
			timeout: c(i(a(e.VITE_TIMEOUT), a(e.SDKWORK_TIMEOUT)))
		},
		auth: {
			apiKey: ae,
			accessToken: f,
			accessTokens: u,
			mode: ie(ae, f)
		},
		realtime: { imWsUrl: g },
		update: {
			appId: ee(a(e.VITE_APP_ID)),
			releaseChannel: a(e.VITE_RELEASE_CHANNEL) || "stable",
			enableStartupCheck: l(e.VITE_ENABLE_STARTUP_UPDATE_CHECK, !0)
		},
		distribution: { id: a(e.VITE_DISTRIBUTION_ID) === "cn" ? "cn" : "global" },
		platform: {
			id: m,
			isDesktop: p || m === "desktop",
			isTauri: p
		},
		vite: {
			isDev: l(e.DEV, t === "development"),
			isProd: l(e.PROD, t === "production")
		}
	};
}
//#endregion
//#region src/internal/runtimeState.ts
var v = "sdkwork.core.pc-react.auth-token", y = "core.pc-react.access-token", fe = "sdkwork.core.pc-react.refresh-token", b = "sdkwork.core.pc-react.im-session", x = "sdkwork_token", pe = "sdkwork_refresh_token", S = {
	authToken: [x],
	accessToken: [],
	refreshToken: [pe],
	runtimeSession: [
		"sdkwork-notes-auth-session",
		"sdkwork-drive-auth-session",
		"claw-studio-auth-session"
	],
	imSession: []
}, C = /* @__PURE__ */ new Map(), w = {}, T = null, me = null, E = null, he = null, D = null, ge = 0, _e = null, ve = /* @__PURE__ */ new Set(), ye = /* @__PURE__ */ new Set();
function be() {
	if (typeof window > "u") return null;
	try {
		return window.localStorage;
	} catch {
		return null;
	}
}
function xe() {
	return {
		getItem(e) {
			return C.get(e) ?? null;
		},
		setItem(e, t) {
			C.set(e, t);
		},
		removeItem(e) {
			C.delete(e);
		}
	};
}
function O(e = [], t = []) {
	return Array.from(new Set([...e, ...t].filter((e) => e && e.trim())));
}
function Se(e, t) {
	if (!(!e && !t)) return {
		authToken: O(e?.authToken, t?.authToken),
		accessToken: O(e?.accessToken, t?.accessToken),
		refreshToken: O(e?.refreshToken, t?.refreshToken),
		runtimeSession: O(e?.runtimeSession, t?.runtimeSession),
		imSession: O(e?.imSession, t?.imSession)
	};
}
function Ce(e, t) {
	if (!(!e && !t)) return {
		defaults: {
			...e?.defaults ?? {},
			...t?.defaults ?? {}
		},
		storageKey: t?.storageKey ?? e?.storageKey
	};
}
function k() {
	return {
		authToken: O(S.authToken, w.legacyStorageKeys?.authToken),
		accessToken: O(S.accessToken, w.legacyStorageKeys?.accessToken),
		refreshToken: O(S.refreshToken, w.legacyStorageKeys?.refreshToken),
		runtimeSession: O(S.runtimeSession, w.legacyStorageKeys?.runtimeSession),
		imSession: O(S.imSession, w.legacyStorageKeys?.imSession)
	};
}
function we(e, t) {
	return {
		envSource: t.envSource ? {
			...e.envSource ?? {},
			...t.envSource
		} : e.envSource,
		envGlobalKeys: t.envGlobalKeys ? O(e.envGlobalKeys, t.envGlobalKeys) : e.envGlobalKeys,
		storage: t.storage ?? e.storage,
		legacyStorageKeys: Se(e.legacyStorageKeys, t.legacyStorageKeys),
		preferences: Ce(e.preferences, t.preferences),
		appClientCompatAliases: {
			...e.appClientCompatAliases ?? {},
			...t.appClientCompatAliases ?? {}
		},
		headersResolver: t.headersResolver ?? e.headersResolver,
		appConfigOverrides: {
			...e.appConfigOverrides ?? {},
			...t.appConfigOverrides ?? {}
		},
		imConfigOverrides: {
			...e.imConfigOverrides ?? {},
			...t.imConfigOverrides ?? {}
		}
	};
}
function A() {
	ge += 1;
	for (let e of ve) e();
}
function Te(e) {
	for (let t of ye) t(e);
	A();
}
function Ee() {
	return {
		...h(),
		...g(w.envGlobalKeys ?? []),
		...w.envSource ?? {}
	};
}
function j(e) {
	try {
		return N().getItem(e) ?? void 0;
	} catch {
		return;
	}
}
function De(e) {
	for (let t of e) {
		let e = j(t);
		if (e !== void 0) return e;
	}
}
function Oe() {
	for (let e of k().runtimeSession) {
		let t = d(j(e));
		if (!t) continue;
		let n = o(t.authToken), r = o(t.accessToken), i = typeof t.refreshToken == "string" ? t.refreshToken.trim() : "";
		if (!(!n && !r && !i)) return {
			authToken: n || void 0,
			accessToken: r || void 0,
			refreshToken: i || void 0
		};
	}
	return {};
}
function M(e, t) {
	try {
		if (t && t.trim()) {
			N().setItem(e, t.trim());
			return;
		}
		N().removeItem(e);
	} catch {}
}
function ke() {
	for (let e of k().accessToken) M(e, void 0);
}
function N() {
	return w.storage ? w.storage : be() || xe();
}
function P() {
	return w;
}
function Ae(e = {}) {
	return w = we(w, e), Re(), A(), w;
}
function F(e) {
	return ve.add(e), () => {
		ve.delete(e);
	};
}
function I() {
	return ge;
}
function L() {
	return T ||= _(Ee()), T;
}
function je(e, t = R()) {
	let n = {}, r = o(t.authToken), i = o(t.accessToken);
	r && (n.Authorization = `Bearer ${r}`), i && (n["Access-Token"] = i);
	let a = w.headersResolver?.({
		env: L(),
		session: t,
		target: e
	});
	return a ? Object.entries(a).reduce((e, [t, n]) => {
		let r = typeof n == "string" ? n.trim() : "";
		return !t.trim() || !r || (e[t] = r), e;
	}, n) : n;
}
function R() {
	let e = L(), t = Oe(), n = o(j(v) || t.authToken || De(k().authToken)), r = o(j(y) || t.accessToken || De(k().accessToken)), i = o(E?.accessToken || he?.accessToken), a = (j(fe) || t.refreshToken || De(k().refreshToken) || "").trim(), s = d(j(b));
	return !D && s && (D = s), {
		authToken: n || void 0,
		accessToken: r || i || e.auth.accessToken || void 0,
		refreshToken: a || void 0,
		im: D ? u(D) : void 0
	};
}
function Me(e) {
	let t = R(), n = L(), r = e.authToken === void 0 ? o(t.authToken) : o(e.authToken), i = e.accessToken === void 0 ? o(t.accessToken || n.auth.accessToken) : o(e.accessToken), a = e.refreshToken === void 0 ? (t.refreshToken || "").trim() : (e.refreshToken || "").trim();
	return M(v, r || void 0), e.accessToken === void 0 ? M(y, o(j(y)) || void 0) : !i || i === n.auth.accessToken ? (M(y, void 0), ke()) : (M(y, i), ke()), M(fe, a || void 0), e.im && Pe(e.im), A(), R();
}
function Ne() {
	M(v, void 0), M(y, void 0), M(fe, void 0), M(b, void 0);
	for (let e of [
		...k().authToken,
		...k().accessToken,
		...k().refreshToken,
		...k().runtimeSession,
		...k().imSession
	]) M(e, void 0);
	D = null, A();
}
function Pe(e) {
	D = e ? u(e) : null, e ? M(b, f(e)) : M(b, void 0), A();
}
function Fe(e, t) {
	me = e, E = t;
}
function Ie() {
	return me ?? null;
}
function Le() {
	return E ?? null;
}
function Re() {
	T = null, me = null, E = null, he = null, D = null, _e?.(), _e = null, Te("idle");
}
function ze(e = {}) {
	let { clearStorage: t = !0, clearConfiguration: n = !0 } = e;
	t && (C.clear(), Ne()), n && (w = {}), Re(), A();
}
//#endregion
//#region src/app/index.ts
var Be = {
	analytics: "analytic",
	assets: "asset",
	coupons: "coupon",
	notes: "note",
	orders: "order",
	payments: "payment",
	projects: "project",
	settings: "setting",
	workspaces: "workspace"
}, Ve = /* @__PURE__ */ new WeakMap();
function He(e = {}) {
	return {
		...P().appConfigOverrides ?? {},
		...e
	};
}
function z(e, t, n) {
	e.setAuthToken(o(t.authToken)), e.setAccessToken(o(t.accessToken || n));
}
function Ue(e, t) {
	let n = R(), r = He(e);
	return {
		...n,
		authToken: r.authToken === void 0 ? o(n.authToken) : o(r.authToken),
		accessToken: r.accessToken === void 0 ? o(n.accessToken || t) : o(r.accessToken)
	};
}
function We() {
	return { ...P().appClientCompatAliases ?? {} };
}
function B(e, t = We()) {
	let n = Object.entries(t).filter(([e, t]) => e.trim() && t.trim() && e !== t).sort(([e], [t]) => e.localeCompare(t));
	if (n.length === 0) return e;
	let r = JSON.stringify(n);
	if (Ve.get(e) === r) return e;
	for (let [t, r] of n) Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		get() {
			return e[r];
		}
	});
	return Ve.set(e, r), e;
}
function Ge(e = {}, t = { includeRuntimeSession: !0 }) {
	let n = L(), r = t.includeRuntimeSession ? R() : void 0, i = He(e), a = o(i.accessToken || r?.accessToken || n.auth.accessToken), s = (i.apiKey || n.auth.apiKey || "").trim(), c = o(i.authToken || r?.authToken);
	return {
		env: n.appEnv,
		ownerMode: n.owner.mode,
		baseUrl: i.baseUrl || n.api.baseUrl,
		timeout: i.timeout ?? n.api.timeout,
		apiKey: s || void 0,
		accessToken: a || void 0,
		authToken: c || void 0,
		tenantId: (i.tenantId ?? n.owner.tenantId) || void 0,
		organizationId: (i.organizationId ?? n.owner.organizationId) || void 0,
		platform: i.platform ?? n.platform.id,
		tokenManager: i.tokenManager,
		authMode: ie(s, a, c, i.authMode),
		headers: {
			...je("app", {
				...r ?? {},
				authToken: c || void 0,
				accessToken: a || void 0
			}),
			...i.headers ?? {}
		}
	};
}
function Ke(e, t = {}) {
	let n = o(t.accessToken || e.auth.accessToken), r = (t.apiKey || e.auth.apiKey || "").trim(), i = o(t.authToken);
	return {
		env: e.appEnv,
		ownerMode: e.owner.mode,
		baseUrl: t.baseUrl || e.api.baseUrl,
		timeout: t.timeout ?? e.api.timeout,
		apiKey: r || void 0,
		accessToken: n || void 0,
		authToken: i || void 0,
		tenantId: (t.tenantId ?? e.owner.tenantId) || void 0,
		organizationId: (t.organizationId ?? e.owner.organizationId) || void 0,
		platform: t.platform ?? e.platform.id,
		tokenManager: t.tokenManager,
		authMode: ie(r, n, i, t.authMode),
		headers: { ...t.headers ?? {} }
	};
}
function qe(e, t = {}) {
	return Ke(_(e), t);
}
function Je(e) {
	return o(_(e).auth.accessToken);
}
function Ye(e = {}) {
	return Ge(e, { includeRuntimeSession: !0 });
}
function V(e = {}) {
	return Ge(e, { includeRuntimeSession: !1 });
}
function Xe(t = {}) {
	let n = V(t), r = B(e(n));
	return z(r, Ue(t, n.accessToken || ""), n.accessToken || ""), Fe(r, n), r;
}
function H() {
	return Ie() || Xe();
}
function U() {
	return Le();
}
function Ze() {
	return o(R().accessToken) || o(U()?.accessToken) || o(L().auth.accessToken);
}
function Qe(t = {}) {
	let n = V(t), r = B(e(n));
	return z(r, Ue(t, n.accessToken || ""), n.accessToken || ""), r;
}
function $e(e = {}) {
	if (Object.keys(e).length > 0) return Qe(e);
	let t = H(), n = U() || V();
	return z(t, R(), n.accessToken || ""), t;
}
function et(e = R()) {
	let t = Ie(), n = U();
	!t || !n || z(t, e, n.accessToken || "");
}
function tt(e) {
	let t = H();
	t.setAuthToken(o(e.authToken)), t.setAccessToken(o(e.accessToken || Ze()));
}
//#endregion
//#region src/internal/preferencesState.ts
var nt = "sdkwork.core.pc-react.preferences", rt = !0, it = 0, at = !1, ot = !1, st = "", ct = "", W = xt(), lt = /* @__PURE__ */ new Set();
function ut(e) {
	let t = typeof e == "string" ? e.trim().toLowerCase() : "";
	if (t === "dark" || t === "light" || t === "system") return t;
}
function dt(e) {
	let t = typeof e == "string" ? e.trim().toLowerCase() : "";
	if (t === "green-tech" || t === "lobster" || t === "rose" || t === "tech-blue" || t === "violet" || t === "zinc") return t;
}
function G(e) {
	return (typeof e == "string" ? e.trim() : "") || void 0;
}
function ft(e) {
	let t = typeof e == "string" ? e.trim() : "";
	if (t) return t.toLowerCase() === "system" ? "system" : G(t);
}
function pt() {
	if (!(typeof navigator > "u")) return G(navigator.language);
}
function mt() {
	if (!(typeof document > "u")) return G(document.documentElement.lang);
}
function ht(e = {}) {
	return G(e.documentLanguage) || G(e.navigatorLanguage) || mt() || pt() || "en-US";
}
function gt() {
	return P().preferences;
}
function _t() {
	return G(gt()?.storageKey) || nt;
}
function vt() {
	return d(N().getItem(_t()));
}
function yt(e = {}) {
	let t = gt()?.defaults ?? {}, n = ft(t.localePreference ?? t.locale) || "system";
	return {
		locale: n === "system" ? ht(e) : n,
		localePreference: n,
		themeColor: dt(t.themeColor) || "lobster",
		themeSelection: ut(t.themeSelection) || "system"
	};
}
function bt(e, t = {}) {
	let n = yt(t), r = ft(e?.localePreference ?? e?.locale) || n.localePreference;
	return {
		locale: r === "system" ? ht(t) : r,
		localePreference: r,
		themeColor: dt(e?.themeColor) || n.themeColor,
		themeSelection: ut(e?.themeSelection) || n.themeSelection
	};
}
function xt() {
	return typeof window > "u" || typeof window.matchMedia != "function" ? rt : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function St(e) {
	return f(e);
}
function Ct(e) {
	return f(e);
}
function K(e = {}) {
	return bt(vt(), e);
}
function wt(e = {}) {
	let t = K(e), n = e.prefersDark ?? W, r = t.themeSelection === "system" ? n ? "dark" : "light" : t.themeSelection;
	return {
		...t,
		colorMode: r
	};
}
function Tt() {
	it += 1;
	for (let e of lt) e();
}
function Et() {
	st = St(K()), ct = Ct(wt());
}
function q() {
	let e = St(K()), t = Ct(wt());
	e === st && t === ct || (st = e, ct = t, Tt());
}
function J() {
	at ||= (Et(), F(() => {
		q();
	}), !0);
}
function Dt() {
	if (!ot) {
		if (W = xt(), typeof window < "u" && typeof window.matchMedia == "function") {
			let e = window.matchMedia("(prefers-color-scheme: dark)"), t = (e) => {
				let t = e.matches;
				W !== t && (W = t, q());
			};
			e.addEventListener?.("change", t), e.addListener?.(t);
		}
		ot = !0;
	}
}
function Ot() {
	return it;
}
function kt() {
	return J(), K();
}
function At(e) {
	J();
	let t = bt({
		...kt(),
		...e,
		...e.localePreference === void 0 ? e.locale === void 0 ? {} : { localePreference: e.locale } : { localePreference: e.localePreference }
	});
	return N().setItem(_t(), f(t)), q(), t;
}
function jt() {
	J(), N().removeItem(_t()), q();
}
function Y(e = {}) {
	return wt(e);
}
function Mt(e) {
	return J(), Dt(), lt.add(e), () => {
		lt.delete(e);
	};
}
//#endregion
//#region src/runtime/shell-bridge.ts
function Nt(e) {
	let t = String(e).trim().toLowerCase();
	return t.startsWith("ar") || t.startsWith("fa") || t.startsWith("he") || t.startsWith("ps") || t.startsWith("ur");
}
function Pt(e) {
	return String(e || "").trim() || "en-US";
}
function Ft(e) {
	if (e instanceof Date) return Number.isNaN(e.getTime()) ? null : e;
	if (typeof e == "number") {
		let t = new Date(e);
		return Number.isNaN(t.getTime()) ? null : t;
	}
	if (typeof e == "string") {
		let t = e.trim();
		if (!t) return null;
		if (/^\d{4}-\d{2}-\d{2}$/.test(t)) {
			let [e, n, r] = t.split("-").map(Number), i = new Date(e, n - 1, r);
			return Number.isNaN(i.getTime()) ? null : i;
		}
		let n = new Date(t);
		return Number.isNaN(n.getTime()) ? null : n;
	}
	return null;
}
function X(e) {
	return At(e), Y();
}
function It(e) {
	return Nt(Pt(e)) ? "rtl" : "ltr";
}
function Lt(e) {
	let t = Pt(e);
	return {
		formatDate(e, n) {
			let r = Ft(e);
			return r ? new Intl.DateTimeFormat(t, n).format(r) : "";
		},
		formatDateTime(e, n) {
			let r = Ft(e);
			return r ? new Intl.DateTimeFormat(t, n ?? {
				dateStyle: "medium",
				timeStyle: "short"
			}).format(r) : "";
		},
		locale: t
	};
}
function Rt() {
	let e = Y(), t = e.locale;
	return {
		actions: {
			patchPreferences: X,
			setLocalePreference(e) {
				return X({ localePreference: e });
			},
			setThemeColor(e) {
				return X({ themeColor: e });
			},
			setThemeSelection(e) {
				return X({ themeSelection: e });
			}
		},
		dir: It(t),
		env: L(),
		formatters: Lt(t),
		locale: t,
		preferences: e,
		session: R()
	};
}
//#endregion
//#region src/runtime/index.ts
function zt(e = {}) {
	return Ae(e);
}
function Bt(e = {}) {
	ze(e);
}
function Vt(e) {
	let t = Me(e);
	return et(t), t;
}
var Ht = Vt;
function Z() {
	return R();
}
var Ut = Z;
function Wt() {
	Ne(), et(R());
}
var Gt = {
	authToken: x,
	refreshToken: pe
};
//#endregion
//#region src/hooks/index.ts
function Q() {
	n(F, I, I);
}
function $() {
	n(Mt, Ot, Ot);
}
function Kt() {
	return Q(), $e();
}
function qt() {
	return Q(), L();
}
function Jt() {
	return Q(), Z();
}
function Yt() {
	return $(), kt();
}
function Xt() {
	return $(), Y();
}
function Zt() {
	return Q(), $(), t(() => Rt(), [
		L(),
		Y(),
		Z()
	]);
}
//#endregion
export { Be as SDKWORK_PC_REACT_DEFAULT_APP_CLIENT_COMPAT_ALIASES, ae as SDKWORK_PC_REACT_ENV_KEYS, x as SDKWORK_PC_REACT_LEGACY_AUTH_TOKEN_STORAGE_KEY, pe as SDKWORK_PC_REACT_LEGACY_REFRESH_TOKEN_STORAGE_KEY, Gt as SDKWORK_PC_REACT_LEGACY_STORAGE_KEYS, tt as applyAppClientSessionTokens, et as applyRuntimeSessionToAppClient, Wt as clearPcReactRuntimeSession, jt as clearPcReactShellPreferences, zt as configurePcReactRuntime, Ye as createAppClientConfig, qe as createAppClientConfigFromEnv, _ as createPcReactEnvConfig, Lt as createPcReactLocaleFormatting, Qe as createScopedAppClient, B as decorateAppClientCompatAliases, H as getAppClient, U as getAppClientConfig, $e as getAppClientWithSession, L as getPcReactEnv, I as getPcReactRuntimeVersion, Xe as initAppClient, Ht as persistPcReactRuntimeSession, At as persistPcReactShellPreferences, Vt as persistRuntimeSession, h as readPcReactEnvSource, g as readPcReactNamedGlobalEnvSources, Ut as readPcReactRuntimeSession, Rt as readPcReactShellBridgeValue, kt as readPcReactShellPreferences, Z as readRuntimeSession, Bt as resetPcReactRuntime, Ze as resolveAppClientAccessToken, Je as resolveAppClientAccessTokenFromEnv, It as resolvePcReactLocaleDirection, Y as resolvePcReactShellPreferences, F as subscribePcReactRuntime, Mt as subscribePcReactShellPreferences, Kt as useAppClient, qt as usePcReactEnv, Xt as usePcReactResolvedShellPreferences, Jt as usePcReactRuntimeSession, Zt as usePcReactShellBridgeValue, Yt as usePcReactShellPreferences };

//# sourceMappingURL=index.js.map