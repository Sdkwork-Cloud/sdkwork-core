import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { CreateKnowledgeRequest, CreatePostRequest, CreateRequest, CreateSessionRequest, PlusApiResultListMapStringObject, PlusApiResultMapStringObject, PlusApiResultVoid, SendSessionMessageRequest, UpdateRequest } from '../types';
export declare class AgentApi {
    private client;
    constructor(client: HttpClient);
    /** Get agent */
    get(agentId: string | number): Promise<PlusApiResultMapStringObject>;
    /** Update agent */
    update(agentId: string | number, body?: UpdateRequest): Promise<PlusApiResultMapStringObject>;
    /** Delete agent */
    delete(agentId: string | number): Promise<PlusApiResultVoid>;
    /** List agents */
    getList(params?: QueryParams): Promise<PlusApiResultMapStringObject>;
    /** Create agent */
    create(body?: CreateRequest): Promise<PlusApiResultMapStringObject>;
    /** List sessions */
    listSessions(agentId: string | number): Promise<PlusApiResultListMapStringObject>;
    /** Create session */
    createSession(agentId: string | number, body?: CreateSessionRequest): Promise<PlusApiResultMapStringObject>;
    /** Reset agent */
    reset(agentId: string | number): Promise<PlusApiResultVoid>;
    /** List memories */
    getListMemory(agentId: string | number, params?: QueryParams): Promise<PlusApiResultListMapStringObject>;
    /** Create memory */
    createMemory(agentId: string | number, body?: CreatePostRequest): Promise<PlusApiResultMapStringObject>;
    /** Summarize session */
    summarizeSession(agentId: string | number, sessionId: string | number): Promise<PlusApiResultMapStringObject>;
    /** List knowledge */
    listKnowledge(agentId: string | number): Promise<PlusApiResultListMapStringObject>;
    /** Create knowledge */
    createKnowledge(agentId: string | number, body?: CreateKnowledgeRequest): Promise<PlusApiResultMapStringObject>;
    /** Consolidate memories */
    consolidate(agentId: string | number): Promise<PlusApiResultMapStringObject>;
    /** List session messages */
    listSessionMessages(sessionId: string | number): Promise<PlusApiResultListMapStringObject>;
    /** Send session message */
    sendSessionMessage(sessionId: string | number, body?: SendSessionMessageRequest): Promise<PlusApiResultMapStringObject>;
    /** Clear session */
    createClearSession(sessionId: string | number): Promise<PlusApiResultVoid>;
    /** Agent stats */
    getStats(agentId: string | number): Promise<PlusApiResultMapStringObject>;
    /** Memory stats */
    getStatsMemory(agentId: string | number): Promise<PlusApiResultMapStringObject>;
    /** List session history */
    listSessionHistory(agentId: string | number, sessionId: string | number, params?: QueryParams): Promise<PlusApiResultListMapStringObject>;
    /** Search memories */
    search(agentId: string | number, params?: QueryParams): Promise<PlusApiResultListMapStringObject>;
    /** Get knowledge */
    getKnowledge(agentId: string | number, documentId: string | number): Promise<PlusApiResultMapStringObject>;
    /** Delete knowledge */
    deleteKnowledge(agentId: string | number, documentId: string | number): Promise<PlusApiResultMapStringObject>;
    /** List knowledge chunks */
    listKnowledgeChunks(agentId: string | number, documentId: string | number): Promise<PlusApiResultListMapStringObject>;
    /** Knowledge stats */
    knowledgeStats(agentId: string | number): Promise<PlusApiResultMapStringObject>;
    /** Search knowledge */
    searchKnowledge(agentId: string | number, params?: QueryParams): Promise<PlusApiResultListMapStringObject>;
    /** Delete memory */
    deleteMemory(agentId: string | number, memoryId: string | number): Promise<PlusApiResultMapStringObject>;
    /** Clear session memories */
    deleteClearSession(agentId: string | number, sessionId: string | number): Promise<PlusApiResultMapStringObject>;
    /** Delete session */
    deleteSession(sessionId: string | number): Promise<PlusApiResultVoid>;
}
export declare function createAgentApi(client: HttpClient): AgentApi;
//# sourceMappingURL=agent.d.ts.map