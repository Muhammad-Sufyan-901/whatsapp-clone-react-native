import * as React from "react";
import { View, Text } from "react-native";
import type { Bio } from "../types";

type BioDisplayComponentProps = {
  bio: Bio;
};

export default function BioDisplayComponent({ bio: { bioMessage, createdAt } }: BioDisplayComponentProps): React.FunctionComponentElement<JSX.Element> {
  return (
    <View className="bg-darkSecondary px-4 pt-6 pb-4 mb-4">
      <Text className="text-white font-medium text-[16px] mb-1">{bioMessage}</Text>
      <Text className="text-gray-400 font-normal text-[16px]">{createdAt.toString()}</Text>
    </View>
  );
}
