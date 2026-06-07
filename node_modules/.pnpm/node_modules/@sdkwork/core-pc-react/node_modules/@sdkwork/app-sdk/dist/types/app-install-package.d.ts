/** 应用安装包定义 */
export interface AppInstallPackage {
    /** 安装包ID */
    id?: string;
    /** 安装包名称 */
    name?: string;
    /** 安装来源类型 */
    sourceType?: 'GIT_REPOSITORY' | 'BINARY_URL' | 'APP_STORE' | 'CONTAINER_IMAGE' | 'MINI_PROGRAM' | 'WEB_URL' | 'SCRIPT';
    /** 安装包格式 */
    packageFormat?: 'SOURCE_CODE' | 'JAR' | 'WAR' | 'ZIP' | 'TAR_GZ' | 'APK' | 'IPA' | 'EXE' | 'MSI' | 'DMG' | 'APPIMAGE' | 'DEB' | 'RPM' | 'DOCKER_IMAGE' | 'MINI_PROGRAM_PACKAGE' | 'OTHER';
    /** 目标平台 */
    platform?: 'UNKNOWN' | 'DEFAULT' | 'H5' | 'H5_WEIXIN' | 'WEB' | 'APP' | 'APP_PLUS' | 'APP_IOS' | 'APP_ANDROID' | 'APP_HARMONY' | 'DESKTOP' | 'DESKTOP_WINDOWS' | 'DESKTOP_MACOS' | 'DESKTOP_LINUX' | 'MP' | 'MP_WEIXIN' | 'MP_ALIPAY' | 'MP_BAIDU' | 'MP_TOUTIAO' | 'MP_LARK' | 'MP_QQ' | 'MP_KUAISHOU' | 'MP_JD' | 'MP_360' | 'MP_DINGTALK' | 'MP_ALI' | 'MP_WEIXIN_GAME' | 'MP_QQ_GAME' | 'MP_BAIDU_GAME' | 'MP_TOUTIAO_GAME' | 'QUICKAPP' | 'QUICKAPP_WEBVIEW' | 'QUICKAPP_WEBVIEW_UNION' | 'QUICKAPP_WEBVIEW_HUAWEI' | 'ADMIN' | 'CLI' | 'API' | 'OTHER';
    /** 安装资源URL */
    url?: string;
    /** Git仓库地址 */
    repositoryUrl?: string;
    /** Git分支 */
    branch?: string;
    /** Git标签 */
    tag?: string;
    /** Git提交ID */
    commitId?: string;
    /** 校验算法 */
    checksumAlgorithm?: string;
    /** 校验值 */
    checksum?: string;
    /** CPU架构 */
    architecture?: string;
    /** 文件大小（字节） */
    sizeBytes?: number;
    /** 是否启用 */
    enabled?: boolean;
}
//# sourceMappingURL=app-install-package.d.ts.map