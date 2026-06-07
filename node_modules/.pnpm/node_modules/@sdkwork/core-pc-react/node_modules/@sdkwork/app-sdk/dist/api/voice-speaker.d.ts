import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { PlusApiResultListVoiceSpeakerVO, PlusApiResultPageMarketVoiceVO, PlusApiResultPageVoiceSpeakerVO, PlusApiResultSpeakerStatisticsVO, PlusApiResultVoiceSpeakerDetailVO, PlusApiResultVoiceSpeakerVO, PlusApiResultVoid, VoiceSpeakerCreateForm, VoiceSpeakerPreviewUpdateForm } from '../types';
export declare class VoiceSpeakerApi {
    private client;
    constructor(client: HttpClient);
    /** 获取发音人详情 */
    getSpeakerDetail(speakerId: string | number): Promise<PlusApiResultVoiceSpeakerDetailVO>;
    /** 更新发音人 */
    updateSpeaker(speakerId: string | number, body: VoiceSpeakerCreateForm): Promise<PlusApiResultVoiceSpeakerVO>;
    /** 删除发音人 */
    deleteSpeaker(speakerId: string | number): Promise<PlusApiResultVoid>;
    /** 获取发音人列表 */
    listSpeakers(params?: QueryParams): Promise<PlusApiResultPageVoiceSpeakerVO>;
    /** 创建发音人 */
    createSpeaker(body: VoiceSpeakerCreateForm): Promise<PlusApiResultVoiceSpeakerVO>;
    /** 更新发音人状态 */
    updateStatus(speakerId: string | number, params?: QueryParams): Promise<PlusApiResultVoid>;
    /** 设为默认发音人 */
    setAsDefault(speakerId: string | number): Promise<PlusApiResultVoiceSpeakerVO>;
    /** 获取发音人统计 */
    getStatistics(): Promise<PlusApiResultSpeakerStatisticsVO>;
    /** 获取默认发音人 */
    getDefaultSpeaker(): Promise<PlusApiResultVoiceSpeakerVO>;
    /** 根据代码获取发音人 */
    getSpeakerByCode(code: string | number): Promise<PlusApiResultVoiceSpeakerVO>;
    /** 获取渠道发音人 */
    listSpeakersByChannel(channel: string | number): Promise<PlusApiResultListVoiceSpeakerVO>;
    /** Update speaker preview settings */
    updatePreviewSettings(speakerId: string | number, body: VoiceSpeakerPreviewUpdateForm): Promise<PlusApiResultVoiceSpeakerVO>;
    /** List normalized market voices */
    listMarketVoices(params?: QueryParams): Promise<PlusApiResultPageMarketVoiceVO>;
}
export declare function createVoiceSpeakerApi(client: HttpClient): VoiceSpeakerApi;
//# sourceMappingURL=voice-speaker.d.ts.map