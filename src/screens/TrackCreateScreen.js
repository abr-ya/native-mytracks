import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const TrackCreateScreen = () => {
  return ( 
    <View style={styles.view} >
      <Text style={styles.header}>TrackCreateScreen</Text>
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

export default TrackCreateScreen;
