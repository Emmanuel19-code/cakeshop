import React from "react";
import { SafeAreaView,Image,View} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation()
  return (
    <View className="mt-8 flex-1">
      <Onboarding
       onSkip={()=>navigation.navigate("Home")}
       onDone={()=>navigation.navigate("Home")}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../assets/Image2.jpg")}
                className="w-72 h-72 bg-white"
              />
            ),
            title: "INDULGE IN SWEET DELIGHTS",
            subtitle: "Discover the perfect for every occasions,delivered to the doorstep",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../assets/Image3.jpg")}
                className="w-72 h-72 object-contain"
              />
            ),
            title: "FIND YOUR SLICE IN HAPPINESS",
            subtitle: "Explore our delectable cake collection and customize your dream cake",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../assets/Image2.jpg")}
                className="w-72 h-72 object-contain"
              />
            ),
            title: "EFFORTLESS CAKE BLISS",
            subtitle: "Ordering cake made simple - choose,customize, and place your cake order in safe taps",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../assets/Image1.jpg")}
                className="w-72 h-72 object-contain"
              />
            ),
            title: "SPEEDY TREATS RIGHT ON TIME",
            subtitle: "Relish the convenience of prompt delivery - freshly baked cakes at your doorstep",
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;
