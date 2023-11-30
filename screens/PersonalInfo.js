import { Text, View,TouchableOpacity, Image, Switch ,Pressable,useWindowDimensions, Animated,StyleSheet, useColorScheme} from 'react-native'
import React,{useContext, useEffect, useMemo, useRef, useState} from 'react'
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import PersonalsubContainer from '../components/PersonalsubContainer';
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker"
import { ThemeContext, useTheme } from '../context/ThemeProvider';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {  TextstyleThree } from '../constants/TextStyles';




const PersonalInfo = () => {
    const [image, setImage] = useState(null);
    const [ishow,setIshow] = useState(false)
 

    
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    };

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync(options);
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
    
    const openCamera =async()=>{
        let result = await ImagePicker.launchCameraAsync(options);
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
    }

       const handleOpen = () => setIshow(true)
       const [darkmode,setDarkmode] = useState(false)
        const toggleSheet = () => {
          setIshow(!ishow);
        };
       
        const {dark,colors,setScheme} = useTheme()
        const toggletheme = ()=>{
           dark?setScheme("white"):setScheme("dark")
        }
        console.log(dark);
  return (
    <View className="flex-1">
      <View className={dark?"bg-gray-700 h-screen":"bg-teal-700 h-screen"}>
        <View className=" w-full h-1/4 p-1">
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={30} color="white" />
          </TouchableOpacity>
          <View className="items-center ">
            <View className="w-32 h-32 rounded-full border-gray-200 border-2 items-center justify-center">
              {image ? (
                <Image
                  source={{ uri: image }}
                  className="w-32 h-32 rounded-full"
                />
              ) : (
                <Image
                  source={require("../assets/Image10.jpg")}
                  className="w-32 h-32 rounded-full"
                />
              )}
            </View>
            <View className="relative">
              <Text className="text-white font-bold text-xl">Esther</Text>
              <Text className="text-xs text-white">esther@gmail.com</Text>
            </View>
            <TouchableOpacity
              className="absolute top-24 right-32 bg-teal-500 p-2 rounded-full"
              onPress={handleOpen}
            >
              <Entypo name="camera" size={20} color="black" className="" />
            </TouchableOpacity>
          </View>
        </View>
        <View className={dark?"bg-gray-700 shadow p-2 w-full absolute bottom-12 rounded-t-3xl border-gray-300":"bg-white shadow p-2 w-full absolute bottom-12 rounded-t-3xl border-gray-300"}>
          <PersonalsubContainer
            IconComponent={EvilIcons}
            icon_name={"user"}
            title={"Profile Details"}
          />
          <PersonalsubContainer
            IconComponent={Ionicons}
            icon_name={"location-outline"}
            title={"Address"}
            routename={"currentlocation"}
          />
          <PersonalsubContainer
            IconComponent={MaterialIcons}
            icon_name={"favorite-border"}
            routename={"favorites"}
            title={"Favorites"}
          />
          <PersonalsubContainer
            IconComponent={Ionicons}
            icon_name={"call-outline"}
            routename={"favorites"}
            title={"Call"}
          />
          <View
            className={
              dark
                ? " flex-1 items-center p-2"
                : "flex-1 items-center p-2"
            }
          >
            <View className="flex-row items-center w-full justify-between">
              {dark ? (
                <Text className={TextstyleThree}>Dark Theme</Text>
              ) : (
                <Text className={TextstyleThree}>White Theme</Text>
              )}
              <TouchableOpacity onPress={toggletheme}>
                {dark ? (
                  <MaterialIcons name="lightbulb" size={30} color="black" />
                ) : (
                  <MaterialCommunityIcons
                    name="lightbulb-on-outline"
                    size={30}
                    color="black"
                  />
                )}
              </TouchableOpacity>
            </View>
            <View className="items-center">
              <TouchableOpacity className={dark?"p-2 flex-row items-center ":"border bg-white border-gray-200 p-2 flex-row items-center "}>
                <MaterialIcons name="logout" size={24} color={"#0f766e"} />
                <Text className="ml-2">Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {ishow && (
        <>
          <Pressable style={styles.backdrop} onPress={toggleSheet} />
          <View
            style={styles.sheet}
            className=" bg-white border border-gray-100 h-32 p-2 w-full absolute flex-row items-center "
          >
            <View className="m-4">
              <TouchableOpacity
                className=" w-14 h-14 flex border border-gray-300 justify-center items-center bg-w p-2 rounded-full"
                onPress={openCamera}
              >
                <Entypo name="camera" size={20} color="teal" className="" />
              </TouchableOpacity>
              <Text className="text-center font-bold text-teal-600">
                Camera
              </Text>
            </View>
            <View className="m-4">
              <TouchableOpacity
                className=" w-14 h-14 flex border border-gray-300 justify-center items-center  p-2 rounded-full"
                onPress={pickImage}
              >
                <Entypo name="image-inverted" size={20} color="teal" />
              </TouchableOpacity>
              <Text className="text-teal-600 font-bold text-center">
                Gallery
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

export default PersonalInfo

const styles = StyleSheet.create({
  sheet: {
    bottom: -20 * 1.1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 1,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
});
