import { Chat, Profile } from "../types";

export const getOneRandomUser = (chatList: Chat[]): Profile => {
  const indices: number[] = [...Array(chatList.length).keys()];

  for (let index = indices.length - 1; index > 0; index--) {
    const swappedIndex = Math.floor(Math.random() * (index + 1));

    [indices[index], indices[swappedIndex]] = [indices[swappedIndex], indices[index]];
  }

  let lastIndex: number = -1;
  let index: number = (lastIndex + 1) % chatList.length;

  if (index === 0) {
    for (let index = indices.length - 1; index > 0; index--) {
      const swappedIndex = Math.floor(Math.random() * (index + 1));

      [indices[index], indices[swappedIndex]] = [indices[swappedIndex], indices[index]];
    }
  }

  lastIndex = index;

  return chatList[indices[index]].profile;
};
