import { GenerationInput } from './generation-input';
import { GenerationOutput } from './generation-output';
/** 生成任务响应 */
export interface GenerationTaskVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 任务ID */
    taskId?: string;
    /** 请求ID */
    requestId?: string;
    /** 幂等键 */
    idempotencyKey?: string;
    /** 生成类型 */
    type?: 'DEFAULT' | 'IMAGE' | 'VIDEO' | 'SPEECH' | 'MUSIC' | 'MODEL_3D' | 'CODE' | 'DOCUMENT' | 'PPT' | 'VIDEO_AUTO_SLICE' | 'VOICE_SPEAKER' | 'CHARACTER' | 'AUDIO_EFFECT' | 'FILM' | 'OTHER';
    /** 模型标识 */
    model?: string;
    /** 渠道 */
    channel?: string;
    /** 任务状态 */
    status?: 'PENDING' | 'PROCESSING' | 'SUCCESS' | 'FAILED' | 'CANCELLED';
    /** 任务进度(0-100) */
    progress?: number;
    /** 输入参数 */
    inputParams?: GenerationInput;
    /** 输出结果 */
    outputResult?: GenerationOutput;
    /** 费用 */
    cost?: number;
    /** 错误码 */
    errorCode?: string;
    /** 错误信息 */
    errorMessage?: string;
    /** 重试次数 */
    retryCount?: number;
    /** 最大重试次数 */
    maxRetry?: number;
    /** 开始时间 */
    startedAt?: string;
    /** 完成时间 */
    completedAt?: string;
    /** 会话ID */
    conversationId?: number;
    /** 消息ID */
    messageId?: number;
    /** 父任务ID */
    parentId?: number;
    /** 批次ID */
    batchId?: string;
    /** 业务场景 */
    bizScene?: string;
    /** 业务ID */
    bizId?: number;
    done?: boolean;
}
//# sourceMappingURL=generation-task-vo.d.ts.map