import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  Createaccount,
  HomeScreen,
  Onboarding,
  Product,
  VerifyScreen,
  Welcome,
} from "./screens";
import { StatusBar } from "react-native";
import TabBottom from "./navigators/TabBottomNavigation";

const Stack = createNativeStackNavigator();

function App() {
  const [firstlaunched, setFirstlaunched] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem("alreadylaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadylaunched", "true");
        setFirstlaunched(true);
      } else {
        setFirstlaunched(false);
      }
    });
  }, []);
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Onboarding"
          component={Onboarding}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="welcome"
          options={{ headerShown: false }}
          component={Welcome}
        />
        <Stack.Screen
          name="createaccount"
          options={{ headerShown: false }}
          component={Createaccount}
        />
        <Stack.Screen
          name="verify"
          options={{ headerShown: false }}
          component={VerifyScreen}
        />
        <Stack.Screen
          name="mainpage"
          options={{ headerShown: false }}
          component={TabBottom}
        />
        <Stack.Screen
          name="product"
          options={{ headerShown: false }}
          component={Product}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
