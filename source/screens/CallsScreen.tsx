import * as React from "react";
import { View, ScrollView } from "react-native";
import { CallRowComponent, MakeCallButtonComponent } from "../components";

export default function CallsScreen(): React.FunctionComponentElement<JSX.Element> {
  return (
    <View className="flex-1 bg-darkSecondary relative">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
      >
        <CallRowComponent />
      </ScrollView>

      <MakeCallButtonComponent />
    </View>
  );
}
