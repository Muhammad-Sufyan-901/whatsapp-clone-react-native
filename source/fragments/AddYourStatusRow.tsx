import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { userProfile } from "../constants";

export default function AddYourStatusRow(): React.FunctionComponentElement<JSX.Element> {
  const { profileImage } = userProfile;

  return (
    <TouchableOpacity className="w-full px-3 flex-row items-center">
      <View className="relative w-[55px] h-[55px] rounded-full">
        <Image
          source={{ uri: profileImage }}
          className="w-full h-full rounded-full object-cover"
        />

        <View className="absolute bottom-0 right-0 h-[22.5px] w-[22.5px] items-center justify-center bg-primary rounded-full border-[2px] border-darkSecondary">
          <MaterialCommunityIcons
            name="plus"
            size={15}
            color="white"
          />
        </View>
      </View>

      <View className="flex-col flex-1 gap-y-1 mx-4">
        <Text
          numberOfLines={1}
          className="text-white font-semibold text-[17.5px]"
        >
          Status saya
        </Text>
        <Text
          numberOfLines={1}
          className="text-secondary font-normal text-[13px]"
        >
          Ketuk untuk menambahkan pembaruan status
        </Text>
      </View>
    </TouchableOpacity>
  );
}
