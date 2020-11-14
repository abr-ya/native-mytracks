import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from '../context/AuthContext';
import { StyleSheet, View, Text, Button } from "react-native";

const LoaderScreen = ({ navigation }) => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    console.log('LoaderScreen');
    tryLocalSignin();
  }, []);

  return ( 
    <View style={styles.view} >
      <Text style={styles.header}>LoaderScreen</Text>
      <Text>...</Text>
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

export default LoaderScreen;
