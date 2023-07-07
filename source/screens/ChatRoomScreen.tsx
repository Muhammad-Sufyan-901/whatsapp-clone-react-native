import * as React from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ChatRoomBackgroundPattern } from "../constants";
import { MessageInputComponent, MessagesBoxComponent } from "../components";
import type { RouteProp } from "@react-navigation/native";
import type { StackNavigationProp, StackNavigationOptions } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";
import type { Media, Profile } from "../types";

type ChatRoomScreenProps = {
  route: RouteProp<RootStackParamList, "ChatRoomScreen">;
  navigation: StackNavigationProp<RootStackParamList>;
};

type HeaderOptions = StackNavigationOptions & {
  headerBackVisible?: boolean | undefined;
};

export default function ChatRoomScreen({ route, navigation }: ChatRoomScreenProps): React.FunctionComponentElement<JSX.Element> {
  const {
    profile: { username, profileImage, lastSeen, isOnline, bio, phoneNumber, groups },
    media: { images },
    messages,
  } = route.params;

  React.useLayoutEffect((): void => {
    const options: HeaderOptions = {
      headerBackVisible: false,
      headerStyle: {
        backgroundColor: "#1f2c34",
      },
      headerLeft: (): React.ReactNode => (
        <TouchableOpacity onPress={handleOnPressNavigateBackToMainScreen}>
          <IonIcons
            name="arrow-back"
            size={25}
            color="white"
          />
        </TouchableOpacity>
      ),
      headerTitle: (): React.ReactNode => (
        <TouchableOpacity
          onPress={handleOnPressNavigateToProfileScreen}
          className="flex-row items-center flex-1 pl-2 pr-4"
        >
          <View className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <Image
              source={{ uri: profileImage }}
              className="w-full h-full object-contain"
            />
          </View>

          <View className="flex-col mx-4">
            <Text
              numberOfLines={1}
              className="text-white font-semibold text-[18.5px]"
            >
              {username}
            </Text>
            <Text
              numberOfLines={1}
              className="text-white font-normal text-[13.5px] max-w-[75%]"
            >
              {isOnline ? "Online" : lastSeen.toString()}
            </Text>
          </View>
        </TouchableOpacity>
      ),
      headerRight: (): React.ReactNode => (
        <View className="flex-row items-center gap-x-5">
          <TouchableOpacity>
            <IonIcons
              name="videocam"
              size={25}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialIcons
              name="call"
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
  });

  const handleOnPressNavigateBackToMainScreen = (): void => {
    navigation.navigate("RootLayoutScreen");
  };

  const handleOnPressNavigateToProfileScreen = (): void => {
    const routeParams: Profile & Media = {
      username,
      profileImage,
      lastSeen,
      isOnline,
      bio,
      phoneNumber,
      images,
      groups,
    };

    navigation.navigate("ProfileScreen", routeParams);
  };

  return (
    <ImageBackground
      source={ChatRoomBackgroundPattern}
      className="flex-1 bg-cover bg-darkSecondary relative pb-10"
    >
      <MessagesBoxComponent messages={messages} />

      <MessageInputComponent />
    </ImageBackground>
  );
}
