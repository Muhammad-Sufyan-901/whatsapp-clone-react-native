import * as React from "react";
import { View, Text, Image } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import type { Status } from "../types";

type StatusViewsComponentProps = Status;

export default function StatusViewsComponent({ image, caption, viewers }: StatusViewsComponentProps): React.FunctionComponentElement<JSX.Element> {
  return (
    <React.Fragment>
      <View className="flex-1 justify-center">
        <View className="w-full h-[300px] overflow-hidden">
          <Image
            source={{ uri: image }}
            className="w-full h-full object-cover"
          />
        </View>
      </View>

      <View className="py-4 justify-center items-center">
        <Text
          numberOfLines={3}
          className="text-white font-normal text-[16px]"
        >
          {caption}
        </Text>

        <View className="flex-row items-center mt-4 gap-x-2">
          <IonIcons
            name="eye"
            size={25}
            color="white"
          />

          <Text className="text-white font-normal text-[16px]">{viewers}</Text>
        </View>
      </View>
    </React.Fragment>
  );
}
