import type { Message } from "./message";
import type { Profile } from "./profile";
import type { Media } from "./Media";

export interface Chat {
  profile: Profile;
  messages: Message[];
  media: Media;
  isPinned: boolean;
  isMuted: boolean;
}
