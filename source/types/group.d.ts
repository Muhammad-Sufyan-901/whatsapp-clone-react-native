import type { GroupMember } from "./groupMember";

export interface Group {
  name: string;
  profileImage: string;
  members: GroupMember[];
}
