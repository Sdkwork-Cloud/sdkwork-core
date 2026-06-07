/** 用户地址响应 */
export interface UserAddressVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 地址ID */
    id?: number;
    /** 收货人姓名 */
    name?: string;
    /** 收货人手机号 */
    phone?: string;
    /** 国家代码 */
    countryCode?: string;
    /** 省份代码 */
    provinceCode?: string;
    /** 城市代码 */
    cityCode?: string;
    /** 区县代码 */
    districtCode?: string;
    /** 详细地址 */
    addressDetail?: string;
    /** 邮政编码 */
    postalCode?: string;
    /** 是否默认地址 */
    isDefault?: boolean;
    /** 完整地址 */
    fullAddress?: string;
}
//# sourceMappingURL=user-address-vo.d.ts.map