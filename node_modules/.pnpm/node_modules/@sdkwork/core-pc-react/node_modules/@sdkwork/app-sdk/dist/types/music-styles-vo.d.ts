import { GenreVO } from './genre-vo';
import { InstrumentVO } from './instrument-vo';
import { MoodVO } from './mood-vo';
import { StyleVO } from './style-vo';
/** 音乐风格响应 */
export interface MusicStylesVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 流派列表 */
    genres?: GenreVO[];
    /** 风格列表 */
    styles?: StyleVO[];
    /** 情绪列表 */
    moods?: MoodVO[];
    /** 乐器列表 */
    instruments?: InstrumentVO[];
}
//# sourceMappingURL=music-styles-vo.d.ts.map