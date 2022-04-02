import { TouchableOpacity, Text, StyleSheet } from "react-native";
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
        style={styles.btnText}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  }
})