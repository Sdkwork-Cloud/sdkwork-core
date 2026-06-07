import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { PlusApiResultHistoryVO, PlusApiResultListWalletAssetAccountVO, PlusApiResultPageHistoryVO, PlusApiResultWalletOperationResultVO, PlusApiResultWalletOperationStatusVO, PlusApiResultWalletOverviewVO, WalletExchangeForm, WalletTopupForm, WalletTransferForm, WalletWithdrawalForm } from '../types';
export declare class WalletApi {
    private client;
    constructor(client: HttpClient);
    /** Withdraw from wallet */
    withdraw(body: WalletWithdrawalForm): Promise<PlusApiResultWalletOperationResultVO>;
    /** Transfer wallet assets */
    transfer(body: WalletTransferForm): Promise<PlusApiResultWalletOperationResultVO>;
    /** Top up wallet */
    topup(body: WalletTopupForm): Promise<PlusApiResultWalletOperationResultVO>;
    /** Exchange points in wallet */
    exchange(body: WalletExchangeForm): Promise<PlusApiResultWalletOperationResultVO>;
    /** Get wallet overview */
    getOverview(): Promise<PlusApiResultWalletOverviewVO>;
    /** List wallet transactions */
    listTransactions(params?: QueryParams): Promise<PlusApiResultPageHistoryVO>;
    /** Get wallet transaction */
    getTransaction(transactionId: string | number): Promise<PlusApiResultHistoryVO>;
    /** Get wallet operation status */
    getOperationStatus(requestNo: string | number, params?: QueryParams): Promise<PlusApiResultWalletOperationStatusVO>;
    /** List wallet accounts */
    listAccounts(): Promise<PlusApiResultListWalletAssetAccountVO>;
}
export declare function createWalletApi(client: HttpClient): WalletApi;
//# sourceMappingURL=wallet.d.ts.map