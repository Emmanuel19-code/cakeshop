import {Text, ScrollView ,View,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Cartcomponent from '../components/Cartcomponent';
import HeaderOne from '../components/HeaderOne';
import ConfirmButton from '../components/ConfirmButton';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
      {
        price: "",
        size: "",
        productName: "Vanilla combo",
        image: "../assets/Image4.jpg",
      },
    ]);
  return (
    <View className="h-screen">
      <ScrollView showsVerticalScrollIndicator={false} className="">
        <HeaderOne headertitle={"Cart"} />
        {cartItems.map((items, key) => {
          return (
            <Cartcomponent
              key={key}
              price={items.price}
              size={items.size}
              productName={items.productName}
              image={items.image}
            />
          );
        })}
        {cartItems.length === 0 && (
          <View className="m-10">
            <Text className="text-center text-lg font-bold">You have no items in your cart</Text>
          </View>
        )}
        <View className="flex-row-reverse m-1">
          <TouchableOpacity
            className="bg-gray-400 p-2 w-24 mr-2 rounded"
            onPress={() => setCartItems([])}
            disabled={cartItems.length ===0?true:false}
          >
            <Text className="text-white text-center">Clear Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ConfirmButton
        routename={"delivery"}
        name={"Checkout"}
        disabledstatus={cartItems.length === 0 ? true : false}
      />
    </View>
  );
}

export default Cart

