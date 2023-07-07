import * as React from "react";
import { View } from "react-native";
import { ChatRow, ArchivedChatsRow, PrivacyPolicyMessage } from "../fragments";
import { chatList } from "../constants";
import { getSortedChatListBasedOnIsSeenAndIsSender } from "../utils";
import type { Chat } from "../types";

export default function ChatRowsComponent(): React.FunctionComponentElement<JSX.Element> {
  const chatListBasedOnIsSeenAndIsSender: Chat[] = getSortedChatListBasedOnIsSeenAndIsSender(chatList);

  return (
    <View className="flex-1 pt-2 pb-40">
      {chatListBasedOnIsSeenAndIsSender.map(
        ({ profile, messages, media, isPinned, isMuted }): React.ReactNode => (
          <ChatRow
            key={profile.username}
            profile={profile}
            messages={messages}
            media={media}
            isPinned={isPinned}
            isMuted={isMuted}
          />
        )
      )}

      <ArchivedChatsRow />

      <PrivacyPolicyMessage />
    </View>
  );
}
