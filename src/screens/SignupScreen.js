import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import SignForm from '../components/SignForm';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const buttonHandler = (email, password) => {
    console.log('SignUp Handler', email, password);
    signup({ email, password });
  }

  const button = {
    title: "Sign Up",
    handler: buttonHandler,
  };

  const navPressHandler = () => {
    console.log('SignUp navPressHandler');
    navigation.navigate('Signin');
  }

  return ( 
    <View style={styles.view} >
      <SignForm
        title='Sign Up for Tracker'
        button={button}
        error={state.errorMessage}
        nav={{
          press: navPressHandler,
          text: 'Already have an account? Sign in instead',
        }}
      />
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
