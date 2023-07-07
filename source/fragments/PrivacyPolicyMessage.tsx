import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";

export default function PrivacyPolicyMessage(): React.FunctionComponentElement<JSX.Element> {
  return (
    <View className="w-full py-3 flex-row items-center justify-center gap-x-1">
      <IonIcons
        name="lock-closed"
        size={15}
        color="#86959e"
      />

      <View className="flex-row items-center gap-x-1">
        <Text className="text-secondary font-normal text-[12px]">Pesan pribadi Anda</Text>

        <TouchableOpacity>
          <Text className="text-primary font-normal text-[12px]">terenkripsi secara end-to-end</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
