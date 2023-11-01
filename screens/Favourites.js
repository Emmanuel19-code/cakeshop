import {
  ScrollView,
} from "react-native";
import React from "react";
import FavouritesContainer from "../components/FavouritesContainer";
import HeaderTwo from "../components/HeaderTwo";


const Favourites = () => {
  return (
    <ScrollView>
      <HeaderTwo name={"Favourites"}/>
      <FavouritesContainer />
      <FavouritesContainer />
    </ScrollView>
  );
};

export default Favourites;
