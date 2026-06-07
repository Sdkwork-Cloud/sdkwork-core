import { AccountConfigMetadata } from './account-config-metadata';
export interface OfficialAccountConfig {
    id?: number;
    uuid?: string;
    region?: string;
    weight?: number;
    channel?: 'DEFAULT' | 'ALIYUN' | 'AWS' | 'APPLE' | 'AZURE' | 'BAIDU' | 'VOLCENGINE' | 'TENCENT' | 'HUAWEI' | 'GOOGLE' | 'META' | 'WECHAT' | 'ALIPAY' | 'UNION_PAY' | 'UNIONPAY' | 'DOUYIN' | 'MICROSOFT' | 'AMAZON' | 'ANTHROPIC' | 'XAI' | 'DEEPSEEK' | 'GROQ' | 'HUGGING_FACE' | 'KUAISHOU' | 'MINIMAX' | 'MISTRAL' | 'MOONSHOT' | 'NVIDIA' | 'OPENAI' | 'OLLAMA' | 'PERPLEXITY' | 'SDKWORK' | 'SILICONFLOW' | 'STEPFUN' | 'XUNFEI' | 'ZHIPU' | 'RAGFLOW' | 'STABILITY' | 'MINDSDB' | 'MEM0' | 'BOCHA' | 'BING' | 'OPEN_ROUTER' | 'STRIPE' | 'PAYPAL' | 'SUNO' | 'VIDU' | 'RUNWAY' | 'MEITUAN' | 'YUNWU' | 'MIDJOURNEY' | 'IDEOGRAM' | 'FLUX' | 'VECTOR_STORE_AZURE' | 'VECTOR_STORE_CASSANDRA' | 'VECTOR_STORE_CHROMA' | 'VECTOR_STORE_COUCHBASE' | 'VECTOR_STORE_ELASTICSEARCH' | 'VECTOR_STORE_GEMFIRE' | 'VECTOR_STORE_MARIADB' | 'VECTOR_STORE_MILVUS' | 'VECTOR_STORE_MONGODB' | 'VECTOR_STORE_NEO4J' | 'VECTOR_STORE_OPENSEARCH' | 'VECTOR_STORE_ORACLE' | 'VECTOR_STORE_PGVECTOR' | 'VECTOR_STORE_PINECONE' | 'VECTOR_STORE_QDRANT' | 'VECTOR_STORE_REDIS' | 'VECTOR_STORE_TYPESENSE' | 'VECTOR_STORE_WEAVIATE';
    product?: string;
    functions?: 'NONE' | 'SPEECH_SYNTHESIS' | 'SPEECH_TRANSCRIPTION' | 'SPEECH_TRANSLATION'[];
    metadata?: AccountConfigMetadata;
    properties?: Record<string, unknown>;
    /** OAuth提供商类型 */
    authProvider?: 'WECHAT' | 'QQ' | 'WEIBO' | 'GITHUB' | 'GOOGLE' | 'FACEBOOK' | 'TWITTER' | 'LINKEDIN' | 'MICROSOFT' | 'APPLE' | 'ALIPAY' | 'DINGTALK' | 'GITEE' | 'DOUYIN';
    appId?: string;
    /** 客户端密钥（AppSecret） */
    appSecret?: string;
    token?: string;
    /** 回调URL */
    redirectUri?: string;
    /** 授权范围 */
    scope?: string;
    /** 是否为服务号 */
    isServiceAccount?: boolean;
    /** Apple Team ID */
    teamId?: string;
    /** Apple Key ID */
    keyId?: string;
    /** Apple私钥PEM格式内容 */
    privateKey?: string;
    /** 支付宝公钥 */
    publicKey?: string;
    secret?: string;
    aesKey?: string;
    qrCodeUrl?: string;
    originalId?: string;
    notifyUrl?: string;
    securityModeEnabled?: boolean;
    accessToken?: string;
    accessTokenExpiresIn?: number;
    accessTokenFetchTime?: number;
    jsSdkEnabled?: boolean;
    jsApiDomain?: string;
    encodingAESKey?: string;
}
//# sourceMappingURL=official-account-config.d.ts.map