import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { NewsCreateForm, NewsUpdateForm, PlusApiResultNewsDetailVO, PlusApiResultNewsVO, PlusApiResultPageNewsVO, PlusApiResultVoid } from '../types';
export declare class NewsApi {
    private client;
    constructor(client: HttpClient);
    /** 获取新闻详情 */
    getNews(newsId: string | number): Promise<PlusApiResultNewsDetailVO>;
    /** 更新新闻 */
    updateNews(newsId: string | number, body: NewsUpdateForm): Promise<PlusApiResultNewsVO>;
    /** 删除新闻 */
    deleteNews(newsId: string | number): Promise<PlusApiResultVoid>;
    /** 创建新闻 */
    createNews(body: NewsCreateForm): Promise<PlusApiResultNewsVO>;
    /** 搜索新闻 */
    search(params?: QueryParams): Promise<PlusApiResultPageNewsVO>;
    /** 获取我的新闻 */
    getMy(params?: QueryParams): Promise<PlusApiResultPageNewsVO>;
    /** 获取最新新闻 */
    getLatest(params?: QueryParams): Promise<PlusApiResultPageNewsVO>;
    /** 获取分类新闻 */
    getCategory(categoryId: string | number, params?: QueryParams): Promise<PlusApiResultPageNewsVO>;
}
export declare function createNewsApi(client: HttpClient): NewsApi;
//# sourceMappingURL=news.d.ts.map