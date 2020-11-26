import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Spacer>
        <Text style={styles.header}>Account Screen</Text>
        <Button title="Sign Out" onPress={signout}/>
      </Spacer>
    </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    marginTop: 40,
  },
});

export default AccountScreen;
