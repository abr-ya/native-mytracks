import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const TrackDetailScreen = () => {
  return ( 
    <View style={styles.view} >
      <Text style={styles.header}>TrackDetailScreen</Text>
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
