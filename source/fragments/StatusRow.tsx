import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { clsx } from "clsx";
import { dateDayFormatter, dateDayFormatterWithLastSeenTemplate, dateMonthFormatter } from "../utils";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { Status } from "../types";
import type { RootStackParamList } from "../../App";

type StatusRowProps = Status;
type StatusRowNavigationProps = StackNavigationProp<RootStackParamList, "StatusDetailScreen">;

export default function StatusRow({
  image,
  poster: {
    username,
    profileImage,
    isOnline,
    lastSeen,
    phoneNumber,
    groups,
    bio: { bioMessage, createdAt },
  },
  postedAt,
  isSeen,
  caption,
  viewers,
}: StatusRowProps): React.FunctionComponentElement<JSX.Element> {
  const navigation = useNavigation<StatusRowNavigationProps>();

  const formattedPostedAt: string = dateDayFormatter(new Date(postedAt));

  const handleOnPressNavigateToStatusDetailScreen = (): void => {
    const routeParams: Status = {
      image,
      poster: {
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
      isSeen,
      caption,
      viewers,
      postedAt: dateDayFormatter(new Date(postedAt)),
    };

    navigation.navigate("StatusDetailScreen", routeParams);
  };

  return (
    <TouchableOpacity
      onPress={handleOnPressNavigateToStatusDetailScreen}
      className="w-full px-3 py-2 flex-row items-center"
    >
      <View className={clsx(isSeen ? "border-secondary" : "border-primary", "w-[57.5px] h-[57.5px] rounded-full overflow-hidden border-[2px] p-[3px]")}>
        <Image
          source={{ uri: image }}
          className="w-full h-full object-contain rounded-full"
        />
      </View>

      <View className="flex-col flex-1 gap-y-1 mx-4">
        <Text
          numberOfLines={1}
          className="text-white font-semibold text-[17.5px]"
        >
          {username}
        </Text>
        <Text
          numberOfLines={1}
          className="text-secondary font-normal text-[13px]"
        >
          {formattedPostedAt}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
