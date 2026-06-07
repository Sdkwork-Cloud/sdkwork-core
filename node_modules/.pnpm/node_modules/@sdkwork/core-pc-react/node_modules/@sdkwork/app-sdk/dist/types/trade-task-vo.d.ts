export interface TradeTaskVO {
    taskId?: string;
    taskNo?: string;
    taskType?: string;
    title?: string;
    description?: string;
    requirements?: string[];
    budget?: number;
    deadline?: string;
    status?: string;
    publisherId?: string;
    publisherName?: string;
    acceptorId?: string;
    acceptorName?: string;
    progress?: number;
    progressMessage?: string;
    tags?: string[];
    difficulty?: 'EASY' | 'MEDIUM' | 'HARD' | 'EXPERT';
    estimatedDuration?: number;
    acceptedAt?: string;
    submittedAt?: string;
    approvedAt?: string;
    cancelledAt?: string;
    createdAt?: string;
    updatedAt?: string;
}
//# sourceMappingURL=trade-task-vo.d.ts.map