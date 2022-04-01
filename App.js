import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import FirstPage from "./screens/FirstPage";
import { StatusBar } from "expo-status-bar";
import SingleJobPage from "./screens/SingleJobPage";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <React.Fragment>
      <StatusBar style="light" translucent hidden />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onbording" component={FirstPage} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="JobDetail" component={SingleJobPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}

export default App;