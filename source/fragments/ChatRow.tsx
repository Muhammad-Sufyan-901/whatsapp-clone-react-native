import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcons from "react-native-vector-icons/Ionicons";
import { hourFormatter, getLastMessageSent, dateDayFormatterWithLastSeenTemplate, dateMonthFormatter } from "../utils";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { Chat, Message } from "../types";
import type { RootStackParamList } from "../../App";

type ChatRowProps = Chat;
type ChatRowNavigationProps = StackNavigationProp<RootStackParamList, "ChatRoomScreen">;

export default function ChatRow({
  profile: {
    username,
    profileImage,
    isOnline,
    lastSeen,
    phoneNumber,
    groups,
    bio: { bioMessage, createdAt },
  },
  messages,
  media,
  isMuted,
  isPinned,
}: ChatRowProps): React.FunctionComponentElement<JSX.Element> {
  const navigation = useNavigation<ChatRowNavigationProps>();
  const { message, sendAt, isSeen, isSender } = getLastMessageSent(messages);

  const formattedSendAt = hourFormatter(new Date(sendAt));

  const handleOnPressNavigateToChatRoomScreen = (): void => {
    const routeParams: Chat = {
      profile: {
        username,
        profileImage,
        isOnline,
        phoneNumber,
        groups,
        bio: {
          bioMessage,
          createdAt: dateMonthFormatter(new Date(createdAt)),
        },
        lastSeen: dateDayFormatterWithLastSeenTemplate(new Date(lastSeen)),
      },
      messages: messages.map(
        ({ sendAt, ...rest }): Message => ({
          ...rest,
          sendAt: hourFormatter(new Date(sendAt)),
        })
      ),
      media,
      isMuted,
      isPinned,
    };

    navigation.navigate("ChatRoomScreen", routeParams);
  };

  return (
    <TouchableOpacity
      onPress={handleOnPressNavigateToChatRoomScreen}
      className="w-full px-3 py-2 flex-row items-center"
    >
      <TouchableOpacity className="w-[55px] h-[55px] rounded-full overflow-hidden">
        <Image
          source={{ uri: profileImage }}
          className="w-full h-full object-contain"
        />
      </TouchableOpacity>

      <View className="flex-col flex-1 gap-y-1 mx-4">
        <Text
          numberOfLines={1}
          className="text-white font-semibold text-[17.5px]"
        >
          {username}
        </Text>

        <View className="flex-row items-center gap-x-1">
          {isSender && (
            <MaterialCommunityIcons
              name="check-all"
              size={15}
              color="#34b7f1"
            />
          )}

          <Text
            numberOfLines={1}
            className="text-secondary font-normal text-[13px]"
          >
            {message}
          </Text>
        </View>
      </View>

      <View className="items-end self-start gap-y-1">
        <Text className="text-secondary font-normal text-[13px]">{formattedSendAt}</Text>

        <View className="flex-row items-center self-end gap-x-1">
          {isMuted && (
            <View>
              <IonIcons
                name="volume-mute"
                size={20}
                color="#86959e"
              />
            </View>
          )}

          {!isSender && !isSeen && (
            <View className="w-[20px] h-[20px] rounded-full justify-center items-center bg-primary">
              <Text className="text-darkSecondary text-[12px]">1</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
