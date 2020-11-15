import React from "react";
import { StyleSheet,  Text } from "react-native";
import MapView from 'react-native-maps';

const Map = () => (
  <>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.3333,
        longitude: -122.03,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    />  
  </>
);

const styles = StyleSheet.create({
  map: {
    height: 300,
  }
});

export default Map;
