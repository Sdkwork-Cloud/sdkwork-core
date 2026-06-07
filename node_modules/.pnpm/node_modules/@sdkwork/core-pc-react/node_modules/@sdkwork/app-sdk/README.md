# sdkwork-app-sdk

Professional TypeScript SDK for SDKWork API.

## Installation

```bash
npm install @sdkwork/app-sdk
# or
yarn add @sdkwork/app-sdk
# or
pnpm add @sdkwork/app-sdk
```

## Quick Start

```typescript
import { SdkworkAppClient } from '@sdkwork/app-sdk';

const client = new SdkworkAppClient({
  baseUrl: 'http://localhost:8080',
  timeout: 30000,
});

// Mode A: API Key (recommended for server-to-server calls)
client.setApiKey('your-api-key');

// Use the SDK
const result = await client.tenant.getTenantTypes();
```

## Authentication Modes (Mutually Exclusive)

Choose exactly one mode for the same client instance.

### Mode A: API Key

```typescript
const client = new SdkworkAppClient({ baseUrl: 'http://localhost:8080' });
client.setApiKey('your-api-key');
// Sends: Authorization: Bearer <apiKey>
```

### Mode B: Dual Token

```typescript
const client = new SdkworkAppClient({ baseUrl: 'http://localhost:8080' });
client.setAuthToken('your-auth-token');
client.setAccessToken('your-access-token');
// Sends:
// Authorization: Bearer <authToken>
// Access-Token: <accessToken>
```

> Do not call `setApiKey(...)` together with `setAuthToken(...)` + `setAccessToken(...)` on the same client.

## Configuration (Non-Auth)

```typescript
import { SdkworkAppClient } from '@sdkwork/app-sdk';

const client = new SdkworkAppClient({
  baseUrl: 'http://localhost:8080',
  timeout: 30000, // Request timeout in ms
  headers: {      // Custom headers
    'X-Custom-Header': 'value',
  },
});
```

## API Modules

- `client.workspace` - workspace API
- `client.voiceSpeaker` - voice_speaker API
- `client.video` - video API
- `client.user` - user API
- `client.tool` - tool API
- `client.tenant` - tenant API
- `client.social` - social API
- `client.skill` - skill API
- `client.shop` - shop API
- `client.share` - share API
- `client.setting` - setting API
- `client.prompt` - prompt API
- `client.project` - project API
- `client.product` - product API
- `client.partner` - partner API
- `client.notification` - notification API
- `client.note` - note API
- `client.news` - news API
- `client.music` - music API
- `client.knowledgeBase` - knowledge_base API
- `client.invoice` - invoice API
- `client.image` - image API
- `client.generation` - generation API
- `client.filesystem` - filesystem API
- `client.feedback` - feedback API
- `client.favorite` - favorite API
- `client.drive` - drive API
- `client.document` - document API
- `client.dashboard` - dashboard API
- `client.collection` - collection API
- `client.chat` - chat API
- `client.character` - character API
- `client.category` - category API
- `client.cart` - cart API
- `client.asset` - asset API
- `client.app` - app API
- `client.announcement` - announcement API
- `client.agent` - agent API
- `client.advert` - advert API
- `client.wallet` - wallet API
- `client.vote` - vote API
- `client.vip` - vip API
- `client.upload` - upload API
- `client.search` - search API
- `client.rtc` - rtc API
- `client.payment` - payment API
- `client.organization` - organization API
- `client.order` - order API
- `client.ordering` - ordering API
- `client.model` - model API
- `client.history` - history API
- `client.game` - game API
- `client.feed` - feed API
- `client.email` - email API
- `client.currency` - currency API
- `client.coupon` - coupon API
- `client.comment` - comment API
- `client.claw` - claw API
- `client.billing` - billing API
- `client.auth` - auth API
- `client.audit` - audit API
- `client.analytic` - analytic API
- `client.activity` - activity API
- `client.account` - account API
- `client.abtest` - abtest API
- `client.skus` - skus API
- `client.trade` - trade API
- `client.openchat` - openchat API

## Usage Examples

### workspace

