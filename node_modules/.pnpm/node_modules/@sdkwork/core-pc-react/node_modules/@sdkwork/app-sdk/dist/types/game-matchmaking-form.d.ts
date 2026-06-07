export interface GameMatchmakingForm {
    gameType: 'INTERNATIONAL_CHESS' | 'CHINESE_CHESS' | 'GOMOKU' | 'JUNQI' | 'LANDLORD' | 'SHENG_JI' | 'TUO_LA_JI' | 'TEXAS_HOLDEM' | 'MAHJONG' | 'CUSTOM';
    gameModeCode: string;
    ranked?: boolean;
    expectedPlayerCount?: number;
}
//# sourceMappingURL=game-matchmaking-form.d.ts.map