import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { GameActionSubmitForm, GameArenaManageForm, GameArenaOpenForm, GameChallengeCreateForm, GameChallengeManageForm, GameCreateRoomForm, GameGrowthRewardQueryForm, GameJoinRoomForm, GameMatchmakingForm, GameRoomDismissForm, GameRoomReadyForm, PlusApiResultGameActionResultVO, PlusApiResultGameArenaVO, PlusApiResultGameChallengeVO, PlusApiResultGameGrowthAccountVO, PlusApiResultGameHomeVO, PlusApiResultGameLeaderboardVO, PlusApiResultGameMatchVO, PlusApiResultGamePlayerProfileVO, PlusApiResultGameReplayVO, PlusApiResultGameRoomVO, PlusApiResultGameTournamentVO, PlusApiResultListGameDefinitionVO, PlusApiResultListGameGrowthLevelVO, PlusApiResultListGameGrowthRewardVO, PlusApiResultListGameHonorVO, PlusApiResultPageGameArenaVO, PlusApiResultPageGameChallengeVO, PlusApiResultPageGameGrowthRecordVO, PlusApiResultPageGameLeaderboardVO, PlusApiResultPageGameRecordVO, PlusApiResultPageGameRoomVO, PlusApiResultPageGameScoreRecordVO, PlusApiResultPageGameTournamentVO } from '../types';
export declare class GameApi {
    private client;
    constructor(client: HttpClient);
    /** 报名赛事 */
    registerTournament(tournamentId: string | number): Promise<PlusApiResultGameTournamentVO>;
    /** 获取房间列表 */
    listRooms(params?: QueryParams): Promise<PlusApiResultPageGameRoomVO>;
    /** 创建房间 */
    createRoom(body: GameCreateRoomForm): Promise<PlusApiResultGameRoomVO>;
    /** 房间准备 */
    readyRoom(roomId: string | number, body: GameRoomReadyForm): Promise<PlusApiResultGameRoomVO>;
    /** 离开房间 */
    leaveRoom(roomId: string | number): Promise<PlusApiResultGameRoomVO>;
    /** 加入房间 */
    joinRoom(roomId: string | number, body: GameJoinRoomForm): Promise<PlusApiResultGameRoomVO>;
    /** 解散房间 */
    dismissRoom(roomId: string | number, body: GameRoomDismissForm): Promise<PlusApiResultGameRoomVO>;
    /** 快速开局 */
    startMatchmaking(body: GameMatchmakingForm): Promise<PlusApiResultGameRoomVO>;
    /** 提交对局动作 */
    submitAction(matchId: string | number, body: GameActionSubmitForm): Promise<PlusApiResultGameActionResultVO>;
    /** 领取成长奖励 */
    claimGrowthReward(levelNo: string | number, body: GameGrowthRewardQueryForm): Promise<PlusApiResultGameGrowthAccountVO>;
    /** 获取挑战赛列表 */
    listChallenges(params?: QueryParams): Promise<PlusApiResultPageGameChallengeVO>;
    /** 发起挑战 */
    createChallenge(body: GameChallengeCreateForm): Promise<PlusApiResultGameChallengeVO>;
    /** 处理挑战 */
    manageChallenge(challengeId: string | number, body: GameChallengeManageForm): Promise<PlusApiResultGameChallengeVO>;
    /** 获取擂台列表 */
    listArenas(params?: QueryParams): Promise<PlusApiResultPageGameArenaVO>;
    /** 开擂 */
    openArena(body: GameArenaOpenForm): Promise<PlusApiResultGameArenaVO>;
    /** 处理擂台 */
    manageArena(arenaId: string | number, body: GameArenaManageForm): Promise<PlusApiResultGameArenaVO>;
    /** 获取赛事列表 */
    listTournaments(params?: QueryParams): Promise<PlusApiResultPageGameTournamentVO>;
    /** 获取赛事详情 */
    getTournament(tournamentId: string | number): Promise<PlusApiResultGameTournamentVO>;
    /** 获取积分流水 */
    listScoreRecords(params?: QueryParams): Promise<PlusApiResultPageGameScoreRecordVO>;
    /** 获取房间详情 */
    getRoom(roomId: string | number): Promise<PlusApiResultGameRoomVO>;
    /** 获取回放详情 */
    getReplay(replayId: string | number): Promise<PlusApiResultGameReplayVO>;
    /** 获取我的战绩 */
    listRecords(params?: QueryParams): Promise<PlusApiResultPageGameRecordVO>;
    /** 获取游戏主页 */
    getProfile(params?: QueryParams): Promise<PlusApiResultGamePlayerProfileVO>;
    /** 获取我的荣誉 */
    listHonors(params?: QueryParams): Promise<PlusApiResultListGameHonorVO>;
    /** 获取对局详情 */
    getMatch(matchId: string | number): Promise<PlusApiResultGameMatchVO>;
    /** 获取排行榜 */
    listLeaderboards(params?: QueryParams): Promise<PlusApiResultPageGameLeaderboardVO>;
    /** 获取榜单详情 */
    getLeaderboard(leaderboardId: string | number): Promise<PlusApiResultGameLeaderboardVO>;
    /** 获取游戏首页 */
    getHome(params?: QueryParams): Promise<PlusApiResultGameHomeVO>;
    /** 获取成长奖励 */
    listGrowthRewards(params?: QueryParams): Promise<PlusApiResultListGameGrowthRewardVO>;
    /** 获取成长流水 */
    listGrowthRecords(params?: QueryParams): Promise<PlusApiResultPageGameGrowthRecordVO>;
    /** 获取成长等级阶梯 */
    listGrowthLevels(params?: QueryParams): Promise<PlusApiResultListGameGrowthLevelVO>;
    /** 获取成长账户 */
    getGrowthAccount(params?: QueryParams): Promise<PlusApiResultGameGrowthAccountVO>;
    /** 获取玩法列表 */
    listDefinitions(params?: QueryParams): Promise<PlusApiResultListGameDefinitionVO>;
    /** 获取挑战赛详情 */
    getChallenge(challengeId: string | number): Promise<PlusApiResultGameChallengeVO>;
    /** 获取擂台详情 */
    getArena(arenaId: string | number): Promise<PlusApiResultGameArenaVO>;
}
export declare function createGameApi(client: HttpClient): GameApi;
//# sourceMappingURL=game.d.ts.map