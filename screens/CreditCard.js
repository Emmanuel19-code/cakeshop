import { View } from 'react-native'
import React from "react";
import HeaderOne from '../components/HeaderOne';
import ConfirmButton from '../components/ConfirmButton';
import {useStripe} from "@stripe/stripe-react-native"

const CreditCard = () => {
   const stripe = useStripe()
  return (
    <View className="bg-white h-screen">
      <HeaderOne headertitle={"Online Payment"} />
      <ConfirmButton name={"Confirm"} routename={"processorder"}/>
    </View>
  );
}

export default CreditCard

