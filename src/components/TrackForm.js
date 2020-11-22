import React, { useContext } from "react";
import { Input, Button, Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { Context as LocationContext } from '../context/LocationContext';
import Spacer from './Spacer';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const {
    state: { name, isRecord, locations },
    startRec,
    stopRec,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();
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
        {
          !isRecord && locations.length
            ? <Spacer style={styles.but2}>
                <Button
                  title='Save Track'
                  onPress={saveTrack}
                  disabled={!name}
                />
              </Spacer>
            : null
        }
        { locations.length
          ? <Text>в памяти {locations.length} точек</Text>
          : <Text>в памяти нет точек</Text>
        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  add: {
    margin: 10,
    marginTop: -10,
  },
  but2: {
    margin: 0,
    marginTop: 20,
  },
});

export default TrackForm;
