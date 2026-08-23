import type { Department } from "./department";
import type { Designation } from "./designation";
import type { Team } from "./team";

export interface UpdateUserOrganizationDto {
  departmentId?: string | null;
  designationId?: string | null;
  teamId?: string | null;
  managerId?: string | null;
}

export interface UserHierarchyNode {
  id: string;
  name: string;
  email: string;
  designation?: Designation | null;
}

export interface UserHierarchyResponse {
  user: {
    id: string;
    name: string;
    email: string;
    designation?: Designation | null;
    team?: Team | null;
    department?: Department | null;
  };
  reportingLine: UserHierarchyNode[];
}
