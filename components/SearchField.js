import { Pressable, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeProvider";

const SearchField = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();
  const {dark} = useTheme()
  return (
    <Pressable
      className={dark?"bg-gray-600 p-2 mt-5 rounded flex-row items-center":"bg-slate-300 p-2 mt-5 rounded flex-row items-center"}
      onPress={() => navigation.navigate("search")}
    >
      <TouchableOpacity>
        <EvilIcons name="search" size={24} color="black" />
      </TouchableOpacity>
      <TextInput
        placeholder="search your cake"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
    </Pressable>
  );
};

export default SearchField;
