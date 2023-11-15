import { Text, View, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {Checkbox} from "expo-checkbox"
import HeaderThree from "../components/HeaderThree";
import Sizeselect from "../components/Sizeselect";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const Product = () => {
  const [quantity,setQuantity] = useState(0)
  const [addtofavorite,setAddtofavorite] = useState(false)
  const [total,setTotal] = useState(0)
  const navigation = useNavigation()
  const route = useRoute()
  const { productid } = route.params;
  const decreasequantity= ()=>{
    if(quantity==0){
      setQuantity(0)
    }else{
      setQuantity(quantity-1)
    }
  }
  const favoritesadd=()=>{
    if(!addtofavorite){
       setAddtofavorite(true)
    }else{
      setAddtofavorite(false)
    }
  }
  useEffect(()=>{
   setTotal(quantity*10)
  },[quantity])

  return (
    <View>
      <View className="bg-teal-700 h-screen">
        <View className="p-2">
          <HeaderThree />
          <View className="mt-14 flex-row items-center justify-between">
            <Sizeselect />
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
                <TouchableOpacity
                  onPress={favoritesadd}
                >
                    <MaterialIcons
                      name="favorite-border"
                      size={30}
                      color={addtofavorite?"black":"red"}
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
                <AntDesign name="right" size={24} color="black" onPress={()=>navigation.navigate("reviews")}/>
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
              <Text className="font-bold text-center text-lg">
                {`$ ${total}`}
              </Text>
            </View>
          </View>
          <View className="flex-row items-center mt-4 justify-evenly">
            <TouchableOpacity
              className="w-10 h-10 rounded-full bg-gray-200 items-center justify-center"
              onPress={decreasequantity}
            >
              <AntDesign name="minus" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-lg">{quantity}</Text>
            <TouchableOpacity
              className="w-10 h-10 rounded-full bg-black items-center justify-center"
              onPress={() => setQuantity(quantity + 1)}
            >
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
