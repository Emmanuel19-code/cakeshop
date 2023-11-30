import React, { useRef, useState } from "react";
import { View,  SafeAreaView, TouchableOpacity,Text, Image,Linking,Platform } from "react-native";
import MapView,{Marker} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Entypo } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const TrackOrder = () => {
  const navigation = useNavigation()
  const [state, setState] = useState({
    pickupcoords: {
      Latitude: 5.6463,
      Longitude: -0.187,
      LatitudeDelta: 0.05,
      LongitudeDelta: 0.05,
    },
    dropcoords: {
      Latitude: 5.6448,
      Longitude: -0.1784,
      LatitudeDelta: 0.05,
      LongitudeDelta: 0.05,
    },
  });
  const mapref = useRef()
  const { pickupcoords, dropcoords } = state;
  const makecall = () => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${"0546506783"}`;
    } else {
      phoneNumber = `tel:${"0546506783"}`;
    }
    Linking.openURL(phoneNumber);
  };
  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="cross" size={24} color="white" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-5 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-500">Estimated Arrival</Text>
              <Text className="text-3xl font-bold">40 Minutes</Text>
            </View>
            <Image
              source={require("../assets/Image18.gif")}
              className="w-20 h-20"
            />
          </View>
          <Progress.Bar size={30} indeterminate={true} color="#00ccbb" />
          <Text className="mt-4 text-gray-500">Your order is on the way</Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 5.687,
          longitude: -0.1904,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="muteStandard"
      >
        <Marker
          coordinate={{
            latitude: 5.687,
            longitude: -0.1904,
          }}
          identifier="origin"
          pinColor="blue"
        />
      </MapView>
      <SafeAreaView className="flex-row items-center bg-white h-20 space-x-5">
        <Image
          source={require("../assets/Image20.jpg")}
          className="w-12 h-12 p-4 ml-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="text-lg">Emmanuel</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <TouchableOpacity className="mr-5" onPress={makecall}>
          <FontAwesome name="phone" size={24} color="#00ccbb" />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default TrackOrder;
