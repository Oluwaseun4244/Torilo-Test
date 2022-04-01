import { Ionicons } from "@expo/vector-icons";
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Button from "./Button";
import CompanyCard from "./CompanyCard";

export default function HomeListHeader({ companies = [1, 2, 3] }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 36 }}>Hi Robert,</Text>
      <Text style={{ fontSize: 36 }}>Find your Dream Job</Text>

      <View
        style={{
          flexDirection: "row",
          marginVertical: 30,
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <View style={styles.inputWrap}>
          <TextInput style={styles.input} placeholder="Search for job title" />

          <Ionicons
            name="search"
            size={20}
            color="black"
            style={{ position: "absolute", left: 14 }}
          />
        </View>

        <View style={{ flex: 0.2 }}>
          <Button background="black">
            <Ionicons name="options" size={24} color="#fff" />
          </Button>
        </View>
      </View>

      <Text style={{ color: "#333", fontSize: 16, fontWeight: "600", marginBottom: 10 }}>
        Popular Company
      </Text>

      <ScrollView horizontal>
        {companies.map((item, index) => (
          <CompanyCard item={item}  key={index}/>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrap: {
    position: "relative",
    flex: 0.75,
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    paddingLeft: 45,
    fontSize: 15,
  },
});
