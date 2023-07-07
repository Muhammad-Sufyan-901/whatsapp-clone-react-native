import { faker } from "@faker-js/faker";
import { dateFormatterBasedOnStartedAtAndEndedAtDifferences } from "../utils";
import type { Call, Group, GroupMember } from "../types";

export const callList: Call[] = [...Array<Call>(5)].map(
  (): Call => ({
    profile: {
      username: faker.name.fullName(),
      profileImage: faker.image.avatar(),
      lastSeen: faker.date.recent(),
      isOnline: faker.datatype.boolean(),
      phoneNumber: faker.phone.number("+## ### #######"),
      bio: {
        bioMessage: faker.helpers.arrayElement([faker.lorem.sentence(), faker.random.words(5)]),
        createdAt: faker.date.past(),
      },
      groups: [...Array<Group>(Math.round(Math.random() * 5))].map(
        (): Group => ({
          name: faker.random.words(),
          profileImage: faker.image.avatar(),
          members: [...Array<GroupMember>(Math.round(Math.random() * 5))].map(
            (): GroupMember => ({
              username: faker.name.fullName(),
              profileImage: faker.image.avatar(),
            })
          ),
        })
      ),
    },
    type: faker.helpers.arrayElement(["call", "video call"]),
    startedAt: faker.date.recent(),
    endedAt: new Date(),
    duration: dateFormatterBasedOnStartedAtAndEndedAtDifferences(new Date(), faker.date.recent()),
    dataUsage: faker.random.numeric(3),
    isAnswered: faker.datatype.boolean(),
  })
);