```typescript
// 获取工作空间列表
const result = await client.workspace.listWorkspaces();
```

### voice_speaker

```typescript
// 获取发音人统计
const result = await client.voiceSpeaker.getStatistics();
```

### video

```typescript
// 获取视频统计
const result = await client.video.getVideoStatistics();
```

### user

```typescript
// 获取用户设置
const result = await client.user.getUserSettings();
```

### tool

```typescript
// List my tools
const result = await client.tool.listMine();
```

### tenant

```typescript
// 获取租户类型列表
const result = await client.tenant.getTenantTypes();
```

### social

```typescript
// List friend requests
const result = await client.social.listFriendRequests();
```

### skill

```typescript
// List my installed skills
const result = await client.skill.listMine();
```

### shop

```typescript
// 获取店铺统计
const result = await client.shop.getStatistics();
```

### share

```typescript
// 获取分享平台配置
const result = await client.share.getSharePlatforms();
```

### setting

```typescript
// 获取界面设置
const result = await client.setting.getUi();
```

### prompt

```typescript
// 获取热门提示语
const params = {} as Record<string, any>;
const result = await client.prompt.getPopularPrompts(params);
```

### project

```typescript
// 最近访问项目
const params = {} as Record<string, any>;
const result = await client.project.listRecentProjects(params);
```

### product

```typescript
// 获取商品分类树
const result = await client.product.getProductCategoryTree();
```

### partner

```typescript
// Get partner statistics
const result = await client.partner.getPartnerStatistics();
```

### notification

```typescript
// Get notification settings
const result = await client.notification.getNotificationSettings();
```

### note

```typescript
// Notes API
const result = await client.note.listFolders();
```

### news

```typescript
// 获取我的新闻
const params = {} as Record<string, any>;
const result = await client.news.getMy(params);
```

### music

```typescript
// 获取音乐统计
const result = await client.music.getMusicStatistics();
```

### knowledge_base

```typescript
// Batch delete knowledge documents
const knowledgeBaseId = 1;
const result = await client.knowledgeBase.batchDeleteKnowledgeDocuments(knowledgeBaseId);
```

### invoice

```typescript
// 获取发票统计
const result = await client.invoice.getInvoiceStatistics();
```

### image

```typescript
// 获取图片统计
const result = await client.image.getImageStatistics();
```

### generation

```typescript
// 获取风格类型列表
const result = await client.generation.getStyleTypes();
```

### filesystem

```typescript
// List disks
const result = await client.filesystem.listDisks();
```

### feedback

```typescript
// 客服信息
const result = await client.feedback.getSupportInfo();
```

### favorite

```typescript
// 收藏夹列表
const result = await client.favorite.listFavoriteFolders();
```

### drive

```typescript
// Clear drive trash
const result = await client.drive.clearTrash();
```

### document

```typescript
// Batch delete documents
const result = await client.document.batchDeleteDocuments();
```

### dashboard

```typescript
// 快捷入口
const result = await client.dashboard.getShortcuts();
```

### collection

```typescript
// 获取合集树
const params = {} as Record<string, any>;
const result = await client.collection.getCollectionTree(params);
```

### chat

```typescript
// 获取会话列表
const params = {} as Record<string, any>;
const result = await client.chat.listSessions(params);
```

### character

```typescript
// 获取热门角色
const params = {} as Record<string, any>;
const result = await client.character.getPopularCharacters(params);
```

### category

```typescript
// 获取分类类型
const result = await client.category.getCategoryTypes();
```

### cart

```typescript
// Get cart items
const result = await client.cart.getCartItems();
```

### asset

```typescript
// 获取文件夹列表
const result = await client.asset.listFolders();
```

### app

```typescript
// Get app statistics
const result = await client.app.getAppStatistics();
```

### announcement

```typescript
// 未读公告
const result = await client.announcement.getUnreadAnnouncements();
```

### agent

```typescript
// List agents
const params = {} as Record<string, any>;
const result = await client.agent.getList(params);
```

### advert

```typescript
// 广告设置
const result = await client.advert.getAdvertSettings();
```

### wallet

