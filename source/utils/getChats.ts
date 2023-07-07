import type { Chat } from "../types";
import { getLastMessageSent } from "./getMessages";

export const getSortedChatListBasedOnLastSeen = (chatList: Chat[]): Chat[] => {
  return chatList.sort((a, b) => new Date(b.profile.lastSeen).getTime() - new Date(a.profile.lastSeen).getTime());
};

export const getSortedChatListBasedOnIsSeenAndIsSender = (chatList: Chat[]): Chat[] => {
  return chatList.sort((a, b) => Number(getLastMessageSent(a.messages).isSender) - Number(getLastMessageSent(b.messages).isSender) || Number(getLastMessageSent(a.messages).isSeen) - Number(getLastMessageSent(b.messages).isSeen));
};

export const getChatListBasedOnIsSender = (chatList: Chat[], condition: boolean): Chat[] => {
  return chatList.filter(({ messages }) => getLastMessageSent(messages).isSender === condition);
};

export const getChatListBasedOnIsSeenAndIsSender = (chatList: Chat[], condition: boolean): Chat[] => {
  return chatList.filter(({ messages }) => getLastMessageSent(messages).isSeen === condition && getLastMessageSent(messages).isSender === condition);
};

export const getOneRandomChatList = (chatList: Chat[]): Chat => {
  const randomIndex: number = Math.floor(Math.random() * chatList.length);

  return chatList[randomIndex];
};
