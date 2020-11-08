import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return ( 
    <View style={styles.view} >
      <Text style={styles.header}>TrackListScreen</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Detail')}
      />
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
