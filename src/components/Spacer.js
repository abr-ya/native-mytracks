import React from "react";
import { StyleSheet, View,  } from "react-native";

const Spacer = ({ children, style }) => (
  <View
    style={{
      ...styles.spacer,
      ...style,
    }}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  spacer: {
    margin: 10,
  },
});

export default Spacer;
