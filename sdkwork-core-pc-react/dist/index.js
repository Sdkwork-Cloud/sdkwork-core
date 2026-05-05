import { createClient as e } from "@sdkwork/app-sdk";
import { ImSdkClient as t } from "@sdkwork/im-sdk";
import { useMemo as n, useSyncExternalStore as r } from "react";
//#region src/internal/helpers.ts
var i = 3e4;
function a(...e) {
	for (let t of e) {
		let e = typeof t == "string" ? t.trim() : "";
		if (e) return e;
	}
}
function o(e) {
	return (e || "").trim();
}
function s(e) {
	let t = o(e);
	return t ? t.replace(/^Bearer\s+/i, "").trim() : "";
}
function c(e) {
	return o(e).replace(/\/+$/g, "");
}
function l(e, t = i) {
	let n = Number(e);
	return !Number.isFinite(n) || n <= 0 ? t : n;
}
function ee(e) {
	let t = Number(e);
	return !Number.isFinite(t) || t <= 0 ? null : t;
}
function u(e, t) {
	if (typeof e == "boolean") return e;
	let n = o(typeof e == "string" ? e : String(t)).toLowerCase();
	return n === "true" || n === "1";
}
function d(e) {
	return JSON.parse(JSON.stringify(e));
}
function f(e) {
	if (!e) return null;
	try {
		return JSON.parse(e);
	} catch {
		return null;
	}
}
function p(e) {
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
	let t = c(e);
	if (!t) return "";
	try {
		let e = new URL(t);
		return e.protocol = e.protocol === "https:" ? "wss:" : "ws:", e.pathname = "/ws", e.search = "", e.hash = "", e.toString().replace(/\/+$/g, "");
	} catch {
		return "";
	}
}
function re(...e) {
	let t = a(...e)?.toLowerCase();
	return t === "production" || t === "prod" ? "production" : t === "test" ? "test" : t === "staging" || t === "stage" ? "staging" : "development";
}
function m(e, t, n, r) {
	return r || (o(e) && !o(t) && !o(n) ? "apikey" : "dual-token");
}
//#endregion
//#region src/env/index.ts
var h = /* @__PURE__ */ "VITE_APP_ENV.VITE_APP_OWNER_MODE.VITE_OWNER_MODE.VITE_API_BASE_URL.VITE_APP_BASE_URL.VITE_APP_ROOT_API_BASE_URL.VITE_APP_TENANT_API_BASE_URL.VITE_APP_ORGANIZATION_API_BASE_URL.VITE_ROOT_API_BASE_URL.VITE_APP_ROOT_API_BASE_URL.VITE_TENANT_API_BASE_URL.VITE_APP_TENANT_API_BASE_URL.VITE_ORGANIZATION_API_BASE_URL.VITE_APP_ORGANIZATION_API_BASE_URL.VITE_IM_WS_URL.VITE_APP_IM_WS_URL.VITE_ACCESS_TOKEN.VITE_APP_ACCESS_TOKEN.VITE_APP_ROOT_ACCESS_TOKEN.VITE_APP_TENANT_ACCESS_TOKEN.VITE_APP_ORGANIZATION_ACCESS_TOKEN.VITE_ROOT_ACCESS_TOKEN.VITE_APP_ROOT_ACCESS_TOKEN.VITE_TENANT_ACCESS_TOKEN.VITE_APP_TENANT_ACCESS_TOKEN.VITE_ORGANIZATION_ACCESS_TOKEN.VITE_APP_ORGANIZATION_ACCESS_TOKEN.VITE_API_KEY.VITE_TIMEOUT.VITE_TENANT_ID.VITE_APP_TENANT_ID.VITE_ORGANIZATION_ID.VITE_APP_ORGANIZATION_ID.VITE_PLATFORM.VITE_APP_PLATFORM.VITE_APP_NAME.VITE_APP_VERSION.VITE_DISTRIBUTION_ID.VITE_APP_ID.VITE_RELEASE_CHANNEL.VITE_ENABLE_STARTUP_UPDATE_CHECK.VITE_DEBUG.VITE_LOG_LEVEL".split(".");
function ie() {
	return {
		BASE_URL: "/",
		DEV: !1,
		MODE: "production",
		PROD: !0,
		SSR: !1
	};
}
function ae() {
	return globalThis.process?.env ?? {};
}
function oe() {
	return {
		...ae(),
		...ie()
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
function se() {
	if (typeof window > "u") return !1;
	let e = window;
	return !!(e.__TAURI__ || e.__TAURI_IPC__ || e.__TAURI_INTERNALS__);
}
function ce(e, t) {
	return t ? "desktop" : a(o(e.VITE_PLATFORM), o(e.VITE_APP_PLATFORM), o(e.SDKWORK_PLATFORM)) || "web";
}
function le(e) {
	let t = a(o(e.VITE_APP_OWNER_MODE), o(e.VITE_OWNER_MODE), o(e.SDKWORK_OWNER_MODE))?.toLowerCase();
	return t === "organization" || t === "org" ? "organization" : t === "tenant" ? "tenant" : t === "root" ? "root" : a(o(e.VITE_TENANT_ID), o(e.VITE_APP_TENANT_ID), o(e.SDKWORK_TENANT_ID), o(e.VITE_TENANT_ACCESS_TOKEN), o(e.VITE_APP_TENANT_ACCESS_TOKEN), o(e.VITE_TENANT_API_BASE_URL), o(e.VITE_APP_TENANT_API_BASE_URL)) ? "tenant" : a(o(e.VITE_ORGANIZATION_ID), o(e.VITE_APP_ORGANIZATION_ID), o(e.SDKWORK_ORGANIZATION_ID), o(e.VITE_ORGANIZATION_ACCESS_TOKEN), o(e.VITE_APP_ORGANIZATION_ACCESS_TOKEN), o(e.VITE_ORGANIZATION_API_BASE_URL), o(e.VITE_APP_ORGANIZATION_API_BASE_URL)) ? "organization" : "root";
}
function ue(e, t) {
	let n = c(a(o(e.VITE_API_BASE_URL), o(e.VITE_APP_API_BASE_URL), o(e.VITE_APP_BASE_URL), o(e.SDKWORK_API_BASE_URL), te(t)));
	return {
		default: n,
		root: c(a(o(e.VITE_ROOT_API_BASE_URL), o(e.VITE_APP_ROOT_API_BASE_URL), n)),
		tenant: c(a(o(e.VITE_TENANT_API_BASE_URL), o(e.VITE_APP_TENANT_API_BASE_URL), n)),
		organization: c(a(o(e.VITE_ORGANIZATION_API_BASE_URL), o(e.VITE_APP_ORGANIZATION_API_BASE_URL), n))
	};
}
function de(e) {
	let t = s(a(o(e.VITE_ACCESS_TOKEN), o(e.VITE_APP_ACCESS_TOKEN), o(e.SDKWORK_ACCESS_TOKEN)));
	return {
		default: t,
		root: s(a(o(e.VITE_ROOT_ACCESS_TOKEN), o(e.VITE_APP_ROOT_ACCESS_TOKEN), t)),
		tenant: s(a(o(e.VITE_TENANT_ACCESS_TOKEN), o(e.VITE_APP_TENANT_ACCESS_TOKEN), t)),
		organization: s(a(o(e.VITE_ORGANIZATION_ACCESS_TOKEN), o(e.VITE_APP_ORGANIZATION_ACCESS_TOKEN), t))
	};
}
function fe(e, t) {
	return e === "tenant" ? t.tenant ?? t.default : e === "organization" ? t.organization ?? t.default : t.root ?? t.default;
}
function _(e = oe()) {
	let t = re(o(e.VITE_APP_ENV), o(e.MODE), o(e.NODE_ENV)), n = le(e), r = ue(e, t), i = de(e), d = c(fe(n, r) || te(t)), f = s(fe(n, i)), p = o(a(o(e.VITE_API_KEY), o(e.SDKWORK_API_KEY))), h = se(), ie = ce(e, h), ae = c(a(o(e.VITE_IM_WS_URL), o(e.VITE_APP_IM_WS_URL), ne(d))), g = o(a(o(e.VITE_TENANT_ID), o(e.VITE_APP_TENANT_ID), o(e.SDKWORK_TENANT_ID))), _ = o(a(o(e.VITE_ORGANIZATION_ID), o(e.VITE_APP_ORGANIZATION_ID), o(e.SDKWORK_ORGANIZATION_ID)));
	return {
		appEnv: t,
		mode: t,
		isDev: t === "development",
		isTest: t === "test",
		isStaging: t === "staging",
		isProduction: t === "production",
		metadata: {
			name: o(e.VITE_APP_NAME) || "SDKWork Desktop",
			version: o(e.VITE_APP_VERSION) || "0.1.0"
		},
		log: {
			debug: u(e.VITE_DEBUG, t === "development"),
			level: o(e.VITE_LOG_LEVEL) || (t === "development" ? "debug" : t === "test" ? "info" : "warn")
		},
		owner: {
			mode: n,
			tenantId: g,
			organizationId: _
		},
		api: {
			baseUrl: d,
			baseUrls: r,
			timeout: l(a(o(e.VITE_TIMEOUT), o(e.SDKWORK_TIMEOUT)))
		},
		auth: {
			apiKey: p,
			accessToken: f,
			accessTokens: i,
			mode: m(p, f)
		},
		realtime: { imWsUrl: ae },
		update: {
			appId: ee(o(e.VITE_APP_ID)),
			releaseChannel: o(e.VITE_RELEASE_CHANNEL) || "stable",
			enableStartupCheck: u(e.VITE_ENABLE_STARTUP_UPDATE_CHECK, !0)
		},
		distribution: { id: o(e.VITE_DISTRIBUTION_ID) === "cn" ? "cn" : "global" },
		platform: {
			id: ie,
			isDesktop: h || ie === "desktop",
			isTauri: h
		},
		vite: {
			isDev: u(e.DEV, t === "development"),
			isProd: u(e.PROD, t === "production")
		}
	};
}
//#endregion
//#region src/internal/runtimeState.ts
var pe = "sdkwork.core.pc-react.auth-token", v = "sdkwork.core.pc-react.access-token", me = "sdkwork.core.pc-react.refresh-token", y = "sdkwork.core.pc-react.im-session", he = "sdkwork_token", ge = "sdkwork_access_token", _e = "sdkwork_refresh_token", b = {
	authToken: [he],
	accessToken: [ge],
	refreshToken: [_e],
	runtimeSession: [
		"sdkwork-notes-auth-session",
		"sdkwork-drive-auth-session",
		"claw-studio-auth-session"
	],
	imSession: []
}, x = /* @__PURE__ */ new Map(), S = {}, ve = null, ye = null, C = null, be = null, w = null, xe = null, T = null, Se = 0, Ce = "idle", E = null, we = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Set();
function Ee() {
	if (typeof window > "u") return null;
	try {
		return window.localStorage;
	} catch {
		return null;
	}
}
function De() {
	return {
		getItem(e) {
			return x.get(e) ?? null;
		},
		setItem(e, t) {
			x.set(e, t);
		},
		removeItem(e) {
			x.delete(e);
		}
	};
}
function D(e = [], t = []) {
	return Array.from(new Set([...e, ...t].filter((e) => e && e.trim())));
}
function Oe(e, t) {
	if (!(!e && !t)) return {
		authToken: D(e?.authToken, t?.authToken),
		accessToken: D(e?.accessToken, t?.accessToken),
		refreshToken: D(e?.refreshToken, t?.refreshToken),
		runtimeSession: D(e?.runtimeSession, t?.runtimeSession),
		imSession: D(e?.imSession, t?.imSession)
	};
}
function ke(e, t) {
	if (!(!e && !t)) return {
		defaults: {
			...e?.defaults ?? {},
			...t?.defaults ?? {}
		},
		storageKey: t?.storageKey ?? e?.storageKey
	};
}
function O() {
	return {
		authToken: D(b.authToken, S.legacyStorageKeys?.authToken),
		accessToken: D(b.accessToken, S.legacyStorageKeys?.accessToken),
		refreshToken: D(b.refreshToken, S.legacyStorageKeys?.refreshToken),
		runtimeSession: D(b.runtimeSession, S.legacyStorageKeys?.runtimeSession),
		imSession: D(b.imSession, S.legacyStorageKeys?.imSession)
	};
}
function Ae(e, t) {
	return {
		envSource: t.envSource ? {
			...e.envSource ?? {},
			...t.envSource
		} : e.envSource,
		envGlobalKeys: t.envGlobalKeys ? D(e.envGlobalKeys, t.envGlobalKeys) : e.envGlobalKeys,
		storage: t.storage ?? e.storage,
		legacyStorageKeys: Oe(e.legacyStorageKeys, t.legacyStorageKeys),
		preferences: ke(e.preferences, t.preferences),
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
function k() {
	Se += 1;
	for (let e of we) e();
}
function A(e) {
	Ce = e;
	for (let t of Te) t(e);
	k();
}
function je() {
	return {
		...oe(),
		...g(S.envGlobalKeys ?? []),
		...S.envSource ?? {}
	};
}
function j(e) {
	try {
		return P().getItem(e) ?? void 0;
	} catch {
		return;
	}
}
function M(e) {
	for (let t of e) {
		let e = j(t);
		if (e !== void 0) return e;
	}
}
function Me() {
	for (let e of O().runtimeSession) {
		let t = f(j(e));
		if (!t) continue;
		let n = s(t.authToken), r = s(t.accessToken), i = typeof t.refreshToken == "string" ? t.refreshToken.trim() : "";
		if (!(!n && !r && !i)) return {
			authToken: n || void 0,
			accessToken: r || void 0,
			refreshToken: i || void 0
		};
	}
	return {};
}
function N(e, t) {
	try {
		if (t && t.trim()) {
			P().setItem(e, t.trim());
			return;
		}
		P().removeItem(e);
	} catch {}
}
function P() {
	return S.storage ? S.storage : Ee() || De();
}
function F() {
	return S;
}
function Ne(e = {}) {
	return S = Ae(S, e), Ze(), k(), S;
}
function Pe(e) {
	return we.add(e), () => {
		we.delete(e);
	};
}
function I() {
	return Se;
}
function Fe(e) {
	return Te.add(e), e(Ce), () => {
		Te.delete(e);
	};
}
function Ie() {
	return Ce;
}
function Le(e) {
	A(e);
}
function Re(e) {
	E?.(), E = e.lifecycle?.onStateChange?.((e) => {
		A(typeof e == "string" ? e : e.status || "idle");
	}) ?? e.realtime?.onConnectionStateChange?.((e) => {
		A(e);
	}) ?? null;
}
function L() {
	return ve ||= _(je()), ve;
}
function ze(e, t = R()) {
	let n = S.headersResolver?.({
		env: L(),
		session: t,
		target: e
	});
	return n ? Object.entries(n).reduce((e, [t, n]) => {
		let r = typeof n == "string" ? n.trim() : "";
		return !t.trim() || !r || (e[t] = r), e;
	}, {}) : {};
}
function R() {
	let e = L(), t = Me(), n = s(j(pe) || t.authToken || M(O().authToken)), r = s(j(v) || t.accessToken || M(O().accessToken)), i = s(C?.accessToken || w?.accessToken), a = (j(me) || t.refreshToken || M(O().refreshToken) || "").trim(), o = f(j(y));
	return !T && o && (T = o), {
		authToken: n || void 0,
		accessToken: r || i || e.auth.accessToken || void 0,
		refreshToken: a || void 0,
		im: T ? d(T) : void 0
	};
}
function Be(e) {
	let t = R(), n = L(), r = e.authToken === void 0 ? s(t.authToken) : s(e.authToken), i = e.accessToken === void 0 ? s(t.accessToken || n.auth.accessToken) : s(e.accessToken), a = e.refreshToken === void 0 ? (t.refreshToken || "").trim() : (e.refreshToken || "").trim();
	return N(pe, r || void 0), e.accessToken === void 0 ? N(v, s(j(v)) || void 0) : !i || i === n.auth.accessToken ? N(v, void 0) : N(v, i), N(me, a || void 0), e.im && He(e.im), k(), R();
}
function Ve() {
	N(pe, void 0), N(v, void 0), N(me, void 0), N(y, void 0);
	for (let e of [
		...O().authToken,
		...O().accessToken,
		...O().refreshToken,
		...O().runtimeSession,
		...O().imSession
	]) N(e, void 0);
	T = null, k();
}
function He(e) {
	T = e ? d(e) : null, e ? N(y, p(e)) : N(y, void 0), k();
}
function Ue() {
	return T ||= f(j(y)), T ? d(T) : null;
}
function We(e, t) {
	ye = e, C = t;
}
function Ge() {
	return ye ?? null;
}
function Ke() {
	return C ?? null;
}
function qe(e, t) {
	be = e, w = t;
}
function Je() {
	return be ?? null;
}
function Ye() {
	return w ?? null;
}
function Xe(e) {
	xe = e;
}
function z() {
	return xe ?? null;
}
function Ze() {
	ve = null, ye = null, C = null, be = null, w = null, xe = null, T = null, E?.(), E = null, A("idle");
}
function Qe(e = {}) {
	let { clearStorage: t = !0, clearConfiguration: n = !0 } = e;
	t && (x.clear(), Ve()), n && (S = {}), Ze(), k();
}
//#endregion
//#region src/app/index.ts
var $e = {
	analytics: "analytic",
	assets: "asset",
	coupons: "coupon",
	notes: "note",
	orders: "order",
	payments: "payment",
	projects: "project",
	settings: "setting",
	workspaces: "workspace"
}, et = /* @__PURE__ */ new WeakMap();
function tt(e = {}) {
	return {
		...F().appConfigOverrides ?? {},
		...e
	};
}
function B(e, t, n) {
	e.setAuthToken(s(t.authToken)), e.setAccessToken(s(t.accessToken || n));
}
function nt(e, t) {
	let n = R(), r = tt(e);
	return {
		...n,
		authToken: r.authToken === void 0 ? s(n.authToken) : s(r.authToken),
		accessToken: r.accessToken === void 0 ? s(n.accessToken || t) : s(r.accessToken)
	};
}
function rt() {
	return { ...F().appClientCompatAliases ?? {} };
}
function it(e, t = rt()) {
	let n = Object.entries(t).filter(([e, t]) => e.trim() && t.trim() && e !== t).sort(([e], [t]) => e.localeCompare(t));
	if (n.length === 0) return e;
	let r = JSON.stringify(n);
	if (et.get(e) === r) return e;
	for (let [t, r] of n) Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		get() {
			return e[r];
		}
	});
	return et.set(e, r), e;
}
function at(e = {}, t = { includeRuntimeSession: !0 }) {
	let n = L(), r = t.includeRuntimeSession ? R() : void 0, i = tt(e), a = s(i.accessToken || r?.accessToken || n.auth.accessToken), o = (i.apiKey || n.auth.apiKey || "").trim(), c = s(i.authToken || r?.authToken);
	return {
		env: n.appEnv,
		ownerMode: n.owner.mode,
		baseUrl: i.baseUrl || n.api.baseUrl,
		timeout: i.timeout ?? n.api.timeout,
		apiKey: o || void 0,
		accessToken: a || void 0,
		authToken: c || void 0,
		tenantId: (i.tenantId ?? n.owner.tenantId) || void 0,
		organizationId: (i.organizationId ?? n.owner.organizationId) || void 0,
		platform: i.platform ?? n.platform.id,
		tokenManager: i.tokenManager,
		authMode: m(o, a, c, i.authMode),
		headers: {
			...ze("app", {
				...r ?? {},
				authToken: c || void 0,
				accessToken: a || void 0
			}),
			...i.headers ?? {}
		}
	};
}
function ot(e, t = {}) {
	let n = s(t.accessToken || e.auth.accessToken), r = (t.apiKey || e.auth.apiKey || "").trim(), i = s(t.authToken);
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
		authMode: m(r, n, i, t.authMode),
		headers: { ...t.headers ?? {} }
	};
}
function st(e, t = {}) {
	return ot(_(e), t);
}
function ct(e) {
	return s(_(e).auth.accessToken);
}
function lt(e = {}) {
	return at(e, { includeRuntimeSession: !0 });
}
function ut(e = {}) {
	return at(e, { includeRuntimeSession: !1 });
}
function dt(t = {}) {
	let n = ut(t), r = it(e(n));
	return B(r, nt(t, n.accessToken || ""), n.accessToken || ""), We(r, n), r;
}
function ft() {
	return Ge() || dt();
}
function V() {
	return Ke();
}
function pt() {
	return s(R().accessToken) || s(V()?.accessToken) || s(L().auth.accessToken);
}
function mt(t = {}) {
	let n = ut(t), r = it(e(n));
	return B(r, nt(t, n.accessToken || ""), n.accessToken || ""), r;
}
function ht(e = {}) {
	if (Object.keys(e).length > 0) return mt(e);
	let t = ft(), n = V() || ut();
	return B(t, R(), n.accessToken || ""), t;
}
function H(e = R()) {
	let t = Ge(), n = V();
	!t || !n || B(t, e, n.accessToken || "");
}
function gt(e) {
	let t = ft();
	t.setAuthToken(s(e.authToken)), t.setAccessToken(s(e.accessToken || pt()));
}
//#endregion
//#region src/im/index.ts
var U = null;
function _t(e = {}) {
	let t = {
		...e,
		accessToken: s(e.accessToken),
		authToken: s(e.authToken),
		refreshToken: e.refreshToken?.trim() || void 0
	}, n = () => typeof t.expiresAt == "number" && Date.now() >= t.expiresAt;
	return {
		getAccessToken: () => t.accessToken,
		getAuthToken: () => t.authToken,
		getRefreshToken: () => t.refreshToken,
		getTokens: () => ({ ...t }),
		setTokens: (e) => {
			t = {
				...e,
				accessToken: s(e.accessToken),
				authToken: s(e.authToken),
				refreshToken: e.refreshToken?.trim() || void 0
			};
		},
		setAccessToken: (e) => {
			t.accessToken = s(e) || void 0;
		},
		setAuthToken: (e) => {
			t.authToken = s(e) || void 0;
		},
		setRefreshToken: (e) => {
			t.refreshToken = e.trim() || void 0;
		},
		clearTokens: () => {
			t = {};
		},
		clearAuthToken: () => {
			t.authToken = void 0;
		},
		clearAccessToken: () => {
			t.accessToken = void 0;
		},
		isExpired: n,
		isValid: () => !!(t.accessToken || t.authToken) && !n(),
		hasToken: () => !!(t.accessToken || t.authToken),
		hasAuthToken: () => !!t.authToken,
		hasAccessToken: () => !!t.accessToken,
		willExpireIn: (e) => typeof t.expiresAt == "number" && Date.now() + e * 1e3 >= t.expiresAt
	};
}
function vt(e = {}) {
	return {
		...F().imConfigOverrides ?? {},
		...e
	};
}
function yt(e, t, n) {
	e && (e.setAccessToken(s(t.accessToken || n)), e.setAuthToken(s(t.authToken)), t.refreshToken !== void 0 && e.setRefreshToken(t.refreshToken || ""));
}
function bt(e, t) {
	let n = R(), r = vt(e);
	return {
		...n,
		authToken: r.authToken === void 0 ? s(n.authToken) : s(r.authToken),
		accessToken: r.accessToken === void 0 ? s(n.accessToken || t) : s(r.accessToken)
	};
}
function W(e, t, n, r) {
	yt(t.tokenManager, n, r);
	let i = s(n.authToken || t.authToken || t.apiKey);
	if (i) {
		e.auth.useToken(i);
		return;
	}
	e.auth.clearToken();
}
function xt(e = {}) {
	let t = St(e, { includeRuntimeSession: !1 }), n = bt(e, t.accessToken || ""), r = s(e.authToken || n.authToken || t.authToken), i = s(n.accessToken || t.accessToken), a = e.tokenManager ?? _t({
		accessToken: i,
		authToken: r || s(t.apiKey),
		refreshToken: n.refreshToken
	});
	return {
		...t,
		authToken: r || void 0,
		accessToken: i || void 0,
		tokenManager: a,
		authMode: m(t.apiKey, i, r, t.authMode)
	};
}
function St(e = {}, t = { includeRuntimeSession: !0 }) {
	let n = L(), r = t.includeRuntimeSession ? R() : void 0, i = vt(e), a = s(i.accessToken || r?.accessToken || n.auth.accessToken), o = (i.apiKey || n.auth.apiKey || "").trim(), c = s(i.authToken || r?.authToken), l = i.tokenManager ?? _t({
		accessToken: a,
		authToken: c || s(o),
		refreshToken: r?.refreshToken
	});
	return {
		env: n.appEnv,
		ownerMode: n.owner.mode,
		baseUrl: i.baseUrl || n.api.baseUrl,
		timeout: i.timeout ?? n.api.timeout,
		apiKey: o || void 0,
		accessToken: a || void 0,
		authToken: c || void 0,
		tenantId: (i.tenantId ?? n.owner.tenantId) || void 0,
		organizationId: (i.organizationId ?? n.owner.organizationId) || void 0,
		platform: i.platform ?? n.platform.id,
		tokenManager: l,
		authMode: m(o, a, c, i.authMode),
		websocketBaseUrl: i.websocketBaseUrl || n.realtime.imWsUrl || void 0,
		headers: {
			...ze("im", {
				...r ?? {},
				authToken: c || void 0,
				accessToken: a || void 0
			}),
			...i.headers ?? {}
		}
	};
}
function Ct(e) {
	return new t({
		baseUrl: e.baseUrl,
		apiBaseUrl: e.baseUrl,
		websocketBaseUrl: e.websocketBaseUrl,
		authToken: s(e.authToken || e.apiKey),
		tokenProvider: e.tokenManager,
		timeout: e.timeout,
		headers: e.headers
	});
}
function wt(e, t) {
	if (!e) return { deviceId: t.userId };
	if ("wsUrl" in e || "token" in e || "uid" in e) {
		let n = e.token ? { Authorization: `Bearer ${s(e.token)}` } : void 0;
		return {
			deviceId: e.deviceId || e.uid || t.userId,
			url: e.wsUrl,
			headers: n
		};
	}
	return e;
}
function Tt(e, t = {}) {
	let n = _(e), r = s(t.accessToken || n.auth.accessToken), i = (t.apiKey || n.auth.apiKey || "").trim(), a = (t.tenantId ?? n.owner.tenantId) || void 0, o = (t.organizationId ?? n.owner.organizationId) || void 0, c = t.platform ?? n.platform.id, l = t.websocketBaseUrl || n.realtime.imWsUrl || void 0;
	return {
		baseUrl: t.baseUrl || n.api.baseUrl,
		timeout: t.timeout ?? n.api.timeout,
		...i ? { apiKey: i } : {},
		...r ? { accessToken: r } : {},
		...a ? { tenantId: a } : {},
		...o ? { organizationId: o } : {},
		...c ? { platform: c } : {},
		...l ? { websocketBaseUrl: l } : {}
	};
}
function Et(e = {}) {
	return St(e, { includeRuntimeSession: !0 });
}
function Dt(e = {}) {
	return St(e, { includeRuntimeSession: !1 });
}
function Ot(e = {}) {
	let t = xt(e), n = {
		...Dt(e),
		tokenManager: t.tokenManager
	}, r = Ct(t);
	return W(r, n, R(), n.accessToken || ""), qe(r, n), Xe(r), r;
}
function kt() {
	return z() || Ot();
}
function At(e = {}) {
	let t = z();
	if (t) return t;
	let n = Dt(e), r = Ct(n);
	return W(r, n, bt(e, n.accessToken || ""), n.accessToken || ""), qe(r, n), Xe(r), r;
}
function jt() {
	return Je() || At();
}
function Mt() {
	return Ye();
}
var Nt = At, Pt = jt, Ft = Mt;
async function It(e, t = {}) {
	let n = {
		userId: (e.userId || "").trim(),
		username: (e.username || "").trim(),
		displayName: (e.displayName || "").trim(),
		authToken: s(e.authToken),
		...s(e.accessToken) ? { accessToken: s(e.accessToken) } : {},
		...e.refreshToken?.trim() ? { refreshToken: e.refreshToken.trim() } : {}
	};
	if (!n.authToken) throw Error("IM auth token is required");
	if (!n.userId) throw Error("IM user id is required");
	if (!n.username) throw Error("IM username is required");
	let r = Be({
		authToken: n.authToken,
		accessToken: n.accessToken,
		refreshToken: n.refreshToken
	});
	H(r);
	let i = kt(), a = Mt() || Et();
	return W(i, a, r, a.accessToken || L().auth.accessToken || ""), t.bootstrapRealtime !== !1 && (U?.disconnect(1e3, "reconnect"), U = await i.connect(wt(t.realtimeSession, n)), Re(U)), He(n), n;
}
async function Lt() {
	U?.disconnect(1e3, "logout"), U = null;
	let e = z(), t = Ye();
	e && t && W(e, t, {
		authToken: "",
		accessToken: t.accessToken || L().auth.accessToken || ""
	}, t.accessToken || L().auth.accessToken || ""), He(null), Le("idle");
}
function Rt(e = R()) {
	let t = z(), n = Ye();
	t && n && W(t, n, e, n.accessToken || "");
}
//#endregion
//#region src/internal/preferencesState.ts
var zt = "sdkwork.core.pc-react.preferences", Bt = !0, Vt = 0, Ht = !1, Ut = !1, Wt = "", Gt = "", G = an(), Kt = /* @__PURE__ */ new Set();
function qt(e) {
	let t = typeof e == "string" ? e.trim().toLowerCase() : "";
	if (t === "dark" || t === "light" || t === "system") return t;
}
function Jt(e) {
	let t = typeof e == "string" ? e.trim().toLowerCase() : "";
	if (t === "green-tech" || t === "lobster" || t === "rose" || t === "tech-blue" || t === "violet" || t === "zinc") return t;
}
function K(e) {
	return (typeof e == "string" ? e.trim() : "") || void 0;
}
function Yt(e) {
	let t = typeof e == "string" ? e.trim() : "";
	if (t) return t.toLowerCase() === "system" ? "system" : K(t);
}
function Xt() {
	if (!(typeof navigator > "u")) return K(navigator.language);
}
function Zt() {
	if (!(typeof document > "u")) return K(document.documentElement.lang);
}
function Qt(e = {}) {
	return K(e.documentLanguage) || K(e.navigatorLanguage) || Zt() || Xt() || "en-US";
}
function $t() {
	return F().preferences;
}
function en() {
	return K($t()?.storageKey) || zt;
}
function tn() {
	return f(P().getItem(en()));
}
function nn(e = {}) {
	let t = $t()?.defaults ?? {}, n = Yt(t.localePreference ?? t.locale) || "system";
	return {
		locale: n === "system" ? Qt(e) : n,
		localePreference: n,
		themeColor: Jt(t.themeColor) || "lobster",
		themeSelection: qt(t.themeSelection) || "system"
	};
}
function rn(e, t = {}) {
	let n = nn(t), r = Yt(e?.localePreference ?? e?.locale) || n.localePreference;
	return {
		locale: r === "system" ? Qt(t) : r,
		localePreference: r,
		themeColor: Jt(e?.themeColor) || n.themeColor,
		themeSelection: qt(e?.themeSelection) || n.themeSelection
	};
}
function an() {
	return typeof window > "u" || typeof window.matchMedia != "function" ? Bt : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function on(e) {
	return p(e);
}
function sn(e) {
	return p(e);
}
function q(e = {}) {
	return rn(tn(), e);
}
function cn(e = {}) {
	let t = q(e), n = e.prefersDark ?? G, r = t.themeSelection === "system" ? n ? "dark" : "light" : t.themeSelection;
	return {
		...t,
		colorMode: r
	};
}
function ln() {
	Vt += 1;
	for (let e of Kt) e();
}
function un() {
	Wt = on(q()), Gt = sn(cn());
}
function J() {
	let e = on(q()), t = sn(cn());
	e === Wt && t === Gt || (Wt = e, Gt = t, ln());
}
function Y() {
	Ht ||= (un(), Pe(() => {
		J();
	}), !0);
}
function dn() {
	if (!Ut) {
		if (G = an(), typeof window < "u" && typeof window.matchMedia == "function") {
			let e = window.matchMedia("(prefers-color-scheme: dark)"), t = (e) => {
				let t = e.matches;
				G !== t && (G = t, J());
			};
			e.addEventListener?.("change", t), e.addListener?.(t);
		}
		Ut = !0;
	}
}
function fn() {
	return Vt;
}
function pn() {
	return Y(), q();
}
function mn(e) {
	Y();
	let t = rn({
		...pn(),
		...e,
		...e.localePreference === void 0 ? e.locale === void 0 ? {} : { localePreference: e.locale } : { localePreference: e.localePreference }
	});
	return P().setItem(en(), p(t)), J(), t;
}
function hn() {
	Y(), P().removeItem(en()), J();
}
function X(e = {}) {
	return cn(e);
}
function gn(e) {
	return Y(), dn(), Kt.add(e), () => {
		Kt.delete(e);
	};
}
//#endregion
//#region src/runtime/shell-bridge.ts
function _n(e) {
	let t = String(e).trim().toLowerCase();
	return t.startsWith("ar") || t.startsWith("fa") || t.startsWith("he") || t.startsWith("ps") || t.startsWith("ur");
}
function vn(e) {
	return String(e || "").trim() || "en-US";
}
function yn(e) {
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
function Z(e) {
	return mn(e), X();
}
function bn(e) {
	return _n(vn(e)) ? "rtl" : "ltr";
}
function xn(e) {
	let t = vn(e);
	return {
		formatDate(e, n) {
			let r = yn(e);
			return r ? new Intl.DateTimeFormat(t, n).format(r) : "";
		},
		formatDateTime(e, n) {
			let r = yn(e);
			return r ? new Intl.DateTimeFormat(t, n ?? {
				dateStyle: "medium",
				timeStyle: "short"
			}).format(r) : "";
		},
		locale: t
	};
}
function Sn() {
	let e = X(), t = e.locale;
	return {
		actions: {
			patchPreferences: Z,
			setLocalePreference(e) {
				return Z({ localePreference: e });
			},
			setThemeColor(e) {
				return Z({ themeColor: e });
			},
			setThemeSelection(e) {
				return Z({ themeSelection: e });
			}
		},
		dir: bn(t),
		env: L(),
		formatters: xn(t),
		locale: t,
		preferences: e,
		session: R()
	};
}
//#endregion
//#region src/runtime/index.ts
function Cn(e = {}) {
	return Ne(e);
}
function wn(e = {}) {
	Qe(e);
}
function Tn(e) {
	let t = Be(e);
	return H(t), Rt(t), t;
}
var En = Tn;
function Q() {
	return R();
}
var Dn = Q;
async function On() {
	Ve(), H(R()), await Lt();
}
var kn = {
	authToken: he,
	accessToken: ge,
	refreshToken: _e
};
//#endregion
//#region src/hooks/index.ts
function $() {
	r(Pe, I, I);
}
function An() {
	r(gn, fn, fn);
}
function jn() {
	return $(), ht();
}
function Mn() {
	return $(), kt();
}
function Nn() {
	return $(), L();
}
function Pn() {
	return $(), Q();
}
function Fn() {
	return An(), pn();
}
function In() {
	return An(), X();
}
function Ln() {
	return $(), An(), n(() => Sn(), [
		L(),
		X(),
		Q()
	]);
}
//#endregion
export { $e as SDKWORK_PC_REACT_DEFAULT_APP_CLIENT_COMPAT_ALIASES, h as SDKWORK_PC_REACT_ENV_KEYS, ge as SDKWORK_PC_REACT_LEGACY_ACCESS_TOKEN_STORAGE_KEY, he as SDKWORK_PC_REACT_LEGACY_AUTH_TOKEN_STORAGE_KEY, _e as SDKWORK_PC_REACT_LEGACY_REFRESH_TOKEN_STORAGE_KEY, kn as SDKWORK_PC_REACT_LEGACY_STORAGE_KEYS, gt as applyAppClientSessionTokens, H as applyRuntimeSessionToAppClient, Rt as applyRuntimeSessionToImClient, Lt as clearImClientSession, On as clearPcReactRuntimeSession, hn as clearPcReactShellPreferences, Cn as configurePcReactRuntime, lt as createAppClientConfig, st as createAppClientConfigFromEnv, Et as createImClientConfig, Tt as createImRuntimeConfigFromEnv, _ as createPcReactEnvConfig, xn as createPcReactLocaleFormatting, mt as createScopedAppClient, it as decorateAppClientCompatAliases, ft as getAppClient, V as getAppClientConfig, ht as getAppClientWithSession, Pt as getImBackendClient, Ft as getImBackendClientConfig, kt as getImClient, Ie as getImConnectionState, Ue as getImSessionIdentity, jt as getImTransportClient, Mt as getImTransportClientConfig, L as getPcReactEnv, I as getPcReactRuntimeVersion, dt as initAppClient, Nt as initImBackendClient, Ot as initImClient, At as initImTransportClient, En as persistPcReactRuntimeSession, mn as persistPcReactShellPreferences, Tn as persistRuntimeSession, oe as readPcReactEnvSource, g as readPcReactNamedGlobalEnvSources, Dn as readPcReactRuntimeSession, Sn as readPcReactShellBridgeValue, pn as readPcReactShellPreferences, Q as readRuntimeSession, wn as resetPcReactRuntime, pt as resolveAppClientAccessToken, ct as resolveAppClientAccessTokenFromEnv, bn as resolvePcReactLocaleDirection, X as resolvePcReactShellPreferences, Fe as subscribeImConnectionState, Pe as subscribePcReactRuntime, gn as subscribePcReactShellPreferences, It as syncImClientSession, jn as useAppClient, Mn as useImClient, Nn as usePcReactEnv, In as usePcReactResolvedShellPreferences, Pn as usePcReactRuntimeSession, Ln as usePcReactShellBridgeValue, Fn as usePcReactShellPreferences };

//# sourceMappingURL=index.js.map