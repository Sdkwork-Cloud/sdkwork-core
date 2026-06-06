import { NoteBatchOperationRequest } from './note-batch-operation-request';
export interface NoteBatchUpdateRequest {
    requests: NoteBatchOperationRequest[];
    expectedVersionId?: string;
    strict?: boolean;
}
//# sourceMappingURL=note-batch-update-request.d.ts.map