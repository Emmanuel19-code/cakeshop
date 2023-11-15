import { Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const DeliveryDate = ({ id, day, daydate, selectedItemId, onItemSelect }) => {
  const handleSelect = () => {
    onItemSelect(id);
  };
  return (
    <TouchableOpacity
      className={
        selectedItemId === id
          ? "w-12 m-2 h-14 mt-1 border items-center justify-center border-teal-400 bg-teal-400 rounded"
          : "w-12 m-2 h-14 mt-1 border items-center justify-center border-teal-400 rounded"
      }
      onPress={handleSelect}
      key={id}
    >
      <Text className={"font-bold  text-center"}>{day}</Text>
      <Text className={"font-bold"}>{daydate}</Text>
    </TouchableOpacity>
  );
};

export default DeliveryDate

