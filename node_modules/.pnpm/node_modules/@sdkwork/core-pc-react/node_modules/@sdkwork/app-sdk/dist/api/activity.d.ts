import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { ActivityJoinForm, CheckInMakeUpForm, PlusApiResultActivityDetailVO, PlusApiResultActivityJoinVO, PlusApiResultCheckInMakeUpVO, PlusApiResultCheckInStatusVO, PlusApiResultCheckInVO, PlusApiResultListCheckInRecordVO, PlusApiResultListLotteryActivityVO, PlusApiResultListTaskVO, PlusApiResultLotteryDetailVO, PlusApiResultLotteryDrawVO, PlusApiResultPageActivityRecordVO, PlusApiResultPageActivityVO, PlusApiResultPageLotteryPrizeVO, PlusApiResultPagePointsExchangeRecordVO, PlusApiResultPagePointsGoodsVO, PlusApiResultPointsExchangeVO, PlusApiResultPointsGoodsDetailVO, PlusApiResultPrizeClaimVO, PlusApiResultRankInfoVO, PlusApiResultRankingVO, PlusApiResultTaskRewardVO, PointsExchangeForm } from '../types';
export declare class ActivityApi {
    private client;
    constructor(client: HttpClient);
    /** 参与活动 */
    join(activityId: string | number, body: ActivityJoinForm): Promise<PlusApiResultActivityJoinVO>;
    /** 领取任务奖励 */
    claimTaskReward(taskId: string | number): Promise<PlusApiResultTaskRewardVO>;
    /** 兑换商品 */
    exchangeGoods(goodsId: string | number, body: PointsExchangeForm): Promise<PlusApiResultPointsExchangeVO>;
    /** 抽奖 */
    drawLottery(lotteryId: string | number): Promise<PlusApiResultLotteryDrawVO>;
    /** 领取奖品 */
    claimPrize(prizeId: string | number): Promise<PlusApiResultPrizeClaimVO>;
    /** 每日签到 */
    checkIn(): Promise<PlusApiResultCheckInVO>;
    /** 补签 */
    makeUpCheckIn(body: CheckInMakeUpForm): Promise<PlusApiResultCheckInMakeUpVO>;
    /** 获取活动详情 */
    getActivityDetail(activityId: string | number): Promise<PlusApiResultActivityDetailVO>;
    /** 获取任务列表 */
    listTasks(params?: QueryParams): Promise<PlusApiResultListTaskVO>;
    /** 获取参与记录 */
    getActivityRecords(params?: QueryParams): Promise<PlusApiResultPageActivityRecordVO>;
    /** 获取排行榜 */
    getRanking(type: string | number, params?: QueryParams): Promise<PlusApiResultRankingVO>;
    /** 获取我的排名 */
    getMyRank(type: string | number, params?: QueryParams): Promise<PlusApiResultRankInfoVO>;
    /** 获取积分商品 */
    listPointsGoods(params?: QueryParams): Promise<PlusApiResultPagePointsGoodsVO>;
    /** 获取商品详情 */
    getPointsGoodsDetail(goodsId: string | number): Promise<PlusApiResultPointsGoodsDetailVO>;
    /** 获取兑换记录 */
    getExchangeRecords(params?: QueryParams): Promise<PlusApiResultPagePointsExchangeRecordVO>;
    /** 获取抽奖详情 */
    getLotteryDetail(lotteryId: string | number): Promise<PlusApiResultLotteryDetailVO>;
    /** 获取中奖记录 */
    getMyPrizes(params?: QueryParams): Promise<PlusApiResultPageLotteryPrizeVO>;
    /** 获取抽奖列表 */
    listLotteryActivities(): Promise<PlusApiResultListLotteryActivityVO>;
    /** 获取活动列表 */
    listActivities(params?: QueryParams): Promise<PlusApiResultPageActivityVO>;
    /** 获取签到状态 */
    getCheckInStatus(): Promise<PlusApiResultCheckInStatusVO>;
    /** 获取签到记录 */
    getCheckInRecords(params?: QueryParams): Promise<PlusApiResultListCheckInRecordVO>;
}
export declare function createActivityApi(client: HttpClient): ActivityApi;
//# sourceMappingURL=activity.d.ts.map