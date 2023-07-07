import { faker } from "@faker-js/faker";
import { chatList } from "./chats";
import { getYesterdayDate, getOneRandomUser } from "../utils";
import type { Status } from "../types";

export const statusList: Status[] = [...Array<Status>(5)].map(
  (): Status => ({
    image: faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
    poster: getOneRandomUser(chatList),
    postedAt: faker.date.between(getYesterdayDate(), Date.now()),
    isSeen: faker.datatype.boolean(),
    caption: faker.helpers.arrayElement([faker.lorem.sentence(), faker.random.words(5)]),
    viewers: faker.random.numeric(2),
  })
);
