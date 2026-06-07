import { HttpClient } from '../http/client';
import { ClawAuthRegisterForm, ClawHeartbeatForm, ClawLoginForm, ClawRefreshTokenForm, ClawRegisterForm, ClawScheduleTaskRegisterForm, ClawTaskReportForm, PlusApiResultClawBootstrapVO, PlusApiResultClawHeartbeatVO, PlusApiResultClawInstanceVO, PlusApiResultClawLoginVO, PlusApiResultClawScheduleTaskVO, PlusApiResultClawTaskExecutionVO } from '../types';
export declare class ClawApi {
    private client;
    constructor(client: HttpClient);
    /** Report claw task execution */
    reportTask(body: ClawTaskReportForm): Promise<PlusApiResultClawTaskExecutionVO>;
    /** Register claw schedule task */
    registerTask(body: ClawScheduleTaskRegisterForm): Promise<PlusApiResultClawScheduleTaskVO>;
    /** Register claw instance */
    createRegister(body: ClawRegisterForm): Promise<PlusApiResultClawInstanceVO>;
    /** Accept heartbeat */
    heartbeat(body: ClawHeartbeatForm): Promise<PlusApiResultClawHeartbeatVO>;
    /** Claw register */
    createRegisterAuth(body: ClawAuthRegisterForm): Promise<PlusApiResultClawLoginVO>;
    /** Claw refresh */
    refresh(body: ClawRefreshTokenForm): Promise<PlusApiResultClawLoginVO>;
    /** Claw login */
    login(body: ClawLoginForm): Promise<PlusApiResultClawLoginVO>;
    /** Get claw bootstrap */
    bootstrap(): Promise<PlusApiResultClawBootstrapVO>;
}
export declare function createClawApi(client: HttpClient): ClawApi;
//# sourceMappingURL=claw.d.ts.map