import * as React from "react";
import { View, Text } from "react-native";

export default function CommunityScreen(): React.FunctionComponentElement<JSX.Element> {
  return (
    <View className="flex-1 bg-darkSecondary items-center justify-center">
      <Text className="text-primary text-3xl">CommunityScreen</Text>
    </View>
  );
}
