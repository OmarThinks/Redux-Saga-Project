import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCounter } from "@/redux/store";

export default function index() {
  const counter = useCounter();

  return (
    <SafeAreaView>
      <View>
        <Text>{counter}</Text>
      </View>
    </SafeAreaView>
  );
}
