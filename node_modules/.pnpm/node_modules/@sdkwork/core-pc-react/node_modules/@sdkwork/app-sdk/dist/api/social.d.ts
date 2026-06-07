import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { BatchFollowCheckForm, ContactGroupCreateForm, ContactGroupUpdateForm, FriendRemarkUpdateForm, FriendRequestCreateForm, FriendRequestProcessForm, PlusApiResultBlockCheckVO, PlusApiResultContactFriendVO, PlusApiResultContactGroupVO, PlusApiResultContactStatsVO, PlusApiResultFollowCheckVO, PlusApiResultFollowStatsVO, PlusApiResultFollowVO, PlusApiResultFriendRequestVO, PlusApiResultListContactFriendVO, PlusApiResultListContactGroupVO, PlusApiResultListFollowCheckVO, PlusApiResultListFriendRequestVO, PlusApiResultMessageUnreadCountVO, PlusApiResultPageBlockedUserVO, PlusApiResultPageConversationVO, PlusApiResultPageFollowUserVO, PlusApiResultPagePrivateMessageVO, PlusApiResultPrivateMessageVO, PlusApiResultVoid, SendMessageForm } from '../types';
export declare class SocialApi {
    private client;
    constructor(client: HttpClient);
    /** 标记消息已读 */
    markMessagesAsRead(params?: QueryParams): Promise<PlusApiResultVoid>;
    /** Process friend request */
    processFriendRequest(requestId: string | number, body: FriendRequestProcessForm): Promise<PlusApiResultFriendRequestVO>;
    /** Update contact group */
    updateContactGroup(groupId: string | number, body: ContactGroupUpdateForm): Promise<PlusApiResultContactGroupVO>;
    /** Delete contact group */
    deleteContactGroup(groupId: string | number): Promise<PlusApiResultVoid>;
    /** 发送私信 */
    sendMessage(body: SendMessageForm): Promise<PlusApiResultPrivateMessageVO>;
    /** List friend requests */
    listFriendRequests(): Promise<PlusApiResultListFriendRequestVO>;
    /** Send friend request */
    sendFriendRequest(body: FriendRequestCreateForm): Promise<PlusApiResultFriendRequestVO>;
    /** 关注用户 */
    followUser(userId: string | number): Promise<PlusApiResultFollowVO>;
    /** 取消关注 */
    unfollowUser(userId: string | number): Promise<PlusApiResultVoid>;
    /** 批量检查关注状态 */
    batchCheckFollowStatus(body: BatchFollowCheckForm): Promise<PlusApiResultListFollowCheckVO>;
    /** List contact groups */
    listContactGroups(): Promise<PlusApiResultListContactGroupVO>;
    /** Create contact group */
    createContactGroup(body: ContactGroupCreateForm): Promise<PlusApiResultContactGroupVO>;
    /** 拉黑用户 */
    blockUser(userId: string | number): Promise<PlusApiResultVoid>;
    /** 取消拉黑 */
    unblockUser(userId: string | number): Promise<PlusApiResultVoid>;
    /** Update friend remark */
    updateFriendRemark(contactId: string | number, body: FriendRemarkUpdateForm): Promise<PlusApiResultVoid>;
    /** 获取关注统计 */
    getFollowStats(): Promise<PlusApiResultFollowStatsVO>;
    /** 获取未读消息数 */
    getUnreadMessageCount(): Promise<PlusApiResultMessageUnreadCountVO>;
    /** 获取关注列表 */
    getFollowingList(params?: QueryParams): Promise<PlusApiResultPageFollowUserVO>;
    /** 获取粉丝列表 */
    getFollowerList(params?: QueryParams): Promise<PlusApiResultPageFollowUserVO>;
    /** 检查关注状态 */
    checkFollowStatus(params?: QueryParams): Promise<PlusApiResultFollowCheckVO>;
    /** 获取会话列表 */
    getConversations(params?: QueryParams): Promise<PlusApiResultPageConversationVO>;
    /** 获取会话消息 */
    getConversationMessages(userId: string | number, params?: QueryParams): Promise<PlusApiResultPagePrivateMessageVO>;
    /** List contacts */
    listContacts(params?: QueryParams): Promise<PlusApiResultListContactFriendVO>;
    /** Get contact detail */
    getContactDetail(contactId: string | number): Promise<PlusApiResultContactFriendVO>;
    /** Delete contact */
    deleteContact(contactId: string | number): Promise<PlusApiResultVoid>;
    /** Get contact stats */
    getContactStats(): Promise<PlusApiResultContactStatsVO>;
    /** 获取黑名单 */
    getBlockedUsers(params?: QueryParams): Promise<PlusApiResultPageBlockedUserVO>;
    /** 检查黑名单状态 */
    checkBlockStatus(params?: QueryParams): Promise<PlusApiResultBlockCheckVO>;
    /** 删除会话 */
    deleteConversation(userId: string | number): Promise<PlusApiResultVoid>;
}
export declare function createSocialApi(client: HttpClient): SocialApi;
//# sourceMappingURL=social.d.ts.map