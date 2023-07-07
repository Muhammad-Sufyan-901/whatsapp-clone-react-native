import type { Profile } from "./profile";

export interface Status {
  image: string;
  poster: Profile;
  postedAt: Date | string;
  isSeen: boolean;
  caption: string;
  viewers: string;
}
