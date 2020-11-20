import '../_mockLocation';
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Text } from "react-native-elements";
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ isFocused }) => {
  const { state: { isRecord }, addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, location => {
    addLocation(location, isRecord);
  });

  return ( 
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3>Create a Track</Text>
      <Map />
      {err ? (<Text>Please, enable location services: {err.message}</Text>) : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
