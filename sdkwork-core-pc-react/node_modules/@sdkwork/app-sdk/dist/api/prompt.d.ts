import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { PlusApiResultPagePromptHistoryVO, PlusApiResultPagePromptVO, PlusApiResultPromptHistoryVO, PlusApiResultPromptVO, PlusApiResultVoid, PromptCreateForm, PromptUpdateForm } from '../types';
export declare class PromptApi {
    private client;
    constructor(client: HttpClient);
    /** 获取提示语详情 */
    getPromptDetail(id: string | number): Promise<PlusApiResultPromptVO>;
    /** 更新提示语 */
    updatePrompt(id: string | number, body: PromptUpdateForm): Promise<PlusApiResultPromptVO>;
    /** 删除提示语 */
    deletePrompt(id: string | number): Promise<PlusApiResultVoid>;
    /** 创建提示语 */
    createPrompt(body: PromptCreateForm): Promise<PlusApiResultPromptVO>;
    /** 使用提示语 */
    use(id: string | number): Promise<PlusApiResultVoid>;
    /** 收藏提示语 */
    favorite(id: string | number): Promise<PlusApiResultVoid>;
    /** 取消收藏提示语 */
    unfavorite(id: string | number): Promise<PlusApiResultVoid>;
    /** 获取热门提示语 */
    getPopularPrompts(params?: QueryParams): Promise<PlusApiResultPagePromptVO>;
    /** 获取最受欢迎提示语 */
    getMostFavoritedPrompts(params?: QueryParams): Promise<PlusApiResultPagePromptVO>;
    /** 获取提示语列表 */
    listPrompts(params?: QueryParams): Promise<PlusApiResultPagePromptVO>;
    /** 获取提示语历史详情 */
    getPromptHistoryDetail(id: string | number): Promise<PlusApiResultPromptHistoryVO>;
    /** 删除提示语历史 */
    deletePromptHistory(id: string | number): Promise<PlusApiResultVoid>;
    /** 获取提示语使用历史 */
    listPromptHistory(params?: QueryParams): Promise<PlusApiResultPagePromptHistoryVO>;
}
export declare function createPromptApi(client: HttpClient): PromptApi;
//# sourceMappingURL=prompt.d.ts.map