```typescript
// Get wallet overview
const result = await client.wallet.getOverview();
```

### vote

```typescript
// 获取我的投票历史
const params = {} as Record<string, any>;
const result = await client.vote.getMyVotes(params);
```

### vip

```typescript
// 获取VIP状态
const result = await client.vip.getVipStatus();
```

### upload

```typescript
// 获取存储使用情况
const result = await client.upload.getStorageUsage();
```

### search

```typescript
// 搜索统计
const result = await client.search.getSearchStatistics();
```

### rtc

```typescript
// List RTC records
const params = {} as Record<string, any>;
const result = await client.rtc.listRecords(params);
```

### payment

```typescript
// Get payment statistics
const result = await client.payment.getPaymentStatistics();
```

### organization

```typescript
// 获取组织统计
const result = await client.organization.getOrganizationStatistics();
```

### order

```typescript
// Get order statistics
const result = await client.order.getOrderStatistics();
```

### ordering

```typescript
// Get menu categories
const result = await client.ordering.getMenuCategories();
```

### model

```typescript
// Get model types
const result = await client.model.getModelTypes();
```

### history

```typescript
// 历史统计
const result = await client.history.getHistoryStatistics();
```

### game

```typescript
// 获取我的荣誉
const params = {} as Record<string, any>;
const result = await client.game.listHonors(params);
```

### feed

```typescript
// Get top feeds
const params = {} as Record<string, any>;
const result = await client.feed.getTopFeeds(params);
```

### email

```typescript
// Get SaaS managed email account config
const result = await client.email.getAccountConfig();
```

### currency

```typescript
// 获取货币类型列表
const result = await client.currency.getCurrencyTypes();
```

### coupon

```typescript
// 获取优惠券统计
const result = await client.coupon.getStatistics();
```

### comment

```typescript
// 获取我的评论
const params = {} as Record<string, any>;
const result = await client.comment.getMyComments(params);
```

### claw

```typescript
// Get claw bootstrap
const result = await client.claw.bootstrap();
```

### billing

```typescript
// 预扣冻结
const body = {} as any;
const result = await client.billing.prehold(body);
```

### auth

```typescript
// 生成登录二维码
const result = await client.auth.generateQrCode();
```

### audit

```typescript
// 敏感词库
const result = await client.audit.listSensitiveWord();
```

### analytic

```typescript
// 使用统计
const result = await client.analytic.getUserUsageStats();
```

### activity

```typescript
// 获取抽奖列表
const result = await client.activity.listLotteryActivities();
```

### account

```typescript
// Get account summary
const result = await client.account.getAccountSummary();
```

### abtest

```typescript
// 所有特性开关
const result = await client.abtest.listFeatureFlags();
```

### skus

```typescript
// 检查SKU编码是否存在
const params = {} as Record<string, any>;
const result = await client.skus.checkSkuCodeExists(params);
```

### trade

```typescript
// List tasks published by current user
const params = {} as Record<string, any>;
const result = await client.trade.listPublishedTasks(params);
```

### openchat

```typescript
// Wallet summary
const result = await client.openchat.summary();
```

## Error Handling

```typescript
import { SdkworkAppClient, NetworkError, TimeoutError, AuthenticationError } from '@sdkwork/app-sdk';

try {
  const result = await client.tenant.getTenantTypes();
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.error('Authentication failed:', error.message);
  } else if (error instanceof TimeoutError) {
    console.error('Request timed out:', error.message);
  } else if (error instanceof NetworkError) {
    console.error('Network error:', error.message);
  } else {
    throw error;
  }
}
```

## Publishing

This SDK includes cross-platform publish scripts in `bin/`:
- `bin/publish-core.mjs`
- `bin/publish.sh`
- `bin/publish.ps1`

### Check

```bash
./bin/publish.sh --action check
```

### Publish

```bash
./bin/publish.sh --action publish --channel release
```

```powershell
.\bin\publish.ps1 --action publish --channel test --dry-run
```

> Set `NPM_TOKEN` (and optional `NPM_REGISTRY_URL`) before release publish.

## License

MIT
