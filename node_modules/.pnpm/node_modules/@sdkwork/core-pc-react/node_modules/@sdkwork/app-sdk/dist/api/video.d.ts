import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { PlusApiResultPageVideoVO, PlusApiResultVideoDetailVO, PlusApiResultVideoStatisticsVO, PlusApiResultVideoVO, PlusApiResultVoid, VideoCreateForm, VideoUpdateForm } from '../types';
export declare class VideoApi {
    private client;
    constructor(client: HttpClient);
    /** 获取视频详情 */
    getVideo(videoId: string | number): Promise<PlusApiResultVideoDetailVO>;
    /** 更新视频 */
    updateVideo(videoId: string | number, body: VideoUpdateForm): Promise<PlusApiResultVideoVO>;
    /** 删除视频 */
    deleteVideo(videoId: string | number): Promise<PlusApiResultVoid>;
    /** 上传视频 */
    createVideo(body: VideoCreateForm): Promise<PlusApiResultVideoVO>;
    /** 发布视频 */
    publish(videoId: string | number): Promise<PlusApiResultVoid>;
    /** 取消发布 */
    unpublish(videoId: string | number): Promise<PlusApiResultVoid>;
    /** 点赞视频 */
    like(videoId: string | number): Promise<PlusApiResultVoid>;
    /** 取消点赞 */
    unlike(videoId: string | number): Promise<PlusApiResultVoid>;
    /** 收藏视频 */
    favorite(videoId: string | number): Promise<PlusApiResultVoid>;
    /** 取消收藏 */
    unfavorite(videoId: string | number): Promise<PlusApiResultVoid>;
    /** 记录下载 */
    recordDownload(videoId: string | number): Promise<PlusApiResultVoid>;
    /** 获取视频统计 */
    getVideoStatistics(): Promise<PlusApiResultVideoStatisticsVO>;
    /** 搜索视频 */
    searchVideos(params?: QueryParams): Promise<PlusApiResultPageVideoVO>;
    /** 获取公开视频 */
    getPublicVideos(params?: QueryParams): Promise<PlusApiResultPageVideoVO>;
    /** 获取热门视频 */
    getPopularVideos(params?: QueryParams): Promise<PlusApiResultPageVideoVO>;
    /** 获取最受喜爱视频 */
    getMostLikedVideos(params?: QueryParams): Promise<PlusApiResultPageVideoVO>;
    /** 获取收藏视频 */
    getFavoriteVideos(params?: QueryParams): Promise<PlusApiResultPageVideoVO>;
}
export declare function createVideoApi(client: HttpClient): VideoApi;
//# sourceMappingURL=video.d.ts.map