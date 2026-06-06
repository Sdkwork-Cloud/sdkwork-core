import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { ImageCreateForm, ImageUpdateForm, PlusApiResultImageDetailVO, PlusApiResultImageStatisticsVO, PlusApiResultImageVO, PlusApiResultPageImageVO, PlusApiResultVoid } from '../types';
export declare class ImageApi {
    private client;
    constructor(client: HttpClient);
    /** 获取图片详情 */
    getImage(imageId: string | number): Promise<PlusApiResultImageDetailVO>;
    /** 更新图片 */
    updateImage(imageId: string | number, body: ImageUpdateForm): Promise<PlusApiResultImageVO>;
    /** 删除图片 */
    deleteImage(imageId: string | number): Promise<PlusApiResultVoid>;
    /** 上传图片 */
    createImage(body: ImageCreateForm): Promise<PlusApiResultImageVO>;
    /** 点赞图片 */
    like(imageId: string | number): Promise<PlusApiResultVoid>;
    /** 取消点赞 */
    unlike(imageId: string | number): Promise<PlusApiResultVoid>;
    /** 收藏图片 */
    favorite(imageId: string | number): Promise<PlusApiResultVoid>;
    /** 取消收藏 */
    unfavorite(imageId: string | number): Promise<PlusApiResultVoid>;
    /** 记录下载 */
    recordDownload(imageId: string | number): Promise<PlusApiResultVoid>;
    /** 获取图片统计 */
    getImageStatistics(): Promise<PlusApiResultImageStatisticsVO>;
    /** 搜索图片 */
    searchImages(params?: QueryParams): Promise<PlusApiResultPageImageVO>;
    /** 获取公开图片 */
    getPublicImages(params?: QueryParams): Promise<PlusApiResultPageImageVO>;
    /** 获取热门图片 */
    getPopularImages(params?: QueryParams): Promise<PlusApiResultPageImageVO>;
    /** 获取最受喜爱图片 */
    getMostLikedImages(params?: QueryParams): Promise<PlusApiResultPageImageVO>;
    /** 获取收藏图片 */
    getFavoriteImages(params?: QueryParams): Promise<PlusApiResultPageImageVO>;
}
export declare function createImageApi(client: HttpClient): ImageApi;
//# sourceMappingURL=image.d.ts.map