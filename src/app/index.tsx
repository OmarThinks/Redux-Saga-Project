import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "@/redux/features/counter/counterSlice";
import { useAppDispatch, useCounter } from "@/redux/store";
import React, { memo } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
            console.log("async");
            dispatch(incrementAsync(1000));
          }}
          incrementAsync2={() => {
            console.log("async");
            dispatch(incrementAsync(2000));
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
  incrementAsync2,
}: {
  counter: number;
  onPressDecrement: () => void;
  onPressIncrement: () => void;
  onPressIncrementByAmount: () => void;
  incrementAsync: () => void;
  incrementAsync2: () => void;
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
        <ActionButton text={"+1 Async2"} onPress={incrementAsync2} />
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
