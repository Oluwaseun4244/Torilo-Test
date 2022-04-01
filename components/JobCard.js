import React from 'react'
import { Entypo } from "@expo/vector-icons";
import {
    Platform,
    NativeModules,
    Text,
    TouchableHighlight,
    FlatList,
    Image,
    StyleSheet,
    View
  } from "react-native";

export default function JobCard({item, navigation, func}) {
  return (

    <View style={{ paddingHorizontal: 20 }}>

    <TouchableHighlight
      style={{
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 15,
      }}
      key={item.key}
      onPress={func}
    >
      <View
        style={styles.outterWrapper}
      >
        <View style={styles.innerWrapper}>
          <Image
            source={{
              uri:`${item.company_logo}`,
            }}
            style={styles.img}
          />

          <View>
            <Text
              style={styles.jobTitle}
            >
              {item.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 2,
              }}
            >
              <Text
                style={styles.ubar}
              >
                Ubar
              </Text>

              <Entypo name="dot-single" size={18} color="#ccc" />

              <Text
                style={styles.location}
              >
                Califonia, CA
              </Text>
            </View>
          </View>
        </View>

        <Entypo name="dots-three-vertical" size={18} color="#000" />
      </View>
    </TouchableHighlight>
  </View>


  )
}


const styles = StyleSheet.create({
    img:{
      height: 50,
      width: 50,
      resizeMode: "contain",
      borderRadius: 5,
      overflow: "hidden",
      backgroundColor: "#000",
      marginRight: 10,
    },
    innerWrapper:{ flexDirection: "row", alignItems: "center" },
    outterWrapper:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    jobTitle:{
      fontSize: 15,
      fontWeight: "600",
      marginTop: 10,
      width: 200
    }, 
    location:{
      color: "#ccc",
      fontSize: 10,
      fontWeight: "600",
    },
    ubar:{
      color: "#ccc",
      fontSize: 10,
      fontWeight: "600",
    }
  })
