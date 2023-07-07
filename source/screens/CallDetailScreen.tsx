import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { CallProfileComponent } from "../components";
import { dateMonthFormatter } from "../utils";
import type { RouteProp } from "@react-navigation/native";
import type { StackNavigationProp, StackNavigationOptions } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";

type CallDetailScreenProps = {
  route: RouteProp<RootStackParamList, "CallDetailScreen">;
  navigation: StackNavigationProp<RootStackParamList>;
};

type HeaderOptions = StackNavigationOptions & {
  headerBackVisible?: boolean | undefined;
};

export default function CallDetailScreen({ route, navigation }: CallDetailScreenProps): React.FunctionComponentElement<JSX.Element> {
  const {
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
    dataUsage,
    duration,
    isAnswered,
  } = route.params;

  const formattedStartedAt: string = dateMonthFormatter(new Date(startedAt));

  console.log(duration);

  React.useLayoutEffect((): void => {
    const options: HeaderOptions = {
      headerBackVisible: false,
      headerStyle: {
        backgroundColor: "#1f2c34",
      },
      headerLeft: (): React.ReactNode => (
        <TouchableOpacity onPress={handleOnPressNavigateBackToCallScreen}>
          <IonIcons
            name="arrow-back"
            size={25}
            color="#94a3b8"
          />
        </TouchableOpacity>
      ),
      headerTitle: (): React.ReactNode => (
        <View className="mx-6">
          <Text className="text-white font-semibold text-[18px]">Info panggilan</Text>
        </View>
      ),
      headerRight: (): React.ReactNode => (
        <View className="flex-row items-center gap-x-4">
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="message-text"
              size={25}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={25}
              color="white"
            />
          </TouchableOpacity>
        </View>
      ),
    };

    navigation.setOptions(options);
  }, []);

  const handleOnPressNavigateBackToCallScreen = (): void => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-darkSecondary">
      <CallProfileComponent
        username={username}
        profileImage={profileImage}
        isOnline={isOnline}
        lastSeen={lastSeen}
        phoneNumber={phoneNumber}
        groups={groups}
        bio={{ bioMessage, createdAt }}
      />

      <View className="mx-[80px] my-4">
        <Text className="text-gray-500 font-medium text-[14px]"></Text>
      </View>
    </View>
  );
}
