import { ScrollView, Text, View, Image } from "react-native";
import React from "react";

const MainScreenScrollview = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-5"
    >
      <View>
        <View className="m-1 bg-blue-200 w-14 h-14 items-center justify-center rounded-full">
          <Image
            source={require("../assets/Image2.jpg")}
            className="w-12 h-12 object-contain rounded-full"
          />
        </View>
        <Text>Cup cake</Text>
      </View>
      <View>
        <View className="m-1 bg-blue-200 w-14 h-14 items-center justify-center rounded-full">
          <Image
            source={require("../assets/Image2.jpg")}
            className="w-12 h-12 object-contain rounded-full"
          />
        </View>
        <Text>Cup cake</Text>
      </View>
      <View>
        <View className="m-1 bg-blue-200 w-14 h-14 items-center justify-center rounded-full">
          <Image
            source={require("../assets/Image2.jpg")}
            className="w-12 h-12 object-contain rounded-full"
          />
        </View>
        <Text>Cup cake</Text>
      </View>
      <View>
        <View className="m-1 bg-blue-200 w-14 h-14 items-center justify-center rounded-full">
          <Image
            source={require("../assets/Image2.jpg")}
            className="w-12 h-12 object-contain rounded-full"
          />
        </View>
        <Text>Cup cake</Text>
      </View>
      <View>
        <View className="m-1 bg-blue-200 w-14 h-14 items-center justify-center rounded-full">
          <Image
            source={require("../assets/Image2.jpg")}
            className="w-12 h-12 object-contain rounded-full"
          />
        </View>
        <Text>Cup cake</Text>
      </View>
      <View>
        <View className="m-1 bg-blue-200 w-14 h-14 items-center justify-center rounded-full">
          <Image
            source={require("../assets/Image2.jpg")}
            className="w-12 h-12 object-contain rounded-full"
          />
        </View>
        <Text>Cup cake</Text>
      </View>
      <View>
        <View className="m-1 bg-blue-200 w-14 h-14 items-center justify-center rounded-full">
          <Image
            source={require("../assets/Image2.jpg")}
            className="w-12 h-12 object-contain rounded-full"
          />
        </View>
        <Text>Cup cake</Text>
      </View>
    </ScrollView>
  );
};

export default MainScreenScrollview;


