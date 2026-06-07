import { ProjectMember } from './project-member';
import { ProjectSettings } from './project-settings';
export interface ProjectCreateForm {
    workspaceId?: string;
    projectName?: string;
    projectDescription?: string;
    projectType?: string;
    projectIcon?: string;
    projectColor?: string;
    projectTags?: string[];
    members?: ProjectMember[];
    settings?: ProjectSettings;
}
//# sourceMappingURL=project-create-form.d.ts.map