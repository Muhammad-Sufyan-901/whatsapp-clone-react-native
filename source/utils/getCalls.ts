import type { Call } from "../types";

export const getSortedCallListBasedOnStartedAt = (callList: Call[]) => {
  return callList.sort((a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime());
};
