import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {Checkbox} from "expo-checkbox"
import { useNavigation } from "@react-navigation/native";

const Product = () => {
    const navigation = useNavigation()
  return (
    <View>
      <View className="bg-teal-700 h-screen">
        <View className="p-2">
          <View className="flex-row items-center">
            <TouchableOpacity className="flex-1" onPress={()=>{navigation.goBack()}}>
              <Ionicons name="chevron-back-outline" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("cart")}>
              <Feather name="shopping-bag" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View className="mt-14 flex-row items-center justify-between">
            <View className="">
              <Text className="text-gray-200 text-lg">Cake Size</Text>
              <TouchableOpacity className="bg-gray-100 rounded-full transparent p-1 w-20 h-10 m-1 justify-center items-center">
                <Text>Small</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-100 rounded-full transparent p-1 w-20 h-10 m-1 justify-center items-center">
                <Text>Medium</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-100 rounded-full transparent p-1 w-20 h-10 m-1 justify-center items-center">
                <Text>Large</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Image
                source={require("../assets/Image4.jpg")}
                className="w-40 h-40"
              />
            </View>
          </View>
        </View>
        <View className="bg-white shadow h-full rounded-t-xl w-full p-2 border-gray-300 mt-2">
          <View className="">
            <View>
              <View className="flex-row items-center justify-between">
                <Text className="text-lg font-bold m-1 ">Vanilla Combo</Text>
                <View className="flex-row items-center">
                  <Text className="text-gray-400 m-1 line-through">$25</Text>
                  <Text className="text-orange-400 m-1">$12</Text>
                </View>
              </View>
              <View className="flex-row items-center">
                <View className="flex-row items-center">
                  {Array(4)
                    .fill()
                    .map((_, i) => (
                      <Text>&#x2B50;</Text>
                    ))}
                </View>
                <Text className="font-bold ml-2">(5 Customer review)</Text>
              </View>
              <View className="flex-row items-center">
                <Text>Add to favorite</Text>
                <TouchableOpacity>
                  <MaterialIcons
                    name="favorite-border"
                    size={30}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <View className="flex-row items-center">
              <Text className="flex-1">Description</Text>
              <TouchableOpacity>
                <AntDesign name="right" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center">
              <Text className="flex-1">Reviews</Text>
              <TouchableOpacity>
                <AntDesign name="right" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center">
              <Text className="flex-1">Delivery</Text>
              <TouchableOpacity>
                <AntDesign name="right" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View className="flex-row items-center mt-5">
              <Text className="flex-1">Add ons</Text>
              <Text>optional</Text>
            </View>
            <View className="flex-row items-center m-1">
              <Checkbox />
              <Text className="flex-1 m-1">Rose Flavor</Text>
              <Text>+$3</Text>
            </View>
            <View className="flex-row items-center justify-around">
              <Text className="font-bold text-xl ">Total</Text>
              <Text className="font-bold text-center text-lg">$15</Text>
            </View>
          </View>
          <View className="flex-row items-center mt-4 justify-evenly">
            <TouchableOpacity className="w-10 h-10 rounded-full bg-gray-200 items-center justify-center">
              <AntDesign name="minus" size={24} color="black" />
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity className="w-10 h-10 rounded-full bg-black items-center justify-center">
              <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
            <View>
              <TouchableOpacity className="bg-orange-400 p-2 rounded">
                <Text className="text-white">Add to cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Product;
