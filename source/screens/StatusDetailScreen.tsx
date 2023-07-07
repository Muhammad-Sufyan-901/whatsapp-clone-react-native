import * as React from "react";
import * as Progress from "react-native-progress";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StatusViewsComponent } from "../components";
import type { RouteProp } from "@react-navigation/native";
import type { StackNavigationOptions, StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";

type StatusDetailScreenProps = {
  route: RouteProp<RootStackParamList, "StatusDetailScreen">;
  navigation: StackNavigationProp<RootStackParamList>;
};

export default function StatusDetailScreen({ route, navigation }: StatusDetailScreenProps): React.FunctionComponentElement<JSX.Element> {
  const [statusDuration, setStatusDuration] = React.useState<number>(0);
  const [runningIntervalFunction, setRunningIntervalFunction] = React.useState<NodeJS.Timer | null>(null);
  const {
    image,
    postedAt,
    viewers,
    caption,
    isSeen,
    poster: { username, profileImage, isOnline, lastSeen, bio, phoneNumber, groups },
  } = route.params;

  React.useEffect((): void => {
    if (statusDuration >= 1 && runningIntervalFunction) {
      clearInterval(runningIntervalFunction);

      navigation.goBack();
    }

    if (!runningIntervalFunction) {
      const interval: NodeJS.Timer = setInterval(() => {
        setStatusDuration((duration): number => Number((duration + 0.01).toFixed(2)));
      }, 100);

      setRunningIntervalFunction(interval);
    }
  }, [statusDuration, runningIntervalFunction]);

  React.useLayoutEffect((): void => {
    const options: StackNavigationOptions = {
      header: (): React.ReactNode => (
        <SafeAreaView>
          <View className="bg-black">
            <Progress.Bar
              progress={statusDuration}
              width={null}
              height={3}
              borderWidth={0}
              color="#e5e7eb"
              unfilledColor="#6b7280"
            />

            <View className="my-4 px-4 flex-row items-center">
              <TouchableOpacity onPress={handleOnPressNavigateBackToStatusScreen}>
                <IonIcons
                  name="arrow-back"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>

              <View className="flex-row items-center flex-1 pl-2 pr-4">
                <View className="w-[50px] h-[50px] rounded-full overflow-hidden">
                  <Image
                    source={{ uri: profileImage }}
                    className="w-full h-full object-contain"
                  />
                </View>

                <View className="flex-col mx-4">
                  <Text
                    numberOfLines={1}
                    className="text-white font-semibold text-[17.5px]"
                  >
                    {username}
                  </Text>
                  <Text
                    numberOfLines={1}
                    className="text-gray-400 font-normal text-[15px]"
                  >
                    {postedAt.toString()}
                  </Text>
                </View>
              </View>

              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      ),
    };

    navigation.setOptions(options);
  }, [statusDuration]);

  const handleOnPressNavigateBackToStatusScreen = (): void => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-black">
      <StatusViewsComponent
        image={image}
        caption={caption}
        viewers={viewers}
        postedAt={postedAt}
        isSeen={isSeen}
        poster={{ username, profileImage, isOnline, lastSeen, bio, phoneNumber, groups }}
      />

      <StatusBar
        style="light"
        backgroundColor="black"
      />
    </View>
  );
}
