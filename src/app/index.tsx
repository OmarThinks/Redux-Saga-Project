import { View, Text, Button, Pressable } from "react-native";
import React, { memo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useCounter } from "@/redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/redux/features/counter/counterSlice";

export default function index() {
  const counter = useCounter();
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={{}}>
      <View
        className="h-full self-stretch items-stretch justify-center"
        style={{ gap: 20 }}
      >
        <Text className="text-[30px] text-center">{counter}</Text>

        <View
          className="flex-row self-stretch justify-center flex-wrap"
          style={{ gap: 20 }}
        >
          <ActionButton
            text={"-"}
            onPress={() => {
              dispatch(decrement());
            }}
          />
          <ActionButton
            text={"+"}
            onPress={() => {
              dispatch(increment());
            }}
          />
          <ActionButton
            text={"+3"}
            onPress={() => {
              dispatch(incrementByAmount(3));
            }}
          />
          <ActionButton
            text={"+1 Async"}
            onPress={() => {
              dispatch(increment());
            }}
          />
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
