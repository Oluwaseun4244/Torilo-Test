import { Entypo } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";
import React from "react";

export default function CompanyCard({item}) {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "#000",
        marginRight: 20,
        width: 250,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri:`${item.company_logo}`,
          }}
          style={{
            height: 50,
            width: 50,
            resizeMode: "contain",
            borderRadius: 5,
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        />

        <Text style={{ color: "#fff", fontWeight: "600" }}>{item.salary ? item.salary : "$50K - $60K"}</Text>
      </View>

      <Text
        style={{
          color: "#fff",
          fontSize: 15,
          fontWeight: "600",
          marginTop: 10,
        }}
      >
        {item.title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <Text
          style={{
            color: "#ccc",
            fontSize: 10,
            fontWeight: "600",
          }}
        >
          Ubar
        </Text>

        <Entypo name="dot-single" size={18} color="#fff" />

        <Text
          style={{
            color: "#ccc",
            fontSize: 10,
            fontWeight: "600",
          }}
        >
          Califonia, CA
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
            style={{
              padding: 5,
              backgroundColor: "rgba(255,255,255,0.3)",
              borderRadius: 4,
              flex: 0.3,
            }}
           
          >
            <Text style={{ color: "#fff", fontSize: 10, textAlign: "center", textTransform: "capitalize" }}>
            {item.job_type}
            </Text>
          </View>
        {["Remote", "Anywhere"].map((item, index) => (
          <View
            style={{
              padding: 5,
              backgroundColor: "rgba(255,255,255,0.3)",
              borderRadius: 4,
              flex: 0.3,
            }}
            key={index}
          >
            <Text style={{ color: "#fff", fontSize: 10, textAlign: "center" }}>
              {item}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

