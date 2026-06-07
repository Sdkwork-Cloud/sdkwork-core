import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { PlusApiResultBoolean, PlusApiResultListSkillCategoryVO, PlusApiResultListSkillPackageVO, PlusApiResultListSkillReviewVO, PlusApiResultListUserSkillVO, PlusApiResultPageSkillVO, PlusApiResultSkillPackageVO, PlusApiResultSkillVO, PlusApiResultUserSkillVO, SkillConfigUpdateForm, SkillSaveForm } from '../types';
export declare class SkillApi {
    private client;
    constructor(client: HttpClient);
    /** Get skill detail */
    detail(skillId: string | number): Promise<PlusApiResultSkillVO>;
    /** Update skill */
    update(skillId: string | number, body: SkillSaveForm): Promise<PlusApiResultSkillVO>;
    /** Update user skill config */
    updateConfig(skillId: string | number, body?: SkillConfigUpdateForm): Promise<PlusApiResultUserSkillVO>;
    /** List market skills */
    list(params?: QueryParams): Promise<PlusApiResultPageSkillVO>;
    /** Create skill */
    create(body: SkillSaveForm): Promise<PlusApiResultSkillVO>;
    /** Submit skill for review */
    submitReview(skillId: string | number): Promise<PlusApiResultSkillVO>;
    /** Publish skill to market */
    publish(skillId: string | number): Promise<PlusApiResultSkillVO>;
    /** Offline skill from market */
    offline(skillId: string | number): Promise<PlusApiResultSkillVO>;
    /** Enable skill for current user */
    enable(skillId: string | number): Promise<PlusApiResultUserSkillVO>;
    /** Disable skill for current user */
    disable(skillId: string | number): Promise<PlusApiResultBoolean>;
    /** List skill packages */
    listPackages(params?: QueryParams): Promise<PlusApiResultListSkillPackageVO>;
    /** List my installed skills */
    listMine(): Promise<PlusApiResultListUserSkillVO>;
    /** List skill categories */
    listCategories(): Promise<PlusApiResultListSkillCategoryVO>;
    /** Get skill package detail */
    detailPackage(packageId: string | number): Promise<PlusApiResultSkillPackageVO>;
    /** List skill reviews */
    listReviews(skillId: string | number): Promise<PlusApiResultListSkillReviewVO>;
}
export declare function createSkillApi(client: HttpClient): SkillApi;
//# sourceMappingURL=skill.d.ts.map