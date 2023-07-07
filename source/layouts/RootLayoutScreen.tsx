import * as React from "react";
import * as NavigationBar from "expo-navigation-bar";
import { View, TouchableOpacity, Dimensions, Text } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import type { RouteProp } from "@react-navigation/native";
import type { StackNavigationProp, StackNavigationOptions } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";
import { ChatScreen, StatusScreen, CallsScreen } from "../screens";
import { getChatListBasedOnIsSeenAndIsSender } from "../utils";
import { chatList } from "../constants";
import clsx from "clsx";

export type RootLayoutStackParamList = {
  ChatScreen: undefined;
  StatusScreen: undefined;
  CallsScreen: undefined;
};

type RootLayoutScreenProps = {
  route: RouteProp<RootStackParamList, "RootLayoutScreen">;
  navigation: StackNavigationProp<RootStackParamList>;
};

const RootLayoutTopTabNavigator = createMaterialTopTabNavigator<RootLayoutStackParamList>();

export default function RootLayoutScreen({ navigation }: RootLayoutScreenProps): React.FunctionComponentElement<JSX.Element> {
  const isFocused: boolean = useIsFocused();
  const TabBarItemWidth: number = Dimensions.get("screen").width / 3;
  const chatNotifications: number = getChatListBasedOnIsSeenAndIsSender(chatList, false).length;

  NavigationBar.setBackgroundColorAsync("black");
  NavigationBar.setButtonStyleAsync("light");

  React.useLayoutEffect((): void => {
    const options: StackNavigationOptions = {
      headerTitle: "WhatsApp",
      headerStyle: {
        backgroundColor: "#1f2c34",
      },
      headerTitleStyle: {
        color: "#86959e",
        fontSize: 20,
      },
      headerLeft: (): React.ReactNode => <React.Fragment></React.Fragment>,
      headerRight: (): React.ReactNode => (
        <View className="flex-row items-center gap-x-6">
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="camera-outline"
              size={23.5}
              color="#86959e"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <IonIcons
              name="search"
              size={23.5}
              color="#86959e"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={23.5}
              color="#86959e"
            />
          </TouchableOpacity>
        </View>
      ),
    };

    navigation.setOptions(options);
  }, []);

  return (
    <RootLayoutTopTabNavigator.Navigator
      initialRouteName="ChatScreen"
      screenOptions={{
        tabBarActiveTintColor: "#03a17f",
        tabBarInactiveTintColor: "#86959e",
        tabBarStyle: {
          backgroundColor: "#1f2c34",
        },
        tabBarItemStyle: {
          width: TabBarItemWidth,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#03a17f",
          height: 4,
          borderRadius: 5,
        },
      }}
    >
      <RootLayoutTopTabNavigator.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarLabel: "Chat",
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontWeight: "700",
            fontSize: 15,
          },
          tabBarBadge: (): React.ReactNode =>
            chatNotifications > 0 && (
              <View className={clsx(isFocused ? "bg-primary" : "bg-secondary", "absolute top-[15px] right-[22.5px] h-[18px] w-[18px] rounded-full items-center justify-center")}>
                <Text className="text-[12px]">{chatNotifications}</Text>
              </View>
            ),
        }}
      />
      <RootLayoutTopTabNavigator.Screen
        name="StatusScreen"
        component={StatusScreen}
        options={{
          tabBarLabel: "Status",
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontWeight: "700",
            fontSize: 15,
          },
        }}
      />
      <RootLayoutTopTabNavigator.Screen
        name="CallsScreen"
        component={CallsScreen}
        options={{
          tabBarLabel: "Panggilan",
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontWeight: "700",
            fontSize: 15,
          },
        }}
      />
    </RootLayoutTopTabNavigator.Navigator>
  );
}
