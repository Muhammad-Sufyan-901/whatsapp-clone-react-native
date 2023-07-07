import { faker } from "@faker-js/faker";
import type { Chat, Group, GroupMember, Image, Message } from "../types";

export const chatList: Chat[] = [...Array<Chat>(10)].map(
  (): Chat => ({
    profile: {
      username: faker.name.fullName(),
      profileImage: faker.image.avatar(),
      isOnline: faker.datatype.boolean(),
      lastSeen: faker.date.recent(),
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
    messages: [...Array<Message>(Math.round(Math.random() * 5))].map(
      (): Message => ({
        message: faker.helpers.arrayElement([faker.lorem.sentence(), faker.lorem.sentences(), faker.lorem.words(), faker.random.words()]),
        sendAt: faker.date.past(),
        isSeen: faker.datatype.boolean(),
        isSender: faker.datatype.boolean(),
      })
    ),
    media: {
      images: [...Array<Image>(Math.round(Math.random() * 5))].map(
        (): Image => ({
          imageUrl: faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
        })
      ),
    },
    isPinned: faker.datatype.boolean(),
    isMuted: faker.datatype.boolean(),
  })
);
