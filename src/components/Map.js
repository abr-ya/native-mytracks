import React from "react";
import { StyleSheet,  Text } from "react-native";
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  const st1 = 41.9;
  const st2 = 12.46;
  let points = [];
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: st1 + i/5000,
        longitude: st2 + i/1000,
      });
    } else {
      points.push({
        latitude: st1 - i/5000,
        longitude: st2 + i/1000,
      });
    }
  }

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: st1,
          longitude: st2,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={points} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  }
});

export default Map;
