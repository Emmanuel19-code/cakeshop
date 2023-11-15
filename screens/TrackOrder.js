import React, { useRef, useState } from "react";
import { View, StyleSheet,  } from "react-native";
import MapView,{Marker} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const TrackOrder = () => {
  const [state, setState] = useState({
    pickupcoords: {
      Latitude: 5.6463,
      Longitude: -0.187,
      LatitudeDelta: 0.05,
      LongitudeDelta: 0.05,
    },
    dropcoords: {
      Latitude: 5.6448,
      Longitude: -0.1784,
      LatitudeDelta: 0.05,
      LongitudeDelta: 0.05,
    },
  });
  const mapref = useRef()
  const { pickupcoords, dropcoords } = state;
  return (
    <View className="flex-1">
      <MapView
       ref={mapref}
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: 5.687,
          longitude: -0.1904,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker 
        coordinate={pickupcoords}
        />
        <Marker 
        coordinate={dropcoords}
        />
        <MapViewDirections
          origin={pickupcoords}
          destination={dropcoords}
          apikey={""}
          strokeWidth={3}
          strokeColor="blue"
        />
      </MapView>
    </View>
  );
};

export default TrackOrder;
