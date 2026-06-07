/** 说话人生成响应 */
export interface VoiceSpeakerGenerationVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 任务ID */
    taskId?: string;
    /** 说话人ID */
    speakerId?: string;
    /** 说话人名称 */
    speakerName?: string;
    /** 说话人描述 */
    description?: string;
    /** 预览音频URL */
    previewAudioUrl?: string;
    /** 性别 */
    gender?: string;
    /** 年龄范围 */
    ageRange?: string;
    /** 语言 */
    language?: string;
    /** 风格 */
    style?: string;
    /** 状态 */
    status?: string;
    /** 是否收藏 */
    favorite?: boolean;
    /** 完成时间 */
    completedAt?: string;
}
//# sourceMappingURL=voice-speaker-generation-vo.d.ts.map