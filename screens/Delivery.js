import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DeliveryDate from "../components/DeliveryDate";
import DeliveryDateSelect from "../components/DeliveryDateSelect";
import HeaderOne from "../components/HeaderOne";
import ConfirmButton from "../components/ConfirmButton";

const Delivery = (deliverylocation) => {
  const [deliverydates, setDeliverdates] = useState([
    {
      id: 1,
      day: "Tues",
      daydate: 1,
    },
    {
      id: 2,
      day: "Wed",
      daydate: 2,
    },
    {
      id: 3,
      day: "Wed",
      daydate: 3,
    },
    {
      id: 4,
      day: "Thurs",
      daydate: 4,
    },
    {
      id: 5,
      day: "Fri",
      daydate: 5,
    },
    {
      id: 6,
      day: "Sat",
      daydate: 6,
    },
    {
      id: 7,
      day: "Mon",
      daydate: 7,
    },
    {
      id: 8,
      day: "Tues",
      daydate: 8,
    },
  ]);
  const [time, setTime] = useState([
    {
      id: 11,
      fromtime: "8:00 AM",
      toTime: "9:00 AM",
      pricing: "Free",
    },
    {
      id: 12,
      fromtime: "8:00 AM",
      toTime: "9:00 AM",
      pricing: "Free",
    },
    {
      id: 13,
      fromtime: "8:00 AM",
      toTime: "9:00 AM",
      pricing: "Free",
    },
    {
      id: 14,
      fromtime: "8:00 AM",
      toTime: "9:00 AM",
      pricing: "Free",
    },
    {
      id: 15,
      fromtime: "8:00 AM",
      toTime: "9:00 AM",
      pricing: "Paid",
    },
  ]);
   const [selectedItemId, setSelectedItemId] = useState(null);
   const [selecteddate,setSelecteddate] = useState(null)

   const handleItemSelect = (itemId) => {
     setSelectedItemId((prevSelectedItemId) =>
       prevSelectedItemId === itemId ? null : itemId
     );
   };
   const handledateselect = (itemId)=>{
    setSelecteddate((prevdate)=>prevdate===itemId?null:itemId)
   }
  return (
    <View className="bg-white h-screen">
      <HeaderOne headertitle={"Delivery"} />
      <View className="bg-white shadow-2xl border border-gray-200 w-full p-2 mt-5">
        <View className=" ">
          <Text>Deliver to</Text>
          <View>
            <Text>No 4 Hibiscus street</Text>
          </View>
        </View>
      </View>
      <View className="bg-white w-full border border-gray-200 mt-2 shadow-xl p-1">
        <Text className="font-medium m-2">Book a date and time</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {deliverydates.map((items, key) => {
            return (
              <DeliveryDate
                day={items.day}
                daydate={items.daydate}
                id={items.id}
                selectedItemId={selectedItemId}
                onItemSelect={handleItemSelect}
              />
            );
          })}
        </ScrollView>
      </View>
      <View className="p-1">
        {time.map((items, key) => {
          return (
            <DeliveryDateSelect
              fromtime={items.fromtime}
              toTime={items.toTime}
              pricing={items.pricing}
              id={items.id}
              selectedItemId={selecteddate}
              onItemSelect={handledateselect}
            />
          );
        })}
      </View>
      <ConfirmButton
        routename={"orderconfirmation"}
        name={"Confirm Order"}
        disabledstatus={false}
      />
    </View>
  );
};

export default Delivery;
