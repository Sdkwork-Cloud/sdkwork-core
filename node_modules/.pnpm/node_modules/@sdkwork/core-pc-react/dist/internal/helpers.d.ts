import { PcReactAuthMode, PcReactRuntimeEnv } from './contracts';
export declare function firstNonEmptyValue(...values: Array<string | undefined>): string | undefined;
export declare function normalizeString(value?: string): string;
export declare function normalizeBearerToken(value?: string): string;
export declare function normalizeUrl(value?: string): string;
export declare function parsePositiveNumber(value?: string, fallback?: number): number;
export declare function parseOptionalNumber(value?: string): number | null;
export declare function parseBoolean(value: string | boolean | undefined, fallback: boolean): boolean;
export declare function cloneJsonValue<T>(value: T): T;
export declare function safeParseJson<T>(value: string | null | undefined): T | null;
export declare function safeStringifyJson(value: unknown): string;
export declare function resolveDefaultBaseUrl(env: PcReactRuntimeEnv): string;
export declare function resolveDefaultImWsUrl(baseUrl: string): string;
export declare function resolveRuntimeEnv(...values: Array<string | undefined>): PcReactRuntimeEnv;
export declare function resolveAuthMode(apiKey?: string, accessToken?: string, authToken?: string, explicitMode?: PcReactAuthMode): PcReactAuthMode;
//# sourceMappingURL=helpers.d.ts.map