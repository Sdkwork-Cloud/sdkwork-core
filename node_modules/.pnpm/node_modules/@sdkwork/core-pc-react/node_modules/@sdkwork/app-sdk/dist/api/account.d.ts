import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { CashRechargeForm, CashTransferForm, CashWithdrawForm, PlusApiResultAccountSummaryVO, PlusApiResultBigDecimal, PlusApiResultCashAccountInfoVO, PlusApiResultCashRechargeVO, PlusApiResultCashTransferVO, PlusApiResultCashWithdrawVO, PlusApiResultPageHistoryVO, PlusApiResultPointsAccountInfoVO, PlusApiResultPointsExchangeVO, PlusApiResultPointsRechargeVO, PlusApiResultPointsTransferVO, PointsExchangeForm, PointsRechargeForm, PointsTransferForm } from '../types';
export declare class AccountApi {
    private client;
    constructor(client: HttpClient);
    /** Transfer points */
    createTransfer(body: PointsTransferForm): Promise<PlusApiResultPointsTransferVO>;
    /** Deduct tokens */
    deductToken(params?: QueryParams): Promise<PlusApiResultPointsAccountInfoVO>;
    /** Exchange points */
    exchange(body: PointsExchangeForm): Promise<PlusApiResultPointsExchangeVO>;
    /** Recharge points */
    rechargePoints(body: PointsRechargeForm): Promise<PlusApiResultPointsRechargeVO>;
    /** Withdraw cash */
    withdraw(body: CashWithdrawForm): Promise<PlusApiResultCashWithdrawVO>;
    /** Transfer cash */
    createTransferCash(body: CashTransferForm): Promise<PlusApiResultCashTransferVO>;
    /** Recharge cash account */
    recharge(body: CashRechargeForm): Promise<PlusApiResultCashRechargeVO>;
    /** Get account summary */
    getAccountSummary(): Promise<PlusApiResultAccountSummaryVO>;
    /** Get points account */
    getPoints(): Promise<PlusApiResultPointsAccountInfoVO>;
    /** Get token account */
    getToken(): Promise<PlusApiResultPointsAccountInfoVO>;
    /** Get points history */
    getHistory(params?: QueryParams): Promise<PlusApiResultPageHistoryVO>;
    /** Get points-to-cash rate */
    getPointsToCashRate(): Promise<PlusApiResultBigDecimal>;
    /** Get cash account */
    getCash(): Promise<PlusApiResultCashAccountInfoVO>;
    /** Get cash history */
    getHistoryCash(params?: QueryParams): Promise<PlusApiResultPageHistoryVO>;
}
export declare function createAccountApi(client: HttpClient): AccountApi;
//# sourceMappingURL=account.d.ts.map