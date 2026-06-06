/** 待办事项响应 */
export interface TodoItemVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 待办事项ID */
    id?: string;
    /** 待办事项标题 */
    title?: string;
    /** 待办事项描述 */
    description?: string;
    /** 待办事项状态：pending/in_progress/completed */
    status?: string;
    /** 待办事项优先级：low/medium/high */
    priority?: string;
    /** 待办事项截止时间 */
    dueDate?: string;
    /** 待办事项创建时间 */
    createTime?: string;
    /** 待办事项更新时间 */
    updateTime?: string;
    /** 待办事项完成时间 */
    completedAt?: string;
    /** 待办事项创建者 */
    creator?: string;
    /** 待办事项负责人 */
    assignee?: string;
    /** 待办事项关联资源ID */
    resourceId?: string;
    /** 待办事项关联资源类型 */
    resourceType?: string;
    /** 待办事项标签 */
    tags?: string[];
    /** 待办事项进度 */
    progress?: number;
    /** 待办事项提醒时间 */
    reminderTime?: string;
}
//# sourceMappingURL=todo-item-vo.d.ts.map