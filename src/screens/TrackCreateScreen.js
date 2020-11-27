// import '../_mockLocation';
import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Text } from "react-native-elements";
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
  const { state: { isRecord }, addLocation } = useContext(LocationContext);
  // обновляем callback только если поменлся флаг записи
  const callback = useCallback((location) => {
    addLocation(location, isRecord);
  }, [isRecord]);
  // первый аргумент - мониторить или нет
  // мы мониторим если активен экран или если идёт запись
  const [err] = useLocation(isFocused || isRecord, callback);

  return ( 
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3>Create a Track</Text>
      <Map />
      {err ? (<Text>Please, enable location services: {err.message}</Text>) : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: 'Create Track',
  tabBarIcon: <FontAwesome name='plus' size={20} />
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
