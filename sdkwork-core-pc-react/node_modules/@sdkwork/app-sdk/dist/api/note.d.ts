import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { NoteBatchUpdateRequest, NoteContentUpdateRequest, NoteCopyRequest, NoteCreateRequest, NoteFolderCreateRequest, NoteFolderUpdateRequest, NoteMoveRequest, NoteUpdateRequest, PlusApiResultListNoteFolderVO, PlusApiResultNoteBatchUpdateResultVO, PlusApiResultNoteContentVO, PlusApiResultNoteFolderVO, PlusApiResultNoteOperationVO, PlusApiResultNoteStatisticsVO, PlusApiResultNoteVO, PlusApiResultPageNoteVO, PlusApiResultVoid } from '../types';
export declare class NoteApi {
    private client;
    constructor(client: HttpClient);
    /** Notes API */
    getNoteDetail(noteId: string | number): Promise<PlusApiResultNoteVO>;
    /** Notes API */
    updateNote(noteId: string | number, body: NoteUpdateRequest): Promise<PlusApiResultNoteOperationVO>;
    /** Notes API */
    deleteNote(noteId: string | number): Promise<PlusApiResultVoid>;
    /** Notes API */
    restore(noteId: string | number): Promise<PlusApiResultNoteOperationVO>;
    /** Notes API */
    move(noteId: string | number, body: NoteMoveRequest): Promise<PlusApiResultNoteOperationVO>;
    /** Notes API */
    getNoteContent(noteId: string | number): Promise<PlusApiResultNoteContentVO>;
    /** Notes API */
    updateNoteContent(noteId: string | number, body: NoteContentUpdateRequest): Promise<PlusApiResultNoteContentVO>;
    /** Notes API */
    archive(noteId: string | number): Promise<PlusApiResultNoteOperationVO>;
    /** Notes API */
    updateFolder(folderId: string | number, body: NoteFolderUpdateRequest): Promise<PlusApiResultNoteFolderVO>;
    /** Notes API */
    deleteFolder(folderId: string | number): Promise<PlusApiResultNoteOperationVO>;
    /** Notes API */
    listNotes(params?: QueryParams): Promise<PlusApiResultPageNoteVO>;
    /** Notes API */
    createNote(body: NoteCreateRequest): Promise<PlusApiResultNoteOperationVO>;
    /** Notes API */
    favorite(noteId: string | number): Promise<PlusApiResultNoteOperationVO>;
    /** Notes API */
    unfavorite(noteId: string | number): Promise<PlusApiResultNoteOperationVO>;
    /** Notes API */
    copy(noteId: string | number, body: NoteCopyRequest): Promise<PlusApiResultNoteOperationVO>;
    /** Notes API */
    batchUpdate(noteId: string | number, body: NoteBatchUpdateRequest): Promise<PlusApiResultNoteBatchUpdateResultVO>;
    /** Notes API */
    createBatchUpdate(noteId: string | number, body: NoteBatchUpdateRequest): Promise<PlusApiResultNoteBatchUpdateResultVO>;
    /** Notes API */
    listFolders(): Promise<PlusApiResultListNoteFolderVO>;
    /** Notes API */
    createFolder(body: NoteFolderCreateRequest): Promise<PlusApiResultNoteFolderVO>;
    /** Notes API */
    getNoteStatistics(): Promise<PlusApiResultNoteStatisticsVO>;
    /** Notes API */
    permanentlyDelete(noteId: string | number): Promise<PlusApiResultNoteOperationVO>;
    /** Notes API */
    clearTrash(): Promise<PlusApiResultNoteOperationVO>;
    /** Notes API */
    batchDeleteNotes(): Promise<PlusApiResultNoteOperationVO>;
    /** Notes API */
    deleteBatchNotes(): Promise<PlusApiResultNoteOperationVO>;
}
export declare function createNoteApi(client: HttpClient): NoteApi;
//# sourceMappingURL=note.d.ts.map