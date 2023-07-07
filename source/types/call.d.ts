import { Profile } from "./profile";

export interface Call {
  profile: Profile;
  type: "call" | "video call";
  startedAt: Date | string;
  endedAt: Date | string;
  dataUsage: string;
  duration: string;
  isAnswered: boolean;
}
