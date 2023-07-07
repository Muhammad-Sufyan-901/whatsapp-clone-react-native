import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontistoIcon from "react-native-vector-icons/Fontisto";

export default function MakeCallLinkRow(): React.FunctionComponentElement<JSX.Element> {
  return (
    <TouchableOpacity className="w-full px-3 flex-row items-center pb-2">
      <View className="w-[50px] h-[50px] rounded-full items-center justify-center overflow-hidden bg-primary">
        <FontistoIcon
          name="link"
          size={17.5}
          color="white"
        />
      </View>

      <View className="flex-1 flex-col gap-y-1 mx-4">
        <Text
          numberOfLines={1}
          className="text-white font-semibold text-[17.5px]"
        >
          Buat tautan panggilan
        </Text>
        <Text
          numberOfLines={2}
          className="text-secondary font-normal text-[13px] max-w-[80%]"
        >
          Bagikan tautan untuk panggilan WhatsApp Anda
        </Text>
      </View>
    </TouchableOpacity>
  );
}
