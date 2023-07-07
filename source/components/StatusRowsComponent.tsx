import * as React from "react";
import { View, Text } from "react-native";
import { statusList } from "../constants";
import { StatusRow, PrivacyPolicyMessage, AddYourStatusRow } from "../fragments";
import { getStatusBasedOnIsSeen } from "../utils";
import type { Status } from "../types";

export default function StatusRowsComponent(): React.FunctionComponentElement<JSX.Element> {
  const statusListThatNotSeen: Status[] = getStatusBasedOnIsSeen(statusList, false);
  const statusListThatAlreadySeen: Status[] = getStatusBasedOnIsSeen(statusList, true);

  return (
    <View className="flex-1 pt-2 pb-40">
      <AddYourStatusRow />

      <View>
        {statusListThatNotSeen.length > 0 && <Text className="text-secondary font-semibold text-[13.5px] mx-3 my-2">Pembaruan terkini</Text>}

        {statusListThatNotSeen.map(
          ({ image, poster, postedAt, isSeen, caption, viewers }): React.ReactNode => (
            <StatusRow
              key={`${poster.username} - ${postedAt}`}
              image={image}
              poster={poster}
              postedAt={postedAt}
              isSeen={isSeen}
              caption={caption}
              viewers={viewers}
            />
          )
        )}
      </View>

      <View>
        {statusListThatAlreadySeen.length > 0 && <Text className="text-secondary font-semibold text-[13.5px] mx-3 my-2">Pembaruan yang dilihat</Text>}

        {statusListThatAlreadySeen.map(
          ({ image, poster, postedAt, isSeen, caption, viewers }): React.ReactNode => (
            <StatusRow
              key={`${poster.username} - ${postedAt}`}
              image={image}
              poster={poster}
              postedAt={postedAt}
              isSeen={isSeen}
              caption={caption}
              viewers={viewers}
            />
          )
        )}
      </View>

      <PrivacyPolicyMessage />
    </View>
  );
}
