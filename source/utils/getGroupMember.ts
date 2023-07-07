import type { GroupMember } from "../types";

export const getGroupMemberListJoined = (groupMember: GroupMember[]): string => {
  return groupMember.map(({ username }: GroupMember): string => username).join(", ");
};
