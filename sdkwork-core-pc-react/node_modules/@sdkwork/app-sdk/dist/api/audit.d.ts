import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { AccountRiskCheckForm, AudioAsrAuditForm, AudioAuditForm, AuditAppealForm, BatchImageAuditForm, BatchTextAuditForm, BehaviorRiskCheckForm, ContentAuditForm, ImageAuditForm, ImageOcrAuditForm, PlusApiResultAccountRiskVO, PlusApiResultAudioAsrAuditVO, PlusApiResultAudioAuditVO, PlusApiResultAuditAppealStatusVO, PlusApiResultAuditAppealVO, PlusApiResultAuditRecordDetailVO, PlusApiResultBatchImageAuditVO, PlusApiResultBatchTextAuditVO, PlusApiResultBehaviorRiskVO, PlusApiResultContentAuditVO, PlusApiResultImageAuditVO, PlusApiResultImageOcrAuditVO, PlusApiResultListAuditPolicyVO, PlusApiResultListSensitiveWordListVO, PlusApiResultPageAuditAppealVO, PlusApiResultPageAuditRecordVO, PlusApiResultRealtimeAuditVO, PlusApiResultSensitiveWordsVO, PlusApiResultTextAuditVO, PlusApiResultTextSuggestVO, PlusApiResultVideoAuditStatusVO, PlusApiResultVideoAuditVO, RealtimeAuditForm, SensitiveWordsForm, TextAuditForm, TextSuggestForm, VideoAuditForm } from '../types';
export declare class AuditApi {
    private client;
    constructor(client: HttpClient);
    /** 审核申诉 */
    submitAppeal(recordId: string | number, body: AuditAppealForm): Promise<PlusApiResultAuditAppealVO>;
    /** 视频审核 */
    video(body: VideoAuditForm): Promise<PlusApiResultVideoAuditVO>;
    /** 文本审核 */
    text(body: TextAuditForm): Promise<PlusApiResultTextAuditVO>;
    /** 文本替换建议 */
    suggestTextReplacement(body: TextSuggestForm): Promise<PlusApiResultTextSuggestVO>;
    /** 批量文本审核 */
    batchAuditText(body: BatchTextAuditForm): Promise<PlusApiResultBatchTextAuditVO>;
    /** 敏感词检测 */
    detectSensitiveWords(body: SensitiveWordsForm): Promise<PlusApiResultSensitiveWordsVO>;
    /** 行为风险检测 */
    checkBehaviorRisk(body: BehaviorRiskCheckForm): Promise<PlusApiResultBehaviorRiskVO>;
    /** 账号风险检测 */
    checkAccountRisk(body: AccountRiskCheckForm): Promise<PlusApiResultAccountRiskVO>;
    /** 实时内容审核 */
    realtime(body: RealtimeAuditForm): Promise<PlusApiResultRealtimeAuditVO>;
    /** 图片审核 */
    image(body: ImageAuditForm): Promise<PlusApiResultImageAuditVO>;
    /** 图片OCR审核 */
    imageOcr(body: ImageOcrAuditForm): Promise<PlusApiResultImageOcrAuditVO>;
    /** 批量图片审核 */
    batchAuditImage(body: BatchImageAuditForm): Promise<PlusApiResultBatchImageAuditVO>;
    /** 综合内容审核 */
    content(body: ContentAuditForm): Promise<PlusApiResultContentAuditVO>;
    /** 音频审核 */
    audio(body: AudioAuditForm): Promise<PlusApiResultAudioAuditVO>;
    /** 语音审核 */
    audioAsr(body: AudioAsrAuditForm): Promise<PlusApiResultAudioAsrAuditVO>;
    /** 敏感词库 */
    listSensitiveWord(): Promise<PlusApiResultListSensitiveWordListVO>;
    /** 视频审核状态 */
    getVideoAuditStatus(taskId: string | number): Promise<PlusApiResultVideoAuditStatusVO>;
    /** 审核记录 */
    listAuditRecords(params?: QueryParams): Promise<PlusApiResultPageAuditRecordVO>;
    /** 审核记录详情 */
    getAuditRecord(recordId: string | number): Promise<PlusApiResultAuditRecordDetailVO>;
    /** 审核策略 */
    listAuditPolicies(): Promise<PlusApiResultListAuditPolicyVO>;
    /** 我的审核记录 */
    listMyAuditRecords(params?: QueryParams): Promise<PlusApiResultPageAuditRecordVO>;
    /** 申诉记录 */
    listAppeals(): Promise<PlusApiResultPageAuditAppealVO>;
    /** 申诉状态 */
    getAppealStatus(appealId: string | number): Promise<PlusApiResultAuditAppealStatusVO>;
}
export declare function createAuditApi(client: HttpClient): AuditApi;
//# sourceMappingURL=audit.d.ts.map