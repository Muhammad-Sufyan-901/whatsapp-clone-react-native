import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcons from "react-native-vector-icons/Ionicons";
import { dateDayFormatterWithLastSeenTemplate, dateMonthFormatter, fullDateFormatterWithAlpabethicMonth, fullDateTimeFormatter } from "../utils";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { Call } from "../types";
import type { RootStackParamList } from "../../App";

type CallRowProps = Call;
type CallRowNavigationProps = StackNavigationProp<RootStackParamList>;

export default function CallRow({
  profile: {
    username,
    profileImage,
    isOnline,
    lastSeen,
    phoneNumber,
    groups,
    bio: { bioMessage, createdAt },
  },
  type,
  startedAt,
  endedAt,
  isAnswered,
  duration,
  dataUsage,
}: CallRowProps): React.FunctionComponentElement<JSX.Element> {
  const navigation = useNavigation<CallRowNavigationProps>();

  const formattedStartedAt: string = fullDateFormatterWithAlpabethicMonth(new Date(startedAt));

  const handleOnPressNavigateToCallDetailScreen = (): void => {
    const routeParams: Call = {
      profile: {
        username,
        profileImage,
        phoneNumber,
        isOnline,
        groups,
        lastSeen: dateDayFormatterWithLastSeenTemplate(new Date(lastSeen)),
        bio: {
          bioMessage,
          createdAt: dateMonthFormatter(new Date(createdAt)),
        },
      },
      type,
      isAnswered,
      dataUsage,
      duration,
      startedAt: fullDateTimeFormatter(new Date(startedAt)),
      endedAt: fullDateTimeFormatter(new Date(endedAt)),
    };

    navigation.navigate("CallDetailScreen", routeParams);
  };

  return (
    <TouchableOpacity
      onPress={handleOnPressNavigateToCallDetailScreen}
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

        <View className="flex-row items-center gap-x-2">
          <MaterialCommunityIcons
            name={isAnswered ? "arrow-top-right" : "arrow-bottom-left"}
            size={15}
            color={isAnswered ? "green" : "red"}
          />

          <Text
            numberOfLines={1}
            className="text-secondary font-normal text-[13px]"
          >
            {formattedStartedAt}
          </Text>
        </View>
      </View>

      <IonIcons
        name={type === "call" ? "call" : type === "video call" ? "videocam" : ""}
        size={22.5}
        color="#03a17f"
      />
    </TouchableOpacity>
  );
}
