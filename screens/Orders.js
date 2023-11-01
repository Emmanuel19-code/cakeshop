import { StatusBar, Text, TouchableOpacity, View,ScrollView} from 'react-native'
import React from 'react'
import PendingOrders from '../components/PendingOrders'
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import CompletedOrders from '../components/CompletedOrders';
import HeaderTwo from '../components/HeaderTwo';

const Orders = () => {
  return (
    <ScrollView>
      <HeaderTwo name={"My Orders"}/>
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
      />
      <CompletedOrders
        id={2}
        productName={"Vanilla Combo"}
        quantity={2}
        price={24}
        deliverydate={"Mon 24 October"}
      />
      <CompletedOrders
        id={3}
        productName={"Vanilla Combo"}
        quantity={2}
        price={24}
        deliverydate={"Mon 24 October"}
      />
      <CompletedOrders
        id={4}
        productName={"Vanilla Combo"}
        quantity={2}
        price={24}
        deliverydate={"Mon 24 October"}
      />
    </ScrollView>
  );
}

export default Orders

