import { View, Text, Button, Pressable } from "react-native";
import React, { memo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCounter } from "@/redux/store";

export default function index() {
  const counter = useCounter();

  return (
    <SafeAreaView style={{}}>
      <View
        className="h-full self-stretch items-stretch justify-center"
        style={{ gap: 20 }}
      >
        <Text className="text-[30px] text-center">{counter}</Text>

        <View className="flex-row self-stretch justify-center flex-wrap">
          <ActionButton text={"-"} onPress={() => {}} />
          <ActionButton text={"+"} onPress={() => {}} />
          <ActionButton text={"+"} onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const ActionButton = memo(
  ({ text, onPress }: { text: string; onPress: () => void }) => {
    return (
      <View className="rounded-[10px] overflow-hidden border-[1px]">
        <Pressable
          className=" w-[50px] h-[50px] items-center justify-center"
          onPress={onPress}
          android_ripple={{ color: "grey", borderless: false }}
        >
          <Text className="text-[20px]">{text}</Text>
        </Pressable>
      </View>
    );
  }
);
