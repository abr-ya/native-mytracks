import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const TrackListScreen = () => {
  return ( 
    <View style={styles.view} >
      <Text style={styles.header}>TrackListScreen</Text>
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

export default TrackListScreen;
