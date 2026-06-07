export interface PromptCreateForm {
    title: string;
    content: string;
    type: 'DEFAULT' | 'SYSTEM' | 'ASSISTANT' | 'USER';
    bizType: 'DEFAULT' | 'TEXT' | 'IMAGE' | 'VIDEO' | 'AUDIO' | 'MUSIC' | 'AGENT' | 'VOICE_CLONE_WORDS';
    description?: string;
    cateId?: number;
    sort?: number;
    parameters?: Record<string, unknown>;
    model?: string;
    isPublic?: boolean;
}
//# sourceMappingURL=prompt-create-form.d.ts.map