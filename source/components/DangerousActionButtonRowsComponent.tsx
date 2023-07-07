import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type DangerousActionButtonRowsComponentProps = {
  username: string;
};

export default function DangerousActionButtonRowsComponent({ username }: DangerousActionButtonRowsComponentProps): React.FunctionComponentElement<JSX.Element> {
  return (
    <View className="bg-darkSecondary px-4 py-3 mb-8">
      <TouchableOpacity className="flex-row items-start gap-x-6 mb-6">
        <Foundation
          name="prohibited"
          size={27.5}
          color="#f87171"
        />

        <Text className="text-red-400 font-normal text-[16px] mb-1 flex-1">Blokir {username}</Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex-row items-start gap-x-6">
        <MaterialCommunityIcons
          name="thumb-down"
          size={22}
          color="#f87171"
        />

        <Text className="text-red-400 font-normal text-[16px] mb-1 flex-1">Laporkan {username}</Text>
      </TouchableOpacity>
    </View>
  );
}
