import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import SignForm from '../components/SignForm';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext);
  const buttonHandler = (email, password) => {
    console.log('SignUp Handler', email, password);
    signup({ email, password });
  }

  const button = {
    title: "Sign Up",
    handler: buttonHandler,
  };

  return ( 
    <View style={styles.view} >
      <SignForm title='Sign Up for Tracker' button={button} error={state.errorMessage} />
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
