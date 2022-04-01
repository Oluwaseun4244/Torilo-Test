import { View, Text, Platform, NativeModules, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

export default function Bar({ title = "", isBack = false }) {
  const navigation = useNavigation();

  return (
    <View
      style={styles.barParent}
    >
      {isBack ? (
        <Ionicons
          onPress={() => {
            navigation.goBack();
          }}
          name="chevron-back-outline"
          size={32}
          color="black"
        />
      ) : (
       
        <Ionicons name="list-outline" size={32} color="black" />
      )}

      <Text
        style={styles.title}
      >
        {title}
      </Text>

      {!isBack ? (
        <Ionicons name="person-outline" size={24} color="black" />
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  barParent:{
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: STATUSBAR_HEIGHT,
    position: "relative",
  },
  title:{
    fontWeight: "600",
    position: "absolute",
    textAlign: "center",
    left: "50%",
  }
})