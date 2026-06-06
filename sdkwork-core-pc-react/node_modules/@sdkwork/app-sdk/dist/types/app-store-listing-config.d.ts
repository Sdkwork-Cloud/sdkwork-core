/** 应用商店发布配置 */
export interface AppStoreListingConfig {
    /** 商店平台 */
    platform?: 'APPLE_APP_STORE' | 'GOOGLE_PLAY';
    /** 商店中的应用ID */
    storeAppId?: string;
    /** Android 包名 */
    packageName?: string;
    /** iOS Bundle ID */
    bundleId?: string;
    /** 发布轨道 */
    releaseTrack?: 'INTERNAL' | 'ALPHA' | 'BETA' | 'PRODUCTION';
    /** 隐私政策URL */
    privacyPolicyUrl?: string;
    /** 服务条款URL */
    termsOfServiceUrl?: string;
    /** 支持页URL */
    supportUrl?: string;
    /** 支持邮箱 */
    supportEmail?: string;
    /** 营销页URL */
    marketingUrl?: string;
    /** 主分类 */
    category?: string;
    /** 子分类 */
    subcategory?: string;
    /** 内容分级 */
    contentRating?: string;
    /** 语言列表 */
    languages?: string[];
    /** 国家/地区列表 */
    countries?: string[];
    /** 应用截图URL列表 */
    screenshotUrls?: string[];
}
//# sourceMappingURL=app-store-listing-config.d.ts.map