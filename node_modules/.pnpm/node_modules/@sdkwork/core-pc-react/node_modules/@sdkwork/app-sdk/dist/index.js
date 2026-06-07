import { BaseHttpClient as l, withRetry as u } from "@sdkwork/sdk-common";
import { DEFAULT_TIMEOUT as _e, DefaultAuthTokenManager as qe, SUCCESS_CODES as We, createTokenManager as Ye } from "@sdkwork/sdk-common";
const r = class r extends l {
  constructor(t) {
    super(t);
  }
  getInternalAuthConfig() {
    const t = this;
    return t.authConfig = t.authConfig || {}, t.authConfig;
  }
  getInternalHeaders() {
    const t = this;
    return t.config = t.config || {}, t.config.headers = t.config.headers || {}, t.config.headers;
  }
  setApiKey(t) {
    const s = this.getInternalAuthConfig(), i = this.getInternalHeaders();
    if (s.apiKey = t, s.tokenManager?.clearTokens?.(), r.API_KEY_HEADER === "Authorization" && r.API_KEY_USE_BEARER) {
      s.authMode = "apikey", delete i["Access-Token"];
      return;
    }
    s.authMode = "dual-token", i[r.API_KEY_HEADER] = r.API_KEY_USE_BEARER ? `Bearer ${t}` : t, r.API_KEY_HEADER.toLowerCase() !== "authorization" && delete i.Authorization, r.API_KEY_HEADER.toLowerCase() !== "access-token" && delete i["Access-Token"];
  }
  setAuthToken(t) {
    const s = this.getInternalHeaders();
    r.API_KEY_HEADER.toLowerCase() !== "authorization" && delete s[r.API_KEY_HEADER], super.setAuthToken(t);
  }
  setAccessToken(t) {
    const s = this.getInternalHeaders();
    r.API_KEY_HEADER.toLowerCase() !== "access-token" && delete s[r.API_KEY_HEADER], super.setAccessToken(t);
  }
  setTokenManager(t) {
    const s = Object.getPrototypeOf(r.prototype);
    if (typeof s.setTokenManager == "function") {
      s.setTokenManager.call(this, t);
      return;
    }
    this.getInternalAuthConfig().tokenManager = t;
  }
  async request(t, s = {}) {
    const i = this.execute;
    if (typeof i != "function")
      throw new Error("BaseHttpClient execute method is not available");
    return u(
      () => i.call(this, {
        url: t,
        method: s.method ?? "GET",
        ...s
      }),
      { maxRetries: 3 }
    );
  }
  async get(t, s, i) {
    return this.request(t, { method: "GET", params: s, headers: i });
  }
  async post(t, s, i, c) {
    return this.request(t, { method: "POST", body: s, params: i, headers: c });
  }
  async put(t, s, i, c) {
    return this.request(t, { method: "PUT", body: s, params: i, headers: c });
  }
  async delete(t, s, i) {
    return this.request(t, { method: "DELETE", params: s, headers: i });
  }
  async patch(t, s, i, c) {
    return this.request(t, { method: "PATCH", body: s, params: i, headers: c });
  }
};
r.API_KEY_HEADER = "Authorization", r.API_KEY_USE_BEARER = !0;
let a = r;
function h(n) {
  return new a(n);
}
const o = "/app/v3/api";
function e(n) {
  if (!n)
    return o;
  if (/^https?:\/\//i.test(n))
    return n;
  const t = o.trim(), s = t ? `/${t.replace(/^\/+|\/+$/g, "")}` : "", i = n.startsWith("/") ? n : `/${n}`;
  return !s || s === "/" || i === s || i.startsWith(`${s}/`) ? i : `${s}${i}`;
}
class g {
  constructor(t) {
    this.client = t;
  }
  /** 获取工作空间详情 */
  async getWorkspaceDetail(t) {
    return this.client.get(e(`/workspaces/${t}`));
  }
  /** 更新工作空间 */
  async updateWorkspace(t, s) {
    return this.client.put(e(`/workspaces/${t}`), s);
  }
  /** 删除工作空间 */
  async deleteWorkspace(t) {
    return this.client.delete(e(`/workspaces/${t}`));
  }
  /** 获取项目详情 */
  async getProjectDetail(t, s) {
    return this.client.get(e(`/workspaces/${t}/projects/${s}`));
  }
  /** 更新项目 */
  async updateProject(t, s, i) {
    return this.client.put(e(`/workspaces/${t}/projects/${s}`), i);
  }
  /** 删除项目 */
  async deleteProject(t, s) {
    return this.client.delete(e(`/workspaces/${t}/projects/${s}`));
  }
  /** 取消归档项目 */
  async unarchiveProject(t, s) {
    return this.client.put(e(`/workspaces/${t}/projects/${s}/unarchive`));
  }
  /** 移动项目 */
  async moveProject(t, s, i) {
    return this.client.put(e(`/workspaces/${t}/projects/${s}/move`), i);
  }
  /** 归档项目 */
  async archiveProject(t, s) {
    return this.client.put(e(`/workspaces/${t}/projects/${s}/archive`));
  }
  /** 更新成员角色 */
  async updateMemberRole(t, s, i) {
    return this.client.put(e(`/workspaces/${t}/members/${s}/role`), i);
  }
  /** 获取工作空间列表 */
  async listWorkspaces() {
    return this.client.get(e("/workspaces"));
  }
  /** 创建工作空间 */
  async createWorkspace(t) {
    return this.client.post(e("/workspaces"), t);
  }
  /** 获取项目列表 */
  async listProjects(t, s) {
    return this.client.get(e(`/workspaces/${t}/projects`), s);
  }
  /** 创建项目 */
  async createProject(t, s) {
    return this.client.post(e(`/workspaces/${t}/projects`), s);
  }
  /** 复制项目 */
  async copyProject(t, s, i) {
    return this.client.post(e(`/workspaces/${t}/projects/${s}/copy`), i);
  }
  /** 获取工作空间成员 */
  async listWorkspaceMembers(t) {
    return this.client.get(e(`/workspaces/${t}/members`));
  }
  /** 邀请成员 */
  async inviteMember(t, s) {
    return this.client.post(e(`/workspaces/${t}/members`), s);
  }
  /** 获取当前工作空间 */
  async getCurrent() {
    return this.client.get(e("/workspaces/current"));
  }
  /** 移除成员 */
  async removeMember(t, s) {
    return this.client.delete(e(`/workspaces/${t}/members/${s}`));
  }
}
function p(n) {
  return new g(n);
}
class y {
  constructor(t) {
    this.client = t;
  }
  /** 获取发音人详情 */
  async getSpeakerDetail(t) {
    return this.client.get(e(`/voice-speakers/${t}`));
  }
  /** 更新发音人 */
  async updateSpeaker(t, s) {
    return this.client.put(e(`/voice-speakers/${t}`), s);
  }
  /** 删除发音人 */
  async deleteSpeaker(t) {
    return this.client.delete(e(`/voice-speakers/${t}`));
  }
  /** 获取发音人列表 */
  async listSpeakers(t) {
    return this.client.get(e("/voice-speakers"), t);
  }
  /** 创建发音人 */
  async createSpeaker(t) {
    return this.client.post(e("/voice-speakers"), t);
  }
  /** 更新发音人状态 */
  async updateStatus(t, s) {
    return this.client.post(e(`/voice-speakers/${t}/status`), void 0, s);
  }
  /** 设为默认发音人 */
  async setAsDefault(t) {
    return this.client.post(e(`/voice-speakers/${t}/set-default`));
  }
  /** 获取发音人统计 */
  async getStatistics() {
    return this.client.get(e("/voice-speakers/statistics"));
  }
  /** 获取默认发音人 */
  async getDefaultSpeaker() {
    return this.client.get(e("/voice-speakers/default"));
  }
  /** 根据代码获取发音人 */
  async getSpeakerByCode(t) {
    return this.client.get(e(`/voice-speakers/code/${t}`));
  }
  /** 获取渠道发音人 */
  async listSpeakersByChannel(t) {
    return this.client.get(e(`/voice-speakers/channel/${t}`));
  }
  /** Update speaker preview settings */
  async updatePreviewSettings(t, s) {
    return this.client.patch(e(`/voice-speakers/${t}/preview`), s);
  }
  /** List normalized market voices */
  async listMarketVoices(t) {
    return this.client.get(e("/voice-speakers/market"), t);
  }
}
function d(n) {
  return new y(n);
}
class m {
  constructor(t) {
    this.client = t;
  }
  /** 获取视频详情 */
  async getVideo(t) {
    return this.client.get(e(`/video/${t}`));
  }
  /** 更新视频 */
  async updateVideo(t, s) {
    return this.client.put(e(`/video/${t}`), s);
  }
  /** 删除视频 */
  async deleteVideo(t) {
    return this.client.delete(e(`/video/${t}`));
  }
  /** 上传视频 */
  async createVideo(t) {
    return this.client.post(e("/video"), t);
  }
  /** 发布视频 */
  async publish(t) {
    return this.client.post(e(`/video/${t}/publish`));
  }
  /** 取消发布 */
  async unpublish(t) {
    return this.client.delete(e(`/video/${t}/publish`));
  }
  /** 点赞视频 */
  async like(t) {
    return this.client.post(e(`/video/${t}/like`));
  }
  /** 取消点赞 */
  async unlike(t) {
    return this.client.delete(e(`/video/${t}/like`));
  }
  /** 收藏视频 */
  async favorite(t) {
    return this.client.post(e(`/video/${t}/favorite`));
  }
  /** 取消收藏 */
  async unfavorite(t) {
    return this.client.delete(e(`/video/${t}/favorite`));
  }
  /** 记录下载 */
  async recordDownload(t) {
    return this.client.post(e(`/video/${t}/download`));
  }
  /** 获取视频统计 */
  async getVideoStatistics() {
    return this.client.get(e("/video/statistics"));
  }
  /** 搜索视频 */
  async searchVideos(t) {
    return this.client.get(e("/video/search"), t);
  }
  /** 获取公开视频 */
  async getPublicVideos(t) {
    return this.client.get(e("/video/public"), t);
  }
  /** 获取热门视频 */
  async getPopularVideos(t) {
    return this.client.get(e("/video/popular"), t);
  }
  /** 获取最受喜爱视频 */
  async getMostLikedVideos(t) {
    return this.client.get(e("/video/liked"), t);
  }
  /** 获取收藏视频 */
  async getFavoriteVideos(t) {
    return this.client.get(e("/video/favorites"), t);
  }
}
function $(n) {
  return new m(n);
}
class v {
  constructor(t) {
    this.client = t;
  }
  /** 获取用户设置 */
  async getUserSettings() {
    return this.client.get(e("/user/settings"));
  }
  /** 更新用户设置 */
  async updateUserSettings(t) {
    return this.client.put(e("/user/settings"), t);
  }
  /** 获取用户信息 */
  async getUserProfile() {
    return this.client.get(e("/user/profile"));
  }
  /** 更新用户信息 */
  async updateUserProfile(t) {
    return this.client.put(e("/user/profile"), t);
  }
  /** 修改密码 */
  async changePassword(t) {
    return this.client.put(e("/user/password"), t);
  }
  /** 获取地址详情 */
  async getAddressDetail(t) {
    return this.client.get(e(`/user/address/${t}`));
  }
  /** 更新地址 */
  async updateAddress(t, s) {
    return this.client.put(e(`/user/address/${t}`), s);
  }
  /** 删除地址 */
  async deleteAddress(t) {
    return this.client.delete(e(`/user/address/${t}`));
  }
  /** 设置默认地址 */
  async setDefaultAddress(t) {
    return this.client.put(e(`/user/address/${t}/default`));
  }
  /** 注销账号 */
  async deactivateAccount(t) {
    return this.client.post(e("/user/deactivate"), t);
  }
  /** 绑定第三方账号 */
  async bindThirdPartyAccount(t, s) {
    return this.client.post(e(`/user/bind/${t}`), s);
  }
  /** 解绑第三方账号 */
  async unbindThirdPartyAccount(t) {
    return this.client.delete(e(`/user/bind/${t}`));
  }
  /** 上传头像 */
  async uploadAvatar(t) {
    return this.client.post(e("/user/avatar"), t);
  }
  /** 获取地址列表 */
  async listAddresses() {
    return this.client.get(e("/user/address"));
  }
  /** 创建地址 */
  async createAddress(t) {
    return this.client.post(e("/user/address"), t);
  }
  /** 获取登录历史 */
  async getLoginHistory(t) {
    return this.client.get(e("/user/history/login"), t);
  }
  /** 获取生成历史 */
  async getGenerationHistory(t) {
    return this.client.get(e("/user/history/generations"), t);
  }
  /** 获取默认地址 */
  async getDefaultAddress() {
    return this.client.get(e("/user/address/default"));
  }
}
function k(n) {
  return new v(n);
}
class f {
  constructor(t) {
    this.client = t;
  }
  /** Update tool credentials */
  async updateCredentials(t, s) {
    return this.client.put(e(`/tools/my/${t}/credentials`), s);
  }
  /** List my tools */
  async listMine() {
    return this.client.get(e("/tools/my"));
  }
  /** Install tool */
  async install(t) {
    return this.client.post(e("/tools/my"), t);
  }
  /** Test tool */
  async test(t) {
    return this.client.post(e(`/tools/market/${t}/test`));
  }
  /** List tool market */
  async listMarket(t) {
    return this.client.get(e("/tools/market"), t);
  }
  /** Get tool market item */
  async getMarketItem(t) {
    return this.client.get(e(`/tools/market/${t}`));
  }
  /** List tool categories */
  async listCategories() {
    return this.client.get(e("/tools/categories"));
  }
  /** Uninstall tool */
  async uninstall(t) {
    return this.client.delete(e(`/tools/my/${t}`));
  }
}
function w(n) {
  return new f(n);
}
class A {
  constructor(t) {
    this.client = t;
  }
  /** 获取租户详情 */
  async getTenant(t) {
    return this.client.get(e(`/tenant/${t}`));
  }
  /** 更新租户 */
  async updateTenant(t, s) {
    return this.client.put(e(`/tenant/${t}`), s);
  }
  /** 创建租户 */
  async createTenant(t) {
    return this.client.post(e("/tenant"), t);
  }
  /** 冻结租户 */
  async freeze(t) {
    return this.client.post(e(`/tenant/${t}/freeze`));
  }
  /** 注销租户 */
  async close(t) {
    return this.client.post(e(`/tenant/${t}/close`));
  }
  /** 激活租户 */
  async activate(t) {
    return this.client.post(e(`/tenant/${t}/activate`));
  }
  /** 获取租户类型列表 */
  async getTenantTypes() {
    return this.client.get(e("/tenant/types"));
  }
  /** 获取租户统计 */
  async getTenantStatistics() {
    return this.client.get(e("/tenant/statistics"));
  }
  /** 获取根租户 */
  async getRoot() {
    return this.client.get(e("/tenant/root"));
  }
  /** 获取租户列表 */
  async getTenantList(t) {
    return this.client.get(e("/tenant/list"), t);
  }
  /** 根据编码获取租户 */
  async getTenantByCode(t) {
    return this.client.get(e(`/tenant/code/${t}`));
  }
  /** 获取云租户 */
  async getCloud() {
    return this.client.get(e("/tenant/cloud"));
  }
}
function b(n) {
  return new A(n);
}
class C {
  constructor(t) {
    this.client = t;
  }
  /** 标记消息已读 */
  async markMessagesAsRead(t) {
    return this.client.put(e("/social/messages/read"), void 0, t);
  }
  /** Process friend request */
  async processFriendRequest(t, s) {
    return this.client.put(e(`/social/friend-requests/${t}/process`), s);
  }
  /** Update contact group */
  async updateContactGroup(t, s) {
    return this.client.put(e(`/social/contact-groups/${t}`), s);
  }
  /** Delete contact group */
  async deleteContactGroup(t) {
    return this.client.delete(e(`/social/contact-groups/${t}`));
  }
  /** 发送私信 */
  async sendMessage(t) {
    return this.client.post(e("/social/messages"), t);
  }
  /** List friend requests */
  async listFriendRequests() {
    return this.client.get(e("/social/friend-requests"));
  }
  /** Send friend request */
  async sendFriendRequest(t) {
    return this.client.post(e("/social/friend-requests"), t);
  }
  /** 关注用户 */
  async followUser(t) {
    return this.client.post(e(`/social/follow/${t}`));
  }
  /** 取消关注 */
  async unfollowUser(t) {
    return this.client.delete(e(`/social/follow/${t}`));
  }
  /** 批量检查关注状态 */
  async batchCheckFollowStatus(t) {
    return this.client.post(e("/social/follow/check/batch"), t);
  }
  /** List contact groups */
  async listContactGroups() {
    return this.client.get(e("/social/contact-groups"));
  }
  /** Create contact group */
  async createContactGroup(t) {
    return this.client.post(e("/social/contact-groups"), t);
  }
  /** 拉黑用户 */
  async blockUser(t) {
    return this.client.post(e(`/social/block/${t}`));
  }
  /** 取消拉黑 */
  async unblockUser(t) {
    return this.client.delete(e(`/social/block/${t}`));
  }
  /** Update friend remark */
  async updateFriendRemark(t, s) {
    return this.client.patch(e(`/social/contacts/${t}/remark`), s);
  }
  /** 获取关注统计 */
  async getFollowStats() {
    return this.client.get(e("/social/stats"));
  }
  /** 获取未读消息数 */
  async getUnreadMessageCount() {
    return this.client.get(e("/social/messages/unread/count"));
  }
  /** 获取关注列表 */
  async getFollowingList(t) {
    return this.client.get(e("/social/following"), t);
  }
  /** 获取粉丝列表 */
  async getFollowerList(t) {
    return this.client.get(e("/social/followers"), t);
  }
  /** 检查关注状态 */
  async checkFollowStatus(t) {
    return this.client.get(e("/social/follow/check"), t);
  }
  /** 获取会话列表 */
  async getConversations(t) {
    return this.client.get(e("/social/conversations"), t);
  }
  /** 获取会话消息 */
  async getConversationMessages(t, s) {
    return this.client.get(e(`/social/conversations/${t}/messages`), s);
  }
  /** List contacts */
  async listContacts(t) {
    return this.client.get(e("/social/contacts"), t);
  }
  /** Get contact detail */
  async getContactDetail(t) {
    return this.client.get(e(`/social/contacts/${t}`));
  }
  /** Delete contact */
  async deleteContact(t) {
    return this.client.delete(e(`/social/contacts/${t}`));
  }
  /** Get contact stats */
  async getContactStats() {
    return this.client.get(e("/social/contacts/stats"));
  }
  /** 获取黑名单 */
  async getBlockedUsers(t) {
    return this.client.get(e("/social/blocks"), t);
  }
  /** 检查黑名单状态 */
  async checkBlockStatus(t) {
    return this.client.get(e("/social/block/check"), t);
  }
  /** 删除会话 */
  async deleteConversation(t) {
    return this.client.delete(e(`/social/conversations/${t}`));
  }
}
function S(n) {
  return new C(n);
}
class P {
  constructor(t) {
    this.client = t;
  }
  /** Get skill detail */
  async detail(t) {
    return this.client.get(e(`/skills/${t}`));
  }
  /** Update skill */
  async update(t, s) {
    return this.client.put(e(`/skills/${t}`), s);
  }
  /** Update user skill config */
  async updateConfig(t, s) {
    return this.client.put(e(`/skills/${t}/config`), s);
  }
  /** List market skills */
  async list(t) {
    return this.client.get(e("/skills"), t);
  }
  /** Create skill */
  async create(t) {
    return this.client.post(e("/skills"), t);
  }
  /** Submit skill for review */
  async submitReview(t) {
    return this.client.post(e(`/skills/${t}/submit-review`));
  }
  /** Publish skill to market */
  async publish(t) {
    return this.client.post(e(`/skills/${t}/publish`));
  }
  /** Offline skill from market */
  async offline(t) {
    return this.client.post(e(`/skills/${t}/offline`));
  }
  /** Enable skill for current user */
  async enable(t) {
    return this.client.post(e(`/skills/${t}/enable`));
  }
  /** Disable skill for current user */
  async disable(t) {
    return this.client.post(e(`/skills/${t}/disable`));
  }
  /** List skill packages */
  async listPackages(t) {
    return this.client.get(e("/skills/packages"), t);
  }
  /** List my installed skills */
  async listMine() {
    return this.client.get(e("/skills/my"));
  }
  /** List skill categories */
  async listCategories() {
    return this.client.get(e("/skills/categories"));
  }
  /** Get skill package detail */
  async detailPackage(t) {
    return this.client.get(e(`/skills/packages/${t}`));
  }
  /** List skill reviews */
  async listReviews(t) {
    return this.client.get(e(`/skills/${t}/reviews`));
  }
}
function D(n) {
  return new P(n);
}
class T {
  constructor(t) {
    this.client = t;
  }
  /** 获取店铺详情 */
  async getShopDetail(t) {
    return this.client.get(e(`/shops/${t}`));
  }
  /** 更新店铺 */
  async updateShop(t, s) {
    return this.client.put(e(`/shops/${t}`), s);
  }
  /** 删除店铺 */
  async deleteShop(t) {
    return this.client.delete(e(`/shops/${t}`));
  }
  /** 更新店铺状态 */
  async updateStatus(t, s) {
    return this.client.put(e(`/shops/${t}/status`), void 0, s);
  }
  /** 开店营业 */
  async open(t) {
    return this.client.put(e(`/shops/${t}/open`));
  }
  /** 关店休息 */
  async close(t) {
    return this.client.put(e(`/shops/${t}/close`));
  }
  /** 获取店铺列表 */
  async listShops(t) {
    return this.client.get(e("/shops"), t);
  }
  /** 创建店铺 */
  async createShop(t) {
    return this.client.post(e("/shops"), t);
  }
  /** 获取店铺统计 */
  async getStatistics() {
    return this.client.get(e("/shops/statistics"));
  }
  /** 获取所有激活店铺 */
  async listAllActiveShops() {
    return this.client.get(e("/shops/all"));
  }
}
function M(n) {
  return new T(n);
}
class R {
  constructor(t) {
    this.client = t;
  }
  /** 更新分享设置 */
  async updateShareSettings(t, s) {
    return this.client.put(e(`/share/${t}`), s);
  }
  /** 取消分享 */
  async cancel(t) {
    return this.client.delete(e(`/share/${t}`));
  }
  /** 创建分享 */
  async createShare(t) {
    return this.client.post(e("/share"), t);
  }
  /** 访问分享 */
  async visit(t, s) {
    return this.client.post(e(`/share/${t}/visit`), s);
  }
  /** 验证分享密码 */
  async verifySharePassword(t, s) {
    return this.client.post(e(`/share/${t}/verify`), s);
  }
  /** 上报分享 */
  async track(t) {
    return this.client.post(e("/share/track"), t);
  }
  /** 生成分享海报 */
  async generateSharePoster(t) {
    return this.client.post(e("/share/poster"), t);
  }
  /** 领取邀请奖励 */
  async claimInviteReward(t) {
    return this.client.post(e(`/share/invite/rewards/${t}/claim`));
  }
  /** 生成邀请链接 */
  async generateInviteLink(t) {
    return this.client.post(e("/share/invite/link"), t);
  }
  /** 获取访问记录 */
  async getShareVisitors(t, s) {
    return this.client.get(e(`/share/${t}/visitors`), s);
  }
  /** 获取分享统计 */
  async getShareStatistics(t) {
    return this.client.get(e(`/share/${t}/statistics`));
  }
  /** 获取分享信息 */
  async getShareInfo(t, s) {
    return this.client.get(e(`/share/${t}`), s);
  }
  /** 获取分享平台配置 */
  async getSharePlatforms() {
    return this.client.get(e("/share/platforms"));
  }
  /** 获取我的分享 */
  async listMyShares(t) {
    return this.client.get(e("/share/my-shares"), t);
  }
  /** 获取邀请记录 */
  async getInviteRecords(t) {
    return this.client.get(e("/share/invite/records"), t);
  }
  /** 获取邀请信息 */
  async getInviteInfo() {
    return this.client.get(e("/share/invite/info"));
  }
  /** 批量取消分享 */
  async batchCancelShares() {
    return this.client.delete(e("/share/batch"));
  }
}
function I(n) {
  return new R(n);
}
class F {
  constructor(t) {
    this.client = t;
  }
  /** 获取模块设置 */
  async getModuleSettings(t) {
    return this.client.get(e(`/settings/${t}`));
  }
  /** 更新模块设置 */
  async updateModuleSettings(t, s) {
    return this.client.put(e(`/settings/${t}`), s);
  }
  /** 重置模块设置 */
  async resetModuleSettings(t) {
    return this.client.delete(e(`/settings/${t}`));
  }
  /** 获取界面设置 */
  async getUi() {
    return this.client.get(e("/settings/ui"));
  }
  /** 更新界面设置 */
  async updateUi(t) {
    return this.client.put(e("/settings/ui"), t);
  }
  /** 切换主题 */
  async switchTheme(t) {
    return this.client.put(e("/settings/ui/theme"), t);
  }
  /** 切换语言 */
  async switchLanguage(t) {
    return this.client.put(e("/settings/ui/language"), t);
  }
  /** 获取安全设置 */
  async getSecuritySettings() {
    return this.client.get(e("/settings/security"));
  }
  /** 更新安全设置 */
  async updateSecuritySettings(t) {
    return this.client.put(e("/settings/security"), t);
  }
  /** 修改密码 */
  async changePassword(t) {
    return this.client.put(e("/settings/security/password"), t);
  }
  /** 两步验证设置 */
  async toggleTwoFactor(t) {
    return this.client.put(e("/settings/security/2fa"), t);
  }
  /** 获取隐私设置 */
  async getPrivacySettings() {
    return this.client.get(e("/settings/privacy"));
  }
  /** 更新隐私设置 */
  async updatePrivacySettings(t) {
    return this.client.put(e("/settings/privacy"), t);
  }
  /** 导出用户数据 */
  async exportUserData(t) {
    return this.client.post(e("/settings/data/export"), t);
  }
  /** 获取所有设置 */
  async getAllSettings() {
    return this.client.get(e("/settings"));
  }
  /** 重置所有设置 */
  async resetAllSettings() {
    return this.client.delete(e("/settings"));
  }
  /** Check app version */
  async getResolvedAppVersion(t) {
    return this.client.get(e("/settings/app/version"), t);
  }
  /** 获取版本信息 */
  async getAppVersion(t) {
    return this.client.get(e("/settings/app/version/legacy"), t);
  }
  /** 获取功能开关 */
  async getFeatureFlags() {
    return this.client.get(e("/settings/app/features"));
  }
  /** 获取应用配置 */
  async getAppConfig() {
    return this.client.get(e("/settings/app/config"));
  }
  /** 清除本地数据 */
  async clearLocalData() {
    return this.client.delete(e("/settings/data/local"));
  }
  /** 清除缓存 */
  async clearCache() {
    return this.client.delete(e("/settings/cache"));
  }
  /** 删除账户 */
  async deleteAccount() {
    return this.client.delete(e("/settings/account"));
  }
}
function E(n) {
  return new F(n);
}
class U {
  constructor(t) {
    this.client = t;
  }
  /** 获取提示语详情 */
  async getPromptDetail(t) {
    return this.client.get(e(`/prompt/${t}`));
  }
  /** 更新提示语 */
  async updatePrompt(t, s) {
    return this.client.put(e(`/prompt/${t}`), s);
  }
  /** 删除提示语 */
  async deletePrompt(t) {
    return this.client.delete(e(`/prompt/${t}`));
  }
  /** 创建提示语 */
  async createPrompt(t) {
    return this.client.post(e("/prompt"), t);
  }
  /** 使用提示语 */
  async use(t) {
    return this.client.post(e(`/prompt/${t}/use`));
  }
  /** 收藏提示语 */
  async favorite(t) {
    return this.client.post(e(`/prompt/${t}/favorite`));
  }
  /** 取消收藏提示语 */
  async unfavorite(t) {
    return this.client.delete(e(`/prompt/${t}/favorite`));
  }
  /** 获取热门提示语 */
  async getPopularPrompts(t) {
    return this.client.get(e("/prompt/popular"), t);
  }
  /** 获取最受欢迎提示语 */
  async getMostFavoritedPrompts(t) {
    return this.client.get(e("/prompt/most-favorited"), t);
  }
  /** 获取提示语列表 */
  async listPrompts(t) {
    return this.client.get(e("/prompt/list"), t);
  }
  /** 获取提示语历史详情 */
  async getPromptHistoryDetail(t) {
    return this.client.get(e(`/prompt/history/${t}`));
  }
  /** 删除提示语历史 */
  async deletePromptHistory(t) {
    return this.client.delete(e(`/prompt/history/${t}`));
  }
  /** 获取提示语使用历史 */
  async listPromptHistory(t) {
    return this.client.get(e("/prompt/history/list"), t);
  }
}
function B(n) {
  return new U(n);
}
class K {
  constructor(t) {
    this.client = t;
  }
  /** 获取项目详情 */
  async getProjectDetail(t) {
    return this.client.get(e(`/projects/${t}`));
  }
  /** 更新项目 */
  async updateProject(t, s) {
    return this.client.put(e(`/projects/${t}`), s);
  }
  /** 删除项目 */
  async deleteProject(t) {
    return this.client.delete(e(`/projects/${t}`));
  }
  /** 取消归档项目 */
  async unarchive(t) {
    return this.client.put(e(`/projects/${t}/unarchive`));
  }
  /** 移动项目 */
  async move(t, s) {
    return this.client.put(e(`/projects/${t}/move`), s);
  }
  /** 归档项目 */
  async archive(t) {
    return this.client.put(e(`/projects/${t}/archive`));
  }
  /** 获取项目列表 */
  async listProjects(t) {
    return this.client.get(e("/projects"), t);
  }
  /** 创建项目 */
  async createProject(t) {
    return this.client.post(e("/projects"), t);
  }
  /** 复制项目 */
  async copy(t, s) {
    return this.client.post(e(`/projects/${t}/copy`), s);
  }
  /** 项目统计 */
  async getProjectStatistics(t) {
    return this.client.get(e(`/projects/${t}/statistics`));
  }
  /** 搜索项目 */
  async searchProjects(t) {
    return this.client.get(e("/projects/search"), t);
  }
  /** 最近访问项目 */
  async listRecentProjects(t) {
    return this.client.get(e("/projects/recent"), t);
  }
}
function x(n) {
  return new K(n);
}
class j {
  constructor(t) {
    this.client = t;
  }
  /** 更新商品属性 */
  async updateProductAttribute(t, s, i) {
    return this.client.put(e(`/products/${t}/attributes/${s}`), i);
  }
  /** 删除商品属性 */
  async deleteProductAttribute(t, s) {
    return this.client.delete(e(`/products/${t}/attributes/${s}`));
  }
  /** 更新商品分类 */
  async updateProductCategory(t, s) {
    return this.client.put(e(`/products/categories/${t}`), s);
  }
  /** 删除商品分类 */
  async deleteProductCategory(t) {
    return this.client.delete(e(`/products/categories/${t}`));
  }
  /** 获取商品属性 */
  async listProductAttributes(t) {
    return this.client.get(e(`/products/${t}/attributes`));
  }
  /** 创建商品属性 */
  async createProductAttribute(t, s) {
    return this.client.post(e(`/products/${t}/attributes`), s);
  }
  /** 获取商品分类列表 */
  async listProductCategories(t) {
    return this.client.get(e("/products/categories"), t);
  }
  /** 创建商品分类 */
  async createProductCategory(t) {
    return this.client.post(e("/products/categories"), t);
  }
  /** 获取商品列表 */
  async getProducts(t) {
    return this.client.get(e("/products"), t);
  }
  /** Create product */
  async createProduct(t) {
    return this.client.post(e("/products"), t);
  }
  /** 获取商品详情 */
  async getProductDetail(t) {
    return this.client.get(e(`/products/${t}`));
  }
  /** Update product */
  async updateProduct(t, s) {
    return this.client.put(e(`/products/${t}`), s);
  }
  /** 获取商品库存 */
  async getProductStock(t) {
    return this.client.get(e(`/products/${t}/stock`));
  }
  /** 获取商品统计 */
  async getProductStatistics(t) {
    return this.client.get(e(`/products/${t}/statistics`));
  }
  /** 获取SPU详情 */
  async getSpuDetail(t) {
    return this.client.get(e(`/products/${t}/spu`));
  }
  /** 获取商品SKU列表 */
  async getProductSkus(t, s) {
    return this.client.get(e(`/products/${t}/skus`), s);
  }
  /** 检查商品库存 */
  async checkProductStock(t, s) {
    return this.client.get(e(`/products/${t}/check-stock`), s);
  }
  /** 搜索商品 */
  async searchProducts(t) {
    return this.client.get(e("/products/search"), t);
  }
  /** 获取最新商品 */
  async getLatestProducts(t) {
    return this.client.get(e("/products/latest"), t);
  }
  /** 获取热门商品 */
  async getHotProducts(t) {
    return this.client.get(e("/products/hot"), t);
  }
  /** 按编码获取商品 */
  async getProductByCode(t) {
    return this.client.get(e(`/products/code/${t}`));
  }
  /** 按分类获取商品 */
  async getProductsByCategory(t, s) {
    return this.client.get(e(`/products/category/${t}`), s);
  }
  /** 获取分类属性 */
  async listCategoryAttributes(t) {
    return this.client.get(e(`/products/categories/${t}/attributes`));
  }
  /** 获取商品分类树 */
  async getProductCategoryTree() {
    return this.client.get(e("/products/categories/tree"));
  }
  /** Update product status */
  async updateProductStatus(t, s) {
    return this.client.put(e(`/products/${t}/status`), s);
  }
  /** Adjust product stock */
  async adjustStock(t, s) {
    return this.client.post(e(`/products/${t}/stock/adjust`), s);
  }
  /** List product stock logs */
  async listStockLogs(t, s) {
    return this.client.get(e(`/products/${t}/stock/logs`), s);
  }
}
function L(n) {
  return new j(n);
}
class O {
  constructor(t) {
    this.client = t;
  }
  /** Get partner details */
  async getPartner(t) {
    return this.client.get(e(`/partner/${t}`));
  }
  /** Update partner */
  async updatePartner(t, s) {
    return this.client.put(e(`/partner/${t}`), s);
  }
  /** Delete partner */
  async deletePartner(t) {
    return this.client.delete(e(`/partner/${t}`));
  }
  /** Apply to become a partner */
  async createPartner(t) {
    return this.client.post(e("/partner"), t);
  }
  /** Withdraw commission */
  async withdrawCommission(t, s) {
    return this.client.post(e(`/partner/${t}/withdraw`), s);
  }
  /** Reject partner */
  async reject(t) {
    return this.client.post(e(`/partner/${t}/reject`));
  }
  /** Add commission */
  async addCommission(t, s) {
    return this.client.post(e(`/partner/${t}/commission`), s);
  }
  /** Approve partner */
  async approve(t) {
    return this.client.post(e(`/partner/${t}/approve`));
  }
  /** Get subordinate partners */
  async getSubordinates(t, s) {
    return this.client.get(e(`/partner/subordinates/${t}`), s);
  }
  /** Get partner statistics */
  async getPartnerStatistics() {
    return this.client.get(e("/partner/statistics"));
  }
  /** Search partners */
  async searchPartners(t) {
    return this.client.get(e("/partner/search"), t);
  }
  /** Get my partner profile */
  async getMy() {
    return this.client.get(e("/partner/my"));
  }
  /** Get partner by promotion code */
  async getByPromotionCode(t) {
    return this.client.get(e(`/partner/code/${t}`));
  }
}
function V(n) {
  return new O(n);
}
class z {
  constructor(t) {
    this.client = t;
  }
  /** Mark notification as unread */
  async markAsUnread(t) {
    return this.client.put(e(`/notification/${t}/unread`));
  }
  /** Mark notification as read */
  async markAsRead(t) {
    return this.client.put(e(`/notification/${t}/read`));
  }
  /** Get notification settings */
  async getNotificationSettings() {
    return this.client.get(e("/notification/settings"));
  }
  /** Update notification settings */
  async updateNotificationSettings(t) {
    return this.client.put(e("/notification/settings"), t);
  }
  /** Update type settings */
  async updateTypeSettings(t, s) {
    return this.client.put(e(`/notification/settings/${t}`), s);
  }
  /** Mark all notifications as read */
  async markAllAsRead(t) {
    return this.client.put(e("/notification/read/all"), void 0, t);
  }
  /** Update device status */
  async updateDeviceStatus(t, s) {
    return this.client.put(e(`/notification/devices/${t}/status`), s);
  }
  /** Batch mark notifications as read */
  async batchMarkAsRead(t) {
    return this.client.put(e("/notification/batch/read"), t);
  }
  /** Send test notification */
  async sendTest(t) {
    return this.client.post(e("/notification/test"), t);
  }
  /** List subscriptions */
  async listSubscriptions() {
    return this.client.get(e("/notification/subscriptions"));
  }
  /** Subscribe topic */
  async subscribeTopic(t) {
    return this.client.post(e("/notification/subscriptions"), t);
  }
  /** List devices */
  async listDevices() {
    return this.client.get(e("/notification/devices"));
  }
  /** Register device */
  async registerDevice(t) {
    return this.client.post(e("/notification/devices"), t);
  }
  /** List device messages */
  async listDeviceMessages(t, s) {
    return this.client.get(e(`/notification/devices/${t}/messages`), s);
  }
  /** Send device message */
  async sendDeviceMessage(t, s) {
    return this.client.post(e(`/notification/devices/${t}/messages`), s);
  }
  /** Control device */
  async controlDevice(t, s) {
    return this.client.post(e(`/notification/devices/${t}/control`), s);
  }
  /** List notifications */
  async listNotifications(t) {
    return this.client.get(e("/notification"), t);
  }
  /** Get notification detail */
  async getNotificationDetail(t) {
    return this.client.get(e(`/notification/${t}`));
  }
  /** Delete notification */
  async deleteNotification(t) {
    return this.client.delete(e(`/notification/${t}`));
  }
  /** Get unread notification count */
  async getUnreadCount() {
    return this.client.get(e("/notification/unread/count"));
  }
  /** List notification types */
  async listNotificationTypes() {
    return this.client.get(e("/notification/types"));
  }
  /** Unsubscribe topic */
  async unsubscribeTopic(t) {
    return this.client.delete(e(`/notification/subscriptions/${t}`));
  }
  /** Unregister device */
  async unregisterDevice(t) {
    return this.client.delete(e(`/notification/devices/${t}`));
  }
  /** Clear notifications */
  async clearAllNotifications(t) {
    return this.client.delete(e("/notification/clear"), t);
  }
  /** Batch delete notifications */
  async batchDeleteNotifications() {
    return this.client.delete(e("/notification/batch"));
  }
}
function H(n) {
  return new z(n);
}
class N {
  constructor(t) {
    this.client = t;
  }
  /** Notes API */
  async getNoteDetail(t) {
    return this.client.get(e(`/notes/${t}`));
  }
  /** Notes API */
  async updateNote(t, s) {
    return this.client.put(e(`/notes/${t}`), s);
  }
  /** Notes API */
  async deleteNote(t) {
    return this.client.delete(e(`/notes/${t}`));
  }
  /** Notes API */
  async restore(t) {
    return this.client.put(e(`/notes/${t}/restore`));
  }
  /** Notes API */
  async move(t, s) {
    return this.client.put(e(`/notes/${t}/move`), s);
  }
  /** Notes API */
  async getNoteContent(t) {
    return this.client.get(e(`/notes/${t}/content`));
  }
  /** Notes API */
  async updateNoteContent(t, s) {
    return this.client.put(e(`/notes/${t}/content`), s);
  }
  /** Notes API */
  async archive(t) {
    return this.client.put(e(`/notes/${t}/archive`));
  }
  /** Notes API */
  async updateFolder(t, s) {
    return this.client.put(e(`/notes/folders/${t}`), s);
  }
  /** Notes API */
  async deleteFolder(t) {
    return this.client.delete(e(`/notes/folders/${t}`));
  }
  /** Notes API */
  async listNotes(t) {
    return this.client.get(e("/notes"), t);
  }
  /** Notes API */
  async createNote(t) {
    return this.client.post(e("/notes"), t);
  }
  /** Notes API */
  async favorite(t) {
    return this.client.post(e(`/notes/${t}/favorite`));
  }
  /** Notes API */
  async unfavorite(t) {
    return this.client.delete(e(`/notes/${t}/favorite`));
  }
  /** Notes API */
  async copy(t, s) {
    return this.client.post(e(`/notes/${t}/copy`), s);
  }
  /** Notes API */
  async batchUpdate(t, s) {
    return this.client.post(e(`/notes/${t}/batch-update`), s);
  }
  /** Notes API */
  async createBatchUpdate(t, s) {
    return this.client.post(e(`/notes/${t}:batchUpdate`), s);
  }
  /** Notes API */
  async listFolders() {
    return this.client.get(e("/notes/folders"));
  }
  /** Notes API */
  async createFolder(t) {
    return this.client.post(e("/notes/folders"), t);
  }
  /** Notes API */
  async getNoteStatistics() {
    return this.client.get(e("/notes/statistics"));
  }
  /** Notes API */
  async permanentlyDelete(t) {
    return this.client.delete(e(`/notes/${t}/permanent`));
  }
  /** Notes API */
  async clearTrash() {
    return this.client.delete(e("/notes/trash"));
  }
  /** Notes API */
  async batchDeleteNotes() {
    return this.client.delete(e("/notes/batch"));
  }
  /** Notes API */
  async deleteBatchNotes() {
    return this.client.delete(e("/notes/batch-delete"));
  }
}
function G(n) {
  return new N(n);
}
class _ {
  constructor(t) {
    this.client = t;
  }
  /** 获取新闻详情 */
  async getNews(t) {
    return this.client.get(e(`/news/${t}`));
  }
  /** 更新新闻 */
  async updateNews(t, s) {
    return this.client.put(e(`/news/${t}`), s);
  }
  /** 删除新闻 */
  async deleteNews(t) {
    return this.client.delete(e(`/news/${t}`));
  }
  /** 创建新闻 */
  async createNews(t) {
    return this.client.post(e("/news"), t);
  }
  /** 搜索新闻 */
  async search(t) {
    return this.client.get(e("/news/search"), t);
  }
  /** 获取我的新闻 */
  async getMy(t) {
    return this.client.get(e("/news/my"), t);
  }
  /** 获取最新新闻 */
  async getLatest(t) {
    return this.client.get(e("/news/latest"), t);
  }
  /** 获取分类新闻 */
  async getCategory(t, s) {
    return this.client.get(e(`/news/category/${t}`), s);
  }
}
function q(n) {
  return new _(n);
}
class W {
  constructor(t) {
    this.client = t;
  }
  /** 获取音乐详情 */
  async getMusic(t) {
    return this.client.get(e(`/music/${t}`));
  }
  /** 更新音乐 */
  async updateMusic(t, s) {
    return this.client.put(e(`/music/${t}`), s);
  }
  /** 删除音乐 */
  async deleteMusic(t) {
    return this.client.delete(e(`/music/${t}`));
  }
  /** 上传音乐 */
  async createMusic(t) {
    return this.client.post(e("/music"), t);
  }
  /** 发布音乐 */
  async publish(t) {
    return this.client.post(e(`/music/${t}/publish`));
  }
  /** 取消发布 */
  async unpublish(t) {
    return this.client.delete(e(`/music/${t}/publish`));
  }
  /** 点赞音乐 */
  async like(t) {
    return this.client.post(e(`/music/${t}/like`));
  }
  /** 取消点赞 */
  async unlike(t) {
    return this.client.delete(e(`/music/${t}/like`));
  }
  /** 收藏音乐 */
  async favorite(t) {
    return this.client.post(e(`/music/${t}/favorite`));
  }
  /** 取消收藏 */
  async unfavorite(t) {
    return this.client.delete(e(`/music/${t}/favorite`));
  }
  /** 记录下载 */
  async recordDownload(t) {
    return this.client.post(e(`/music/${t}/download`));
  }
  /** 获取音乐统计 */
  async getMusicStatistics() {
    return this.client.get(e("/music/statistics"));
  }
  /** 搜索音乐 */
  async search(t) {
    return this.client.get(e("/music/search"), t);
  }
  /** 获取公开音乐 */
  async getPublic(t) {
    return this.client.get(e("/music/public"), t);
  }
  /** 获取热门音乐 */
  async getPopular(t) {
    return this.client.get(e("/music/popular"), t);
  }
  /** 获取最受喜爱音乐 */
  async getMostLiked(t) {
    return this.client.get(e("/music/liked"), t);
  }
  /** 获取收藏音乐 */
  async getFavorite(t) {
    return this.client.get(e("/music/favorites"), t);
  }
}
function Y(n) {
  return new W(n);
}
class Q {
  constructor(t) {
    this.client = t;
  }
  /** Restore knowledge document */
  async restoreKnowledgeDocument(t, s) {
    return this.client.put(e(`/knowledge_base/${t}/documents/${s}/restore`));
  }
  /** Restore knowledge document */
  async updateRestoreKnowledgeDocument(t, s) {
    return this.client.put(e(`/knowledge-bases/${t}/documents/${s}/restore`));
  }
  /** Get knowledge document content */
  async getKnowledgeDocumentContent(t, s) {
    return this.client.get(e(`/knowledge-bases/${t}/documents/${s}/content`));
  }
  /** Update knowledge document content */
  async updateKnowledgeDocumentContent(t, s, i) {
    return this.client.put(e(`/knowledge-bases/${t}/documents/${s}/content`), i);
  }
  /** Get knowledge document content */
  async getKnowledgeDocumentContentKnowledgeBase(t, s) {
    return this.client.get(e(`/knowledge_base/${t}/documents/${s}/content`));
  }
  /** Update knowledge document content */
  async updateKnowledgeDocumentContentKnowledgeBase(t, s, i) {
    return this.client.put(e(`/knowledge_base/${t}/documents/${s}/content`), i);
  }
  /** Archive knowledge document */
  async archiveKnowledgeDocument(t, s) {
    return this.client.put(e(`/knowledge_base/${t}/documents/${s}/archive`));
  }
  /** Archive knowledge document */
  async updateArchiveKnowledgeDocument(t, s) {
    return this.client.put(e(`/knowledge-bases/${t}/documents/${s}/archive`));
  }
  /** Get knowledge document detail */
  async getKnowledgeDocumentDetail(t, s) {
    return this.client.get(e(`/knowledge-bases/${t}/documents/${s}`));
  }
  /** Update knowledge document metadata */
  async updateKnowledgeDocument(t, s, i) {
    return this.client.put(e(`/knowledge-bases/${t}/documents/${s}`), i);
  }
  /** Delete knowledge document */
  async deleteKnowledgeDocument(t, s) {
    return this.client.delete(e(`/knowledge-bases/${t}/documents/${s}`));
  }
  /** Get knowledge document detail */
  async getKnowledgeDocumentDetailKnowledgeBase(t, s) {
    return this.client.get(e(`/knowledge_base/${t}/documents/${s}`));
  }
  /** Update knowledge document metadata */
  async updateKnowledgeDocumentKnowledgeBase(t, s, i) {
    return this.client.put(e(`/knowledge_base/${t}/documents/${s}`), i);
  }
  /** Delete knowledge document */
  async deleteKnowledgeDocumentKnowledgeBase(t, s) {
    return this.client.delete(e(`/knowledge_base/${t}/documents/${s}`));
  }
  /** Favorite knowledge document */
  async favoriteKnowledgeDocument(t, s) {
    return this.client.post(e(`/knowledge-bases/${t}/documents/${s}/favorite`));
  }
  /** Unfavorite knowledge document */
  async unfavoriteKnowledgeDocument(t, s) {
    return this.client.delete(e(`/knowledge-bases/${t}/documents/${s}/favorite`));
  }
  /** Favorite knowledge document */
  async createFavoriteKnowledgeDocument(t, s) {
    return this.client.post(e(`/knowledge_base/${t}/documents/${s}/favorite`));
  }
  /** Unfavorite knowledge document */
  async deleteUnfavoriteKnowledgeDocument(t, s) {
    return this.client.delete(e(`/knowledge_base/${t}/documents/${s}/favorite`));
  }
  /** Copy knowledge document */
  async copyKnowledgeDocument(t, s, i) {
    return this.client.post(e(`/knowledge_base/${t}/documents/${s}/copy`), i);
  }
  /** Copy knowledge document */
  async createCopyKnowledgeDocument(t, s, i) {
    return this.client.post(e(`/knowledge-bases/${t}/documents/${s}/copy`), i);
  }
  /** Batch update knowledge document */
  async batchUpdateKnowledgeDocument(t, s, i) {
    return this.client.post(e(`/knowledge-bases/${t}/documents/${s}/batch-update`), i);
  }
  /** Batch update knowledge document */
  async createBatchUpdateKnowledgeDocument(t, s, i) {
    return this.client.post(e(`/knowledge_base/${t}/documents/${s}:batchUpdate`), i);
  }
  /** Batch update knowledge document */
  async createBatchUpdateKnowledgeDocumentDocumentIdBatchUpdate(t, s, i) {
    return this.client.post(e(`/knowledge-bases/${t}/documents/${s}:batchUpdate`), i);
  }
  /** Batch update knowledge document */
  async createBatchUpdateKnowledgeDocumentBatchUpdate(t, s, i) {
    return this.client.post(e(`/knowledge_base/${t}/documents/${s}/batch-update`), i);
  }
  /** List knowledge documents */
  async listKnowledgeDocuments(t, s) {
    return this.client.get(e(`/knowledge-bases/${t}/documents`), s);
  }
  /** Create knowledge document */
  async createKnowledgeDocument(t, s) {
    return this.client.post(e(`/knowledge-bases/${t}/documents`), s);
  }
  /** List knowledge documents */
  async getListKnowledgeDocuments(t, s) {
    return this.client.get(e(`/knowledge_base/${t}/documents`), s);
  }
  /** Create knowledge document */
  async createKnowledgeDocumentKnowledgeBase(t, s) {
    return this.client.post(e(`/knowledge_base/${t}/documents`), s);
  }
  /** Batch delete knowledge documents */
  async batchDeleteKnowledgeDocuments(t) {
    return this.client.delete(e(`/knowledge-bases/${t}/documents/batch-delete`));
  }
  /** Batch delete knowledge documents */
  async deleteBatchKnowledgeDocuments(t) {
    return this.client.delete(e(`/knowledge_base/${t}/documents/batch`));
  }
  /** Batch delete knowledge documents */
  async deleteBatchKnowledgeDocumentsBatchDelete(t) {
    return this.client.delete(e(`/knowledge_base/${t}/documents/batch-delete`));
  }
  /** Batch delete knowledge documents */
  async deleteBatchKnowledgeDocumentsKnowledgeBases(t) {
    return this.client.delete(e(`/knowledge-bases/${t}/documents/batch`));
  }
}
function X(n) {
  return new Q(n);
}
class J {
  constructor(t) {
    this.client = t;
  }
  /** 获取发票详情 */
  async getInvoice(t) {
    return this.client.get(e(`/invoice/${t}`));
  }
  /** 更新发票 */
  async updateInvoice(t, s) {
    return this.client.put(e(`/invoice/${t}`), s);
  }
  /** 创建发票 */
  async createInvoice(t) {
    return this.client.post(e("/invoice"), t);
  }
  /** 提交发票 */
  async submit(t) {
    return this.client.post(e(`/invoice/${t}/submit`));
  }
  /** 作废发票 */
  async cancel(t, s) {
    return this.client.post(e(`/invoice/${t}/cancel`), s);
  }
  /** 获取发票明细 */
  async getInvoiceItems(t) {
    return this.client.get(e(`/invoice/${t}/items`));
  }
  /** 获取发票统计 */
  async getInvoiceStatistics() {
    return this.client.get(e("/invoice/statistics"));
  }
  /** 搜索发票 */
  async searchInvoices(t) {
    return this.client.get(e("/invoice/search"), t);
  }
  /** 获取我的发票 */
  async getMyInvoices(t) {
    return this.client.get(e("/invoice/my"), t);
  }
}
function Z(n) {
  return new J(n);
}
class tt {
  constructor(t) {
    this.client = t;
  }
  /** 获取图片详情 */
  async getImage(t) {
    return this.client.get(e(`/image/${t}`));
  }
  /** 更新图片 */
  async updateImage(t, s) {
    return this.client.put(e(`/image/${t}`), s);
  }
  /** 删除图片 */
  async deleteImage(t) {
    return this.client.delete(e(`/image/${t}`));
  }
  /** 上传图片 */
  async createImage(t) {
    return this.client.post(e("/image"), t);
  }
  /** 点赞图片 */
  async like(t) {
    return this.client.post(e(`/image/${t}/like`));
  }
  /** 取消点赞 */
  async unlike(t) {
    return this.client.delete(e(`/image/${t}/like`));
  }
  /** 收藏图片 */
  async favorite(t) {
    return this.client.post(e(`/image/${t}/favorite`));
  }
  /** 取消收藏 */
  async unfavorite(t) {
    return this.client.delete(e(`/image/${t}/favorite`));
  }
  /** 记录下载 */
  async recordDownload(t) {
    return this.client.post(e(`/image/${t}/download`));
  }
  /** 获取图片统计 */
  async getImageStatistics() {
    return this.client.get(e("/image/statistics"));
  }
  /** 搜索图片 */
  async searchImages(t) {
    return this.client.get(e("/image/search"), t);
  }
  /** 获取公开图片 */
  async getPublicImages(t) {
    return this.client.get(e("/image/public"), t);
  }
  /** 获取热门图片 */
  async getPopularImages(t) {
    return this.client.get(e("/image/popular"), t);
  }
  /** 获取最受喜爱图片 */
  async getMostLikedImages(t) {
    return this.client.get(e("/image/liked"), t);
  }
  /** 获取收藏图片 */
  async getFavoriteImages(t) {
    return this.client.get(e("/image/favorites"), t);
  }
}
function et(n) {
  return new tt(n);
}
class st {
  constructor(t) {
    this.client = t;
  }
  /** 获取风格详情 */
  async getStyle(t) {
    return this.client.get(e(`/generation/style/${t}`));
  }
  /** 更新风格 */
  async updateStyle(t, s) {
    return this.client.put(e(`/generation/style/${t}`), s);
  }
  /** 删除风格 */
  async deleteStyle(t) {
    return this.client.delete(e(`/generation/style/${t}`));
  }
  /** Create voice speaker task */
  async createGeneration(t) {
    return this.client.post(e("/generation/voice-speaker"), t);
  }
  /** Clone speaker */
  async cloneSpeaker(t) {
    return this.client.post(e("/generation/voice-speaker/clone"), t);
  }
  /** Create video task */
  async createGenerationVideo(t) {
    return this.client.post(e("/generation/video"), t);
  }
  /** Style transfer */
  async styleTransfer(t) {
    return this.client.post(e("/generation/video/style-transfer"), t);
  }
  /** Create image-to-video task */
  async imageToVideo(t) {
    return this.client.post(e("/generation/video/image-to-video"), t);
  }
  /** Extend video */
  async extendVideo(t) {
    return this.client.post(e("/generation/video/extend"), t);
  }
  /** 创建风格 */
  async createStyle(t) {
    return this.client.post(e("/generation/style"), t);
  }
  /** 发布风格 */
  async publishStyle(t) {
    return this.client.post(e(`/generation/style/${t}/publish`));
  }
  /** 取消发布 */
  async unpublishStyle(t) {
    return this.client.delete(e(`/generation/style/${t}/publish`));
  }
  /** 停用风格 */
  async deactivateStyle(t) {
    return this.client.post(e(`/generation/style/${t}/deactivate`));
  }
  /** 激活风格 */
  async activateStyle(t) {
    return this.client.post(e(`/generation/style/${t}/activate`));
  }
  /** Create sound effect task */
  async createGenerationSoundEffect(t) {
    return this.client.post(e("/generation/sound-effect"), t);
  }
  /** Enhance generation prompt */
  async enhanceGenerationPrompt(t) {
    return this.client.post(e("/generation/prompt/enhance"), t);
  }
  /** Create music task */
  async createGenerationMusic(t) {
    return this.client.post(e("/generation/music"), t);
  }
  /** Generate similar music */
  async generateSimilar(t) {
    return this.client.post(e("/generation/music/similar"), t);
  }
  /** Remix music */
  async remixMusic(t) {
    return this.client.post(e("/generation/music/remix"), t);
  }
  /** Extend music */
  async extendMusic(t) {
    return this.client.post(e("/generation/music/extend"), t);
  }
  /** Create image task */
  async createGenerationImage(t) {
    return this.client.post(e("/generation/image"), t);
  }
  /** Create image variation */
  async createVariation(t) {
    return this.client.post(e("/generation/image/variations"), t);
  }
  /** Create image upscale */
  async upscaleImage(t) {
    return this.client.post(e("/generation/image/upscale"), t);
  }
  /** Create image edit */
  async editImage(t) {
    return this.client.post(e("/generation/image/edits"), t);
  }
  /** Create character task */
  async createGenerationCharacter(t) {
    return this.client.post(e("/generation/character"), t);
  }
  /** Batch create character tasks */
  async batchCreate(t) {
    return this.client.post(e("/generation/character/batch"), t);
  }
  /** Create voice clone task */
  async voiceClone(t) {
    return this.client.post(e("/generation/audio/voice-clone"), t);
  }
  /** Create TTS task */
  async textToSpeech(t) {
    return this.client.post(e("/generation/audio/tts"), t);
  }
  /** Create translation task */
  async audioTranslation(t) {
    return this.client.post(e("/generation/audio/translation"), t);
  }
  /** Create transcription task */
  async audioTranscription(t) {
    return this.client.post(e("/generation/audio/transcription"), t);
  }
  /** Get speaker detail */
  async getSpeakerDetail(t) {
    return this.client.get(e(`/generation/voice-speaker/${t}`));
  }
  /** Delete speaker */
  async deleteSpeaker(t) {
    return this.client.delete(e(`/generation/voice-speaker/${t}`));
  }
  /** List tasks */
  async getListTasks(t) {
    return this.client.get(e("/generation/voice-speaker/tasks"), t);
  }
  /** Get task status */
  async getTaskStatus(t) {
    return this.client.get(e(`/generation/voice-speaker/tasks/${t}`));
  }
  /** Cancel task */
  async deleteCancelTask(t) {
    return this.client.delete(e(`/generation/voice-speaker/tasks/${t}`));
  }
  /** List speakers */
  async listSpeakers(t) {
    return this.client.get(e("/generation/voice-speaker/list"), t);
  }
  /** List tasks */
  async getListTasksVideo(t) {
    return this.client.get(e("/generation/video/tasks"), t);
  }
  /** Get task status */
  async getTaskStatusVideo(t) {
    return this.client.get(e(`/generation/video/tasks/${t}`));
  }
  /** Cancel task */
  async deleteCancelTaskVideo(t) {
    return this.client.delete(e(`/generation/video/tasks/${t}`));
  }
  /** 获取风格类型列表 */
  async getStyleTypes() {
    return this.client.get(e("/generation/style/types"));
  }
  /** 获取风格统计 */
  async getStyleStatistics() {
    return this.client.get(e("/generation/style/statistics"));
  }
  /** 搜索风格 */
  async searchStyles(t) {
    return this.client.get(e("/generation/style/search"), t);
  }
  /** 获取公开风格 */
  async getPublicStyles(t) {
    return this.client.get(e("/generation/style/public"), t);
  }
  /** 获取热门风格 */
  async getPopularStyles(t) {
    return this.client.get(e("/generation/style/popular"), t);
  }
  /** 获取我的风格 */
  async getMyStyles(t) {
    return this.client.get(e("/generation/style/my"), t);
  }
  /** Get sound effect detail */
  async getEffectDetail(t) {
    return this.client.get(e(`/generation/sound-effect/${t}`));
  }
  /** List tasks */
  async getListTasksSoundEffect(t) {
    return this.client.get(e("/generation/sound-effect/tasks"), t);
  }
  /** Get task status */
  async getTaskStatusSoundEffect(t) {
    return this.client.get(e(`/generation/sound-effect/tasks/${t}`));
  }
  /** Cancel task */
  async deleteCancelTaskSoundEffect(t) {
    return this.client.delete(e(`/generation/sound-effect/tasks/${t}`));
  }
  /** Get sound effect categories */
  async getCategories(t) {
    return this.client.get(e("/generation/sound-effect/categories"), t);
  }
  /** List tasks */
  async getListTasksMusic(t) {
    return this.client.get(e("/generation/music/tasks"), t);
  }
  /** Get task status */
  async getTaskStatusMusic(t) {
    return this.client.get(e(`/generation/music/tasks/${t}`));
  }
  /** Cancel task */
  async deleteCancelTaskMusic(t) {
    return this.client.delete(e(`/generation/music/tasks/${t}`));
  }
  /** Get music styles */
  async getMusicStyles(t) {
    return this.client.get(e("/generation/music/styles"), t);
  }
  /** List tasks */
  async getListTasksImage(t) {
    return this.client.get(e("/generation/image/tasks"), t);
  }
  /** Get task status */
  async getTaskStatusImage(t) {
    return this.client.get(e(`/generation/image/tasks/${t}`));
  }
  /** Cancel task */
  async deleteCancelTaskImage(t) {
    return this.client.delete(e(`/generation/image/tasks/${t}`));
  }
  /** Get character detail */
  async getCharacterDetail(t) {
    return this.client.get(e(`/generation/character/${t}`));
  }
  /** List tasks */
  async getListTasksCharacter(t) {
    return this.client.get(e("/generation/character/tasks"), t);
  }
  /** Get task status */
  async getTaskStatusCharacter(t) {
    return this.client.get(e(`/generation/character/tasks/${t}`));
  }
  /** Cancel task */
  async deleteCancelTaskCharacter(t) {
    return this.client.delete(e(`/generation/character/tasks/${t}`));
  }
  /** List characters */
  async listCharacters(t) {
    return this.client.get(e("/generation/character/list"), t);
  }
  /** Get voice list */
  async getVoiceList(t) {
    return this.client.get(e("/generation/audio/voices"), t);
  }
  /** Get transcription task */
  async getTranscriptionResult(t) {
    return this.client.get(e(`/generation/audio/transcription/${t}`));
  }
  /** List tasks */
  async getListTasksAudio(t) {
    return this.client.get(e("/generation/audio/tasks"), t);
  }
  /** Get task status */
  async getTaskStatusAudio(t) {
    return this.client.get(e(`/generation/audio/tasks/${t}`));
  }
  /** Cancel task */
  async deleteCancelTaskAudio(t) {
    return this.client.delete(e(`/generation/audio/tasks/${t}`));
  }
  /** Clone voice speaker from workspace asset */
  async cloneFromAsset(t) {
    return this.client.post(e("/generation/voice-speaker/clone-from-asset"), t);
  }
  /** Get deterministic clone task result */
  async getCloneTaskResult(t) {
    return this.client.get(e(`/generation/voice-speaker/tasks/${t}/result`));
  }
}
function nt(n) {
  return new st(n);
}
class it {
  constructor(t) {
    this.client = t;
  }
  /** Rename node */
  async renameNode(t, s) {
    return this.client.put(e(`/filesystem/nodes/${t}/rename`), s);
  }
  /** Move node */
  async moveNode(t, s) {
    return this.client.put(e(`/filesystem/nodes/${t}/move`), s);
  }
  /** Get file content */
  async getFileContent(t) {
    return this.client.get(e(`/filesystem/files/${t}/content`));
  }
  /** Update file content */
  async updateFileContent(t, s) {
    return this.client.put(e(`/filesystem/files/${t}/content`), s);
  }
  /** Copy node */
  async copyNode(t, s) {
    return this.client.post(e(`/filesystem/nodes/${t}/copy`), s);
  }
  /** Create folder */
  async createFolder(t) {
    return this.client.post(e("/filesystem/folders"), t);
  }
  /** Create file */
  async createFile(t) {
    return this.client.post(e("/filesystem/files"), t);
  }
  /** List nodes */
  async listNodes(t) {
    return this.client.get(e("/filesystem/nodes"), t);
  }
  /** Get node detail */
  async getNodeDetail(t) {
    return this.client.get(e(`/filesystem/nodes/${t}`));
  }
  /** Delete node */
  async deleteNode(t) {
    return this.client.delete(e(`/filesystem/nodes/${t}`));
  }
  /** List disks */
  async listDisks() {
    return this.client.get(e("/filesystem/disks"));
  }
  /** Get primary disk */
  async getPrimaryDisk() {
    return this.client.get(e("/filesystem/disks/default"));
  }
}
function rt(n) {
  return new it(n);
}
class ct {
  constructor(t) {
    this.client = t;
  }
  /** 关闭反馈 */
  async close(t, s) {
    return this.client.put(e(`/feedback/${t}/close`), void 0, s);
  }
  /** 反馈列表 */
  async listFeedback(t) {
    return this.client.get(e("/feedback"), t);
  }
  /** 提交反馈 */
  async submit(t) {
    return this.client.post(e("/feedback"), t);
  }
  /** 追加反馈 */
  async followUp(t, s) {
    return this.client.post(e(`/feedback/${t}/followup`), s);
  }
  /** 客服消息列表 */
  async listSupportMessages(t) {
    return this.client.get(e("/feedback/support/messages"), t);
  }
  /** 发送客服消息 */
  async sendSupportMessage(t) {
    return this.client.post(e("/feedback/support/messages"), t);
  }
  /** 举报列表 */
  async listReports(t) {
    return this.client.get(e("/feedback/reports"), t);
  }
  /** 提交举报 */
  async submitReport(t) {
    return this.client.post(e("/feedback/reports"), t);
  }
  /** 完成指引 */
  async completeOnboardingStep(t) {
    return this.client.post(e(`/feedback/onboarding/${t}/complete`));
  }
  /** FAQ点赞 */
  async likeFaq(t) {
    return this.client.post(e(`/feedback/faq/${t}/like`));
  }
  /** FAQ点踩 */
  async dislikeFaq(t) {
    return this.client.post(e(`/feedback/faq/${t}/dislike`));
  }
  /** 反馈详情 */
  async getFeedbackDetail(t) {
    return this.client.get(e(`/feedback/${t}`));
  }
  /** 教程列表 */
  async listTutorials(t) {
    return this.client.get(e("/feedback/tutorials"), t);
  }
  /** 教程详情 */
  async getTutorialDetail(t) {
    return this.client.get(e(`/feedback/tutorials/${t}`));
  }
  /** 客服信息 */
  async getSupportInfo() {
    return this.client.get(e("/feedback/support"));
  }
  /** 举报详情 */
  async getReportDetail(t) {
    return this.client.get(e(`/feedback/reports/${t}`));
  }
  /** 新手指引 */
  async getOnboardingGuide() {
    return this.client.get(e("/feedback/onboarding"));
  }
  /** FAQ列表 */
  async listFaqs(t) {
    return this.client.get(e("/feedback/faq"), t);
  }
  /** FAQ详情 */
  async getFaqDetail(t) {
    return this.client.get(e(`/feedback/faq/${t}`));
  }
  /** 搜索FAQ */
  async searchFaqs(t) {
    return this.client.get(e("/feedback/faq/search"), t);
  }
  /** FAQ分类 */
  async listFaqCategories() {
    return this.client.get(e("/feedback/faq/categories"));
  }
}
function at(n) {
  return new ct(n);
}
class ot {
  constructor(t) {
    this.client = t;
  }
  /** 移动收藏 */
  async moveFavoriteToFolder(t, s) {
    return this.client.put(e(`/favorite/${t}/move`), s);
  }
  /** 更新收藏夹 */
  async updateFavoriteFolder(t, s) {
    return this.client.put(e(`/favorite/folders/${t}`), s);
  }
  /** 删除收藏夹 */
  async deleteFavoriteFolder(t, s) {
    return this.client.delete(e(`/favorite/folders/${t}`), s);
  }
  /** 批量移动收藏 */
  async batchMoveFavorites(t) {
    return this.client.put(e("/favorite/batch/move"), t);
  }
  /** 收藏列表 */
  async listFavorites(t) {
    return this.client.get(e("/favorite"), t);
  }
  /** 添加收藏 */
  async add(t) {
    return this.client.post(e("/favorite"), t);
  }
  /** 收藏夹列表 */
  async listFavoriteFolders() {
    return this.client.get(e("/favorite/folders"));
  }
  /** 创建收藏夹 */
  async createFavoriteFolder(t) {
    return this.client.post(e("/favorite/folders"), t);
  }
  /** 批量检查收藏 */
  async batchCheckFavorites(t) {
    return this.client.post(e("/favorite/batch-check"), t);
  }
  /** 收藏详情 */
  async getFavoriteDetail(t) {
    return this.client.get(e(`/favorite/${t}`));
  }
  /** 取消收藏 */
  async remove(t) {
    return this.client.delete(e(`/favorite/${t}`));
  }
  /** 收藏统计 */
  async getFavoriteStatistics() {
    return this.client.get(e("/favorite/statistics"));
  }
  /** 最近收藏 */
  async getRecentFavorites(t) {
    return this.client.get(e("/favorite/recent"), t);
  }
  /** 各类型收藏数 */
  async getFavoriteCountByType() {
    return this.client.get(e("/favorite/count/by-type"));
  }
  /** 检查收藏状态 */
  async check(t) {
    return this.client.get(e("/favorite/check"), t);
  }
  /** 按目标取消收藏 */
  async removeFavoriteByTarget(t) {
    return this.client.delete(e("/favorite/by-target"), t);
  }
  /** 批量取消收藏 */
  async batchRemoveFavorites() {
    return this.client.delete(e("/favorite/batch"));
  }
}
function lt(n) {
  return new ot(n);
}
class ut {
  constructor(t) {
    this.client = t;
  }
  /** Restore drive item */
  async restoreItem(t) {
    return this.client.put(e(`/drive/items/${t}/restore`));
  }
  /** Rename drive item */
  async renameItem(t, s) {
    return this.client.put(e(`/drive/items/${t}/rename`), s);
  }
  /** Move drive item */
  async moveItem(t, s) {
    return this.client.put(e(`/drive/items/${t}/move`), s);
  }
  /** Get drive file content */
  async getItemContent(t) {
    return this.client.get(e(`/drive/items/${t}/content`));
  }
  /** Update drive file content */
  async updateItemContent(t, s) {
    return this.client.put(e(`/drive/items/${t}/content`), s);
  }
  /** Archive drive item */
  async archiveItem(t) {
    return this.client.put(e(`/drive/items/${t}/archive`));
  }
  /** Favorite drive item */
  async favoriteItem(t) {
    return this.client.post(e(`/drive/items/${t}/favorite`));
  }
  /** Unfavorite drive item */
  async unfavoriteItem(t) {
    return this.client.delete(e(`/drive/items/${t}/favorite`));
  }
  /** Copy drive item */
  async copyItem(t, s) {
    return this.client.post(e(`/drive/items/${t}/copy`), s);
  }
  /** Batch delete drive items */
  async batchDeleteItems(t) {
    return this.client.post(e("/drive/items/batch-delete"), t);
  }
  /** Create drive folder */
  async createFolder(t) {
    return this.client.post(e("/drive/folders"), t);
  }
  /** List drive items */
  async listItems(t) {
    return this.client.get(e("/drive/items"), t);
  }
  /** Get drive item detail */
  async getItemDetail(t) {
    return this.client.get(e(`/drive/items/${t}`));
  }
  /** Delete drive item */
  async deleteItem(t) {
    return this.client.delete(e(`/drive/items/${t}`));
  }
  /** Clear drive trash */
  async clearTrash() {
    return this.client.delete(e("/drive/trash"));
  }
  /** Permanently delete drive item */
  async permanentlyDeleteItem(t) {
    return this.client.delete(e(`/drive/items/${t}/permanent`));
  }
  /** Upload file directly into drive */
  async uploadItem(t) {
    return this.client.post(e("/drive/items/upload"), t);
  }
  /** Initialize resumable drive upload */
  async initUpload(t) {
    return this.client.post(e("/drive/items/upload/init"), t);
  }
  /** Complete resumable upload and create drive item */
  async completeUpload(t, s) {
    return this.client.post(e(`/drive/items/upload/${t}/complete`), s);
  }
}
function ht(n) {
  return new ut(n);
}
class gt {
  constructor(t) {
    this.client = t;
  }
  /** Get document detail */
  async getDocumentDetail(t) {
    return this.client.get(e(`/documents/${t}`));
  }
  /** Update document metadata */
  async updateDocument(t, s) {
    return this.client.put(e(`/documents/${t}`), s);
  }
  /** Delete document */
  async deleteDocument(t) {
    return this.client.delete(e(`/documents/${t}`));
  }
  /** Restore document */
  async restore(t) {
    return this.client.put(e(`/documents/${t}/restore`));
  }
  /** Get document content */
  async getDocumentContent(t) {
    return this.client.get(e(`/documents/${t}/content`));
  }
  /** Update document content */
  async updateDocumentContent(t, s) {
    return this.client.put(e(`/documents/${t}/content`), s);
  }
  /** Archive document */
  async archive(t) {
    return this.client.put(e(`/documents/${t}/archive`));
  }
  /** List documents */
  async listDocuments(t) {
    return this.client.get(e("/documents"), t);
  }
  /** Create document */
  async createDocument(t) {
    return this.client.post(e("/documents"), t);
  }
  /** Favorite document */
  async favorite(t) {
    return this.client.post(e(`/documents/${t}/favorite`));
  }
  /** Unfavorite document */
  async unfavorite(t) {
    return this.client.delete(e(`/documents/${t}/favorite`));
  }
  /** Copy document */
  async copy(t, s) {
    return this.client.post(e(`/documents/${t}/copy`), s);
  }
  /** Batch update document */
  async batchUpdate(t, s) {
    return this.client.post(e(`/documents/${t}/batch-update`), s);
  }
  /** Batch update document */
  async createBatchUpdate(t, s) {
    return this.client.post(e(`/documents/${t}:batchUpdate`), s);
  }
  /** Batch delete documents */
  async batchDeleteDocuments() {
    return this.client.delete(e("/documents/batch-delete"));
  }
  /** Batch delete documents */
  async deleteBatchDocuments() {
    return this.client.delete(e("/documents/batch"));
  }
}
function pt(n) {
  return new gt(n);
}
class yt {
  constructor(t) {
    this.client = t;
  }
  /** 完成待办 */
  async completeTodoItem(t) {
    return this.client.put(e(`/dashboard/todos/${t}/complete`));
  }
  /** 快捷入口 */
  async getShortcuts() {
    return this.client.get(e("/dashboard/shortcuts"));
  }
  /** 更新快捷入口 */
  async updateShortcuts(t) {
    return this.client.put(e("/dashboard/shortcuts"), t);
  }
  /** 领取成就奖励 */
  async claimAchievementReward(t) {
    return this.client.post(e(`/dashboard/achievements/${t}/claim`));
  }
  /** 今日热点 */
  async getTrendingItems(t) {
    return this.client.get(e("/dashboard/trending"), t);
  }
  /** 待办事项 */
  async getTodoItems() {
    return this.client.get(e("/dashboard/todos"));
  }
  /** 用户统计 */
  async getUserStatistics() {
    return this.client.get(e("/dashboard/statistics"));
  }
  /** 会员统计 */
  async getVipStatistics() {
    return this.client.get(e("/dashboard/statistics/vip"));
  }
  /** 使用统计 */
  async getUsageStatistics(t) {
    return this.client.get(e("/dashboard/statistics/usage"), t);
  }
  /** 存储统计 */
  async getStorageStatistics() {
    return this.client.get(e("/dashboard/statistics/storage"));
  }
  /** 生成统计 */
  async getGenerationStatistics(t) {
    return this.client.get(e("/dashboard/statistics/generations"), t);
  }
  /** 推荐内容 */
  async getRecommendations(t) {
    return this.client.get(e("/dashboard/recommendations"), t);
  }
  /** 数据概览 */
  async getDataOverview() {
    return this.client.get(e("/dashboard/overview"));
  }
  /** 用户等级 */
  async getUserLevel() {
    return this.client.get(e("/dashboard/level"));
  }
  /** 首页数据 */
  async getHome() {
    return this.client.get(e("/dashboard/home"));
  }
  /** 图表数据 */
  async getChartData(t, s) {
    return this.client.get(e(`/dashboard/charts/${t}`), s);
  }
  /** 最近活动 */
  async getRecentActivities(t) {
    return this.client.get(e("/dashboard/activities"), t);
  }
  /** 成就列表 */
  async getAchievements() {
    return this.client.get(e("/dashboard/achievements"));
  }
  /** Commerce statistics */
  async getCommerceStatistics(t) {
    return this.client.get(e("/dashboard/statistics/commerce"), t);
  }
}
function dt(n) {
  return new yt(n);
}
class mt {
  constructor(t) {
    this.client = t;
  }
  /** 获取合集详情 */
  async getCollection(t) {
    return this.client.get(e(`/collection/${t}`));
  }
  /** 更新合集 */
  async updateCollection(t, s) {
    return this.client.put(e(`/collection/${t}`), s);
  }
  /** 删除合集 */
  async deleteCollection(t) {
    return this.client.delete(e(`/collection/${t}`));
  }
  /** 更新内容排序 */
  async updateItemPositions(t, s) {
    return this.client.put(e(`/collection/${t}/items/positions`), s);
  }
  /** 创建合集 */
  async createCollection(t) {
    return this.client.post(e("/collection"), t);
  }
  /** 获取合集内容列表 */
  async getCollectionItems(t, s) {
    return this.client.get(e(`/collection/${t}/items`), s);
  }
  /** 添加内容到合集 */
  async addItem(t, s) {
    return this.client.post(e(`/collection/${t}/items`), s);
  }
  /** 置顶内容 */
  async pinItem(t, s) {
    return this.client.post(e(`/collection/${t}/items/${s}/pin`));
  }
  /** 取消置顶 */
  async unpinItem(t, s) {
    return this.client.delete(e(`/collection/${t}/items/${s}/pin`));
  }
  /** 获取合集路径 */
  async getCollectionPath(t) {
    return this.client.get(e(`/collection/${t}/path`));
  }
  /** 获取合集树 */
  async getCollectionTree(t) {
    return this.client.get(e("/collection/tree"), t);
  }
  /** 搜索合集 */
  async searchCollections(t) {
    return this.client.get(e("/collection/search"), t);
  }
  /** 获取我的合集 */
  async getMyCollections(t) {
    return this.client.get(e("/collection/my"), t);
  }
  /** 从合集移除内容 */
  async removeItem(t, s) {
    return this.client.delete(e(`/collection/${t}/items/${s}`));
  }
}
function $t(n) {
  return new mt(n);
}
class vt {
  constructor(t) {
    this.client = t;
  }
  /** 获取会话详情 */
  async getSessionDetail(t) {
    return this.client.get(e(`/chat/sessions/${t}`));
  }
  /** 更新会话 */
  async updateSession(t, s) {
    return this.client.put(e(`/chat/sessions/${t}`), s);
  }
  /** 删除会话 */
  async deleteSession(t) {
    return this.client.delete(e(`/chat/sessions/${t}`));
  }
  /** 获取会话列表 */
  async listSessions(t) {
    return this.client.get(e("/chat/sessions"), t);
  }
  /** 创建对话会话 */
  async createSession(t) {
    return this.client.post(e("/chat/sessions"), t);
  }
  /** 停止生成 */
  async stopGeneration(t) {
    return this.client.post(e(`/chat/sessions/${t}/stop`));
  }
  /** 获取消息历史 */
  async getMessageHistory(t, s) {
    return this.client.get(e(`/chat/sessions/${t}/messages`), s);
  }
  /** 发送消息 */
  async sendMessage(t, s) {
    return this.client.post(e(`/chat/sessions/${t}/messages`), s);
  }
  /** 重新生成 */
  async regenerateMessage(t, s) {
    return this.client.post(e(`/chat/sessions/${t}/messages/${s}/regenerate`));
  }
  /** 收藏消息 */
  async favoriteMessage(t, s) {
    return this.client.post(e(`/chat/sessions/${t}/messages/${s}/favorite`));
  }
  /** 取消收藏消息 */
  async unfavoriteMessage(t, s) {
    return this.client.delete(e(`/chat/sessions/${t}/messages/${s}/favorite`));
  }
  /** 流式发送消息 */
  async sendMessageStream(t, s) {
    return this.client.post(e(`/chat/sessions/${t}/messages/stream`), s);
  }
  /** 导出对话 */
  async exportConversation(t, s) {
    return this.client.post(e(`/chat/sessions/${t}/export`), s);
  }
  /** 复制对话 */
  async copySession(t) {
    return this.client.post(e(`/chat/sessions/${t}/copy`));
  }
}
function kt(n) {
  return new vt(n);
}
class ft {
  constructor(t) {
    this.client = t;
  }
  /** 获取角色详情 */
  async getCharacter(t) {
    return this.client.get(e(`/character/${t}`));
  }
  /** 更新角色 */
  async updateCharacter(t, s) {
    return this.client.put(e(`/character/${t}`), s);
  }
  /** 删除角色 */
  async deleteCharacter(t) {
    return this.client.delete(e(`/character/${t}`));
  }
  /** 创建角色 */
  async createCharacter(t) {
    return this.client.post(e("/character"), t);
  }
  /** 使用角色 */
  async use(t) {
    return this.client.post(e(`/character/${t}/use`));
  }
  /** 点赞角色 */
  async like(t) {
    return this.client.post(e(`/character/${t}/like`));
  }
  /** 取消点赞 */
  async unlike(t) {
    return this.client.delete(e(`/character/${t}/like`));
  }
  /** 搜索角色 */
  async searchCharacters(t) {
    return this.client.get(e("/character/search"), t);
  }
  /** 获取热门角色 */
  async getPopularCharacters(t) {
    return this.client.get(e("/character/popular"), t);
  }
  /** 获取我的角色 */
  async getMyCharacters(t) {
    return this.client.get(e("/character/my"), t);
  }
  /** 获取最受喜爱角色 */
  async getMostLikedCharacters(t) {
    return this.client.get(e("/character/liked"), t);
  }
  /** 获取智能体关联角色 */
  async getCharacterByAgent(t) {
    return this.client.get(e(`/character/agent/${t}`));
  }
}
function wt(n) {
  return new ft(n);
}
class At {
  constructor(t) {
    this.client = t;
  }
  /** 获取分类详情 */
  async getCategoryDetail(t) {
    return this.client.get(e(`/category/${t}`));
  }
  /** 更新分类 */
  async updateCategory(t, s) {
    return this.client.put(e(`/category/${t}`), s);
  }
  /** 删除分类 */
  async deleteCategory(t) {
    return this.client.delete(e(`/category/${t}`));
  }
  /** 更新分类状态 */
  async updateCategoryStatus(t, s) {
    return this.client.put(e(`/category/${t}/status`), void 0, s);
  }
  /** 移动分类 */
  async move(t, s) {
    return this.client.put(e(`/category/${t}/move`), s);
  }
  /** 排序分类 */
  async sortCategories(t) {
    return this.client.put(e("/category/sort"), t);
  }
  /** 获取分类列表 */
  async listCategories(t) {
    return this.client.get(e("/category"), t);
  }
  /** 创建分类 */
  async createCategory(t) {
    return this.client.post(e("/category"), t);
  }
  /** 获取标签列表 */
  async listTags(t) {
    return this.client.get(e("/category/tags"), t);
  }
  /** 创建标签 */
  async createTag(t) {
    return this.client.post(e("/category/tags"), t);
  }
  /** 获取分类路径 */
  async getCategoryPath(t) {
    return this.client.get(e(`/category/${t}/path`));
  }
  /** 获取子分类 */
  async getChildren(t) {
    return this.client.get(e(`/category/${t}/children`));
  }
  /** 获取分类类型 */
  async getCategoryTypes() {
    return this.client.get(e("/category/types"));
  }
  /** 获取分类树 */
  async getCategoryTree(t) {
    return this.client.get(e("/category/tree"), t);
  }
  /** 删除标签 */
  async deleteTag(t) {
    return this.client.delete(e(`/category/tags/${t}`));
  }
}
function bt(n) {
  return new At(n);
}
class Ct {
  constructor(t) {
    this.client = t;
  }
  /** Update cart item quantity */
  async updateItemQuantity(t, s) {
    return this.client.put(e(`/cart/items/${t}`), s);
  }
  /** Remove cart item */
  async removeItem(t) {
    return this.client.delete(e(`/cart/items/${t}`));
  }
  /** Update item selection */
  async updateItemSelection(t, s) {
    return this.client.put(e(`/cart/items/${t}/select`), void 0, s);
  }
  /** Batch update selection */
  async batchUpdateSelection(t) {
    return this.client.put(e("/cart/items/select"), t);
  }
  /** Get cart items */
  async getCartItems() {
    return this.client.get(e("/cart/items"));
  }
  /** Add item to cart */
  async addItem(t) {
    return this.client.post(e("/cart/items"), t);
  }
  /** Remove cart items in batch */
  async removeItems(t) {
    return this.client.delete(e("/cart/items"), t);
  }
  /** Get current user cart */
  async getMy() {
    return this.client.get(e("/cart"));
  }
  /** Clear cart */
  async clear() {
    return this.client.delete(e("/cart"));
  }
  /** Get cart statistics */
  async getCartStatistics() {
    return this.client.get(e("/cart/statistics"));
  }
  /** Get selected items */
  async getSelectedItems() {
    return this.client.get(e("/cart/items/selected"));
  }
  /** Check item in cart */
  async checkItemIn(t) {
    return this.client.get(e("/cart/check"), t);
  }
}
function St(n) {
  return new Ct(n);
}
class Pt {
  constructor(t) {
    this.client = t;
  }
  /** 重命名资产 */
  async rename(t, s) {
    return this.client.put(e(`/assets/${t}/rename`), s);
  }
  /** 移动资产 */
  async move(t, s) {
    return this.client.put(e(`/assets/${t}/move`), s);
  }
  /** 收藏资产 */
  async favorite(t) {
    return this.client.post(e(`/assets/${t}/favorite`));
  }
  /** 取消收藏 */
  async unfavorite(t) {
    return this.client.delete(e(`/assets/${t}/favorite`));
  }
  /** 获取文件夹列表 */
  async listFolders() {
    return this.client.get(e("/assets/folders"));
  }
  /** 创建文件夹 */
  async createFolder(t) {
    return this.client.post(e("/assets/folders"), t);
  }
  /** 获取资产列表 */
  async listAssets(t) {
    return this.client.get(e("/assets"), t);
  }
  /** 获取资产详情 */
  async getAssetDetail(t) {
    return this.client.get(e(`/assets/${t}`));
  }
  /** 删除资产 */
  async deleteAsset(t) {
    return this.client.delete(e(`/assets/${t}`));
  }
  /** 下载资产 */
  async getDownloadUrl(t, s) {
    return this.client.get(e(`/assets/${t}/download`), s);
  }
  /** 获取资产统计 */
  async getStatistics() {
    return this.client.get(e("/assets/statistics"));
  }
  /** 删除文件夹 */
  async deleteFolder(t) {
    return this.client.delete(e(`/assets/folders/${t}`));
  }
  /** 批量删除资产 */
  async batchDeleteAssets() {
    return this.client.delete(e("/assets/batch"));
  }
}
function Dt(n) {
  return new Pt(n);
}
class Tt {
  constructor(t) {
    this.client = t;
  }
  /** Get app detail */
  async retrieve(t) {
    return this.client.get(e(`/app/manage/${t}`));
  }
  /** Update app */
  async updateApp(t, s) {
    return this.client.put(e(`/app/manage/${t}`), s);
  }
  /** Delete app */
  async deleteApp(t) {
    return this.client.delete(e(`/app/manage/${t}`));
  }
  /** Get app release notes */
  async getReleaseNotes(t) {
    return this.client.get(e(`/app/manage/${t}/release-notes`));
  }
  /** Update app release notes */
  async updateReleaseNotes(t, s) {
    return this.client.put(e(`/app/manage/${t}/release-notes`), s);
  }
  /** Get publish plan */
  async getPublishPlan(t) {
    return this.client.get(e(`/app/manage/${t}/publish/plan`));
  }
  /** Update publish plan */
  async updatePublishPlan(t, s) {
    return this.client.put(e(`/app/manage/${t}/publish/plan`), s);
  }
  /** Check update */
  async checkAppUpdate(t) {
    return this.client.post(e("/app/update/check"), t);
  }
  /** Create app */
  async createApp(t) {
    return this.client.post(e("/app/manage"), t);
  }
  /** Preview publish result */
  async previewPublish(t, s) {
    return this.client.post(e(`/app/manage/${t}/publish/preview`), s);
  }
  /** Deactivate app */
  async deactivate(t) {
    return this.client.post(e(`/app/manage/${t}/deactivate`));
  }
  /** Activate app */
  async activate(t) {
    return this.client.post(e(`/app/manage/${t}/activate`));
  }
  /** Check publish readiness */
  async checkPublishReadiness(t) {
    return this.client.get(e(`/app/manage/${t}/publish/readiness`));
  }
  /** Get app statistics */
  async getAppStatistics() {
    return this.client.get(e("/app/manage/statistics"));
  }
  /** Search apps */
  async searchApps(t) {
    return this.client.get(e("/app/manage/search"), t);
  }
  /** List project apps */
  async getProjectApps(t, s) {
    return this.client.get(e(`/app/manage/project/${t}`), s);
  }
  /** List my apps */
  async getMyApps(t) {
    return this.client.get(e("/app/manage/my"), t);
  }
  /** List app store apps */
  async listStoreApps(t) {
    return this.client.get(e("/app/store"), t);
  }
  /** List app store categories */
  async listStoreCategories() {
    return this.client.get(e("/app/store/categories"));
  }
  /** Get public app store detail */
  async retrieveStore(t) {
    return this.client.get(e(`/app/store/${t}`));
  }
}
function Mt(n) {
  return new Tt(n);
}
class Rt {
  constructor(t) {
    this.client = t;
  }
  /** 标记已读 */
  async markAsRead(t) {
    return this.client.put(e(`/announcement/${t}/read`));
  }
  /** 全部已读 */
  async markAllAsRead() {
    return this.client.put(e("/announcement/read/all"));
  }
  /** 确认公告 */
  async acknowledge(t) {
    return this.client.post(e(`/announcement/${t}/acknowledge`));
  }
  /** 关闭弹窗 */
  async dismissPopup(t, s) {
    return this.client.post(e(`/announcement/popups/${t}/dismiss`), void 0, s);
  }
  /** 完成引导 */
  async completeOnboarding(t) {
    return this.client.post(e("/announcement/onboarding/complete"), void 0, t);
  }
  /** 公告列表 */
  async listAnnouncements(t) {
    return this.client.get(e("/announcement"), t);
  }
  /** 公告详情 */
  async getAnnouncementDetail(t) {
    return this.client.get(e(`/announcement/${t}`));
  }
  /** Check update */
  async checkResolvedUpdate(t) {
    return this.client.get(e("/announcement/update/check"), t);
  }
  /** 检查更新 */
  async checkUpdate(t) {
    return this.client.get(e("/announcement/update/check/legacy"), t);
  }
  /** 更新日志 */
  async getChangelogs(t) {
    return this.client.get(e("/announcement/update/changelog"), t);
  }
  /** 未读公告 */
  async getUnreadAnnouncements() {
    return this.client.get(e("/announcement/unread"));
  }
  /** 未读公告数 */
  async getUnreadAnnouncementCount() {
    return this.client.get(e("/announcement/unread/count"));
  }
  /** 系统状态 */
  async getSystemStatus() {
    return this.client.get(e("/announcement/system/status"));
  }
  /** 维护公告 */
  async getMaintenanceNotice() {
    return this.client.get(e("/announcement/system/maintenance"));
  }
  /** 弹窗通知 */
  async getPopupNotifications(t) {
    return this.client.get(e("/announcement/popups"), t);
  }
  /** 置顶公告 */
  async getPinnedAnnouncements() {
    return this.client.get(e("/announcement/pinned"));
  }
  /** 新用户引导 */
  async getOnboardingPages(t) {
    return this.client.get(e("/announcement/onboarding"), t);
  }
  /** 最新公告 */
  async getLatestAnnouncements(t) {
    return this.client.get(e("/announcement/latest"), t);
  }
}
function It(n) {
  return new Rt(n);
}
class Ft {
  constructor(t) {
    this.client = t;
  }
  /** Get agent */
  async get(t) {
    return this.client.get(e(`/agents/${t}`));
  }
  /** Update agent */
  async update(t, s) {
    return this.client.put(e(`/agents/${t}`), s);
  }
  /** Delete agent */
  async delete(t) {
    return this.client.delete(e(`/agents/${t}`));
  }
  /** List agents */
  async getList(t) {
    return this.client.get(e("/agents"), t);
  }
  /** Create agent */
  async create(t) {
    return this.client.post(e("/agents"), t);
  }
  /** List sessions */
  async listSessions(t) {
    return this.client.get(e(`/agents/${t}/sessions`));
  }
  /** Create session */
  async createSession(t, s) {
    return this.client.post(e(`/agents/${t}/sessions`), s);
  }
  /** Reset agent */
  async reset(t) {
    return this.client.post(e(`/agents/${t}/reset`));
  }
  /** List memories */
  async getListMemory(t, s) {
    return this.client.get(e(`/agents/${t}/memory`), s);
  }
  /** Create memory */
  async createMemory(t, s) {
    return this.client.post(e(`/agents/${t}/memory`), s);
  }
  /** Summarize session */
  async summarizeSession(t, s) {
    return this.client.post(e(`/agents/${t}/memory/sessions/${s}/summarize`));
  }
  /** List knowledge */
  async listKnowledge(t) {
    return this.client.get(e(`/agents/${t}/memory/knowledge`));
  }
  /** Create knowledge */
  async createKnowledge(t, s) {
    return this.client.post(e(`/agents/${t}/memory/knowledge`), s);
  }
  /** Consolidate memories */
  async consolidate(t) {
    return this.client.post(e(`/agents/${t}/memory/consolidate`));
  }
  /** List session messages */
  async listSessionMessages(t) {
    return this.client.get(e(`/agents/sessions/${t}/messages`));
  }
  /** Send session message */
  async sendSessionMessage(t, s) {
    return this.client.post(e(`/agents/sessions/${t}/messages`), s);
  }
  /** Clear session */
  async createClearSession(t) {
    return this.client.post(e(`/agents/sessions/${t}/clear`));
  }
  /** Agent stats */
  async getStats(t) {
    return this.client.get(e(`/agents/${t}/stats`));
  }
  /** Memory stats */
  async getStatsMemory(t) {
    return this.client.get(e(`/agents/${t}/memory/stats`));
  }
  /** List session history */
  async listSessionHistory(t, s, i) {
    return this.client.get(e(`/agents/${t}/memory/sessions/${s}/history`), i);
  }
  /** Search memories */
  async search(t, s) {
    return this.client.get(e(`/agents/${t}/memory/search`), s);
  }
  /** Get knowledge */
  async getKnowledge(t, s) {
    return this.client.get(e(`/agents/${t}/memory/knowledge/${s}`));
  }
  /** Delete knowledge */
  async deleteKnowledge(t, s) {
    return this.client.delete(e(`/agents/${t}/memory/knowledge/${s}`));
  }
  /** List knowledge chunks */
  async listKnowledgeChunks(t, s) {
    return this.client.get(e(`/agents/${t}/memory/knowledge/${s}/chunks`));
  }
  /** Knowledge stats */
  async knowledgeStats(t) {
    return this.client.get(e(`/agents/${t}/memory/knowledge/stats`));
  }
  /** Search knowledge */
  async searchKnowledge(t, s) {
    return this.client.get(e(`/agents/${t}/memory/knowledge/search`), s);
  }
  /** Delete memory */
  async deleteMemory(t, s) {
    return this.client.delete(e(`/agents/${t}/memory/${s}`));
  }
  /** Clear session memories */
  async deleteClearSession(t, s) {
    return this.client.delete(e(`/agents/${t}/memory/sessions/${s}`));
  }
  /** Delete session */
  async deleteSession(t) {
    return this.client.delete(e(`/agents/sessions/${t}`));
  }
}
function Et(n) {
  return new Ft(n);
}
class Ut {
  constructor(t) {
    this.client = t;
  }
  /** 广告设置 */
  async getAdvertSettings() {
    return this.client.get(e("/advert/settings"));
  }
  /** 更新广告设置 */
  async updateAdvertSettings(t) {
    return this.client.put(e("/advert/settings"), t);
  }
  /** 广告反馈 */
  async report(t, s) {
    return this.client.post(e(`/advert/${t}/report`), s);
  }
  /** 上报播放进度 */
  async trackVideoProgress(t, s) {
    return this.client.post(e(`/advert/${t}/progress`), s);
  }
  /** 上报展示 */
  async trackImpression(t, s) {
    return this.client.post(e(`/advert/${t}/impression`), s);
  }
  /** 上报播放完成 */
  async trackVideoComplete(t, s) {
    return this.client.post(e(`/advert/${t}/complete`), s);
  }
  /** 上报关闭 */
  async trackClose(t, s) {
    return this.client.post(e(`/advert/${t}/close`), s);
  }
  /** 上报点击 */
  async trackClick(t, s) {
    return this.client.post(e(`/advert/${t}/click`), s);
  }
  /** 屏蔽广告 */
  async block(t, s) {
    return this.client.post(e(`/advert/${t}/block`), void 0, s);
  }
  /** 验证奖励 */
  async verifyReward(t) {
    return this.client.post(e("/advert/rewarded/verify"), t);
  }
  /** 开屏广告 */
  async getSplash() {
    return this.client.get(e("/advert/splash"));
  }
  /** 激励视频广告 */
  async getRewarded(t) {
    return this.client.get(e("/advert/rewarded"), t);
  }
  /** 广告位列表 */
  async listAdvertPositions() {
    return this.client.get(e("/advert/positions"));
  }
  /** 广告位详情 */
  async getAdvertPosition(t) {
    return this.client.get(e(`/advert/positions/${t}`));
  }
  /** 获取位置广告 */
  async getAdsByPosition(t, s) {
    return this.client.get(e(`/advert/positions/${t}/ads`), s);
  }
  /** 弹窗广告 */
  async getPopup() {
    return this.client.get(e("/advert/popup"));
  }
  /** 插屏广告 */
  async getInterstitial(t) {
    return this.client.get(e("/advert/interstitial"), t);
  }
  /** 信息流广告 */
  async getFeedAdverts(t) {
    return this.client.get(e("/advert/feed"), t);
  }
  /** 广告配置 */
  async getAdvertConfig() {
    return this.client.get(e("/advert/config"));
  }
  /** Banner广告 */
  async getBannerAdverts(t) {
    return this.client.get(e("/advert/banner"), t);
  }
}
function Bt(n) {
  return new Ut(n);
}
class Kt {
  constructor(t) {
    this.client = t;
  }
  /** Withdraw from wallet */
  async withdraw(t) {
    return this.client.post(e("/wallet/withdrawals"), t);
  }
  /** Transfer wallet assets */
  async transfer(t) {
    return this.client.post(e("/wallet/transfers"), t);
  }
  /** Top up wallet */
  async topup(t) {
    return this.client.post(e("/wallet/topups"), t);
  }
  /** Exchange points in wallet */
  async exchange(t) {
    return this.client.post(e("/wallet/exchanges"), t);
  }
  /** Get wallet overview */
  async getOverview() {
    return this.client.get(e("/wallet"));
  }
  /** List wallet transactions */
  async listTransactions(t) {
    return this.client.get(e("/wallet/transactions"), t);
  }
  /** Get wallet transaction */
  async getTransaction(t) {
    return this.client.get(e(`/wallet/transactions/${t}`));
  }
  /** Get wallet operation status */
  async getOperationStatus(t, s) {
    return this.client.get(e(`/wallet/operations/${t}`), s);
  }
  /** List wallet accounts */
  async listAccounts() {
    return this.client.get(e("/wallet/accounts"));
  }
}
function xt(n) {
  return new Kt(n);
}
class jt {
  constructor(t) {
    this.client = t;
  }
  /** 投票 */
  async vote(t) {
    return this.client.post(e("/vote"), t);
  }
  /** 取消投票 */
  async cancel(t) {
    return this.client.delete(e("/vote"), t);
  }
  /** 切换投票 */
  async toggle(t) {
    return this.client.post(e("/vote/toggle"), t);
  }
  /** 点赞 */
  async like(t) {
    return this.client.post(e("/vote/like"), void 0, t);
  }
  /** 点踩 */
  async dislike(t) {
    return this.client.post(e("/vote/dislike"), void 0, t);
  }
  /** 获取投票详情 */
  async getVoteDetail(t) {
    return this.client.get(e(`/vote/${t}`));
  }
  /** 获取热门内容 */
  async getTopLikedContent(t) {
    return this.client.get(e("/vote/top-liked"), t);
  }
  /** 获取投票状态 */
  async getVoteStatus(t) {
    return this.client.get(e("/vote/status"), t);
  }
  /** 获取投票统计 */
  async getVoteStatistics(t) {
    return this.client.get(e("/vote/statistics"), t);
  }
  /** 获取我的投票历史 */
  async getMyVotes(t) {
    return this.client.get(e("/vote/my-votes"), t);
  }
}
function Lt(n) {
  return new jt(n);
}
class Ot {
  constructor(t) {
    this.client = t;
  }
  /** 购买VIP */
  async purchase(t) {
    return this.client.post(e("/vip/purchase"), t);
  }
  /** 升级VIP */
  async upgrade(t) {
    return this.client.post(e("/vip/purchase/upgrade"), t);
  }
  /** 续费VIP */
  async renew(t) {
    return this.client.post(e("/vip/purchase/renew"), t);
  }
  /** 使用加速特权 */
  async useSpeedUpPrivilege(t) {
    return this.client.post(e("/vip/privilege/speed-up"), t);
  }
  /** 领取每日奖励 */
  async claimDailyReward() {
    return this.client.post(e("/vip/points/daily-reward"));
  }
  /** 邀请好友 */
  async inviteFriend(t) {
    return this.client.post(e("/vip/invite"), t);
  }
  /** 领取优惠券 */
  async claimCoupon(t) {
    return this.client.post(e(`/vip/coupons/${t}/claim`));
  }
  /** 获取VIP状态 */
  async getVipStatus() {
    return this.client.get(e("/vip/status"));
  }
  /** 获取特权使用情况 */
  async getPrivilegeUsage() {
    return this.client.get(e("/vip/privilege/usage"));
  }
  /** 获取积分明细 */
  async getPointsHistory() {
    return this.client.get(e("/vip/points/history"));
  }
  /** 获取每日奖励状态 */
  async getDailyRewardStatus() {
    return this.client.get(e("/vip/points/daily-reward/status"));
  }
  /** 获取积分余额 */
  async getPointsBalance() {
    return this.client.get(e("/vip/points/balance"));
  }
  /** 获取套餐分组列表 */
  async listPackGroups(t) {
    return this.client.get(e("/vip/pack-groups"), t);
  }
  /** 获取分组详情 */
  async getPackGroupDetail(t) {
    return this.client.get(e(`/vip/pack-groups/${t}`));
  }
  /** 获取分组套餐 */
  async listPacksByGroup(t) {
    return this.client.get(e(`/vip/pack-groups/${t}/packs`));
  }
  /** 获取所有套餐 */
  async listAllPacks(t) {
    return this.client.get(e("/vip/pack-groups/packs"), t);
  }
  /** 获取套餐详情 */
  async getPackDetail(t) {
    return this.client.get(e(`/vip/pack-groups/packs/${t}`));
  }
  /** 对比套餐 */
  async comparePacks(t) {
    return this.client.get(e("/vip/pack-groups/compare"), t);
  }
  /** 获取VIP等级列表 */
  async listVipLevels() {
    return this.client.get(e("/vip/levels"));
  }
  /** 获取邀请规则 */
  async getInviteRules() {
    return this.client.get(e("/vip/invite/rules"));
  }
  /** 获取邀请记录 */
  async getInviteRecords(t) {
    return this.client.get(e("/vip/invite/records"), t);
  }
  /** 获取邀请信息 */
  async getInviteInfo() {
    return this.client.get(e("/vip/invite/info"));
  }
  /** 获取VIP信息 */
  async getVipInfo() {
    return this.client.get(e("/vip/info"));
  }
  /** 获取VIP优惠券 */
  async listVipCoupons() {
    return this.client.get(e("/vip/coupons"));
  }
  /** 获取我的优惠券 */
  async listMyCoupons(t) {
    return this.client.get(e("/vip/coupons/my"), t);
  }
  /** 检查VIP状态 */
  async checkVipStatus() {
    return this.client.get(e("/vip/check"));
  }
  /** 获取VIP权益 */
  async listVipBenefits(t) {
    return this.client.get(e("/vip/benefits"), t);
  }
}
function Vt(n) {
  return new Ot(n);
}
class zt {
  constructor(t) {
    this.client = t;
  }
  /** 获取上传策略 */
  async getUploadPolicy(t) {
    return this.client.post(e("/upload/upload-policy"), void 0, t);
  }
  /** 获取上传凭证 */
  async getUploadCredentials(t) {
    return this.client.post(e("/upload/upload-credentials"), void 0, t);
  }
  /** 注册预签名上传文件 */
  async registerPresigned(t) {
    return this.client.post(e("/upload/register"), t);
  }
  /** 获取预签名URL */
  async getPresignedUrl(t) {
    return this.client.post(e("/upload/presigned-url"), t);
  }
  /** 上传图片 */
  async image(t, s) {
    return this.client.post(e("/upload/image"), t, s);
  }
  /** 上传Base64图片 */
  async base64Image(t) {
    return this.client.post(e("/upload/image/base64"), void 0, t);
  }
  /** 获取文件列表 */
  async listFiles(t) {
    return this.client.get(e("/upload/files"), t);
  }
  /** 多文件上传 */
  async files(t) {
    return this.client.post(e("/upload/files"), void 0, t);
  }
  /** 复制文件 */
  async copyFile(t, s) {
    return this.client.post(e(`/upload/files/${t}/copy`), void 0, s);
  }
  /** 单文件上传 */
  async file(t, s) {
    return this.client.post(e("/upload/file"), t, s);
  }
  /** 上传分片 */
  async chunk(t, s) {
    return this.client.post(e("/upload/chunk"), t, s);
  }
  /** 合并分片 */
  async mergeChunks(t) {
    return this.client.post(e("/upload/chunk/merge"), void 0, t);
  }
  /** 初始化分片上传 */
  async initChunk(t) {
    return this.client.post(e("/upload/chunk/init"), t);
  }
  /** 获取上传进度 */
  async getUploadProgress(t) {
    return this.client.get(e(`/upload/task/${t}/progress`));
  }
  /** 获取存储使用情况 */
  async getStorageUsage() {
    return this.client.get(e("/upload/storage/usage"));
  }
  /** 获取文件预签名URL */
  async getFilePresignedUrl(t, s) {
    return this.client.get(e(`/upload/presigned-url/${t}`), s);
  }
  /** 获取文件详情 */
  async getFileDetail(t) {
    return this.client.get(e(`/upload/files/${t}`));
  }
  /** 删除文件 */
  async deleteFile(t) {
    return this.client.delete(e(`/upload/files/${t}`));
  }
  /** 查询分片状态 */
  async getChunkStatus(t) {
    return this.client.get(e("/upload/chunk/status"), t);
  }
  /** 取消上传 */
  async cancel(t) {
    return this.client.delete(e(`/upload/task/${t}`));
  }
}
function Ht(n) {
  return new zt(n);
}
class Nt {
  constructor(t) {
    this.client = t;
  }
  /** 搜索历史 */
  async getSearchHistory(t) {
    return this.client.get(e("/search/history"), t);
  }
  /** 添加搜索历史 */
  async addSearchHistory(t) {
    return this.client.post(e("/search/history"), t);
  }
  /** 清空搜索历史 */
  async clearSearchHistory() {
    return this.client.delete(e("/search/history"));
  }
  /** 高级搜索 */
  async advanced(t) {
    return this.client.post(e("/search/advanced"), t);
  }
  /** 全局搜索 */
  async global(t) {
    return this.client.get(e("/search"), t);
  }
  /** 搜索用户 */
  async users(t) {
    return this.client.get(e("/search/users"), t);
  }
  /** 搜索建议 */
  async getSearchSuggestions(t) {
    return this.client.get(e("/search/suggestions"), t);
  }
  /** 搜索统计 */
  async getSearchStatistics() {
    return this.client.get(e("/search/statistics"));
  }
  /** 搜索项目 */
  async projects(t) {
    return this.client.get(e("/search/projects"), t);
  }
  /** 搜索笔记 */
  async notes(t) {
    return this.client.get(e("/search/notes"), t);
  }
  /** 热门搜索 */
  async getHotSearches(t) {
    return this.client.get(e("/search/hot"), t);
  }
  /** 筛选条件 */
  async getSearchFilters(t) {
    return this.client.get(e("/search/filters"), t);
  }
  /** 搜索资源 */
  async assets(t) {
    return this.client.get(e("/search/assets"), t);
  }
  /** 删除搜索历史 */
  async deleteSearchHistory(t) {
    return this.client.delete(e(`/search/history/${t}`));
  }
}
function Gt(n) {
  return new Nt(n);
}
class _t {
  constructor(t) {
    this.client = t;
  }
  /** Create RTC room */
  async createRoom(t) {
    return this.client.post(e("/rtc/rooms"), t);
  }
  /** Create RTC room token */
  async createRoomToken(t) {
    return this.client.post(e(`/rtc/rooms/${t}/token`));
  }
  /** End RTC room */
  async endRoom(t) {
    return this.client.post(e(`/rtc/rooms/${t}/end`));
  }
  /** Get RTC room */
  async getRoom(t) {
    return this.client.get(e(`/rtc/rooms/${t}`));
  }
  /** List RTC records */
  async listRecords(t) {
    return this.client.get(e("/rtc/records"), t);
  }
}
function qt(n) {
  return new _t(n);
}
class Wt {
  constructor(t) {
    this.client = t;
  }
  /** Create payment */
  async createPayment(t) {
    return this.client.post(e("/payments"), t);
  }
  /** Close payment */
  async close(t) {
    return this.client.post(e(`/payments/${t}/close`));
  }
  /** Reconcile payment */
  async reconcile(t) {
    return this.client.post(e("/payments/reconcile"), t);
  }
  /** Handle generic callback */
  async callback(t, s) {
    return this.client.post(e(`/payments/callback/${t}`), s);
  }
  /** Handle WeChat callback */
  async wechatPayCallback(t) {
    return this.client.post(e("/payments/callback/wechat"), t);
  }
  /** Handle Alipay callback */
  async alipayCallback(t) {
    return this.client.post(e("/payments/callback/alipay"), void 0, t);
  }
  /** Get payment detail */
  async getPaymentDetail(t) {
    return this.client.get(e(`/payments/${t}`));
  }
  /** Get payment status */
  async getPaymentStatus(t) {
    return this.client.get(e(`/payments/${t}/status`));
  }
  /** Get payment statistics */
  async getPaymentStatistics() {
    return this.client.get(e("/payments/statistics"));
  }
  /** List payment records */
  async listPaymentRecords(t) {
    return this.client.get(e("/payments/records"), t);
  }
  /** Get payment status by out trade number */
  async getPaymentStatusByOutTradeNo(t) {
    return this.client.get(e(`/payments/outTradeNo/${t}/status`));
  }
  /** List order payments */
  async listOrderPayments(t) {
    return this.client.get(e(`/payments/order/${t}`));
  }
  /** List payment methods */
  async listPaymentMethods(t) {
    return this.client.get(e("/payments/methods"), t);
  }
}
function Yt(n) {
  return new Wt(n);
}
class Qt {
  constructor(t) {
    this.client = t;
  }
  /** 创建组织 */
  async createOrganization(t) {
    return this.client.post(e("/organization"), t);
  }
  /** 禁用组织 */
  async disable(t) {
    return this.client.post(e(`/organization/${t}/disable`));
  }
  /** 激活组织 */
  async activate(t) {
    return this.client.post(e(`/organization/${t}/activate`));
  }
  /** 创建岗位 */
  async createPosition(t) {
    return this.client.post(e("/organization/position"), t);
  }
  /** 创建部门 */
  async createDepartment(t) {
    return this.client.post(e("/organization/department"), t);
  }
  /** 获取组织详情 */
  async getOrganization(t) {
    return this.client.get(e(`/organization/${t}`));
  }
  /** 获取组织的岗位列表 */
  async getPositionsByOrg(t) {
    return this.client.get(e(`/organization/${t}/positions`));
  }
  /** 获取岗位树 */
  async getPositionTree(t) {
    return this.client.get(e(`/organization/${t}/positions/tree`));
  }
  /** 获取组织成员 */
  async getMembersByOrg(t, s) {
    return this.client.get(e(`/organization/${t}/members`), s);
  }
  /** 获取组织的部门列表 */
  async getDepartmentsByOrg(t) {
    return this.client.get(e(`/organization/${t}/departments`));
  }
  /** 获取部门树 */
  async getDepartmentTree(t) {
    return this.client.get(e(`/organization/${t}/departments/tree`));
  }
  /** 获取子组织 */
  async getChildOrganizations(t) {
    return this.client.get(e(`/organization/${t}/children`));
  }
  /** 获取组织统计 */
  async getOrganizationStatistics() {
    return this.client.get(e("/organization/statistics"));
  }
  /** 获取岗位详情 */
  async getPosition(t) {
    return this.client.get(e(`/organization/position/${t}`));
  }
  /** 获取子岗位 */
  async getChildPositions(t) {
    return this.client.get(e(`/organization/position/${t}/children`));
  }
  /** 获取成员详情 */
  async getMember(t) {
    return this.client.get(e(`/organization/member/${t}`));
  }
  /** 获取组织列表 */
  async getOrganizationList(t) {
    return this.client.get(e("/organization/list"), t);
  }
  /** 获取部门详情 */
  async getDepartment(t) {
    return this.client.get(e(`/organization/department/${t}`));
  }
  /** 获取子部门 */
  async getChildDepartments(t) {
    return this.client.get(e(`/organization/department/${t}/children`));
  }
  /** 根据编码获取组织 */
  async getOrganizationByCode(t) {
    return this.client.get(e(`/organization/code/${t}`));
  }
}
function Xt(n) {
  return new Qt(n);
}
class Jt {
  constructor(t) {
    this.client = t;
  }
  /** List orders */
  async listOrders(t) {
    return this.client.get(e("/orders"), t);
  }
  /** Create order */
  async createOrder(t) {
    return this.client.post(e("/orders"), t);
  }
  /** Apply refund */
  async applyRefund(t, s) {
    return this.client.post(e(`/orders/${t}/refund`), s);
  }
  /** Pay order */
  async pay(t, s) {
    return this.client.post(e(`/orders/${t}/pay`), s);
  }
  /** Confirm receipt */
  async confirmReceipt(t) {
    return this.client.post(e(`/orders/${t}/confirm`));
  }
  /** Cancel order */
  async cancel(t, s) {
    return this.client.post(e(`/orders/${t}/cancel`), s);
  }
  /** Get order detail */
  async getOrderDetail(t) {
    return this.client.get(e(`/orders/${t}`));
  }
  /** Delete order */
  async deleteOrder(t) {
    return this.client.delete(e(`/orders/${t}`));
  }
  /** Get order status */
  async getOrderStatus(t) {
    return this.client.get(e(`/orders/${t}/status`));
  }
  /** Query payment success */
  async getOrderPaymentSuccess(t) {
    return this.client.get(e(`/orders/${t}/payment-success`));
  }
  /** Get order statistics */
  async getOrderStatistics() {
    return this.client.get(e("/orders/statistics"));
  }
}
function Zt(n) {
  return new Jt(n);
}
class te {
  constructor(t) {
    this.client = t;
  }
  /** List orders */
  async getOrders(t) {
    return this.client.get(e("/ordering/orders"), t);
  }
  /** Submit order */
  async submitOrder(t) {
    return this.client.post(e("/ordering/orders"), t);
  }
  /** Cancel order */
  async cancelOrder(t, s) {
    return this.client.post(e(`/ordering/orders/${t}/cancel`), s);
  }
  /** Preview order */
  async previewOrder(t) {
    return this.client.post(e("/ordering/orders/preview"), t);
  }
  /** Get ordering shops */
  async getShops(t) {
    return this.client.get(e("/ordering/shops"), t);
  }
  /** Get ordering shop detail */
  async getShopDetail(t) {
    return this.client.get(e(`/ordering/shops/${t}`));
  }
  /** Get shop menu */
  async getShopMenu(t, s) {
    return this.client.get(e(`/ordering/shops/${t}/menu`), s);
  }
  /** Get shop menu detail */
  async getShopMenuDetail(t, s) {
    return this.client.get(e(`/ordering/shops/${t}/menu/${s}`));
  }
  /** Get shop hot menu */
  async getShopHotMenu(t, s) {
    return this.client.get(e(`/ordering/shops/${t}/menu/hot`), s);
  }
  /** Get shop menu categories */
  async getShopMenuCategories(t) {
    return this.client.get(e(`/ordering/shops/${t}/menu/categories`));
  }
  /** Get shop home */
  async getShopHome(t, s) {
    return this.client.get(e(`/ordering/shops/${t}/home`), s);
  }
  /** Get order detail */
  async getOrderDetail(t) {
    return this.client.get(e(`/ordering/orders/${t}`));
  }
  /** Get menu */
  async getMenu(t) {
    return this.client.get(e("/ordering/menu"), t);
  }
  /** Get menu detail */
  async getMenuDetail(t) {
    return this.client.get(e(`/ordering/menu/${t}`));
  }
  /** Get hot menu */
  async getHotMenu(t) {
    return this.client.get(e("/ordering/menu/hot"), t);
  }
  /** Get menu categories */
  async getMenuCategories() {
    return this.client.get(e("/ordering/menu/categories"));
  }
}
function ee(n) {
  return new te(n);
}
class se {
  constructor(t) {
    this.client = t;
  }
  /** Batch get model prices */
  async getModelPrices(t) {
    return this.client.post(e("/models/prices/batch"), t);
  }
  /** Get model detail */
  async getModelById(t) {
    return this.client.get(e(`/models/${t}`));
  }
  /** Get model types */
  async getModelTypes() {
    return this.client.get(e("/models/types"));
  }
  /** Get models by type */
  async getModelsByType(t, s) {
    return this.client.get(e(`/models/type/${t}`), s);
  }
  /** Get model statistics */
  async getModelStatistics() {
    return this.client.get(e("/models/statistics"));
  }
  /** Search models */
  async searchModels(t) {
    return this.client.get(e("/models/search"), t);
  }
  /** Get model default price */
  async getModelPrice(t, s) {
    return this.client.get(e(`/models/price/${t}`), s);
  }
  /** Get model pricing rules */
  async getModelPriceRules(t, s) {
    return this.client.get(e(`/models/price-rules/${t}`), s);
  }
  /** Get popular models */
  async getPopularModels(t) {
    return this.client.get(e("/models/popular"), t);
  }
  /** Get models by family */
  async getModelsByFamily(t, s) {
    return this.client.get(e(`/models/family/${t}`), s);
  }
  /** Get all families */
  async getAllFamilies() {
    return this.client.get(e("/models/families"));
  }
  /** Get models by channel */
  async getModelsByChannel(t, s) {
    return this.client.get(e(`/models/channel/${t}`), s);
  }
  /** Get model detail by alias */
  async getModelBy(t) {
    return this.client.get(e(`/models/by-model/${t}`));
  }
  /** Get active models */
  async getActiveModels(t) {
    return this.client.get(e("/models/active"), t);
  }
  /** Get creation capabilities */
  async getCreationCapabilities(t) {
    return this.client.get(e("/models/creation/capabilities"), t);
  }
}
function ne(n) {
  return new se(n);
}
class ie {
  constructor(t) {
    this.client = t;
  }
  /** 浏览历史 */
  async listBrowse(t) {
    return this.client.get(e("/history/browse"), t);
  }
  /** 添加浏览记录 */
  async addBrowse(t) {
    return this.client.post(e("/history/browse"), t);
  }
  /** 清空浏览历史 */
  async clearBrowse(t) {
    return this.client.delete(e("/history/browse"), t);
  }
  /** 历史统计 */
  async getHistoryStatistics() {
    return this.client.get(e("/history/statistics"));
  }
  /** 浏览统计 */
  async getBrowseStatistics() {
    return this.client.get(e("/history/statistics/browse"));
  }
  /** 所有会话 */
  async listSessions() {
    return this.client.get(e("/history/sessions"));
  }
  /** 当前会话 */
  async getCurrentSession() {
    return this.client.get(e("/history/sessions/current"));
  }
  /** 操作历史 */
  async listOperation(t) {
    return this.client.get(e("/history/operations"), t);
  }
  /** 最近操作 */
  async getRecentOperations(t) {
    return this.client.get(e("/history/operations/recent"), t);
  }
  /** 登录历史 */
  async listLogin(t) {
    return this.client.get(e("/history/logins"), t);
  }
  /** 生成历史 */
  async listGeneration(t) {
    return this.client.get(e("/history/generations"), t);
  }
  /** 清空生成历史 */
  async clearGeneration() {
    return this.client.delete(e("/history/generations"));
  }
  /** 最近生成 */
  async getRecentGenerations(t) {
    return this.client.get(e("/history/generations/recent"), t);
  }
  /** 终止会话 */
  async terminateSession(t) {
    return this.client.delete(e(`/history/sessions/${t}`));
  }
  /** 终止其他会话 */
  async terminateOtherSessions() {
    return this.client.delete(e("/history/sessions/others"));
  }
  /** 删除生成历史 */
  async deleteGeneration(t) {
    return this.client.delete(e(`/history/generations/${t}`));
  }
  /** 删除浏览记录 */
  async deleteBrowse(t) {
    return this.client.delete(e(`/history/browse/${t}`));
  }
  /** 批量删除浏览记录 */
  async batchDeleteBrowse() {
    return this.client.delete(e("/history/browse/batch"));
  }
}
function re(n) {
  return new ie(n);
}
class ce {
  constructor(t) {
    this.client = t;
  }
  /** 报名赛事 */
  async registerTournament(t) {
    return this.client.post(e(`/game/tournaments/${t}/register`));
  }
  /** 获取房间列表 */
  async listRooms(t) {
    return this.client.get(e("/game/rooms"), t);
  }
  /** 创建房间 */
  async createRoom(t) {
    return this.client.post(e("/game/rooms"), t);
  }
  /** 房间准备 */
  async readyRoom(t, s) {
    return this.client.post(e(`/game/rooms/${t}/ready`), s);
  }
  /** 离开房间 */
  async leaveRoom(t) {
    return this.client.post(e(`/game/rooms/${t}/leave`));
  }
  /** 加入房间 */
  async joinRoom(t, s) {
    return this.client.post(e(`/game/rooms/${t}/join`), s);
  }
  /** 解散房间 */
  async dismissRoom(t, s) {
    return this.client.post(e(`/game/rooms/${t}/dismiss`), s);
  }
  /** 快速开局 */
  async startMatchmaking(t) {
    return this.client.post(e("/game/matchmaking"), t);
  }
  /** 提交对局动作 */
  async submitAction(t, s) {
    return this.client.post(e(`/game/matches/${t}/actions`), s);
  }
  /** 领取成长奖励 */
  async claimGrowthReward(t, s) {
    return this.client.post(e(`/game/growth/rewards/${t}/claim`), s);
  }
  /** 获取挑战赛列表 */
  async listChallenges(t) {
    return this.client.get(e("/game/challenges"), t);
  }
  /** 发起挑战 */
  async createChallenge(t) {
    return this.client.post(e("/game/challenges"), t);
  }
  /** 处理挑战 */
  async manageChallenge(t, s) {
    return this.client.post(e(`/game/challenges/${t}/manage`), s);
  }
  /** 获取擂台列表 */
  async listArenas(t) {
    return this.client.get(e("/game/arenas"), t);
  }
  /** 开擂 */
  async openArena(t) {
    return this.client.post(e("/game/arenas"), t);
  }
  /** 处理擂台 */
  async manageArena(t, s) {
    return this.client.post(e(`/game/arenas/${t}/manage`), s);
  }
  /** 获取赛事列表 */
  async listTournaments(t) {
    return this.client.get(e("/game/tournaments"), t);
  }
  /** 获取赛事详情 */
  async getTournament(t) {
    return this.client.get(e(`/game/tournaments/${t}`));
  }
  /** 获取积分流水 */
  async listScoreRecords(t) {
    return this.client.get(e("/game/score-records"), t);
  }
  /** 获取房间详情 */
  async getRoom(t) {
    return this.client.get(e(`/game/rooms/${t}`));
  }
  /** 获取回放详情 */
  async getReplay(t) {
    return this.client.get(e(`/game/replays/${t}`));
  }
  /** 获取我的战绩 */
  async listRecords(t) {
    return this.client.get(e("/game/records"), t);
  }
  /** 获取游戏主页 */
  async getProfile(t) {
    return this.client.get(e("/game/profile"), t);
  }
  /** 获取我的荣誉 */
  async listHonors(t) {
    return this.client.get(e("/game/profile/honors"), t);
  }
  /** 获取对局详情 */
  async getMatch(t) {
    return this.client.get(e(`/game/matches/${t}`));
  }
  /** 获取排行榜 */
  async listLeaderboards(t) {
    return this.client.get(e("/game/leaderboards"), t);
  }
  /** 获取榜单详情 */
  async getLeaderboard(t) {
    return this.client.get(e(`/game/leaderboards/${t}`));
  }
  /** 获取游戏首页 */
  async getHome(t) {
    return this.client.get(e("/game/home"), t);
  }
  /** 获取成长奖励 */
  async listGrowthRewards(t) {
    return this.client.get(e("/game/growth/rewards"), t);
  }
  /** 获取成长流水 */
  async listGrowthRecords(t) {
    return this.client.get(e("/game/growth/records"), t);
  }
  /** 获取成长等级阶梯 */
  async listGrowthLevels(t) {
    return this.client.get(e("/game/growth/levels"), t);
  }
  /** 获取成长账户 */
  async getGrowthAccount(t) {
    return this.client.get(e("/game/growth/account"), t);
  }
  /** 获取玩法列表 */
  async listDefinitions(t) {
    return this.client.get(e("/game/definitions"), t);
  }
  /** 获取挑战赛详情 */
  async getChallenge(t) {
    return this.client.get(e(`/game/challenges/${t}`));
  }
  /** 获取擂台详情 */
  async getArena(t) {
    return this.client.get(e(`/game/arenas/${t}`));
  }
}
function ae(n) {
  return new ce(n);
}
class oe {
  constructor(t) {
    this.client = t;
  }
  /** Create feed */
  async create(t) {
    return this.client.post(e("/feeds"), t);
  }
  /** Unlike feed */
  async unlike(t) {
    return this.client.post(e(`/feeds/unlike/${t}`));
  }
  /** Uncollect feed */
  async uncollect(t) {
    return this.client.post(e(`/feeds/uncollect/${t}`));
  }
  /** Share feed */
  async share(t) {
    return this.client.post(e(`/feeds/share/${t}`));
  }
  /** Like feed */
  async like(t) {
    return this.client.post(e(`/feeds/like/${t}`));
  }
  /** Collect feed */
  async collect(t, s) {
    return this.client.post(e(`/feeds/collect/${t}`), void 0, s);
  }
  /** Get top feeds */
  async getTopFeeds(t) {
    return this.client.get(e("/feeds/top"), t);
  }
  /** Search feeds */
  async searchFeeds(t) {
    return this.client.get(e("/feeds/search"), t);
  }
  /** Get recommended feeds */
  async getRecommendedFeeds(t) {
    return this.client.get(e("/feeds/recommend"), t);
  }
  /** Get most viewed feeds */
  async getMostViewedFeeds(t) {
    return this.client.get(e("/feeds/most-viewed"), t);
  }
  /** Get most liked feeds */
  async getMostLikedFeeds(t) {
    return this.client.get(e("/feeds/most-liked"), t);
  }
  /** Get feed list */
  async getFeedList(t) {
    return this.client.get(e("/feeds/list"), t);
  }
  /** Get hot feeds */
  async getHotFeeds(t) {
    return this.client.get(e("/feeds/hot"), t);
  }
  /** Get feed detail */
  async getFeedDetail(t) {
    return this.client.get(e(`/feeds/detail/${t}`));
  }
  /** Check collected status */
  async checkCollected(t) {
    return this.client.get(e(`/feeds/check-collected/${t}`));
  }
  /** Get feeds by category */
  async getFeedsByCategory(t, s) {
    return this.client.get(e(`/feeds/category/${t}`), s);
  }
  /** Delete feed */
  async delete(t) {
    return this.client.delete(e(`/feeds/${t}`));
  }
}
function le(n) {
  return new oe(n);
}
class ue {
  constructor(t) {
    this.client = t;
  }
  /** Manual IMAP sync */
  async sync(t) {
    return this.client.post(e("/email/sync"), t);
  }
  /** Send email */
  async send(t) {
    return this.client.post(e("/email/send"), t);
  }
  /** Receive email */
  async receive(t) {
    return this.client.post(e("/email/receive"), t);
  }
  /** Mark read/unread */
  async markRead(t, s) {
    return this.client.post(e(`/email/messages/${t}/read`), s);
  }
  /** List emails */
  async listMessages(t) {
    return this.client.get(e("/email/messages"), t);
  }
  /** Get email message detail */
  async getMessage(t) {
    return this.client.get(e(`/email/messages/${t}`));
  }
  /** Delete message */
  async deleteMessage(t) {
    return this.client.delete(e(`/email/messages/${t}`));
  }
  /** Get SaaS managed email account config */
  async getAccountConfig() {
    return this.client.get(e("/email/account"));
  }
}
function he(n) {
  return new ue(n);
}
class ge {
  constructor(t) {
    this.client = t;
  }
  /** 创建货币 */
  async createCurrency(t) {
    return this.client.post(e("/currency"), t);
  }
  /** 禁用货币 */
  async deactivate(t) {
    return this.client.post(e(`/currency/${t}/deactivate`));
  }
  /** 启用货币 */
  async activate(t) {
    return this.client.post(e(`/currency/${t}/activate`));
  }
  /** 创建汇率 */
  async createExchangeRate(t) {
    return this.client.post(e("/currency/rate"), t);
  }
  /** 货币兑换计算 */
  async convert(t) {
    return this.client.post(e("/currency/convert"), t);
  }
  /** 获取货币详情 */
  async getCurrency(t) {
    return this.client.get(e(`/currency/${t}`));
  }
  /** 获取货币类型列表 */
  async getCurrencyTypes() {
    return this.client.get(e("/currency/types"));
  }
  /** 获取最新汇率 */
  async getLatestRate(t) {
    return this.client.get(e("/currency/rate/latest"), t);
  }
  /** 获取汇率历史 */
  async getRateHistory(t) {
    return this.client.get(e("/currency/rate/history"), t);
  }
  /** 获取货币列表 */
  async getCurrencyList(t) {
    return this.client.get(e("/currency/list"), t);
  }
  /** 根据代码获取货币 */
  async getCurrencyByCode(t) {
    return this.client.get(e(`/currency/code/${t}`));
  }
  /** 获取启用的货币 */
  async getActiveCurrencies() {
    return this.client.get(e("/currency/active"));
  }
}
function pe(n) {
  return new ge(n);
}
class ye {
  constructor(t) {
    this.client = t;
  }
  /** 领取优惠券 */
  async receive(t) {
    return this.client.post(e(`/coupons/${t}/receive`));
  }
  /** 积分兑换优惠券 */
  async exchangeCouponByPoints(t, s) {
    return this.client.post(e(`/coupons/${t}/exchange/points`), s);
  }
  /** 兑换优惠券 */
  async redeem(t) {
    return this.client.post(e("/coupons/redeem"), t);
  }
  /** 使用优惠券 */
  async use(t, s) {
    return this.client.post(e(`/coupons/my/${t}/use`), void 0, s);
  }
  /** 回滚积分兑换优惠券 */
  async rollbackPointsExchange(t, s) {
    return this.client.post(e(`/coupons/my/${t}/rollback`), s);
  }
  /** 取消使用优惠券 */
  async cancelUse(t) {
    return this.client.post(e(`/coupons/my/${t}/cancel`));
  }
  /** 获取可领取优惠券列表 */
  async listCoupons(t) {
    return this.client.get(e("/coupons"), t);
  }
  /** 获取优惠券详情 */
  async getCouponDetail(t) {
    return this.client.get(e(`/coupons/${t}`));
  }
  /** 获取优惠券统计 */
  async getStatistics() {
    return this.client.get(e("/coupons/statistics"));
  }
  /** 获取我的优惠券列表 */
  async getMyCoupons(t) {
    return this.client.get(e("/coupons/my"), t);
  }
  /** 获取用户优惠券详情 */
  async getUserCouponDetail(t) {
    return this.client.get(e(`/coupons/my/${t}`));
  }
  /** 获取可用优惠券列表 */
  async getAvailableCoupons(t) {
    return this.client.get(e("/coupons/my/available"), t);
  }
}
function de(n) {
  return new ye(n);
}
class me {
  constructor(t) {
    this.client = t;
  }
  /** 发表评论 */
  async createComment(t) {
    return this.client.post(e("/comments"), t);
  }
  /** 回复评论 */
  async reply(t, s) {
    return this.client.post(e(`/comments/${t}/reply`), s);
  }
  /** 置顶评论 */
  async pin(t) {
    return this.client.post(e(`/comments/${t}/pin`));
  }
  /** 取消置顶 */
  async unpin(t) {
    return this.client.delete(e(`/comments/${t}/pin`));
  }
  /** 点赞评论 */
  async like(t) {
    return this.client.post(e(`/comments/${t}/like`));
  }
  /** 取消点赞 */
  async unlike(t) {
    return this.client.delete(e(`/comments/${t}/like`));
  }
  /** 获取评论详情 */
  async getCommentDetail(t) {
    return this.client.get(e(`/comments/${t}`));
  }
  /** 删除评论 */
  async deleteComment(t) {
    return this.client.delete(e(`/comments/${t}`));
  }
  /** 获取回复列表 */
  async getReplies(t, s) {
    return this.client.get(e(`/comments/${t}/replies`), s);
  }
  /** 获取评论统计 */
  async getCommentStatistics(t) {
    return this.client.get(e("/comments/statistics"), t);
  }
  /** 获取我的评论 */
  async getMyComments(t) {
    return this.client.get(e("/comments/my"), t);
  }
  /** 获取评论列表 */
  async getComments(t) {
    return this.client.get(e("/comments/list"), t);
  }
}
function $e(n) {
  return new me(n);
}
class ve {
  constructor(t) {
    this.client = t;
  }
  /** Report claw task execution */
  async reportTask(t) {
    return this.client.post(e("/claw/registry/tasks/report"), t);
  }
  /** Register claw schedule task */
  async registerTask(t) {
    return this.client.post(e("/claw/registry/tasks/register"), t);
  }
  /** Register claw instance */
  async createRegister(t) {
    return this.client.post(e("/claw/registry/register"), t);
  }
  /** Accept heartbeat */
  async heartbeat(t) {
    return this.client.post(e("/claw/registry/heartbeat"), t);
  }
  /** Claw register */
  async createRegisterAuth(t) {
    return this.client.post(e("/claw/auth/register"), t);
  }
  /** Claw refresh */
  async refresh(t) {
    return this.client.post(e("/claw/auth/refresh"), t);
  }
  /** Claw login */
  async login(t) {
    return this.client.post(e("/claw/auth/login"), t);
  }
  /** Get claw bootstrap */
  async bootstrap() {
    return this.client.get(e("/claw/registry/bootstrap"));
  }
}
function ke(n) {
  return new ve(n);
}
class fe {
  constructor(t) {
    this.client = t;
  }
  /** 预扣结算 */
  async settle(t, s) {
    return this.client.post(e(`/billing/settle/${t}`), void 0, s);
  }
  /** 预扣释放 */
  async release(t, s) {
    return this.client.post(e(`/billing/release/${t}`), void 0, s);
  }
  /** 预扣冻结 */
  async prehold(t) {
    return this.client.post(e("/billing/prehold"), t);
  }
  /** 余额预校验 */
  async precheck(t) {
    return this.client.post(e("/billing/precheck"), t);
  }
  /** 调用前报价 */
  async estimate(t) {
    return this.client.post(e("/billing/estimate"), t);
  }
}
function we(n) {
  return new fe(n);
}
class Ae {
  constructor(t) {
    this.client = t;
  }
  /** 发送验证码 */
  async sendSmsCode(t) {
    return this.client.post(e("/auth/sms/send"), t);
  }
  /** 发送验证码 */
  async createSendSmsCode(t) {
    return this.client.post(e("/auth/verify/send"), t);
  }
  /** 验证验证码 */
  async verifySmsCode(t) {
    return this.client.post(e("/auth/verify/check"), t);
  }
  /** 验证验证码 */
  async createVerifySmsCode(t) {
    return this.client.post(e("/auth/sms/verify"), t);
  }
  /** 用户注册 */
  async register(t) {
    return this.client.post(e("/auth/register"), t);
  }
  /** 刷新令牌 */
  async refreshToken(t) {
    return this.client.post(e("/auth/refresh"), t);
  }
  /** 生成登录二维码 */
  async generateQrCode() {
    return this.client.post(e("/auth/qr/generate"));
  }
  /** 确认二维码登录 */
  async confirmQrCodeLogin(t) {
    return this.client.post(e("/auth/qr/confirm"), t);
  }
  /** 手机号验证码登录 */
  async phoneLogin(t) {
    return this.client.post(e("/auth/phone/login"), t);
  }
  /** 重置密码 */
  async resetPassword(t) {
    return this.client.post(e("/auth/password/reset"), t);
  }
  /** Request password reset challenge */
  async requestPasswordResetChallenge(t) {
    return this.client.post(e("/auth/password/reset/request"), t);
  }
  /** OAuth授权URL */
  async getOauthUrl(t) {
    return this.client.post(e("/auth/oauth/url"), t);
  }
  /** OAuth登录 */
  async oauthLogin(t) {
    return this.client.post(e("/auth/oauth/login"), t);
  }
  /** 用户登出 */
  async logout() {
    return this.client.post(e("/auth/logout"));
  }
  /** 用户登录 */
  async login(t) {
    return this.client.post(e("/auth/login"), t);
  }
  /** 检查二维码状态 */
  async checkQrCodeStatus(t) {
    return this.client.get(e(`/auth/qr/status/${t}`));
  }
  /** 二维码统一入口 */
  async qrCodeEntry(t) {
    return this.client.get(e(`/auth/qr/entry/${t}`));
  }
}
function be(n) {
  return new Ae(n);
}
class Ce {
  constructor(t) {
    this.client = t;
  }
  /** 审核申诉 */
  async submitAppeal(t, s) {
    return this.client.post(e(`/audit/${t}/appeal`), s);
  }
  /** 视频审核 */
  async video(t) {
    return this.client.post(e("/audit/video"), t);
  }
  /** 文本审核 */
  async text(t) {
    return this.client.post(e("/audit/text"), t);
  }
  /** 文本替换建议 */
  async suggestTextReplacement(t) {
    return this.client.post(e("/audit/text/suggest"), t);
  }
  /** 批量文本审核 */
  async batchAuditText(t) {
    return this.client.post(e("/audit/text/batch"), t);
  }
  /** 敏感词检测 */
  async detectSensitiveWords(t) {
    return this.client.post(e("/audit/sensitive-words"), t);
  }
  /** 行为风险检测 */
  async checkBehaviorRisk(t) {
    return this.client.post(e("/audit/risk/behavior"), t);
  }
  /** 账号风险检测 */
  async checkAccountRisk(t) {
    return this.client.post(e("/audit/risk/account"), t);
  }
  /** 实时内容审核 */
  async realtime(t) {
    return this.client.post(e("/audit/realtime"), t);
  }
  /** 图片审核 */
  async image(t) {
    return this.client.post(e("/audit/image"), t);
  }
  /** 图片OCR审核 */
  async imageOcr(t) {
    return this.client.post(e("/audit/image/ocr"), t);
  }
  /** 批量图片审核 */
  async batchAuditImage(t) {
    return this.client.post(e("/audit/image/batch"), t);
  }
  /** 综合内容审核 */
  async content(t) {
    return this.client.post(e("/audit/content"), t);
  }
  /** 音频审核 */
  async audio(t) {
    return this.client.post(e("/audit/audio"), t);
  }
  /** 语音审核 */
  async audioAsr(t) {
    return this.client.post(e("/audit/audio/asr"), t);
  }
  /** 敏感词库 */
  async listSensitiveWord() {
    return this.client.get(e("/audit/word-lists"));
  }
  /** 视频审核状态 */
  async getVideoAuditStatus(t) {
    return this.client.get(e(`/audit/video/${t}`));
  }
  /** 审核记录 */
  async listAuditRecords(t) {
    return this.client.get(e("/audit/records"), t);
  }
  /** 审核记录详情 */
  async getAuditRecord(t) {
    return this.client.get(e(`/audit/records/${t}`));
  }
  /** 审核策略 */
  async listAuditPolicies() {
    return this.client.get(e("/audit/policies"));
  }
  /** 我的审核记录 */
  async listMyAuditRecords(t) {
    return this.client.get(e("/audit/my-records"), t);
  }
  /** 申诉记录 */
  async listAppeals() {
    return this.client.get(e("/audit/appeals"));
  }
  /** 申诉状态 */
  async getAppealStatus(t) {
    return this.client.get(e(`/audit/appeals/${t}`));
  }
}
function Se(n) {
  return new Ce(n);
}
class Pe {
  constructor(t) {
    this.client = t;
  }
  /** 上报页面访问 */
  async trackPageView(t) {
    return this.client.post(e("/analytics/pageview"), t);
  }
  /** 导出统计 */
  async exportStats(t) {
    return this.client.post(e("/analytics/export"), t);
  }
  /** 上报事件 */
  async trackEvent(t) {
    return this.client.post(e("/analytics/events"), t);
  }
  /** 批量上报事件 */
  async batchTrackEvents(t) {
    return this.client.post(e("/analytics/events/batch"), t);
  }
  /** 上报错误 */
  async trackError(t) {
    return this.client.post(e("/analytics/errors"), t);
  }
  /** 使用统计 */
  async getUserUsageStats() {
    return this.client.get(e("/analytics/usage"));
  }
  /** 留存分析 */
  async getRetentionAnalysis(t) {
    return this.client.get(e("/analytics/retention"), t);
  }
  /** 报表列表 */
  async listReportTypes() {
    return this.client.get(e("/analytics/reports"));
  }
  /** 实时在线 */
  async getRealtimeOnline() {
    return this.client.get(e("/analytics/realtime/online"));
  }
  /** 实时事件 */
  async getRealtimeEvents(t) {
    return this.client.get(e("/analytics/realtime/events"), t);
  }
  /** 路径分析 */
  async getPathAnalysis(t) {
    return this.client.get(e("/analytics/path"), t);
  }
  /** 漏斗分析 */
  async getFunnelAnalysis(t) {
    return this.client.get(e("/analytics/funnel"), t);
  }
  /** 事件趋势 */
  async getEventTrend(t) {
    return this.client.get(e("/analytics/events/trend"), t);
  }
  /** 热门事件 */
  async getTopEvents(t) {
    return this.client.get(e("/analytics/events/top"), t);
  }
  /** 事件统计 */
  async getEventStats(t) {
    return this.client.get(e("/analytics/events/stats"), t);
  }
  /** 设备分布 */
  async getDeviceDistribution() {
    return this.client.get(e("/analytics/devices"));
  }
  /** 转化路径 */
  async getConversionPath(t) {
    return this.client.get(e("/analytics/conversion-path"), t);
  }
  /** 渠道分析 */
  async getChannelAnalysis(t) {
    return this.client.get(e("/analytics/channels"), t);
  }
  /** AI使用统计 */
  async getAiUsageStats(t) {
    return this.client.get(e("/analytics/ai-usage"), t);
  }
  /** 活跃度统计 */
  async getUserActivity(t) {
    return this.client.get(e("/analytics/activity"), t);
  }
}
function De(n) {
  return new Pe(n);
}
class Te {
  constructor(t) {
    this.client = t;
  }
  /** 参与活动 */
  async join(t, s) {
    return this.client.post(e(`/activity/${t}/join`), s);
  }
  /** 领取任务奖励 */
  async claimTaskReward(t) {
    return this.client.post(e(`/activity/tasks/${t}/claim`));
  }
  /** 兑换商品 */
  async exchangeGoods(t, s) {
    return this.client.post(e(`/activity/points-store/goods/${t}/exchange`), s);
  }
  /** 抽奖 */
  async drawLottery(t) {
    return this.client.post(e(`/activity/lottery/${t}/draw`));
  }
  /** 领取奖品 */
  async claimPrize(t) {
    return this.client.post(e(`/activity/lottery/prizes/${t}/claim`));
  }
  /** 每日签到 */
  async checkIn() {
    return this.client.post(e("/activity/check-in"));
  }
  /** 补签 */
  async makeUpCheckIn(t) {
    return this.client.post(e("/activity/check-in/make-up"), t);
  }
  /** 获取活动详情 */
  async getActivityDetail(t) {
    return this.client.get(e(`/activity/${t}`));
  }
  /** 获取任务列表 */
  async listTasks(t) {
    return this.client.get(e("/activity/tasks"), t);
  }
  /** 获取参与记录 */
  async getActivityRecords(t) {
    return this.client.get(e("/activity/records"), t);
  }
  /** 获取排行榜 */
  async getRanking(t, s) {
    return this.client.get(e(`/activity/rankings/${t}`), s);
  }
  /** 获取我的排名 */
  async getMyRank(t, s) {
    return this.client.get(e(`/activity/rankings/${t}/my-rank`), s);
  }
  /** 获取积分商品 */
  async listPointsGoods(t) {
    return this.client.get(e("/activity/points-store/goods"), t);
  }
  /** 获取商品详情 */
  async getPointsGoodsDetail(t) {
    return this.client.get(e(`/activity/points-store/goods/${t}`));
  }
  /** 获取兑换记录 */
  async getExchangeRecords(t) {
    return this.client.get(e("/activity/points-store/exchange-records"), t);
  }
  /** 获取抽奖详情 */
  async getLotteryDetail(t) {
    return this.client.get(e(`/activity/lottery/${t}`));
  }
  /** 获取中奖记录 */
  async getMyPrizes(t) {
    return this.client.get(e("/activity/lottery/my-prizes"), t);
  }
  /** 获取抽奖列表 */
  async listLotteryActivities() {
    return this.client.get(e("/activity/lottery/list"));
  }
  /** 获取活动列表 */
  async listActivities(t) {
    return this.client.get(e("/activity/list"), t);
  }
  /** 获取签到状态 */
  async getCheckInStatus() {
    return this.client.get(e("/activity/check-in/status"));
  }
  /** 获取签到记录 */
  async getCheckInRecords(t) {
    return this.client.get(e("/activity/check-in/records"), t);
  }
}
function Me(n) {
  return new Te(n);
}
class Re {
  constructor(t) {
    this.client = t;
  }
  /** Transfer points */
  async createTransfer(t) {
    return this.client.post(e("/account/points/transfer"), t);
  }
  /** Deduct tokens */
  async deductToken(t) {
    return this.client.post(e("/account/points/token/deduct"), void 0, t);
  }
  /** Exchange points */
  async exchange(t) {
    return this.client.post(e("/account/points/exchange"), t);
  }
  /** Recharge points */
  async rechargePoints(t) {
    return this.client.post(e("/account/points/recharge"), t);
  }
  /** Withdraw cash */
  async withdraw(t) {
    return this.client.post(e("/account/cash/withdraw"), t);
  }
  /** Transfer cash */
  async createTransferCash(t) {
    return this.client.post(e("/account/cash/transfer"), t);
  }
  /** Recharge cash account */
  async recharge(t) {
    return this.client.post(e("/account/cash/recharge"), t);
  }
  /** Get account summary */
  async getAccountSummary() {
    return this.client.get(e("/account/summary"));
  }
  /** Get points account */
  async getPoints() {
    return this.client.get(e("/account/points"));
  }
  /** Get token account */
  async getToken() {
    return this.client.get(e("/account/points/token"));
  }
  /** Get points history */
  async getHistory(t) {
    return this.client.get(e("/account/points/history"), t);
  }
  /** Get points-to-cash rate */
  async getPointsToCashRate() {
    return this.client.get(e("/account/points/exchange-rate"));
  }
  /** Get cash account */
  async getCash() {
    return this.client.get(e("/account/cash"));
  }
  /** Get cash history */
  async getHistoryCash(t) {
    return this.client.get(e("/account/cash/history"), t);
  }
}
function Ie(n) {
  return new Re(n);
}
class Fe {
  constructor(t) {
    this.client = t;
  }
  /** 实验反馈 */
  async submitExperimentFeedback(t, s) {
    return this.client.post(e(`/abtest/${t}/feedback`), s);
  }
  /** 退出实验 */
  async exitExperiment(t, s) {
    return this.client.post(e(`/abtest/${t}/exit`), void 0, s);
  }
  /** 所有特性开关 */
  async listFeatureFlags() {
    return this.client.get(e("/abtest/features"));
  }
  /** 批量特性开关 */
  async batchCheckFeatures(t) {
    return this.client.post(e("/abtest/features"), t);
  }
  /** 上报实验曝光 */
  async trackExperimentExposure(t) {
    return this.client.post(e("/abtest/exposure"), t);
  }
  /** 上报实验事件 */
  async trackExperimentEvent(t) {
    return this.client.post(e("/abtest/events"), t);
  }
  /** 上报实验转化 */
  async trackExperimentConversion(t) {
    return this.client.post(e("/abtest/conversion"), t);
  }
  /** 批量获取分组 */
  async batchGetAssignments(t) {
    return this.client.post(e("/abtest/assignments"), t);
  }
  /** 实验结果 */
  async getExperimentResults(t) {
    return this.client.get(e(`/abtest/${t}/results`));
  }
  /** 实验报告 */
  async getExperimentReport(t) {
    return this.client.get(e(`/abtest/${t}/report`));
  }
  /** UI配置 */
  async getUiConfig() {
    return this.client.get(e("/abtest/ui-config"));
  }
  /** 灰度配置 */
  async listRolloutConfigs() {
    return this.client.get(e("/abtest/rollouts"));
  }
  /** 灰度发布 */
  async checkRollout(t) {
    return this.client.get(e(`/abtest/rollout/${t}`));
  }
  /** 特性开关 */
  async checkFeatureFlag(t) {
    return this.client.get(e(`/abtest/features/${t}`));
  }
  /** 可用实验 */
  async listAvailableExperiments() {
    return this.client.get(e("/abtest/experiments"));
  }
  /** 实验详情 */
  async getExperimentDetail(t) {
    return this.client.get(e(`/abtest/experiments/${t}`));
  }
  /** 个性化配置 */
  async getPersonalizedConfig() {
    return this.client.get(e("/abtest/config"));
  }
  /** 获取实验分组 */
  async getExperimentAssignment(t) {
    return this.client.get(e("/abtest/assignment"), t);
  }
  /** 算法配置 */
  async getAlgorithmConfig() {
    return this.client.get(e("/abtest/algorithm-config"));
  }
}
function Ee(n) {
  return new Fe(n);
}
class Ue {
  constructor(t) {
    this.client = t;
  }
  /** 获取SKU详情 */
  async getSkuDetail(t) {
    return this.client.get(e(`/skus/${t}`));
  }
  /** 获取SKU库存 */
  async getSkuStock(t) {
    return this.client.get(e(`/skus/${t}/stock`));
  }
  /** 检查SKU库存 */
  async checkSkuStock(t, s) {
    return this.client.get(e(`/skus/${t}/check-stock`), s);
  }
  /** 获取产品的SKU列表 */
  async getSkuByProduct(t, s) {
    return this.client.get(e(`/skus/product/${t}`), s);
  }
  /** 获取产品SKU统计 */
  async getSkuStatistics(t) {
    return this.client.get(e(`/skus/product/${t}/statistics`));
  }
  /** 检查SKU编码是否存在 */
  async checkSkuCodeExists(t) {
    return this.client.get(e("/skus/exists"), t);
  }
  /** 按编码获取SKU */
  async getSkuByCode(t) {
    return this.client.get(e(`/skus/code/${t}`));
  }
  /** 批量获取SKU */
  async batchGet(t) {
    return this.client.get(e("/skus/batch"), t);
  }
}
function Be(n) {
  return new Ue(n);
}
class Ke {
  constructor(t) {
    this.client = t;
  }
  /** List available trade tasks */
  async listTasks(t) {
    return this.client.get(e("/trade/tasks"), t);
  }
  /** Get trade task detail */
  async getTaskDetail(t) {
    return this.client.get(e(`/trade/tasks/${t}`));
  }
  /** Accept task */
  async acceptTask(t, s) {
    return this.client.post(e(`/trade/tasks/${t}/accept`), s);
  }
  /** Submit task delivery */
  async submitTask(t, s) {
    return this.client.post(e(`/trade/tasks/${t}/submit`), s);
  }
  /** Approve or reject task */
  async approveTask(t, s) {
    return this.client.post(e(`/trade/tasks/${t}/approve`), s);
  }
  /** Cancel task */
  async cancelTask(t, s) {
    return this.client.post(e(`/trade/tasks/${t}/cancel`), s);
  }
  /** List tasks published by current user */
  async listPublishedTasks(t) {
    return this.client.get(e("/trade/tasks/published"), t);
  }
  /** List tasks accepted by current user */
  async listAcceptedTasks(t) {
    return this.client.get(e("/trade/tasks/accepted"), t);
  }
}
function xe(n) {
  return new Ke(n);
}
class je {
  constructor(t) {
    this.client = t;
  }
  /** List agents */
  async getList(t) {
    return this.client.get(e("/openchat/agents"), t);
  }
  /** Create agent */
  async create(t) {
    return this.client.post(e("/openchat/agents"), t);
  }
  /** Get agent detail */
  async detail(t) {
    return this.client.get(e(`/openchat/agents/${t}`));
  }
  /** Wallet summary */
  async summary() {
    return this.client.get(e("/openchat/wallet/summary"));
  }
  /** Wallet transactions */
  async transactions(t) {
    return this.client.get(e("/openchat/wallet/transactions"), t);
  }
  /** List short videos */
  async getListVideos(t) {
    return this.client.get(e("/openchat/videos"), t);
  }
  /** Discover feed */
  async feed(t) {
    return this.client.get(e("/openchat/discover/feed"), t);
  }
  /** Notification page query */
  async page(t) {
    return this.client.get(e("/openchat/notifications/page"), t);
  }
  /** Unified search query */
  async query(t) {
    return this.client.post(e("/openchat/search/query"), t);
  }
  /** Get user setting profile */
  async get() {
    return this.client.get(e("/openchat/settings"));
  }
  /** Update user settings */
  async update(t) {
    return this.client.put(e("/openchat/settings"), t);
  }
  /** Skill market list */
  async getMarket(t) {
    return this.client.get(e("/openchat/skills/market"), t);
  }
  /** Tool market list */
  async getMarketTools(t) {
    return this.client.get(e("/openchat/tools/market"), t);
  }
  /** Moments list */
  async moments(t) {
    return this.client.get(e("/openchat/social/moments"), t);
  }
  /** Device list */
  async getListDevices() {
    return this.client.get(e("/openchat/devices"));
  }
  /** App store app list */
  async apps(t) {
    return this.client.get(e("/openchat/appstore/apps"), t);
  }
  /** Create file upload session */
  async createUploadSession(t) {
    return this.client.post(e("/openchat/files/upload/session"), t);
  }
  /** Upload file chunk */
  async uploadChunk(t) {
    return this.client.post(e("/openchat/files/upload/chunk"), t);
  }
  /** Complete file upload */
  async completeUpload(t) {
    return this.client.post(e("/openchat/files/upload/complete"), t);
  }
}
function Le(n) {
  return new je(n);
}
class Oe {
  constructor(t) {
    this.httpClient = h(t), this.workspace = p(this.httpClient), this.voiceSpeaker = d(this.httpClient), this.video = $(this.httpClient), this.user = k(this.httpClient), this.tool = w(this.httpClient), this.tenant = b(this.httpClient), this.social = S(this.httpClient), this.skill = D(this.httpClient), this.shop = M(this.httpClient), this.share = I(this.httpClient), this.setting = E(this.httpClient), this.prompt = B(this.httpClient), this.project = x(this.httpClient), this.product = L(this.httpClient), this.partner = V(this.httpClient), this.notification = H(this.httpClient), this.note = G(this.httpClient), this.news = q(this.httpClient), this.music = Y(this.httpClient), this.knowledgeBase = X(this.httpClient), this.invoice = Z(this.httpClient), this.image = et(this.httpClient), this.generation = nt(this.httpClient), this.filesystem = rt(this.httpClient), this.feedback = at(this.httpClient), this.favorite = lt(this.httpClient), this.drive = ht(this.httpClient), this.document = pt(this.httpClient), this.dashboard = dt(this.httpClient), this.collection = $t(this.httpClient), this.chat = kt(this.httpClient), this.character = wt(this.httpClient), this.category = bt(this.httpClient), this.cart = St(this.httpClient), this.asset = Dt(this.httpClient), this.app = Mt(this.httpClient), this.announcement = It(this.httpClient), this.agent = Et(this.httpClient), this.advert = Bt(this.httpClient), this.wallet = xt(this.httpClient), this.vote = Lt(this.httpClient), this.vip = Vt(this.httpClient), this.upload = Ht(this.httpClient), this.search = Gt(this.httpClient), this.rtc = qt(this.httpClient), this.payment = Yt(this.httpClient), this.organization = Xt(this.httpClient), this.order = Zt(this.httpClient), this.ordering = ee(this.httpClient), this.model = ne(this.httpClient), this.history = re(this.httpClient), this.game = ae(this.httpClient), this.feed = le(this.httpClient), this.email = he(this.httpClient), this.currency = pe(this.httpClient), this.coupon = de(this.httpClient), this.comment = $e(this.httpClient), this.claw = ke(this.httpClient), this.billing = we(this.httpClient), this.auth = be(this.httpClient), this.audit = Se(this.httpClient), this.analytic = De(this.httpClient), this.activity = Me(this.httpClient), this.account = Ie(this.httpClient), this.abtest = Ee(this.httpClient), this.skus = Be(this.httpClient), this.trade = xe(this.httpClient), this.openchat = Le(this.httpClient);
  }
  setApiKey(t) {
    return this.httpClient.setApiKey(t), this;
  }
  setAuthToken(t) {
    return this.httpClient.setAuthToken(t), this;
  }
  setAccessToken(t) {
    return this.httpClient.setAccessToken(t), this;
  }
  setTokenManager(t) {
    return this.httpClient.setTokenManager(t), this;
  }
  get http() {
    return this.httpClient;
  }
}
function ze(n) {
  return new Oe(n);
}
class He {
  constructor(t, s) {
    this.http = t, this.basePath = s;
  }
  async get(t, s, i) {
    return this.http.get(`${this.basePath}${t}`, s, i);
  }
  async post(t, s, i, c) {
    return this.http.post(`${this.basePath}${t}`, s, i, c);
  }
  async put(t, s, i, c) {
    return this.http.put(`${this.basePath}${t}`, s, i, c);
  }
  async delete(t, s, i) {
    return this.http.delete(`${this.basePath}${t}`, s, i);
  }
  async patch(t, s, i, c) {
    return this.http.patch(`${this.basePath}${t}`, s, i, c);
  }
}
export {
  Fe as AbtestApi,
  Re as AccountApi,
  Te as ActivityApi,
  Ut as AdvertApi,
  Ft as AgentApi,
  Pe as AnalyticApi,
  Rt as AnnouncementApi,
  Tt as AppApi,
  Pt as AssetApi,
  Ce as AuditApi,
  Ae as AuthApi,
  He as BaseApi,
  fe as BillingApi,
  Ct as CartApi,
  At as CategoryApi,
  ft as CharacterApi,
  vt as ChatApi,
  ve as ClawApi,
  mt as CollectionApi,
  me as CommentApi,
  ye as CouponApi,
  ge as CurrencyApi,
  _e as DEFAULT_TIMEOUT,
  yt as DashboardApi,
  qe as DefaultAuthTokenManager,
  gt as DocumentApi,
  ut as DriveApi,
  ue as EmailApi,
  ot as FavoriteApi,
  oe as FeedApi,
  ct as FeedbackApi,
  it as FilesystemApi,
  ce as GameApi,
  st as GenerationApi,
  ie as HistoryApi,
  a as HttpClient,
  tt as ImageApi,
  J as InvoiceApi,
  Q as KnowledgeBaseApi,
  se as ModelApi,
  W as MusicApi,
  _ as NewsApi,
  N as NoteApi,
  z as NotificationApi,
  je as OpenchatApi,
  Jt as OrderApi,
  te as OrderingApi,
  Qt as OrganizationApi,
  O as PartnerApi,
  Wt as PaymentApi,
  j as ProductApi,
  K as ProjectApi,
  U as PromptApi,
  _t as RtcApi,
  We as SUCCESS_CODES,
  Oe as SdkworkAppClient,
  Nt as SearchApi,
  F as SettingApi,
  R as ShareApi,
  T as ShopApi,
  P as SkillApi,
  Ue as SkusApi,
  C as SocialApi,
  A as TenantApi,
  f as ToolApi,
  Ke as TradeApi,
  zt as UploadApi,
  v as UserApi,
  m as VideoApi,
  Ot as VipApi,
  y as VoiceSpeakerApi,
  jt as VoteApi,
  Kt as WalletApi,
  g as WorkspaceApi,
  e as appApiPath,
  Ee as createAbtestApi,
  Ie as createAccountApi,
  Me as createActivityApi,
  Bt as createAdvertApi,
  Et as createAgentApi,
  De as createAnalyticApi,
  It as createAnnouncementApi,
  Mt as createAppApi,
  Dt as createAssetApi,
  Se as createAuditApi,
  be as createAuthApi,
  we as createBillingApi,
  St as createCartApi,
  bt as createCategoryApi,
  wt as createCharacterApi,
  kt as createChatApi,
  ke as createClawApi,
  ze as createClient,
  $t as createCollectionApi,
  $e as createCommentApi,
  de as createCouponApi,
  pe as createCurrencyApi,
  dt as createDashboardApi,
  pt as createDocumentApi,
  ht as createDriveApi,
  he as createEmailApi,
  lt as createFavoriteApi,
  le as createFeedApi,
  at as createFeedbackApi,
  rt as createFilesystemApi,
  ae as createGameApi,
  nt as createGenerationApi,
  re as createHistoryApi,
  h as createHttpClient,
  et as createImageApi,
  Z as createInvoiceApi,
  X as createKnowledgeBaseApi,
  ne as createModelApi,
  Y as createMusicApi,
  q as createNewsApi,
  G as createNoteApi,
  H as createNotificationApi,
  Le as createOpenchatApi,
  Zt as createOrderApi,
  ee as createOrderingApi,
  Xt as createOrganizationApi,
  V as createPartnerApi,
  Yt as createPaymentApi,
  L as createProductApi,
  x as createProjectApi,
  B as createPromptApi,
  qt as createRtcApi,
  Gt as createSearchApi,
  E as createSettingApi,
  I as createShareApi,
  M as createShopApi,
  D as createSkillApi,
  Be as createSkusApi,
  S as createSocialApi,
  b as createTenantApi,
  Ye as createTokenManager,
  w as createToolApi,
  xe as createTradeApi,
  Ht as createUploadApi,
  k as createUserApi,
  $ as createVideoApi,
  Vt as createVipApi,
  d as createVoiceSpeakerApi,
  Lt as createVoteApi,
  xt as createWalletApi,
  p as createWorkspaceApi
};
//# sourceMappingURL=index.js.map
