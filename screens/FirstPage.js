import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Button from "../components/Button";

export default function FirstPage({ navigation }) {
  return (
    <ImageBackground source={require("../assets/bg.png")} style={styles.bg}>
      <View style={{ padding: 40 }}>
        <Text style={styles.homeTitle}>Find a Perfect Job Match.</Text>

        <Text style={styles.homeTxt}>
          One place with the best jobs companies tech. Apply to all of them with
          a signle profile and get in touch with hiring managers directly.
        </Text>
        <View style={styles.parent}>
          <View style={{ width: 150 }}>
            <Button onPress={() => navigation.navigate("Home")}>
              Get Started
            </Button>
          </View>
          <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>



      
    </ImageBackground>
  );
}




const styles = StyleSheet.create({
  homeTxt: {
    color: "#ccc",
    lineHeight: 25,
    fontSize: 15,
    fontWeight: "500",
    marginVertical: 30,
  },
  homeTitle: { color: "#fff", fontSize: 40, fontWeight: "700" },
  bg: { flex: 1, flexDirection: "column", justifyContent: "flex-end" },
  skip: { color: "white", fontSize: 18, fontWeight: "bold", marginLeft: 110 },
  parent: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between"
  },
});
