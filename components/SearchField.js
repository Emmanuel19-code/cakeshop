import { TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SearchField = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();
  

  return (
    <View className="bg-slate-300 p-2 mt-5 rounded flex-row items-center">
      <TouchableOpacity onPress={() => navigation.navigate("search")}>
        <EvilIcons name="search" size={24} color="black" />
      </TouchableOpacity>
      <TextInput
        placeholder="search your cake"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
    </View>
  );
};

export default SearchField;
