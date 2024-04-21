import { StyleSheet, Text, View } from 'react-native'
import React, { useContext,useState,createContext } from 'react'
import * as ImagePicker from "expo-image-picker";



export const CameraContext = createContext()


export const CameraProvider = ({children}) => {
    const [image, setImage] = useState(null);
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
      const openCamera = async () => {
        let result = await ImagePicker.launchCameraAsync(options);
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
  return (
    <CameraContext.Provider value={{image,setImage,pickImage,openCamera}}>
         {children}
    </CameraContext.Provider>
  )
}

export const useCamera = () => useContext(CameraContext);

