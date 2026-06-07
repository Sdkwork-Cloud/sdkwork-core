/** 笔记操作响应 */
export interface NoteOperationVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 操作是否成功 */
    success?: boolean;
    /** 笔记ID */
    noteId?: number;
    /** 笔记UUID */
    uuid?: string;
    /** 笔记标题 */
    title?: string;
    /** 操作类型 */
    operationType?: string;
    /** 操作时间 */
    operationTime?: string;
    /** 操作消息 */
    message?: string;
}
//# sourceMappingURL=note-operation-vo.d.ts.map