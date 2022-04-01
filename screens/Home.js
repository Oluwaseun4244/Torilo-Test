import { Entypo } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  Platform,
  NativeModules,
  Text,
  TouchableHighlight,
  FlatList,
  Image,
  StyleSheet,
  View,
} from "react-native";
import Bar from "../components/Bar";
import HomeListHeader from "../components/HomeListHeader";
import JobCard from "../components/JobCard";

function Home({ navigation }) {

const [jobList, setJobList] = useState([])
  const fetchJobs = async () => {
    const getjobs = await fetch("https://remotive.io/api/remote-jobs?limit=5");

    const jobJson = await getjobs.json();
    setJobList(jobJson)
    console.log("jobs 2", jobList.jobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#eee" }}>
      <Bar />

      <FlatList
        data={jobList.jobs}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<HomeListHeader companies={jobList.jobs} />}
        ItemSeparatorComponent={() => <View style={{ paddingVertical: 10 }}>
           </View>}
        renderItem={({ item }) => (
          <JobCard
            item={item}
            func={() => {
              navigation.navigate("JobDetail", {
                company_name: "Apple",
              });
            }}
          />
        )}
      />
    </View>
  );
}

export default Home;
