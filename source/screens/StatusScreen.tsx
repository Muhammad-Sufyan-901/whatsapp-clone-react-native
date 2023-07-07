import * as React from "react";
import { View, ScrollView } from "react-native";
import { StatusRowsComponent, AddStatusButtonComponent } from "../components";

export default function StatusScreen(): React.FunctionComponentElement<JSX.Element> {
  return (
    <View className="flex-1 bg-darkSecondary relative">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
      >
        <StatusRowsComponent />
      </ScrollView>

      <AddStatusButtonComponent />
    </View>
  );
}
