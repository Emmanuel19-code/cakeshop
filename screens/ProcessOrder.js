import { SafeAreaView } from 'react-native'
import React from 'react'
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const ProcessOrder = () => {
  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/Image16.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="w-96 h-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for your order to be processed
      </Animatable.Text>
      <Progress.Circle size={30} indeterminate={true} color="white"/>
    </SafeAreaView>
  );
}

export default ProcessOrder