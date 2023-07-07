import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FoundationIcons from "react-native-vector-icons/Foundation";

export default function ArchivedChatsRow(): React.FunctionComponentElement<JSX.Element> {
  return (
    <TouchableOpacity className="flex-row items-center px-3 py-2 w-full">
      <View className="w-[55px] h-[55px] items-center justify-center rounded-full overflow-hidden">
        <FoundationIcons
          name="archive"
          size={25}
          color="#86959e"
        />
      </View>

      <View className="ml-4 flex-1 flex-row items-center justify-between">
        <Text className="text-white font-semibold text-[17.5px]">Diarsipkan</Text>
        <Text className="text-secondary font-normal text-[12px] self-start">1</Text>
      </View>
    </TouchableOpacity>
  );
}
