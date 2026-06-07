import { GameDefinitionVO } from './game-definition-vo';
import { GameLeaderboardVO } from './game-leaderboard-vo';
import { GameRoomVO } from './game-room-vo';
import { GameTournamentVO } from './game-tournament-vo';
/** 游戏首页信息 */
export interface GameHomeVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 地区编码 */
    regionCode?: string;
    /** 推荐玩法 */
    featuredGames?: GameDefinitionVO[];
    /** 热门房间 */
    hotRooms?: GameRoomVO[];
    /** 热门榜单 */
    hotLeaderboards?: GameLeaderboardVO[];
    /** 赛事推荐 */
    tournaments?: GameTournamentVO[];
}
//# sourceMappingURL=game-home-vo.d.ts.map