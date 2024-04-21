import {
   ScrollView
} from 'react-native';
import React from 'react';
import BannerContent from './BannerContent';
import BannerSkeleton from './BannerSkeleton';

function Banner() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="p-1"
    >
      <BannerSkeleton/>
      <BannerContent imagePath={require("../assets/Image8.jpg")} />
      <BannerContent imagePath={require("../assets/Image7.jpg")} />
    </ScrollView>
  );
}

export default Banner;
