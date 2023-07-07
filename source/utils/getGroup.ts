import type { Group } from "../types";

export const getGroupListBasedOnIsExpanded = (groups: Group[], isGroupListExpanded: boolean): Group[] => {
  return isGroupListExpanded ? groups : groups.slice(0, 3);
};

export const getGroupHeaderTitle = (groups: Group[]): string => {
  return groups.length > 0 ? `${groups.length} grup yang sama` : `Tidak ada grup yang sama`;
};

export const getRestGroupListLength = (groups: Group[]): number => {
  return groups.length - 3;
};
