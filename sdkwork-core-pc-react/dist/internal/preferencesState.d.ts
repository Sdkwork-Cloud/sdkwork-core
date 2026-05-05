import { PcReactResolvedShellPreferences, PcReactShellPreferences } from './contracts';
export declare function getPcReactShellPreferencesVersion(): number;
export declare function readPcReactShellPreferences(): PcReactShellPreferences;
export declare function persistPcReactShellPreferences(patch: Partial<PcReactShellPreferences>): PcReactShellPreferences;
export declare function clearPcReactShellPreferences(): void;
export declare function resolvePcReactShellPreferences(options?: {
    documentLanguage?: string;
    navigatorLanguage?: string;
    prefersDark?: boolean;
}): PcReactResolvedShellPreferences;
export declare function subscribePcReactShellPreferences(listener: () => void): () => void;
//# sourceMappingURL=preferencesState.d.ts.map