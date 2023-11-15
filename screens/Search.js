import {
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image
} from "react-native";
import React, { useEffect, useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const [searchResult, setSearchResult] = useState();
  const [search, setSearch] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [error,setError] = useState(false)
  const navigation = useNavigation();
  useEffect(() => {
    searchfun()
  }, []);
  const searchfun =()=>{
    setIsloading(true)
    setTimeout(()=>{
      setIsloading(false)
      setSearchResult(data)
    },3000)
  }
  const data = [
    {
      id: 1,
      name: "Chocolate Cake",
      description: "Delicious chocolate-flavored cake with rich frosting.",
      imagePath: require("../assets/Image7.jpg"),
    },
    {
      id: 2,
      name: "Vanilla Cake",
      description: "Classic vanilla-flavored cake with creamy frosting.",
      imagePath: require("../assets/Image7.jpg"),
    },
    {
      id: 3,
      name: "Red Velvet Cake",
      description:
        "Moist and flavorful red velvet cake with cream cheese frosting.",
      imagePath: require("../assets/Image7.jpg"),
    },
    {
      id: 4,
      name: "Carrot Cake",
      description:
        "Sweet and spiced carrot cake with cream cheese frosting and walnuts.",
      imagePath: require("../assets/Image7.jpg"),
    },
    {
      id: 5,
      name: "Strawberry Shortcake",
      description:
        "Light and fluffy vanilla cake layered with fresh strawberries and whipped cream.",
      imagePath: require("../assets/Image7.jpg"),
    },
  ];
  return (
    <View className="p-1 flex-1">
      <View className="bg-slate-300 p-2 mt-5 rounded flex-row items-center">
        <TouchableOpacity>
          <EvilIcons name="search" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          placeholder="search your cake"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      {isloading && (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size={"large"} />
        </View>
      )}
      {error && (
        <View className="flex-1 justify-center items-center">
          <Text>An Error Occured while trying to fetch the data</Text>
        </View>
      )}
      <FlatList
        className="mt-3"
        data={searchResult}
        keyExtractor={(item) => {
          item.id;
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("product", { prodcutid: item.id })
            }
            className="bg-gray-300 m-1 p-1 rounded w-full "
          >
            <View className="flex-row items-center p-1 text-ellipsis">
              <Image
                source={item.imagePath}
                className="w-12 h-12 rounded-full"
              />
                <Text className="text-sm ml-1 text-ellipsis">{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Search;
