import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import { MediaCard } from "../fragments";
import type { Media } from "../types";

type MediaRowComponentProps = Media;

export default function MediaRowComponent({ images }: MediaRowComponentProps): React.FunctionComponentElement<JSX.Element> {
  const mediaLength: number = images.length;

  return (
    <View className="bg-darkSecondary mb-4 px-4 pt-4 pb-1">
      <TouchableOpacity className="flex-row items-center justify-between">
        <Text className="text-gray-400 font-medium">Media, tautan dan dok</Text>

        <View className="flex-row items-center gap-x-1">
          <Text className="text-gray-400 font-medium">{mediaLength}</Text>

          <IonIcons
            name="chevron-forward"
            size={18}
            color="#64748b"
          />
        </View>
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={{ columnGap: 5 }}
        showsHorizontalScrollIndicator={false}
        className="my-4"
        horizontal
      >
        {images.map(
          ({ imageUrl }): React.ReactNode => (
            <MediaCard
              key={imageUrl}
              imageUrl={imageUrl}
            />
          )
        )}
      </ScrollView>
    </View>
  );
}
