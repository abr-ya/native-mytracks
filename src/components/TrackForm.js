import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
  const {
    state: { name, isRecord },
    startRec,
    stopRec,
    changeName,
  } = useContext(LocationContext);
  //console.log(name, isRecord);

  return (
    <>
      <Input
        placeholder="Enter Name"
        value={name}
        onChangeText={changeName}
      />
      <View style={styles.add}>
        <Button
          title={`${isRecord ? 'Stop' : 'Start'} Recording`}
          onPress={isRecord ? stopRec : startRec}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  add: {
    margin: 10,
    marginTop: -10,
  },
});

export default TrackForm;
