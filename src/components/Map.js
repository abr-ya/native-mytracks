import React, { useContext } from 'react';
import { ActivityIndicator, Text, StyleSheet } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const { state: { currentLocation, locations, isRecord }} = useContext(LocationContext);

  // индикатор почему-то не работает
  if (!currentLocation) {
    return <>
      <Text>получаем координаты...</Text>
      <ActivityIndicator  style={styles.indicator} />
    </>
  }
  console.log('map', isRecord, locations.length);

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          //latitude,
          //longitude,
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        //нужно для движения экрана "за точкой"
        //у него пока нет
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={locations.map(loc => loc.coords)} />
        <Circle
          center={currentLocation.coords}
          radius={10}
          strokeColor='rgba(158, 158, 255, 1.0)'
          fillColor='rgba(158, 158, 255, 0.5)'
        />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
  indicator: {
    marginTop: 100,
    color: 'blue',
  }
});

export default Map;
