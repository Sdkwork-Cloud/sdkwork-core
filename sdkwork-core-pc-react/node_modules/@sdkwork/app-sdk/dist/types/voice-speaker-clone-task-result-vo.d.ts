export interface VoiceSpeakerCloneTaskResultVO {
    taskId: string;
    status: 'PENDING' | 'PROCESSING' | 'SUCCESS' | 'FAILED' | 'CANCELLED';
    progress?: number;
    /** Present when status is SUCCESS */
    speakerId?: string;
    speakerName?: string;
    previewAudioUrl?: string;
    errorCode?: string;
    errorMessage?: string;
    completedAt?: string;
}
//# sourceMappingURL=voice-speaker-clone-task-result-vo.d.ts.map