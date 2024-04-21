import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useState } from "react";
import { Entypo,Feather } from "@expo/vector-icons";


const ReviewOptions = () => {
    const [selected,setSelected] = useState("All")
  return (
    <ScrollView
      className="p-2 z-50 m-1 "
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity
        className={
          selected === "All"
            ? "flex-row items-center m-2 p-2  bg-blue-300 rounded"
            : "flex-row items-center m-2 p-2 border border-gray-500 rounded"
        }
        onPress={() => setSelected("All")}
      >
        <View className="flex-row items-center w-auto h-12">
          {selected === "All" && (
            <Feather name="check" size={20} color="black" />
          )}
          <Text className="text-black text-lg">All</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className={
          selected === "positive"
            ? "flex-row items-center m-2 py px-2  bg-blue-300 rounded"
            : "flex-row items-center m-2 py px-2 border border-gray-500 rounded"
        }
        onPress={() => setSelected("positive")}
      >
        <View className="flex-row justify-center items-center w-auto h-12">
          {selected === "positive" && (
            <Feather name="check" size={20} color="black" />
          )}
          <Text className="text-black text-lg">Postive</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className={
          selected === "critical"
            ? "flex-row items-center m-2 py px-2  bg-blue-300 rounded"
            : "flex-row items-center m-2 py px-2 border border-gray-500 rounded"
        }
        onPress={() => setSelected("critical")}
      >
        <View className="flex-row justify-center items-center w-auto h-12">
          {selected === "critical" && (
            <Feather name="check" size={20} color="black" />
          )}
          <Text className="text-black text-lg">Critical</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className={
          selected === "5"
            ? "flex-row items-center m-2 py-1 px-2  bg-blue-300 rounded"
            : "flex-row items-center m-2 py-1 px-2 border border-gray-500 rounded"
        }
        onPress={() => setSelected("5")}
      >
        <View className="flex-row items-center justify-center w-auto h-12">
          {selected === "5" && <Feather name="check" size={20} color="black" />}
          <Text className="text-black text-lg">5</Text>
          <Entypo name="star" size={10} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className={
          selected === "4"
            ? "flex-row items-center m-2 py-1 px-2  bg-blue-300 rounded"
            : "flex-row items-center m-2 py-1 px-2 border border-gray-500 rounded"
        }
        onPress={() => setSelected("4")}
      >
        <View className="flex-row items-center justify-center w-auto h-12">
          {selected === "4" && <Feather name="check" size={20} color="black" />}
          <Text className="text-black text-lg">4</Text>
          <Entypo name="star" size={10} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className={
          selected === "3"
            ? "flex-row items-center m-2 py-1 px-2  bg-blue-300 rounded"
            : "flex-row items-center m-2 py-1 px-2 border border-gray-500 rounded"
        }
        onPress={() => setSelected("3")}
      >
        <View className="flex-row items-center justify-center w-auto h-12">
          {selected === "3" && <Feather name="check" size={20} color="black" />}
          <Text className="text-black text-lg">3</Text>
          <Entypo name="star" size={10} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className={
          selected === "2"
            ? "flex-row items-center m-2 py-1 px-2  bg-blue-300 rounded"
            : "flex-row items-center m-2 py-1 px-2 border border-gray-500 rounded"
        }
        onPress={() => setSelected("3")}
      >
        <View className="flex-row items-center justify-center w-auto h-12">
          {selected === "2" && <Feather name="check" size={20} color="black" />}
          <Text className="text-black text-lg">2</Text>
          <Entypo name="star" size={10} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className={
          selected === "1"
            ? "flex-row items-center m-2 py-1 px-2  bg-blue-300 rounded"
            : "flex-row items-center m-2 py-1 px-2 border border-gray-500 rounded"
        }
        onPress={() => setSelected("1")}
      >
        <View className="flex-row items-center justify-center w-auto h-12">
          {selected === "1" && <Feather name="check" size={20} color="black" />}
          <Text className="text-black text-lg">1</Text>
          <Entypo name="star" size={10} color="black" />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ReviewOptions;
