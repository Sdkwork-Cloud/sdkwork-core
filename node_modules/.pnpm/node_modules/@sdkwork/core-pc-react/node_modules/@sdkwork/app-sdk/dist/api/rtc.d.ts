import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { CreateRoomRequest, PlusApiResultListMapStringObject, PlusApiResultMapStringObject, PlusApiResultVoid } from '../types';
export declare class RtcApi {
    private client;
    constructor(client: HttpClient);
    /** Create RTC room */
    createRoom(body?: CreateRoomRequest): Promise<PlusApiResultMapStringObject>;
    /** Create RTC room token */
    createRoomToken(roomId: string | number): Promise<PlusApiResultMapStringObject>;
    /** End RTC room */
    endRoom(roomId: string | number): Promise<PlusApiResultVoid>;
    /** Get RTC room */
    getRoom(roomId: string | number): Promise<PlusApiResultMapStringObject>;
    /** List RTC records */
    listRecords(params?: QueryParams): Promise<PlusApiResultListMapStringObject>;
}
export declare function createRtcApi(client: HttpClient): RtcApi;
//# sourceMappingURL=rtc.d.ts.map