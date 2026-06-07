import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { EmailReadUpdateForm, EmailReceiveForm, EmailSendForm, EmailSyncForm, PlusApiResultEmailAccountConfigVO, PlusApiResultEmailMessagePageVO, PlusApiResultEmailMessageVO, PlusApiResultEmailSendResultVO, PlusApiResultEmailSyncResultVO, PlusApiResultVoid } from '../types';
export declare class EmailApi {
    private client;
    constructor(client: HttpClient);
    /** Manual IMAP sync */
    sync(body?: EmailSyncForm): Promise<PlusApiResultEmailSyncResultVO>;
    /** Send email */
    send(body: EmailSendForm): Promise<PlusApiResultEmailSendResultVO>;
    /** Receive email */
    receive(body: EmailReceiveForm): Promise<PlusApiResultEmailMessageVO>;
    /** Mark read/unread */
    markRead(messageId: string | number, body?: EmailReadUpdateForm): Promise<PlusApiResultEmailMessageVO>;
    /** List emails */
    listMessages(params?: QueryParams): Promise<PlusApiResultEmailMessagePageVO>;
    /** Get email message detail */
    getMessage(messageId: string | number): Promise<PlusApiResultEmailMessageVO>;
    /** Delete message */
    deleteMessage(messageId: string | number): Promise<PlusApiResultVoid>;
    /** Get SaaS managed email account config */
    getAccountConfig(): Promise<PlusApiResultEmailAccountConfigVO>;
}
export declare function createEmailApi(client: HttpClient): EmailApi;
//# sourceMappingURL=email.d.ts.map