import { WorkspaceMember } from './workspace-member';
import { WorkspaceSettings } from './workspace-settings';
export interface WorkspaceCreateForm {
    workspaceName?: string;
    workspaceDescription?: string;
    workspaceIcon?: string;
    workspaceColor?: string;
    workspaceType?: string;
    members?: WorkspaceMember[];
    settings?: WorkspaceSettings;
}
//# sourceMappingURL=workspace-create-form.d.ts.map