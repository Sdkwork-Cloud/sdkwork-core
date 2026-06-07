import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { DocumentBatchUpdateRequest, DocumentContentUpdateRequest, DocumentCopyRequest, DocumentCreateRequest, DocumentUpdateRequest, PlusApiResultDocumentBatchUpdateResultVO, PlusApiResultDocumentContentVO, PlusApiResultDocumentDetailVO, PlusApiResultDocumentOperationVO, PlusApiResultPageDocumentVO, PlusApiResultVoid } from '../types';
export declare class KnowledgeBaseApi {
    private client;
    constructor(client: HttpClient);
    /** Restore knowledge document */
    restoreKnowledgeDocument(knowledgeBaseId: string | number, documentId: string | number): Promise<PlusApiResultDocumentOperationVO>;
    /** Restore knowledge document */
    updateRestoreKnowledgeDocument(knowledgeBaseId: string | number, documentId: string | number): Promise<PlusApiResultDocumentOperationVO>;
    /** Get knowledge document content */
    getKnowledgeDocumentContent(knowledgeBaseId: string | number, documentId: string | number): Promise<PlusApiResultDocumentContentVO>;
    /** Update knowledge document content */
    updateKnowledgeDocumentContent(knowledgeBaseId: string | number, documentId: string | number, body: DocumentContentUpdateRequest): Promise<PlusApiResultDocumentContentVO>;
    /** Get knowledge document content */
    getKnowledgeDocumentContentKnowledgeBase(knowledgeBaseId: string | number, documentId: string | number): Promise<PlusApiResultDocumentContentVO>;
    /** Update knowledge document content */
    updateKnowledgeDocumentContentKnowledgeBase(knowledgeBaseId: string | number, documentId: string | number, body: DocumentContentUpdateRequest): Promise<PlusApiResultDocumentContentVO>;
    /** Archive knowledge document */
    archiveKnowledgeDocument(knowledgeBaseId: string | number, documentId: string | number): Promise<PlusApiResultDocumentOperationVO>;
    /** Archive knowledge document */
    updateArchiveKnowledgeDocument(knowledgeBaseId: string | number, documentId: string | number): Promise<PlusApiResultDocumentOperationVO>;
    /** Get knowledge document detail */
    getKnowledgeDocumentDetail(knowledgeBaseId: string | number, documentId: string | number): Promise<PlusApiResultDocumentDetailVO>;
    /** Update knowledge document metadata */
    updateKnowledgeDocument(knowledgeBaseId: string | number, documentId: string | number, body: DocumentUpdateRequest): Promise<PlusApiResultDocumentOperationVO>;
    /** Delete knowledge document */
    deleteKnowledgeDocument(knowledgeBaseId: string | number, documentId: string | number): Promise<PlusApiResultVoid>;
    /** Get knowledge document detail */
    getKnowledgeDocumentDetailKnowledgeBase(knowledgeBaseId: string | number, documentId: string | number): Promise<PlusApiResultDocumentDetailVO>;
    /** Update knowledge document metadata */
    updateKnowledgeDocumentKnowledgeBase(knowledgeBaseId: string | number, documentId: string | number, body: DocumentUpdateRequest): Promise<PlusApiResultDocumentOperationVO>;
    /** Delete knowledge document */
    deleteKnowledgeDocumentKnowledgeBase(knowledgeBaseId: string | number, documentId: string | number): Promise<PlusApiResultVoid>;
    /** Favorite knowledge document */
    favoriteKnowledgeDocument(knowledgeBaseId: string | number, documentId: string | number): Promise<PlusApiResultDocumentOperationVO>;
    /** Unfavorite knowledge document */
    unfavoriteKnowledgeDocument(knowledgeBaseId: string | number, documentId: string | number): Promise<PlusApiResultDocumentOperationVO>;
    /** Favorite knowledge document */
    createFavoriteKnowledgeDocument(knowledgeBaseId: string | number, documentId: string | number): Promise<PlusApiResultDocumentOperationVO>;
    /** Unfavorite knowledge document */
    deleteUnfavoriteKnowledgeDocument(knowledgeBaseId: string | number, documentId: string | number): Promise<PlusApiResultDocumentOperationVO>;
    /** Copy knowledge document */
    copyKnowledgeDocument(knowledgeBaseId: string | number, documentId: string | number, body: DocumentCopyRequest): Promise<PlusApiResultDocumentOperationVO>;
    /** Copy knowledge document */
    createCopyKnowledgeDocument(knowledgeBaseId: string | number, documentId: string | number, body: DocumentCopyRequest): Promise<PlusApiResultDocumentOperationVO>;
    /** Batch update knowledge document */
    batchUpdateKnowledgeDocument(knowledgeBaseId: string | number, documentId: string | number, body: DocumentBatchUpdateRequest): Promise<PlusApiResultDocumentBatchUpdateResultVO>;
    /** Batch update knowledge document */
    createBatchUpdateKnowledgeDocument(knowledgeBaseId: string | number, documentId: string | number, body: DocumentBatchUpdateRequest): Promise<PlusApiResultDocumentBatchUpdateResultVO>;
    /** Batch update knowledge document */
    createBatchUpdateKnowledgeDocumentDocumentIdBatchUpdate(knowledgeBaseId: string | number, documentId: string | number, body: DocumentBatchUpdateRequest): Promise<PlusApiResultDocumentBatchUpdateResultVO>;
    /** Batch update knowledge document */
    createBatchUpdateKnowledgeDocumentBatchUpdate(knowledgeBaseId: string | number, documentId: string | number, body: DocumentBatchUpdateRequest): Promise<PlusApiResultDocumentBatchUpdateResultVO>;
    /** List knowledge documents */
    listKnowledgeDocuments(knowledgeBaseId: string | number, params?: QueryParams): Promise<PlusApiResultPageDocumentVO>;
    /** Create knowledge document */
    createKnowledgeDocument(knowledgeBaseId: string | number, body: DocumentCreateRequest): Promise<PlusApiResultDocumentOperationVO>;
    /** List knowledge documents */
    getListKnowledgeDocuments(knowledgeBaseId: string | number, params?: QueryParams): Promise<PlusApiResultPageDocumentVO>;
    /** Create knowledge document */
    createKnowledgeDocumentKnowledgeBase(knowledgeBaseId: string | number, body: DocumentCreateRequest): Promise<PlusApiResultDocumentOperationVO>;
    /** Batch delete knowledge documents */
    batchDeleteKnowledgeDocuments(knowledgeBaseId: string | number): Promise<PlusApiResultDocumentOperationVO>;
    /** Batch delete knowledge documents */
    deleteBatchKnowledgeDocuments(knowledgeBaseId: string | number): Promise<PlusApiResultDocumentOperationVO>;
    /** Batch delete knowledge documents */
    deleteBatchKnowledgeDocumentsBatchDelete(knowledgeBaseId: string | number): Promise<PlusApiResultDocumentOperationVO>;
    /** Batch delete knowledge documents */
    deleteBatchKnowledgeDocumentsKnowledgeBases(knowledgeBaseId: string | number): Promise<PlusApiResultDocumentOperationVO>;
}
export declare function createKnowledgeBaseApi(client: HttpClient): KnowledgeBaseApi;
//# sourceMappingURL=knowledge-base.d.ts.map