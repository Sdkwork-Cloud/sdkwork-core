import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { CharacterCreateForm, CharacterUpdateForm, PlusApiResultCharacterDetailVO, PlusApiResultCharacterVO, PlusApiResultPageCharacterVO, PlusApiResultVoid } from '../types';
export declare class CharacterApi {
    private client;
    constructor(client: HttpClient);
    /** 获取角色详情 */
    getCharacter(characterId: string | number): Promise<PlusApiResultCharacterDetailVO>;
    /** 更新角色 */
    updateCharacter(characterId: string | number, body: CharacterUpdateForm): Promise<PlusApiResultCharacterVO>;
    /** 删除角色 */
    deleteCharacter(characterId: string | number): Promise<PlusApiResultVoid>;
    /** 创建角色 */
    createCharacter(body: CharacterCreateForm): Promise<PlusApiResultCharacterVO>;
    /** 使用角色 */
    use(characterId: string | number): Promise<PlusApiResultVoid>;
    /** 点赞角色 */
    like(characterId: string | number): Promise<PlusApiResultVoid>;
    /** 取消点赞 */
    unlike(characterId: string | number): Promise<PlusApiResultVoid>;
    /** 搜索角色 */
    searchCharacters(params?: QueryParams): Promise<PlusApiResultPageCharacterVO>;
    /** 获取热门角色 */
    getPopularCharacters(params?: QueryParams): Promise<PlusApiResultPageCharacterVO>;
    /** 获取我的角色 */
    getMyCharacters(params?: QueryParams): Promise<PlusApiResultPageCharacterVO>;
    /** 获取最受喜爱角色 */
    getMostLikedCharacters(params?: QueryParams): Promise<PlusApiResultPageCharacterVO>;
    /** 获取智能体关联角色 */
    getCharacterByAgent(agentId: string | number): Promise<PlusApiResultCharacterVO>;
}
export declare function createCharacterApi(client: HttpClient): CharacterApi;
//# sourceMappingURL=character.d.ts.map