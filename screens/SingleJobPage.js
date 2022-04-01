import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { View, Image, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Bar from "../components/Bar";
import Button from "../components/Button";

export default function SingleJobPage({ navigation, route }) {
  const { company_name } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: "#eee" }}>
      <Bar isBack title={company_name} />

      <ScrollView
        style={{
          flex: 1,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          backgroundColor: "#fff",
          paddingVertical: 30,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: "https://play-lh.googleusercontent.com/qy_wZ92sFQccojEtscg52vtdAQmCIeQ4jsybMPmuML9Or7_SEOyrt0Jn0wyG-l2Fyw",
            }}
            style={{
              height: 70,
              width: 70,
              resizeMode: "contain",
              borderRadius: 5,
              overflow: "hidden",
              backgroundColor: "#000",
              marginRight: 10,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              marginTop: 15,
            }}
          >
            Senior UI Designer
          </Text>
          <Text style={{ fontWeight: "600", marginVertical: 5 }}>
            $50K - $60K
          </Text>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              width: 200,
            }}
          >
            {["Fulltime", "Remote", "Anywhere"].map((item, index) => (
              <View
                style={{
                  padding: 5,
                  borderWidth: 1,
                  borderColor: "rgba(0,0,0,0.3)",
                  borderRadius: 4,
                  flex: 0.3,
                }}
                key={index}
              >
                <Text
                  style={{ color: "#000", fontSize: 10, textAlign: "center" }}
                >
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.5 }}>
              <Button>Description</Button>
            </View>

            <View style={{ flex: 0.5 }}>
              <Button style={styles.companyBtn}>
                <Text style={{ color: "#000" }}>Company</Text>
              </Button>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: "700" }}>About the Opportunity</Text>
            <Text
              style={{
                color: "#000",
                fontSize: 12,
                fontWeight: "500",
                marginVertical: 10,
              }}
            >
              Calendly is a Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Corrupti excepturi aspernatur odio dignissimos voluptate
              voluptatibus nam, repellat quos libero delectus.
            </Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: "700" }}>Job Responsibilities</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginBottom: 15,
                }}
              >
                <Entypo
                  name="dot-single"
                  style={{ paddingTop: 10 }}
                  size={18}
                  color="#000"
                />
                <Text style={styles.resp}>
                  One place with the best jobs companies tech. Apply to all of
                  them with a signle profile and get in touch with hiring
                  managers directly.
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginBottom: 15,
                }}
              >
                <Entypo
                  name="dot-single"
                  style={{ paddingTop: 10 }}
                  size={18}
                  color="#000"
                />
                <Text style={styles.resp}>
                  One place with the best jobs companies tech. Apply to all of
                  them with a signle profile and get in touch with hiring
                  managers directly.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          backgroundColor: "#fff",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 0.2 }}>
          <Button
            style={{ borderWidth: 1, borderColor: "#000" }}
            background="#fff"
          >
            <Ionicons name="bookmark-outline" size={20} color="#000" />
          </Button>
        </View>

        <View style={{ flex: 0.75 }}>
          <Button style={{ paddingVertical: 22 }} background="#000">
            Apply for Job
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resp: {
    paddingTop: 10,
  },
  companyBtn: {
    backgroundColor: "#fff",
    borderColor: "rgba(0,0,0,0.3)",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
});
