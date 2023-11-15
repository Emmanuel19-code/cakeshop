import {
  Text, ScrollView, View, TouchableOpacity, Image,
} from 'react-native';
import React from 'react';
import BannerContent from './BannerContent';

function Banner() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="p-1"
    >
      <BannerContent imagePath={require("../assets/Image8.jpg")} />
      <BannerContent imagePath={require("../assets/Image7.jpg")} />
    </ScrollView>
  );
}

export default Banner;
