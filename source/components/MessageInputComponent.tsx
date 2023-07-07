import * as React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import EntypoIcons from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import type { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

export default function MessageInputComponent(): React.FunctionComponentElement<JSX.Element> {
  const [messageInput, setMessageInput] = React.useState<string>("");

  const handleOnChangeMessageInput = (event: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const message: string = event.nativeEvent.text;

    setMessageInput(message);
  };

  return (
    <View className="absolute bottom-0 w-full my-1 px-1 flex-row items-center">
      <View className="flex-1 flex-row items-center bg-darkPrimary rounded-3xl py-3 px-3">
        <TouchableOpacity>
          <MaterialIcons
            name="emoji-emotions"
            size={27.5}
            color="#8696a0"
          />
        </TouchableOpacity>

        <TextInput
          value={messageInput}
          onChange={handleOnChangeMessageInput}
          placeholder="Ketik pesan"
          placeholderTextColor="#8696a0"
          className="flex-1 mx-2 text-white no-underline text-[16px]"
          underlineColorAndroid="transparent"
        />

        <View className="flex-row items-center gap-x-6 mr-2">
          <TouchableOpacity>
            <EntypoIcons
              name="attachment"
              size={22.5}
              color="#8696a0"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <EntypoIcons
              name="camera"
              size={22.5}
              color="#8696a0"
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity className="bg-primary h-[50px] w-[50px] rounded-full items-center justify-center ml-2">
        <MaterialCommunityIcons
          name="microphone"
          size={25}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}
