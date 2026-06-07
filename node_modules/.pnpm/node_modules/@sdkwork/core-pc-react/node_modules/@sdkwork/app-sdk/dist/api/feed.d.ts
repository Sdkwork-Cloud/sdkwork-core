import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { FeedCreateForm, PlusApiResultBoolean, PlusApiResultFeedItemVO, PlusApiResultListFeedItemVO } from '../types';
export declare class FeedApi {
    private client;
    constructor(client: HttpClient);
    /** Create feed */
    create(body: FeedCreateForm): Promise<PlusApiResultFeedItemVO>;
    /** Unlike feed */
    unlike(id: string | number): Promise<PlusApiResultFeedItemVO>;
    /** Uncollect feed */
    uncollect(id: string | number): Promise<PlusApiResultFeedItemVO>;
    /** Share feed */
    share(id: string | number): Promise<PlusApiResultFeedItemVO>;
    /** Like feed */
    like(id: string | number): Promise<PlusApiResultFeedItemVO>;
    /** Collect feed */
    collect(id: string | number, params?: QueryParams): Promise<PlusApiResultFeedItemVO>;
    /** Get top feeds */
    getTopFeeds(params?: QueryParams): Promise<PlusApiResultListFeedItemVO>;
    /** Search feeds */
    searchFeeds(params?: QueryParams): Promise<PlusApiResultListFeedItemVO>;
    /** Get recommended feeds */
    getRecommendedFeeds(params?: QueryParams): Promise<PlusApiResultListFeedItemVO>;
    /** Get most viewed feeds */
    getMostViewedFeeds(params?: QueryParams): Promise<PlusApiResultListFeedItemVO>;
    /** Get most liked feeds */
    getMostLikedFeeds(params?: QueryParams): Promise<PlusApiResultListFeedItemVO>;
    /** Get feed list */
    getFeedList(params?: QueryParams): Promise<PlusApiResultListFeedItemVO>;
    /** Get hot feeds */
    getHotFeeds(params?: QueryParams): Promise<PlusApiResultListFeedItemVO>;
    /** Get feed detail */
    getFeedDetail(id: string | number): Promise<PlusApiResultFeedItemVO>;
    /** Check collected status */
    checkCollected(id: string | number): Promise<PlusApiResultBoolean>;
    /** Get feeds by category */
    getFeedsByCategory(categoryId: string | number, params?: QueryParams): Promise<PlusApiResultListFeedItemVO>;
    /** Delete feed */
    delete(id: string | number): Promise<PlusApiResultBoolean>;
}
export declare function createFeedApi(client: HttpClient): FeedApi;
//# sourceMappingURL=feed.d.ts.map