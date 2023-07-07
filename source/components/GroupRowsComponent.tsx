import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getGroupHeaderTitle, getGroupListBasedOnIsExpanded, getRestGroupListLength } from "../utils";
import { GroupRow } from "../fragments";
import type { Group } from "../types";

type GroupRowsComponentProps = {
  groups: Group[];
  username: string;
};

export default function GroupRowsComponent({ groups, username }: GroupRowsComponentProps): React.FunctionComponentElement<JSX.Element> {
  const [isGroupListExpanded, setIsGroupListExpanded] = React.useState<boolean>(false);

  const groupsRowHeader: string = getGroupHeaderTitle(groups);
  const restOfGroupListLength: number = getRestGroupListLength(groups);
  const groupList: Group[] = getGroupListBasedOnIsExpanded(groups, isGroupListExpanded);

  const handleOnPressExpandGroupList = (): void => {
    setIsGroupListExpanded(true);
  };

  return (
    <View className="bg-darkSecondary px-4 py-3 mb-4">
      <Text className="text-gray-400 font-medium text-[14px]">{groupsRowHeader}</Text>

      <TouchableOpacity className="flex-1 my-3 flex-row items-center gap-x-3">
        <View className="items-center justify-center overflow-hidden bg-primary h-[40px] w-[40px] rounded-full">
          <MaterialCommunityIcons
            name="account-group"
            color="white"
            size={22}
          />
        </View>

        <Text className="text-white font-normal text-[16px]">Buat grup dengan {username}</Text>
      </TouchableOpacity>

      <View className="flex-1">
        {groupList.map(
          ({ name, profileImage, members }): React.ReactNode => (
            <GroupRow
              key={name}
              name={name}
              profileImage={profileImage}
              members={members}
            />
          )
        )}
      </View>

      <View className="flex-1 my-2">
        {!isGroupListExpanded && groups.length > 3 && (
          <TouchableOpacity
            onPress={handleOnPressExpandGroupList}
            className="flex-row gap-x-3 items-center"
          >
            <View className="h-[40px] w-[40px] overflow-hidden rounded-full items-center justify-center">
              <IonIcons
                name="chevron-down"
                size={22}
                color="gray"
              />
            </View>

            <Text className="text-gray-400">{restOfGroupListLength} lainnya</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
