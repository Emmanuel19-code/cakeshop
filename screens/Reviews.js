import { ScrollView, StyleSheet, Text, TouchableOpacity, View,Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import HeaderOne from '../components/HeaderOne'
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import ReviewOptions from '../components/ReviewOptions';
import UserReview from '../components/UserReview';

const Reviews = () => {
  
  return (
    <View className="h-screen">
      <HeaderOne headertitle={"Reviews"} />
      <ScrollView className="p-1 ">
        <UserReview />
        <UserReview />
        <UserReview />
        <UserReview />
        <UserReview />
        <UserReview />
        <UserReview />
        <UserReview />
        <UserReview />
        <UserReview />
      </ScrollView>
    </View>
  );
}

export default Reviews

