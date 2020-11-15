import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-navigation';
import { Text, Input, Button } from "react-native-elements";
import Map from '../components/Map';

const TrackCreateScreen = () => {
  return ( 
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3>Create a Track</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
