import { StatusBar, Text, TouchableOpacity, View,ScrollView,FlatList} from 'react-native'
import React from 'react'
import PendingOrders from '../components/PendingOrders'
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import CompletedOrders from '../components/CompletedOrders';
import HeaderTwo from '../components/HeaderTwo';
import { useTheme } from '../context/ThemeProvider';

const data = [
  {
    id: 1,
    status: "Pending",
  },
  {
    id: 2,
    status: "Pending",
  },
  {
    id: 3,
    status: "Pending",
  },
  {
    id: 4,
    status: "Completed",
  },
  {
    id: 5,
    status: "Completed",
  },
  {
    id: 6,
    status: "Completed",
  },
  {
    id: 7,
    status: "Completed",
  },
  {
    id: 8,
    status: "Pending",
  },
  {
    id: 9,
    status: "Completed",
  },
  {
    id: 10,
    status: "Completed",
  },
];

const Orders = () => {
  const {dark} = useTheme()
  return (
    <View className={dark?"bg-gray-700 h-screen":"h-screen"}>
      <HeaderTwo name={"My Orders"} />
      <FlatList
        data={data}
        keyExtractor={(item) => {
          item.id;
        }}
        className="mb-12"
        renderItem={({ item }) => (
          <CompletedOrders
            id={item.id}
            productName={"Vanilla Combo"}
            quantity={2}
            price={24}
            deliverydate={"Mon 24 October"}
            status={item.status}
          />
        )}
      />
    </View>
  );
}

export default Orders

{
  /*
  <ScrollView>
      <HeaderTwo name={"My Orders"} />
      <PendingOrders
        productName={"Vanilla combo"}
        quantity={2}
        deliverydate={"Wed 24 Oct"}
        deliverylocation={"Oyarifa"}
        price={24}
        deliverytime={"12:30 AM"}
      />
      <CompletedOrders
        id={1}
        productName={"Vanilla Combo"}
        quantity={2}
        price={24}
        deliverydate={"Mon 24 October"}
        status={"Completed"}
      />
      <CompletedOrders
        id={2}
        productName={"Vanilla Combo"}
        quantity={2}
        price={24}
        deliverydate={"Mon 24 October"}
        status={"Completed"}
      />
      <CompletedOrders
        id={3}
        productName={"Vanilla Combo"}
        quantity={2}
        price={24}
        deliverydate={"Mon 24 October"}
        status={"Completed"}
      />
      <CompletedOrders
        id={4}
        productName={"Vanilla Combo"}
        quantity={2}
        price={24}
        deliverydate={"Mon 24 October"}
        status={"Completed"}
      />
    </ScrollView>
  
  */
}