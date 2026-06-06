import { BillingPrecheckResult } from './billing-precheck-result';
import { BillingQuote } from './billing-quote';
export interface BillingPreholdResult {
    userId?: number;
    requestNo?: string;
    status?: 'PRECHECKED' | 'HELD' | 'SETTLED' | 'RELEASED';
    quote?: BillingQuote;
    precheck?: BillingPrecheckResult;
    heldPoints?: number;
    heldTokens?: number;
    settledPoints?: number;
    settledTokens?: number;
    releasedPoints?: number;
    releasedTokens?: number;
    pointHoldTransactionId?: string;
    tokenHoldTransactionId?: string;
    operatedAt?: string;
    message?: string;
}
//# sourceMappingURL=billing-prehold-result.d.ts.map