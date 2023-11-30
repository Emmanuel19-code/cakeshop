import {
  Text, ScrollView, View, TouchableOpacity, Image,StyleSheet
} from 'react-native';
import React from 'react';
import BannerContent from './BannerContent';
import SkeletonItemOne from './SkeletonItemOne';

function Banner() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="p-1"
    >
      {/*
        <View style={styles.card} className="w-72 h-40 m-1 p-3">
        <SkeletonItemOne width={40} height={40} style={{ borderRadius:20 }}/>
        <SkeletonItemOne width={300} height={100}/>
      </View>
        */}

      <BannerContent imagePath={require("../assets/Image8.jpg")} />
      <BannerContent imagePath={require("../assets/Image7.jpg")} />
    </ScrollView>
  );
}

export default Banner;
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 3,
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    borderRadius: 8,
  },
});
