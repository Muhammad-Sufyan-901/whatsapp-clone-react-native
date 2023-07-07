import * as React from "react";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function WriteChatButtonComponent(): React.FunctionComponentElement<JSX.Element> {
  return (
    <TouchableOpacity className="absolute bottom-6 right-4 z-50 w-[60px] h-[60px] rounded-full bg-primary overflow-hidden items-center justify-center">
      <MaterialCommunityIcons
        name="message-text"
        size={30}
        color="white"
      />
    </TouchableOpacity>
  );
}
