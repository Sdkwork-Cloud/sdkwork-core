import { BillingQuote } from './billing-quote';
export interface BillingPrecheckResult {
    userId?: number;
    quote?: BillingQuote;
    requiredPoints?: number;
    requiredTokens?: number;
    availablePoints?: number;
    availableTokens?: number;
    frozenPoints?: number;
    frozenTokens?: number;
    missingPoints?: number;
    missingTokens?: number;
    passed?: boolean;
    fallbackApplied?: boolean;
    message?: string;
}
//# sourceMappingURL=billing-precheck-result.d.ts.map