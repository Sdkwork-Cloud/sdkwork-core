import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { InstallRequest, PlusApiResultListMapStringObject, PlusApiResultMapStringObject, PlusApiResultVoid, UpdateCredentialsRequest } from '../types';
export declare class ToolApi {
    private client;
    constructor(client: HttpClient);
    /** Update tool credentials */
    updateCredentials(toolId: string | number, body?: UpdateCredentialsRequest): Promise<PlusApiResultMapStringObject>;
    /** List my tools */
    listMine(): Promise<PlusApiResultListMapStringObject>;
    /** Install tool */
    install(body?: InstallRequest): Promise<PlusApiResultMapStringObject>;
    /** Test tool */
    test(toolId: string | number): Promise<PlusApiResultMapStringObject>;
    /** List tool market */
    listMarket(params?: QueryParams): Promise<PlusApiResultListMapStringObject>;
    /** Get tool market item */
    getMarketItem(toolId: string | number): Promise<PlusApiResultMapStringObject>;
    /** List tool categories */
    listCategories(): Promise<PlusApiResultListMapStringObject>;
    /** Uninstall tool */
    uninstall(toolId: string | number): Promise<PlusApiResultVoid>;
}
export declare function createToolApi(client: HttpClient): ToolApi;
//# sourceMappingURL=tool.d.ts.map