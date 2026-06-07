import { AppInstallPackage } from './app-install-package';
/** 应用安装配置 */
export interface AppInstallConfig {
    /** 安装包列表 */
    packages?: AppInstallPackage[];
    /** 默认安装包ID */
    defaultPackageId?: string;
    /** 安装命令模板 */
    installCommand?: string;
    /** 启动命令模板 */
    launchCommand?: string;
    /** 卸载命令模板 */
    uninstallCommand?: string;
    /** 扩展元数据 */
    metadata?: Record<string, unknown>;
}
//# sourceMappingURL=app-install-config.d.ts.map