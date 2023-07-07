import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import type { Profile } from "../types";

type CallProfileComponentProps = Profile;

export default function CallProfileComponent({ username, profileImage, bio: { bioMessage } }: CallProfileComponentProps): React.FunctionComponentElement<JSX.Element> {
  return (
    <View className="p-2 flex-row items-center">
      <TouchableOpacity className="h-[50px] w-[50px] rounded-full overflow-hidden">
        <Image
          source={{ uri: profileImage }}
          className="w-full h-full object-contain"
        />
      </TouchableOpacity>

      <View className="flex-1 border-b-[0.5px] border-gray-700 pb-4 ml-4 mr-2 flex-row items-center">
        <View className="flex-1">
          <Text
            numberOfLines={1}
            className="text-white font-semibold text-[16px]"
          >
            {username}
          </Text>
          <Text
            numberOfLines={1}
            className="text-gray-400 font-normal text-[14px]"
          >
            {bioMessage}
          </Text>
        </View>

        <View className="flex-row items-center gap-x-8 pl-6">
          <TouchableOpacity>
            <IonIcons
              name="call"
              size={20}
              color="#03a17f"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <IonIcons
              name="videocam"
              size={20}
              color="#03a17f"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
