/** 路径步骤VO */
export interface PathStepVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 页面URL */
    pageUrl?: string;
    /** 页面标题 */
    pageTitle?: string;
    /** 用户数量 */
    userCount?: number;
    /** 占比 */
    percentage?: number;
    /** 下一步骤 */
    nextSteps?: PathStepVO[];
}
//# sourceMappingURL=path-step-vo.d.ts.map