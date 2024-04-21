import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  Cart,
  Createaccount,
  CreditCard,
  CurrentLocation,
  Delivery,
  Favourites,
  HomeScreen,
  Onboarding,
  OrderConfirmation,
  PendingOrderDetails,
  ProcessOrder,
  Product,
  Reviews,
  Search,
  SelectModepayment,
  TrackOrder,
  VerifyScreen,
  Welcome,
} from "../screens";
import TabBottom from "./TabBottomNavigation";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
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
    console.log(firstlaunched);
  }, []);
  return (
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
      <Stack.Screen
        name="cart"
        options={{ headerShown: false }}
        component={Cart}
      />
      <Stack.Screen
        name="delivery"
        options={{ headerShown: false }}
        component={Delivery}
      />
      <Stack.Screen
        name="orderconfirmation"
        options={{ headerShown: false }}
        component={OrderConfirmation}
      />
      <Stack.Screen
        name="onlinepayment"
        options={{ headerShown: false }}
        component={CreditCard}
      />
      <Stack.Screen
        name="currentlocation"
        options={{ headerShown: false }}
        component={CurrentLocation}
      />
      <Stack.Screen
        name="reviews"
        options={{ headerShown: false }}
        component={Reviews}
      />

      <Stack.Screen
        name="favorites"
        options={{ headerShown: false }}
        component={Favourites}
      />
      <Stack.Screen
        name="pendingoderdetails"
        options={{ headerShown: false }}
        component={PendingOrderDetails}
      />
      <Stack.Screen
        name="completeoderdetails"
        options={{ headerShown: false }}
        component={""}
      />
      <Stack.Screen
        name="trackorder"
        options={{ headerShown: false }}
        component={TrackOrder}
      />
      <Stack.Screen
        name="search"
        options={{ headerShown: false }}
        component={Search}
      />
      <Stack.Screen
        name="processorder"
        options={{ headerShown: false }}
        component={ProcessOrder}
      />
      <Stack.Screen
      name="modepayment"
      options={{ headerShown:false }}
      component={SelectModepayment}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
