import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import {  useState } from "react";
import { Favourites,  MainScreen, Orders, PersonalInfo } from "../screens";



const Tab = createBottomTabNavigator();

const TabBottom = () => {
  const [notification, setNotification] = useState();
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="home" style={{ fontSize: 30, opacity: 0.3 }} />
          ),
          tabBarActiveTintColor: "#0f766e",
        }}
        name="Home"
        component={MainScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign
              name="shoppingcart"
              style={{ fontSize: 30, opacity: 0.3 }}
              className="bg-teal-300"
            />
          ),
          tabBarActiveTintColor: "#0f766e",
        }}
        name="orders"
        component={Orders}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="hearto" style={{ fontSize: 30, opacity: 0.3 }} />
          ),
          tabBarActiveTintColor: "#0f766e",
        }}
        name="Favourites"
        component={Favourites}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="user" style={{ fontSize: 30, opacity: 0.3 }} />
          ),
          tabBarActiveTintColor: "#0f766e",
        }}
        name="Account"
        component={PersonalInfo}
      />
    </Tab.Navigator>
  );
};

export default TabBottom;
