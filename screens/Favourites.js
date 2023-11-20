import {
  ScrollView, View,
} from "react-native";
import React from "react";
import FavouritesContainer from "../components/FavouritesContainer";
import HeaderTwo from "../components/HeaderTwo";


const Favourites = () => {
  return (
    <View>
      <HeaderTwo name={"Favourites"} />
      <ScrollView>
        <FavouritesContainer />
        <FavouritesContainer />
      </ScrollView>
    </View>
  );
};

export default Favourites;
