import { AssetMediaResource } from './asset-media-resource';
export interface AudioGenerationForm {
    title?: string;
    prompt?: string;
    negativePrompt?: string;
    model?: string;
    channel?: string;
    referenceAssets?: AssetMediaResource[];
    n?: number;
    seed?: number;
    async?: boolean;
    callbackUrl?: string;
    extraParams?: Record<string, unknown>;
    routingStrategy?: string;
    routingProduct?: string;
    routingProvider?: string;
    providerParams?: Record<string, unknown>;
    idempotencyKey?: string;
    bizScene?: string;
    bizId?: number;
    conversationId?: number;
    messageId?: number;
    text?: string;
    voice?: string;
    language?: string;
    speed?: number;
    pitch?: number;
    volume?: number;
    format?: string;
    emotion?: string;
    type?: 'DEFAULT' | 'IMAGE' | 'VIDEO' | 'SPEECH' | 'MUSIC' | 'MODEL_3D' | 'CODE' | 'DOCUMENT' | 'PPT' | 'VIDEO_AUTO_SLICE' | 'VOICE_SPEAKER' | 'CHARACTER' | 'AUDIO_EFFECT' | 'FILM' | 'OTHER';
    referenceAssetCount?: number;
}
//# sourceMappingURL=audio-generation-form.d.ts.map