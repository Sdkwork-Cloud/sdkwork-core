import { AssetMediaResource } from './asset-media-resource';
export interface ImageToVideoForm {
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
    width?: number;
    height?: number;
    duration?: number;
    format?: string;
    cameraMotion?: string;
    type?: 'DEFAULT' | 'IMAGE' | 'VIDEO' | 'SPEECH' | 'MUSIC' | 'MODEL_3D' | 'CODE' | 'DOCUMENT' | 'PPT' | 'VIDEO_AUTO_SLICE' | 'VOICE_SPEAKER' | 'CHARACTER' | 'AUDIO_EFFECT' | 'FILM' | 'OTHER';
    referenceAssetCount?: number;
}
//# sourceMappingURL=image-to-video-form.d.ts.map