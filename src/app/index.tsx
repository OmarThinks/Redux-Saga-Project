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
        style={{ gap: 40 }}
      >
        <Counter
          counter={counter}
          onPressDecrement={() => {
            dispatch(decrement());
          }}
          onPressIncrement={() => {
            dispatch(increment());
          }}
          onPressIncrementByAmount={() => {
            dispatch(incrementByAmount(3));
          }}
          incrementAsync={() => {
            dispatch(increment());
          }}
        />

        <Counter
          counter={counter}
          onPressDecrement={() => {
            dispatch(decrement());
          }}
          onPressIncrement={() => {
            dispatch(increment());
          }}
          onPressIncrementByAmount={() => {
            dispatch(incrementByAmount(3));
          }}
          incrementAsync={() => {
            dispatch(increment());
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const Counter = ({
  counter,
  onPressDecrement,
  onPressIncrement,
  onPressIncrementByAmount,
  incrementAsync,
}: {
  counter: number;
  onPressDecrement: () => void;
  onPressIncrement: () => void;
  onPressIncrementByAmount: () => void;
  incrementAsync: () => void;
}) => {
  return (
    <View className="self-stretch items-stretch" style={{ gap: 20 }}>
      <Text className="text-[30px] text-center">{counter}</Text>

      <View
        className="flex-row self-stretch justify-center flex-wrap"
        style={{ gap: 20 }}
      >
        <ActionButton text={"-"} onPress={onPressDecrement} />
        <ActionButton text={"+"} onPress={onPressIncrement} />
        <ActionButton text={"+3"} onPress={onPressIncrementByAmount} />
        <ActionButton text={"+1 Async"} onPress={incrementAsync} />
      </View>
    </View>
  );
};

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
