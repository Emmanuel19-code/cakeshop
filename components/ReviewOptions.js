import {
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const ReviewOptions = () => {
    const [selected,setSelected] = useState("All")
  return (
    <ScrollView
      className="p-2 m-1 z-50"
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
        {selected === "All" && <Feather name="check" size={20} color="black" />}

        <Text>All</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={
          selected === "Positive"
            ? "flex-row items-center m-2 p-1  bg-blue-300 rounded"
            : "flex-row items-center m-2 p-1 border border-gray-500 rounded"
        }
        onPress={() => setSelected("Positive")}
      >
        {selected === "Positive" && (
          <Feather name="check" size={20} color="black" />
        )}
        <Text>Positive</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={
          selected === "Critical"
            ? "flex-row items-center m-2 p-1  bg-blue-300 rounded"
            : "flex-row items-center m-2 p-1 border border-gray-500 rounded"
        }
        onPress={() => setSelected("Critical")}
      >
        {selected === "Critical" && (
          <Feather name="check" size={20} color="black" />
        )}
        <Text>Critical</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={
          selected === "5"
            ? "flex-row items-center m-2 p-1  bg-blue-300 rounded"
            : "flex-row items-center m-2 p-1 border border-gray-500 rounded"
        }
        onPress={() => setSelected("5")}
      >
        {selected === "5" && <Feather name="check" size={20} color="black" />}
        <Text>5</Text>
        <Entypo name="star" size={10} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        className={
          selected === "4"
            ? "flex-row items-center m-2 p-2  bg-blue-300 rounded"
            : "flex-row items-center m-2 p-2 border border-gray-500 rounded"
        }
        onPress={() => setSelected("4")}
      >
        {selected === "4" && <Feather name="check" size={20} color="black" />}
        <Text>4</Text>
        <Entypo name="star" size={10} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        className={
          selected === "3"
            ? "flex-row items-center m-2 p-2  bg-blue-300 rounded"
            : "flex-row items-center m-2 p-2 border border-gray-500 rounded"
        }
        onPress={() => setSelected("3")}
      >
        {selected === "3" && <Feather name="check" size={20} color="black" />}
        <Text>3</Text>
        <Entypo name="star" size={10} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        className={
          selected === "2"
            ? "flex-row items-center m-2 p-2  bg-blue-300 rounded"
            : "flex-row items-center m-2 p-2 border border-gray-500 rounded"
        }
        onPress={() => setSelected("2")}
      >
        {selected === "2" && <Feather name="check" size={20} color="black" />}
        <Text>2</Text>
        <Entypo name="star" size={10} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        className={
          selected === "1"
            ? "flex-row items-center m-2 p-2  bg-blue-300 rounded"
            : "flex-row items-center m-2 p-2 border border-gray-500 rounded"
        }
        onPress={() => setSelected("1")}
      >
        {selected === "1" && <Feather name="check" size={20} color="black" />}
        <Text>1</Text>
        <Entypo name="star" size={10} color="black" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ReviewOptions;
