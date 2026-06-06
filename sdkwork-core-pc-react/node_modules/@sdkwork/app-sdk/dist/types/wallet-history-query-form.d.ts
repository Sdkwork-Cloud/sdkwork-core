export interface WalletHistoryQueryForm {
    startDate?: string;
    endDate?: string;
    status?: string;
    transactionType?: string;
    pageNum?: number;
    pageSize?: number;
    sortDirection?: string;
    sortField?: string;
    accountType: 'DEFAULT' | 'CASH' | 'POINTS' | 'TOKEN';
}
//# sourceMappingURL=wallet-history-query-form.d.ts.map