import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { MusicCreateForm, MusicUpdateForm, PlusApiResultMusicDetailVO, PlusApiResultMusicStatisticsVO, PlusApiResultMusicVO, PlusApiResultPageMusicVO, PlusApiResultVoid } from '../types';
export declare class MusicApi {
    private client;
    constructor(client: HttpClient);
    /** 获取音乐详情 */
    getMusic(musicId: string | number): Promise<PlusApiResultMusicDetailVO>;
    /** 更新音乐 */
    updateMusic(musicId: string | number, body: MusicUpdateForm): Promise<PlusApiResultMusicVO>;
    /** 删除音乐 */
    deleteMusic(musicId: string | number): Promise<PlusApiResultVoid>;
    /** 上传音乐 */
    createMusic(body: MusicCreateForm): Promise<PlusApiResultMusicVO>;
    /** 发布音乐 */
    publish(musicId: string | number): Promise<PlusApiResultVoid>;
    /** 取消发布 */
    unpublish(musicId: string | number): Promise<PlusApiResultVoid>;
    /** 点赞音乐 */
    like(musicId: string | number): Promise<PlusApiResultVoid>;
    /** 取消点赞 */
    unlike(musicId: string | number): Promise<PlusApiResultVoid>;
    /** 收藏音乐 */
    favorite(musicId: string | number): Promise<PlusApiResultVoid>;
    /** 取消收藏 */
    unfavorite(musicId: string | number): Promise<PlusApiResultVoid>;
    /** 记录下载 */
    recordDownload(musicId: string | number): Promise<PlusApiResultVoid>;
    /** 获取音乐统计 */
    getMusicStatistics(): Promise<PlusApiResultMusicStatisticsVO>;
    /** 搜索音乐 */
    search(params?: QueryParams): Promise<PlusApiResultPageMusicVO>;
    /** 获取公开音乐 */
    getPublic(params?: QueryParams): Promise<PlusApiResultPageMusicVO>;
    /** 获取热门音乐 */
    getPopular(params?: QueryParams): Promise<PlusApiResultPageMusicVO>;
    /** 获取最受喜爱音乐 */
    getMostLiked(params?: QueryParams): Promise<PlusApiResultPageMusicVO>;
    /** 获取收藏音乐 */
    getFavorite(params?: QueryParams): Promise<PlusApiResultPageMusicVO>;
}
export declare function createMusicApi(client: HttpClient): MusicApi;
//# sourceMappingURL=music.d.ts.map