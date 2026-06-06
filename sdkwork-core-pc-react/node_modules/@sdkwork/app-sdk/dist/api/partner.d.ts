import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { CommissionForm, PartnerCreateForm, PartnerUpdateForm, PlusApiResultPagePartnerVO, PlusApiResultPartnerDetailVO, PlusApiResultPartnerStatisticsVO, PlusApiResultPartnerVO, PlusApiResultVoid } from '../types';
export declare class PartnerApi {
    private client;
    constructor(client: HttpClient);
    /** Get partner details */
    getPartner(partnerId: string | number): Promise<PlusApiResultPartnerDetailVO>;
    /** Update partner */
    updatePartner(partnerId: string | number, body: PartnerUpdateForm): Promise<PlusApiResultPartnerVO>;
    /** Delete partner */
    deletePartner(partnerId: string | number): Promise<PlusApiResultVoid>;
    /** Apply to become a partner */
    createPartner(body: PartnerCreateForm): Promise<PlusApiResultPartnerVO>;
    /** Withdraw commission */
    withdrawCommission(partnerId: string | number, body: CommissionForm): Promise<PlusApiResultVoid>;
    /** Reject partner */
    reject(partnerId: string | number): Promise<PlusApiResultVoid>;
    /** Add commission */
    addCommission(partnerId: string | number, body: CommissionForm): Promise<PlusApiResultVoid>;
    /** Approve partner */
    approve(partnerId: string | number): Promise<PlusApiResultVoid>;
    /** Get subordinate partners */
    getSubordinates(partnerId: string | number, params?: QueryParams): Promise<PlusApiResultPagePartnerVO>;
    /** Get partner statistics */
    getPartnerStatistics(): Promise<PlusApiResultPartnerStatisticsVO>;
    /** Search partners */
    searchPartners(params?: QueryParams): Promise<PlusApiResultPagePartnerVO>;
    /** Get my partner profile */
    getMy(): Promise<PlusApiResultPartnerDetailVO>;
    /** Get partner by promotion code */
    getByPromotionCode(promotionCode: string | number): Promise<PlusApiResultPartnerVO>;
}
export declare function createPartnerApi(client: HttpClient): PartnerApi;
//# sourceMappingURL=partner.d.ts.map