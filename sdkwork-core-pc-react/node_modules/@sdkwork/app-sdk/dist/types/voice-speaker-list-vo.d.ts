import { VoiceSpeakerItem } from './voice-speaker-item';
/** 说话人列表响应 */
export interface VoiceSpeakerListVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 说话人列表 */
    speakers?: VoiceSpeakerItem[];
    /** 总数量 */
    total?: number;
    /** 页面 */
    page?: number;
    /** 每页大小 */
    size?: number;
}
//# sourceMappingURL=voice-speaker-list-vo.d.ts.map