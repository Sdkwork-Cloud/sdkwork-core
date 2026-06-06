import { CharacterItem } from './character-item';
/** 角色列表响应 */
export interface CharacterListVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 角色列表 */
    characters?: CharacterItem[];
    /** 总数量 */
    total?: number;
    /** 页面 */
    page?: number;
    /** 每页大小 */
    size?: number;
}
//# sourceMappingURL=character-list-vo.d.ts.map