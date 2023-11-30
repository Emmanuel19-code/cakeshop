import { View, StyleSheet, Animated, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";

const SkeletonItemOne = ({ width, height,style }) => {
  const translateX = useRef(new Animated.Value(-width)).current;
  useEffect(() => {
    // Animated.loop(
    //   Animated.timing(translateX, {
    //     toValue: 200,
    //     useNativeDriver: true,
    //     duration: 1000,
    //   })
    // ).start()
  }, []);
  return (
    <View
      style={StyleSheet.flatten([
        { width: width, height: height, backgroundColor: "rgb(0,0,0,0.12)" },
        style
      ])}
    >
      <Animated.View
        style={{
          width: "100%",
          height: "100%",
          transform: [{ translateX: translateX }],
        }}
      >
        <LinearGradient
          style={{ width: "100%", height: "100%" }}
          colors={["transparent", "rgba(0,0,0,0.5)", "transparent"]}
          start={{ x: 1, y: 1 }}
        />
      </Animated.View>
    </View>
  );
};

export default SkeletonItemOne;
