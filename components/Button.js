import { TouchableOpacity, Text } from "react-native";
import React from "react";

export default function Button({
  children,
  background = "#FA5805",
  onPress,
  style,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 20,
        borderRadius: 15,
        backgroundColor: background,
        ...style,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "#fff",
          fontSize: 15,
          fontWeight: "700",
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}