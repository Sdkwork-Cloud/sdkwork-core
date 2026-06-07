/** 音效生成响应 */
export interface SoundEffectGenerationVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 任务ID */
    taskId?: string;
    /** 音效ID */
    soundEffectId?: string;
    /** 音效名称 */
    name?: string;
    /** 音效描述 */
    description?: string;
    /** 音效URL */
    audioUrl?: string;
    /** 波形图URL */
    waveformUrl?: string;
    /** 类别 */
    category?: string;
    /** 时长(秒) */
    duration?: number;
    /** 状态 */
    status?: string;
    /** 完成时间 */
    completedAt?: string;
}
//# sourceMappingURL=sound-effect-generation-vo.d.ts.map