import { faker } from "@faker-js/faker";
import type { User } from "../types";

export const userProfile: User = {
  profileImage: faker.image.avatar(),
  username: faker.name.fullName(),
  isOnline: faker.datatype.boolean(),
  lastSeen: faker.date.recent(),
};
