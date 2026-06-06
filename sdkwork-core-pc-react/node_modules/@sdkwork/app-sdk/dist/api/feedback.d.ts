import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { FeedbackFollowUpForm, FeedbackSubmitForm, PlusApiResultFaqDetailVO, PlusApiResultFeedbackDetailVO, PlusApiResultFeedbackVO, PlusApiResultListFaqCategoryVO, PlusApiResultListFaqVO, PlusApiResultListOnboardingStepVO, PlusApiResultPageFaqVO, PlusApiResultPageFeedbackVO, PlusApiResultPageReportVO, PlusApiResultPageSupportMessageVO, PlusApiResultPageTutorialVO, PlusApiResultReportDetailVO, PlusApiResultReportVO, PlusApiResultSupportInfoVO, PlusApiResultSupportMessageVO, PlusApiResultTutorialDetailVO, PlusApiResultVoid, ReportSubmitForm, SupportMessageRequest } from '../types';
export declare class FeedbackApi {
    private client;
    constructor(client: HttpClient);
    /** 关闭反馈 */
    close(feedbackId: string | number, params?: QueryParams): Promise<PlusApiResultFeedbackDetailVO>;
    /** 反馈列表 */
    listFeedback(params?: QueryParams): Promise<PlusApiResultPageFeedbackVO>;
    /** 提交反馈 */
    submit(body: FeedbackSubmitForm): Promise<PlusApiResultFeedbackVO>;
    /** 追加反馈 */
    followUp(feedbackId: string | number, body: FeedbackFollowUpForm): Promise<PlusApiResultFeedbackDetailVO>;
    /** 客服消息列表 */
    listSupportMessages(params?: QueryParams): Promise<PlusApiResultPageSupportMessageVO>;
    /** 发送客服消息 */
    sendSupportMessage(body: SupportMessageRequest): Promise<PlusApiResultSupportMessageVO>;
    /** 举报列表 */
    listReports(params?: QueryParams): Promise<PlusApiResultPageReportVO>;
    /** 提交举报 */
    submitReport(body: ReportSubmitForm): Promise<PlusApiResultReportVO>;
    /** 完成指引 */
    completeOnboardingStep(stepId: string | number): Promise<PlusApiResultVoid>;
    /** FAQ点赞 */
    likeFaq(faqId: string | number): Promise<PlusApiResultVoid>;
    /** FAQ点踩 */
    dislikeFaq(faqId: string | number): Promise<PlusApiResultVoid>;
    /** 反馈详情 */
    getFeedbackDetail(feedbackId: string | number): Promise<PlusApiResultFeedbackDetailVO>;
    /** 教程列表 */
    listTutorials(params?: QueryParams): Promise<PlusApiResultPageTutorialVO>;
    /** 教程详情 */
    getTutorialDetail(tutorialId: string | number): Promise<PlusApiResultTutorialDetailVO>;
    /** 客服信息 */
    getSupportInfo(): Promise<PlusApiResultSupportInfoVO>;
    /** 举报详情 */
    getReportDetail(reportId: string | number): Promise<PlusApiResultReportDetailVO>;
    /** 新手指引 */
    getOnboardingGuide(): Promise<PlusApiResultListOnboardingStepVO>;
    /** FAQ列表 */
    listFaqs(params?: QueryParams): Promise<PlusApiResultPageFaqVO>;
    /** FAQ详情 */
    getFaqDetail(faqId: string | number): Promise<PlusApiResultFaqDetailVO>;
    /** 搜索FAQ */
    searchFaqs(params?: QueryParams): Promise<PlusApiResultListFaqVO>;
    /** FAQ分类 */
    listFaqCategories(): Promise<PlusApiResultListFaqCategoryVO>;
}
export declare function createFeedbackApi(client: HttpClient): FeedbackApi;
//# sourceMappingURL=feedback.d.ts.map