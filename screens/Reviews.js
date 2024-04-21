import {
  View,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import HeaderOne from "../components/HeaderOne";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import ReviewOptions from "../components/ReviewOptions";
import UserReview from "../components/UserReview";

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

const Reviews = () => {
  return (
    <View className="h-screen">
      <HeaderOne headertitle={"Reviews"} />
      <ReviewOptions />
      <FlatList
        data={data}
        keyExtractor={(item) => {
          item.id;
        }}
        renderItem={({ item }) => <UserReview />}
      />
    </View>
  );
};

export default Reviews;
