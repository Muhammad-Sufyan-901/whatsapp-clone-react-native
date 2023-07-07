import * as React from "react";
import { TouchableOpacity, Image } from "react-native";
import type { Image as ImageType } from "../types";

type MediaCardProps = ImageType;

export default function MediaCard({ imageUrl }: MediaCardProps): React.FunctionComponentElement<JSX.Element> {
  return (
    <TouchableOpacity className="w-[85px] h-[85px] rounded-lg overflow-hidden">
      <Image
        source={{ uri: imageUrl }}
        className="w-full h-full object-contain"
      />
    </TouchableOpacity>
  );
}
