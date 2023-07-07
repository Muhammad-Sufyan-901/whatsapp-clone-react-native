import * as React from "react";
import { View, Text } from "react-native";
import { callList } from "../constants";
import { PrivacyPolicyMessage, CallRow, MakeCallLinkRow } from "../fragments";
import { getSortedCallListBasedOnStartedAt } from "../utils";
import type { Call } from "../types";

export default function CallRowComponent(): React.FunctionComponentElement<JSX.Element> {
  const callListThatBasedOnStartedAt: Call[] = getSortedCallListBasedOnStartedAt(callList);

  return (
    <View className="flex-1 pt-2 pb-40">
      <MakeCallLinkRow />

      <View>
        <Text className="text-secondary font-semibold text-[13.5px] mx-3 my-2">Terbaru</Text>

        {callListThatBasedOnStartedAt.map(
          ({ profile, type, startedAt, endedAt, isAnswered, dataUsage, duration }): React.ReactNode => (
            <CallRow
              key={`${profile.username} - ${startedAt}`}
              profile={profile}
              type={type}
              startedAt={startedAt}
              endedAt={endedAt}
              isAnswered={isAnswered}
              dataUsage={dataUsage}
              duration={duration}
            />
          )
        )}
      </View>

      <PrivacyPolicyMessage />
    </View>
  );
}
