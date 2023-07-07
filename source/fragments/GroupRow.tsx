import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { getGroupMemberListJoined } from "../utils";
import type { Group } from "../types";

type GroupRowProps = Group;

export default function GroupRow({ profileImage, name, members }: GroupRowProps): React.FunctionComponentElement<JSX.Element> {
  const memberUsername = getGroupMemberListJoined(members);

  return (
    <TouchableOpacity className="flex-row items-center gap-x-3 py-1 my-2">
      <View className="h-[40px] w-[40px] overflow-hidden rounded-full">
        <Image
          source={{ uri: profileImage }}
          className="w-full h-full object-contain"
        />
      </View>

      <View className="flex-1">
        <Text
          numberOfLines={1}
          className="text-white font-normal text-[16px]"
        >
          {name}
        </Text>
        <Text
          numberOfLines={1}
          className="text-gray-400 font-normal text-[14px]"
        >
          {memberUsername}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
