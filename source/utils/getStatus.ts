import { Status } from "../types";

export const getStatusBasedOnIsSeen = (statusList: Status[], condition: boolean): Status[] => {
  return statusList.filter(({ isSeen }) => isSeen === condition);
};
