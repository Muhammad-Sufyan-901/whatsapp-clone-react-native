import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function AddStatusButtonComponent(): React.FunctionComponentElement<JSX.Element> {
  return (
    <View className="absolute bottom-6 right-4 z-50 flex-col items-center gap-y-4">
      <TouchableOpacity className=" w-[50px] h-[50px] rounded-full bg-darkPrimary overflow-hidden items-center justify-center">
        <MaterialCommunityIcons
          name="pencil"
          size={25}
          color="white"
        />
      </TouchableOpacity>

      <TouchableOpacity className=" w-[60px] h-[60px] rounded-full bg-primary overflow-hidden items-center justify-center">
        <MaterialCommunityIcons
          name="camera"
          size={30}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}
