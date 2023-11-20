import { View } from 'react-native'
import React, { useMemo, useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";
import HeaderOne from '../components/HeaderOne';
import ConfirmButton from '../components/ConfirmButton';

const CreditCard = () => {
  const [selectedId, setSelectedId] = useState();
   const radioButtons = useMemo(
     () => [
       {
         id: "1",
         label: "Master Card",
         value: "option1",
       },
       {
         id: "2",
         label: "Paypal",
         value: "option2",
       },
       {
         id: "3",
         label: "Momo",
         value: "option2",
       },
     ],
     []
   );

   
  return (
    <View className="bg-white h-screen">
      <HeaderOne headertitle={"Online Payment"} />
      <View className="bg-white shadow border-gray-300 border-2">
        <RadioGroup
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
        />
      </View>
      <ConfirmButton name={"Confirm"} routename={"processorder"}/>
    </View>
  );
}

export default CreditCard

