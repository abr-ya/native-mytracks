import React from "react";
import { StyleSheet, View,  } from "react-native";
import SignForm from '../components/SignForm';

const SignupScreen = () => {
  const buttonHandler = (mail, pass) => {
    console.log('buttonHandler', mail, pass);
  }

  const button = {
    title: "Sign Up",
    handler: buttonHandler,
  };

  return ( 
    <View style={styles.view} >
      <SignForm title='Sign Up for Tracker' button={button} />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50,
  },
});

export default SignupScreen;
