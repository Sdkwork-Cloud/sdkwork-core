/** Friend request item */
export interface FriendRequestVO {
    /** Created time */
    createdAt?: string;
    /** Updated time */
    updatedAt?: string;
    /** Request id */
    id?: string;
    /** Sender user id */
    fromId?: string;
    /** Sender name */
    fromName?: string;
    /** Sender avatar */
    fromAvatar?: string;
    /** Receiver user id */
    toId?: string;
    /** Request status */
    status?: 'pending' | 'accepted' | 'rejected';
    /** Request message */
    message?: string;
}
//# sourceMappingURL=friend-request-vo.d.ts.map