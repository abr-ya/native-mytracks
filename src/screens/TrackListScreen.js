import React, { useContext } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  console.log('TrackList, tracks:', state.length);

  return ( 
    <View style={styles.view} >
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text style={styles.header}>TrackListScreen</Text>
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => ( 
          <TouchableOpacity>
            <ListItem>
              <Text>{item.name}</Text>
              <ListItem.Chevron />
            </ListItem>
          </TouchableOpacity>
        )}
      />
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

export default TrackListScreen;
