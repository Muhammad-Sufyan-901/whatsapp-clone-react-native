import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";

export default function ProfileSecondaryOptionsComponent(): React.FunctionComponentElement<JSX.Element> {
  return (
    <View className="bg-darkSecondary px-4 py-3 mb-4">
      <TouchableOpacity className="flex-row items-start gap-x-6 mb-6">
        <IonIcons
          name="lock-closed"
          size={22}
          color="#9ca3af"
        />

        <View className="flex-1">
          <Text className="text-white font-normal text-[16px] mb-1">Enkripsi</Text>
          <Text className="text-gray-500 font-normal text-[14px]">Pesan dan panggilan terenkripsi secara end-to-end. Ketuk untuk memverifikasi</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-start gap-x-6 mb-0">
        <IonIcons
          name="timer-outline"
          size={22}
          color="#9ca3af"
        />

        <View className="flex-1">
          <Text className="text-white font-normal text-[16px] mb-1">Pesan sementara</Text>
          <Text className="text-gray-500 font-normal text-[14px]">Mati</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
