import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import type { Profile } from "../types";

type ProfileInformationComponentProps = Profile;

export default function ProfileInformationComponent({ username, profileImage, phoneNumber }: ProfileInformationComponentProps): React.FunctionComponentElement<JSX.Element> {
  return (
    <View className="bg-darkSecondary items-center pt-4 pb-8 mb-4">
      <View className="w-[100px] h-[100px] rounded-full overflow-hidden border-[3px] border-gray-500 p-1">
        <Image
          source={{ uri: profileImage }}
          className="w-full h-full object-contain rounded-full"
        />
      </View>

      <View className="mt-1 mb-6 items-center">
        <Text
          numberOfLines={1}
          className="text-white font-medium text-[22px] mb-2"
        >
          {username}
        </Text>
        <Text
          numberOfLines={1}
          className="text-gray-400 font-normal text-[18px]"
        >
          {phoneNumber}
        </Text>
      </View>

      <View className="flex-row items-center gap-x-8">
        <TouchableOpacity className="items-center gap-y-3">
          <IonIcons
            name="call"
            size={22}
            color="#03a17f"
          />
          <Text className="text-primary font-medium">Panggilan</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center gap-y-3">
          <IonIcons
            name="videocam"
            size={22}
            color="#03a17f"
          />
          <Text className="text-primary font-medium">Video</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center gap-y-3">
          <IonIcons
            name="search"
            size={22}
            color="#03a17f"
          />
          <Text className="text-primary font-medium">Cari</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
