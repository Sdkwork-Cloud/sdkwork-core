export interface GameCreateRoomForm {
    gameType: 'INTERNATIONAL_CHESS' | 'CHINESE_CHESS' | 'GOMOKU' | 'JUNQI' | 'LANDLORD' | 'SHENG_JI' | 'TUO_LA_JI' | 'TEXAS_HOLDEM' | 'MAHJONG' | 'CUSTOM';
    gameModeCode: string;
    roomType: 'MATCHMAKING' | 'CLASSIC' | 'FRIEND' | 'TOURNAMENT' | 'PRACTICE' | 'CLUB';
    name: string;
    seatCount: number;
    ranked?: boolean;
    allowSpectator?: boolean;
    leaderboardEligible?: boolean;
    replayEnabled?: boolean;
}
//# sourceMappingURL=game-create-room-form.d.ts.map