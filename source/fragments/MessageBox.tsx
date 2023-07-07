import * as React from "react";
import { View, Text } from "react-native";
import { clsx } from "clsx";
import IonIcons from "react-native-vector-icons/Ionicons";
import type { Message } from "../types";

type MessageBoxProps = Message;

export default function MessageBox({ message, sendAt, isSeen, isSender }: MessageBoxProps) {
  return (
    <View className={clsx(isSender ? "bg-[#075E54] self-end" : "bg-darkPrimary self-start", message.length > 15 ? "flex-col" : "flex-row gap-x-1", "max-w-[80%] pl-4 pr-3 py-2 my-1 rounded-2xl")}>
      <Text className="text-white text-[16px] max-w-[85%]">{message}</Text>

      <View className="justify-self-end self-end gap-x-1 flex-row mt-1">
        <Text className="text-[12px] text-white">{sendAt.toString()}</Text>

        {isSender && (
          <IonIcons
            name="checkmark-done"
            size={15}
            color={isSeen ? "#34B7F1" : "white"}
            style={{ marginRight: 4 }}
          />
        )}
      </View>
    </View>
  );
}
