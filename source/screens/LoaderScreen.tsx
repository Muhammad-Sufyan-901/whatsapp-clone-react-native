import * as React from "react";
import * as NavigationBar from "expo-navigation-bar";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import type { RouteProp } from "@react-navigation/native";
import type { StackNavigationProp, StackNavigationOptions } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";

type LoaderScreenProps = {
  route: RouteProp<RootStackParamList, "LoaderScreen">;
  navigation: StackNavigationProp<RootStackParamList>;
};

export default function LoaderScreen({ navigation }: LoaderScreenProps): React.FunctionComponentElement<JSX.Element> {
  NavigationBar.setBackgroundColorAsync("white");

  React.useLayoutEffect((): void => {
    const options: StackNavigationOptions = {
      headerShown: false,
    };

    navigation.setOptions(options);
  }, []);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("RootLayoutScreen");
    }, 2000);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="justify-center items-center flex-1">
        <MaterialCommunityIcons
          name="whatsapp"
          size={100}
          color="#4FCE5D"
        />
      </View>

      <View className="self-center items-center text-center gap-y-1">
        <Text className="text-secondary text-[16px]">from</Text>
        <Text className="text-[#4FCE5D] text-[24px] font-semibold">Facebook</Text>
      </View>
    </SafeAreaView>
  );
}
