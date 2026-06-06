import { TagsContent } from './tags-content';
import { VoiceMotion } from './voice-motion';
import { VoiceStyle } from './voice-style';
export interface VoiceSpeakerInfo {
    /** 语音服务提供商 */
    channel?: 'DEFAULT' | 'ALIYUN' | 'AWS' | 'APPLE' | 'AZURE' | 'BAIDU' | 'VOLCENGINE' | 'TENCENT' | 'HUAWEI' | 'GOOGLE' | 'META' | 'WECHAT' | 'ALIPAY' | 'UNION_PAY' | 'UNIONPAY' | 'DOUYIN' | 'MICROSOFT' | 'AMAZON' | 'ANTHROPIC' | 'XAI' | 'DEEPSEEK' | 'GROQ' | 'HUGGING_FACE' | 'KUAISHOU' | 'MINIMAX' | 'MISTRAL' | 'MOONSHOT' | 'NVIDIA' | 'OPENAI' | 'OLLAMA' | 'PERPLEXITY' | 'SDKWORK' | 'SILICONFLOW' | 'STEPFUN' | 'XUNFEI' | 'ZHIPU' | 'RAGFLOW' | 'STABILITY' | 'MINDSDB' | 'MEM0' | 'BOCHA' | 'BING' | 'OPEN_ROUTER' | 'STRIPE' | 'PAYPAL' | 'SUNO' | 'VIDU' | 'RUNWAY' | 'MEITUAN' | 'YUNWU' | 'MIDJOURNEY' | 'IDEOGRAM' | 'FLUX' | 'VECTOR_STORE_AZURE' | 'VECTOR_STORE_CASSANDRA' | 'VECTOR_STORE_CHROMA' | 'VECTOR_STORE_COUCHBASE' | 'VECTOR_STORE_ELASTICSEARCH' | 'VECTOR_STORE_GEMFIRE' | 'VECTOR_STORE_MARIADB' | 'VECTOR_STORE_MILVUS' | 'VECTOR_STORE_MONGODB' | 'VECTOR_STORE_NEO4J' | 'VECTOR_STORE_OPENSEARCH' | 'VECTOR_STORE_ORACLE' | 'VECTOR_STORE_PGVECTOR' | 'VECTOR_STORE_PINECONE' | 'VECTOR_STORE_QDRANT' | 'VECTOR_STORE_REDIS' | 'VECTOR_STORE_TYPESENSE' | 'VECTOR_STORE_WEAVIATE';
    /** 语音服务提供商 */
    provider?: 'ALIYUN' | 'TENCENT' | 'OPENAI' | 'HUGGING_FACE' | 'AZURE' | 'GOOGLE' | 'BAIDU';
    /** 语音模型产品名称 */
    product?: string;
    /** 模型唯一标识符（由AI服务提供商提供） */
    id?: string;
    /** 语音模型配置信息 */
    models?: string[];
    /** 发音人Id */
    speakerId?: string;
    /** 显示的语音名称 */
    displayName?: string;
    /** 语音标签 */
    tags?: TagsContent;
    /** 语音情感 */
    motion?: VoiceMotion;
    /** 语音风格 */
    style?: VoiceStyle;
    /** 语音描述信息 */
    description?: string;
}
//# sourceMappingURL=voice-speaker-info.d.ts.map