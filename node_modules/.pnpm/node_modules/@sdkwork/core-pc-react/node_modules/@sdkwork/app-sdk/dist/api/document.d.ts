import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { DocumentBatchUpdateRequest, DocumentContentUpdateRequest, DocumentCopyRequest, DocumentCreateRequest, DocumentUpdateRequest, PlusApiResultDocumentBatchUpdateResultVO, PlusApiResultDocumentContentVO, PlusApiResultDocumentDetailVO, PlusApiResultDocumentOperationVO, PlusApiResultPageDocumentVO, PlusApiResultVoid } from '../types';
export declare class DocumentApi {
    private client;
    constructor(client: HttpClient);
    /** Get document detail */
    getDocumentDetail(documentId: string | number): Promise<PlusApiResultDocumentDetailVO>;
    /** Update document metadata */
    updateDocument(documentId: string | number, body: DocumentUpdateRequest): Promise<PlusApiResultDocumentOperationVO>;
    /** Delete document */
    deleteDocument(documentId: string | number): Promise<PlusApiResultVoid>;
    /** Restore document */
    restore(documentId: string | number): Promise<PlusApiResultDocumentOperationVO>;
    /** Get document content */
    getDocumentContent(documentId: string | number): Promise<PlusApiResultDocumentContentVO>;
    /** Update document content */
    updateDocumentContent(documentId: string | number, body: DocumentContentUpdateRequest): Promise<PlusApiResultDocumentContentVO>;
    /** Archive document */
    archive(documentId: string | number): Promise<PlusApiResultDocumentOperationVO>;
    /** List documents */
    listDocuments(params?: QueryParams): Promise<PlusApiResultPageDocumentVO>;
    /** Create document */
    createDocument(body: DocumentCreateRequest): Promise<PlusApiResultDocumentOperationVO>;
    /** Favorite document */
    favorite(documentId: string | number): Promise<PlusApiResultDocumentOperationVO>;
    /** Unfavorite document */
    unfavorite(documentId: string | number): Promise<PlusApiResultDocumentOperationVO>;
    /** Copy document */
    copy(documentId: string | number, body: DocumentCopyRequest): Promise<PlusApiResultDocumentOperationVO>;
    /** Batch update document */
    batchUpdate(documentId: string | number, body: DocumentBatchUpdateRequest): Promise<PlusApiResultDocumentBatchUpdateResultVO>;
    /** Batch update document */
    createBatchUpdate(documentId: string | number, body: DocumentBatchUpdateRequest): Promise<PlusApiResultDocumentBatchUpdateResultVO>;
    /** Batch delete documents */
    batchDeleteDocuments(): Promise<PlusApiResultDocumentOperationVO>;
    /** Batch delete documents */
    deleteBatchDocuments(): Promise<PlusApiResultDocumentOperationVO>;
}
export declare function createDocumentApi(client: HttpClient): DocumentApi;
//# sourceMappingURL=document.d.ts.map