import * as React from "react";
import { ScrollView } from "react-native";
import { MessageBox } from "../fragments";
import type { Message } from "../types";

type MessagesBoxComponentProps = {
  messages: Message[];
};

export default function MessagesBoxComponent({ messages }: MessagesBoxComponentProps): React.FunctionComponentElement<JSX.Element> {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 px-2 pt-1 mb-2"
    >
      {messages.map(
        ({ message, sendAt, isSeen, isSender }): React.ReactNode => (
          <MessageBox
            key={`${message} - ${sendAt}`}
            message={message}
            sendAt={sendAt}
            isSeen={isSeen}
            isSender={isSender}
          />
        )
      )}
    </ScrollView>
  );
}
