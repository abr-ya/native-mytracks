import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');

  const track = state.find(tr => tr._id === _id);
  const start = track.locations[0].coords

  return ( 
    <View style={styles.view} >
      <Text h3>Track Detail</Text>
      <Text>TrackID: {_id}</Text>
      <Text>TrackName: {track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...start
        }}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin: 10,
  },
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;
