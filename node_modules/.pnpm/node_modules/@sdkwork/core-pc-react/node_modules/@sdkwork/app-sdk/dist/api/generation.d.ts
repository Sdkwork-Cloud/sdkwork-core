import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { AudioGenerationForm, AudioTranscriptionForm, AudioTranslationForm, CharacterBatchGenerationForm, CharacterGenerationForm, GenerationStyleCreateForm, GenerationStyleUpdateForm, ImageEditForm, ImageGenerationForm, ImageToVideoForm, ImageUpscaleForm, ImageVariationForm, MusicExtendForm, MusicGenerationForm, MusicRemixForm, MusicSimilarForm, PlusApiResultCharacterGenerationVO, PlusApiResultGenerationStyleDetailVO, PlusApiResultGenerationStyleVO, PlusApiResultGenerationTaskVO, PlusApiResultListGenerationTaskVO, PlusApiResultListStyleTypeVO, PlusApiResultMusicStylesVO, PlusApiResultPageCharacterListVO, PlusApiResultPageGenerationStyleVO, PlusApiResultPageGenerationTaskVO, PlusApiResultPageVoiceSpeakerListVO, PlusApiResultPromptEnhanceResponse, PlusApiResultSoundEffectCategoriesVO, PlusApiResultSoundEffectGenerationVO, PlusApiResultStyleStatisticsVO, PlusApiResultVoiceListVO, PlusApiResultVoiceSpeakerCloneTaskResultVO, PlusApiResultVoiceSpeakerGenerationVO, PlusApiResultVoid, PromptEnhanceRequest, SoundEffectGenerationForm, VideoExtendForm, VideoGenerationForm, VideoStyleTransferForm, VoiceCloneForm, VoiceSpeakerCloneForm, VoiceSpeakerCloneFromAssetForm, VoiceSpeakerGenerationForm } from '../types';
export declare class GenerationApi {
    private client;
    constructor(client: HttpClient);
    /** 获取风格详情 */
    getStyle(styleId: string | number): Promise<PlusApiResultGenerationStyleDetailVO>;
    /** 更新风格 */
    updateStyle(styleId: string | number, body: GenerationStyleUpdateForm): Promise<PlusApiResultGenerationStyleVO>;
    /** 删除风格 */
    deleteStyle(styleId: string | number): Promise<PlusApiResultVoid>;
    /** Create voice speaker task */
    createGeneration(body: VoiceSpeakerGenerationForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Clone speaker */
    cloneSpeaker(body: VoiceSpeakerCloneForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Create video task */
    createGenerationVideo(body: VideoGenerationForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Style transfer */
    styleTransfer(body: VideoStyleTransferForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Create image-to-video task */
    imageToVideo(body: ImageToVideoForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Extend video */
    extendVideo(body: VideoExtendForm): Promise<PlusApiResultGenerationTaskVO>;
    /** 创建风格 */
    createStyle(body: GenerationStyleCreateForm): Promise<PlusApiResultGenerationStyleVO>;
    /** 发布风格 */
    publishStyle(styleId: string | number): Promise<PlusApiResultVoid>;
    /** 取消发布 */
    unpublishStyle(styleId: string | number): Promise<PlusApiResultVoid>;
    /** 停用风格 */
    deactivateStyle(styleId: string | number): Promise<PlusApiResultVoid>;
    /** 激活风格 */
    activateStyle(styleId: string | number): Promise<PlusApiResultVoid>;
    /** Create sound effect task */
    createGenerationSoundEffect(body: SoundEffectGenerationForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Enhance generation prompt */
    enhanceGenerationPrompt(body: PromptEnhanceRequest): Promise<PlusApiResultPromptEnhanceResponse>;
    /** Create music task */
    createGenerationMusic(body: MusicGenerationForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Generate similar music */
    generateSimilar(body: MusicSimilarForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Remix music */
    remixMusic(body: MusicRemixForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Extend music */
    extendMusic(body: MusicExtendForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Create image task */
    createGenerationImage(body: ImageGenerationForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Create image variation */
    createVariation(body: ImageVariationForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Create image upscale */
    upscaleImage(body: ImageUpscaleForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Create image edit */
    editImage(body: ImageEditForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Create character task */
    createGenerationCharacter(body: CharacterGenerationForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Batch create character tasks */
    batchCreate(body: CharacterBatchGenerationForm): Promise<PlusApiResultListGenerationTaskVO>;
    /** Create voice clone task */
    voiceClone(body: VoiceCloneForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Create TTS task */
    textToSpeech(body: AudioGenerationForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Create translation task */
    audioTranslation(body: AudioTranslationForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Create transcription task */
    audioTranscription(body: AudioTranscriptionForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Get speaker detail */
    getSpeakerDetail(speakerId: string | number): Promise<PlusApiResultVoiceSpeakerGenerationVO>;
    /** Delete speaker */
    deleteSpeaker(speakerId: string | number): Promise<PlusApiResultVoid>;
    /** List tasks */
    getListTasks(params?: QueryParams): Promise<PlusApiResultPageGenerationTaskVO>;
    /** Get task status */
    getTaskStatus(taskId: string | number): Promise<PlusApiResultGenerationTaskVO>;
    /** Cancel task */
    deleteCancelTask(taskId: string | number): Promise<PlusApiResultVoid>;
    /** List speakers */
    listSpeakers(params?: QueryParams): Promise<PlusApiResultPageVoiceSpeakerListVO>;
    /** List tasks */
    getListTasksVideo(params?: QueryParams): Promise<PlusApiResultPageGenerationTaskVO>;
    /** Get task status */
    getTaskStatusVideo(taskId: string | number): Promise<PlusApiResultGenerationTaskVO>;
    /** Cancel task */
    deleteCancelTaskVideo(taskId: string | number): Promise<PlusApiResultVoid>;
    /** 获取风格类型列表 */
    getStyleTypes(): Promise<PlusApiResultListStyleTypeVO>;
    /** 获取风格统计 */
    getStyleStatistics(): Promise<PlusApiResultStyleStatisticsVO>;
    /** 搜索风格 */
    searchStyles(params?: QueryParams): Promise<PlusApiResultPageGenerationStyleVO>;
    /** 获取公开风格 */
    getPublicStyles(params?: QueryParams): Promise<PlusApiResultPageGenerationStyleVO>;
    /** 获取热门风格 */
    getPopularStyles(params?: QueryParams): Promise<PlusApiResultPageGenerationStyleVO>;
    /** 获取我的风格 */
    getMyStyles(params?: QueryParams): Promise<PlusApiResultPageGenerationStyleVO>;
    /** Get sound effect detail */
    getEffectDetail(effectId: string | number): Promise<PlusApiResultSoundEffectGenerationVO>;
    /** List tasks */
    getListTasksSoundEffect(params?: QueryParams): Promise<PlusApiResultPageGenerationTaskVO>;
    /** Get task status */
    getTaskStatusSoundEffect(taskId: string | number): Promise<PlusApiResultGenerationTaskVO>;
    /** Cancel task */
    deleteCancelTaskSoundEffect(taskId: string | number): Promise<PlusApiResultVoid>;
    /** Get sound effect categories */
    getCategories(params?: QueryParams): Promise<PlusApiResultSoundEffectCategoriesVO>;
    /** List tasks */
    getListTasksMusic(params?: QueryParams): Promise<PlusApiResultPageGenerationTaskVO>;
    /** Get task status */
    getTaskStatusMusic(taskId: string | number): Promise<PlusApiResultGenerationTaskVO>;
    /** Cancel task */
    deleteCancelTaskMusic(taskId: string | number): Promise<PlusApiResultVoid>;
    /** Get music styles */
    getMusicStyles(params?: QueryParams): Promise<PlusApiResultMusicStylesVO>;
    /** List tasks */
    getListTasksImage(params?: QueryParams): Promise<PlusApiResultPageGenerationTaskVO>;
    /** Get task status */
    getTaskStatusImage(taskId: string | number): Promise<PlusApiResultGenerationTaskVO>;
    /** Cancel task */
    deleteCancelTaskImage(taskId: string | number): Promise<PlusApiResultVoid>;
    /** Get character detail */
    getCharacterDetail(characterId: string | number): Promise<PlusApiResultCharacterGenerationVO>;
    /** List tasks */
    getListTasksCharacter(params?: QueryParams): Promise<PlusApiResultPageGenerationTaskVO>;
    /** Get task status */
    getTaskStatusCharacter(taskId: string | number): Promise<PlusApiResultGenerationTaskVO>;
    /** Cancel task */
    deleteCancelTaskCharacter(taskId: string | number): Promise<PlusApiResultVoid>;
    /** List characters */
    listCharacters(params?: QueryParams): Promise<PlusApiResultPageCharacterListVO>;
    /** Get voice list */
    getVoiceList(params?: QueryParams): Promise<PlusApiResultVoiceListVO>;
    /** Get transcription task */
    getTranscriptionResult(taskId: string | number): Promise<PlusApiResultGenerationTaskVO>;
    /** List tasks */
    getListTasksAudio(params?: QueryParams): Promise<PlusApiResultPageGenerationTaskVO>;
    /** Get task status */
    getTaskStatusAudio(taskId: string | number): Promise<PlusApiResultGenerationTaskVO>;
    /** Cancel task */
    deleteCancelTaskAudio(taskId: string | number): Promise<PlusApiResultVoid>;
    /** Clone voice speaker from workspace asset */
    cloneFromAsset(body: VoiceSpeakerCloneFromAssetForm): Promise<PlusApiResultGenerationTaskVO>;
    /** Get deterministic clone task result */
    getCloneTaskResult(taskId: string | number): Promise<PlusApiResultVoiceSpeakerCloneTaskResultVO>;
}
export declare function createGenerationApi(client: HttpClient): GenerationApi;
//# sourceMappingURL=generation.d.ts.map