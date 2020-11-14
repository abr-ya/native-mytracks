import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import SignForm from '../components/SignForm';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrMes } = useContext(AuthContext);
  const buttonHandler = (email, password) => {
    console.log('SignIn Handler', email, password);
    signin({ email, password });
  }

  const button = {
    title: "Sign In",
    handler: buttonHandler,
  };

  const navPressHandler = () => {
    console.log('SignIn navPressHandler');
    clearErrMes();
    navigation.navigate('Signup');
  }

  return ( 
    <View style={styles.view} >
      <SignForm
        title='Sign In to Your Account'
        button={button}
        error={state.errorMessage}
        nav={{
          press: navPressHandler,
          text: 'Do not have an account? Sign up here',
        }}
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
