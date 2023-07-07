import * as React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { BioDisplayComponent, DangerousActionButtonRowsComponent, GroupRowsComponent, MediaRowComponent, ProfileInformationComponent, ProfilePrimaryOptionsComponent, ProfileSecondaryOptionsComponent } from "../components";
import type { NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import type { RouteProp } from "@react-navigation/native";
import type { StackNavigationProp, StackNavigationOptions } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";

type ProfileScreenProps = {
  route: RouteProp<RootStackParamList, "ProfileScreen">;
  navigation: StackNavigationProp<RootStackParamList>;
};

type HeaderOptions = StackNavigationOptions & {
  headerBackVisible?: boolean | undefined;
};

export default function ProfileScreen({ route, navigation }: ProfileScreenProps): React.FunctionComponentElement<JSX.Element> {
  const [screenOffset, setScreenOffset] = React.useState<number>(0);
  const [isScreenScrolled, setIsScreenScrolled] = React.useState<boolean>(false);
  const { username, profileImage, isOnline, lastSeen, bio, phoneNumber, images, groups } = route.params;

  React.useEffect((): void => {
    screenOffset > 50 ? setIsScreenScrolled(true) : setIsScreenScrolled(false);
  }, [screenOffset]);

  React.useLayoutEffect((): void => {
    const options: HeaderOptions = {
      headerBackVisible: false,
      headerStyle: {
        backgroundColor: isScreenScrolled ? "#1f2c34" : "#131c21",
      },
      headerLeft: (): React.ReactNode => (
        <TouchableOpacity onPress={handleOnPressNavigateBackToChatRoomScreen}>
          <IonIcons
            name="arrow-back"
            size={25}
            color="white"
          />
        </TouchableOpacity>
      ),
      headerTitle: (): React.ReactNode => {
        return (
          isScreenScrolled && (
            <TouchableOpacity className="flex-row items-center flex-1 pl-2 pr-4">
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
              </View>
            </TouchableOpacity>
          )
        );
      },
      headerRight: (): React.ReactNode => (
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={25}
            color="white"
          />
        </TouchableOpacity>
      ),
    };

    navigation.setOptions(options);
  }, [isScreenScrolled]);

  const handleOnPressNavigateBackToChatRoomScreen = (): void => {
    navigation.goBack();
  };

  const handleOnScrollUpdateOffsetScreen = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    const screenYOffset: number = event.nativeEvent.contentOffset.y;

    setScreenOffset(screenYOffset);
  };

  return (
    <ScrollView
      onScroll={handleOnScrollUpdateOffsetScreen}
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-[#030712]"
    >
      <ProfileInformationComponent
        username={username}
        profileImage={profileImage}
        isOnline={isOnline}
        lastSeen={lastSeen}
        phoneNumber={phoneNumber}
        bio={bio}
        groups={groups}
      />

      <BioDisplayComponent bio={bio} />

      <MediaRowComponent images={images} />

      <ProfilePrimaryOptionsComponent />

      <ProfileSecondaryOptionsComponent />

      <GroupRowsComponent
        groups={groups}
        username={username}
      />

      <DangerousActionButtonRowsComponent username={username} />
    </ScrollView>
  );
}
