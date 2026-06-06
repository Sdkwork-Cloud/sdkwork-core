import { SdkworkAppConfig } from '../types/common';
import { RequestOptions, QueryParams, AuthTokenManager, BaseHttpClient } from '@sdkwork/sdk-common';
export declare class HttpClient extends BaseHttpClient {
    private static readonly API_KEY_HEADER;
    private static readonly API_KEY_USE_BEARER;
    constructor(config: SdkworkAppConfig);
    private getInternalAuthConfig;
    private getInternalHeaders;
    setApiKey(apiKey: string): void;
    setAuthToken(token: string): void;
    setAccessToken(token: string): void;
    setTokenManager(manager: AuthTokenManager): void;
    request<T>(path: string, options?: RequestOptions): Promise<T>;
    get<T>(path: string, params?: QueryParams, headers?: Record<string, string>): Promise<T>;
    post<T>(path: string, body?: unknown, params?: QueryParams, headers?: Record<string, string>): Promise<T>;
    put<T>(path: string, body?: unknown, params?: QueryParams, headers?: Record<string, string>): Promise<T>;
    delete<T>(path: string, params?: QueryParams, headers?: Record<string, string>): Promise<T>;
    patch<T>(path: string, body?: unknown, params?: QueryParams, headers?: Record<string, string>): Promise<T>;
}
export declare function createHttpClient(config: SdkworkAppConfig): HttpClient;
//# sourceMappingURL=client.d.ts.map