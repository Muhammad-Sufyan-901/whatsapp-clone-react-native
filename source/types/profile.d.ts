import type { Bio } from "./Bio";
import type { Group } from "./group";

export interface Profile {
  username: string;
  profileImage: string;
  isOnline: boolean;
  lastSeen: Date | string;
  phoneNumber: string;
  bio: Bio;
  groups: Group[];
}
