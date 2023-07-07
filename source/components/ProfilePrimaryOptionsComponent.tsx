import * as React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";

export default function ProfilePrimaryOptionsComponent(): React.FunctionComponentElement<JSX.Element> {
  const [isNotificationDisabled, setIsNotificationDisabled] = React.useState<boolean>(false);

  const handleOnValueChangeSetIsNotificationDisabled = (): void => {
    setIsNotificationDisabled((previous: boolean) => !previous);
  };

  return (
    <View className="bg-darkSecondary px-4 py-3 mb-4">
      <TouchableOpacity className="flex-row items-center gap-x-6 mb-4">
        <IonIcons
          name="notifications"
          size={22}
          color="#9ca3af"
        />

        <Text className="text-white font-normal text-[16px] flex-1">Bisukan notifikasi</Text>

        <Switch
          trackColor={{ false: "#6b7280", true: "#03a17f" }}
          thumbColor={isNotificationDisabled ? "#15a888" : "#9ca3af"}
          onValueChange={handleOnValueChangeSetIsNotificationDisabled}
          value={isNotificationDisabled}
        />
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center gap-x-6 mb-6">
        <IonIcons
          name="musical-note"
          size={22}
          color="#9ca3af"
        />

        <Text className="text-white font-normal text-[16px] flex-1">Notifikasi kustom</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center gap-x-6 mb-6">
        <IonIcons
          name="image"
          size={22}
          color="#9ca3af"
        />

        <Text className="text-white font-normal text-[16px] flex-1">Tampilkan media</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center gap-x-6 mb-2">
        <IonIcons
          name="star"
          size={22}
          color="#9ca3af"
        />

        <Text className="text-white font-normal text-[16px] flex-1">Pesan berbintang</Text>
        <Text className="text-gray-500 font-normal text-[16px]">10</Text>
      </TouchableOpacity>
    </View>
  );
}
