import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const AccountScreen = () => {
  return ( 
    <View style={styles.view} >
      <Text style={styles.header}>Account Screen</Text>
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

export default AccountScreen;
