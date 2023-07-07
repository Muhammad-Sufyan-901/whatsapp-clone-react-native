import * as React from "react";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootLayoutScreen } from "./source/layouts";
import { LoaderScreen, ChatRoomScreen, ProfileScreen, StatusDetailScreen, CallDetailScreen } from "./source/screens";
import type { Call, Chat, Media, Profile, Status } from "./source/types";

export type RootStackParamList = {
  LoaderScreen: undefined;
  RootLayoutScreen: undefined;
  ChatRoomScreen: Chat;
  ProfileScreen: Profile & Media;
  StatusDetailScreen: Status;
  CallDetailScreen: Call;
};

const RootStackNavigator = createNativeStackNavigator<RootStackParamList>();

export default function App(): React.FunctionComponentElement<JSX.Element> {
  NavigationBar.setBackgroundColorAsync("black");
  NavigationBar.setButtonStyleAsync("light");

  return (
    <NavigationContainer>
      <RootStackNavigator.Navigator
        initialRouteName="LoaderScreen"
        screenOptions={{
          headerShadowVisible: false,
        }}
      >
        <RootStackNavigator.Screen
          name="LoaderScreen"
          component={LoaderScreen}
        />
        <RootStackNavigator.Screen
          name="RootLayoutScreen"
          component={RootLayoutScreen}
        />
        <RootStackNavigator.Screen
          name="ChatRoomScreen"
          component={ChatRoomScreen}
        />
        <RootStackNavigator.Screen
          name="ProfileScreen"
          component={ProfileScreen}
        />
        <RootStackNavigator.Screen
          name="StatusDetailScreen"
          component={StatusDetailScreen}
        />
        <RootStackNavigator.Screen
          name="CallDetailScreen"
          component={CallDetailScreen}
        />
      </RootStackNavigator.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
