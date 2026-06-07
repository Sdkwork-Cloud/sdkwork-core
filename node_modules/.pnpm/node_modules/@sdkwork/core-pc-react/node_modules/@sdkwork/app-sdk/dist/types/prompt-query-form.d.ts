export interface PromptQueryForm {
    keyword?: string;
    type?: 'DEFAULT' | 'SYSTEM' | 'ASSISTANT' | 'USER';
    bizType?: 'DEFAULT' | 'TEXT' | 'IMAGE' | 'VIDEO' | 'AUDIO' | 'MUSIC' | 'AGENT' | 'VOICE_CLONE_WORDS';
    enabled?: boolean;
    model?: string;
    isPublic?: boolean;
    isFavorite?: boolean;
    page?: number;
    size?: number;
    sortBy?: string;
    sortDirection?: string;
}
//# sourceMappingURL=prompt-query-form.d.ts.map