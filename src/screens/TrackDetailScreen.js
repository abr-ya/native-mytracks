import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam('_id');

  return ( 
    <View style={styles.view} >
      <Text style={styles.header}>TrackDetailScreen</Text>
      <Text>TrackID: {_id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin: 10,
  },
  header: {
    fontSize: 24,
  },
});

export default TrackDetailScreen;
