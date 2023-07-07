import * as React from "react";
import { ScrollView, View } from "react-native";
import { ChatRowsComponent, WriteChatButtonComponent } from "../components";

export default function ChatScreen(): React.FunctionComponentElement<JSX.Element> {
  return (
    <View className="flex-1 bg-darkSecondary relative">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
      >
        <ChatRowsComponent />
      </ScrollView>

      <WriteChatButtonComponent />
    </View>
  );
}
