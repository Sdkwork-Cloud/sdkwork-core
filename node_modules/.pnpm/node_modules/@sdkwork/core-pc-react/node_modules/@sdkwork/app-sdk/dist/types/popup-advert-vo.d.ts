/** 弹窗广告VO */
export interface PopupAdvertVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 广告ID */
    advertId?: string;
    /** 广告名称 */
    advertName?: string;
    /** 广告类型 */
    advertType?: string;
    /** 广告位ID */
    positionId?: string;
    /** 创意URL */
    creativeUrl?: string;
    /** 落地页URL */
    landingUrl?: string;
    /** 优先级 */
    priority?: number;
    /** 是否启用 */
    enabled?: boolean;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 点击次数 */
    clickCount?: number;
    /** 展示次数 */
    impressionCount?: number;
    /** 弹窗尺寸 */
    popupSize?: string;
    /** 显示时长 */
    displayDuration?: number;
    /** 是否启用关闭按钮 */
    closeButtonEnabled?: boolean;
    /** 弹窗位置 */
    popupPosition?: string;
}
//# sourceMappingURL=popup-advert-vo.d.ts.map