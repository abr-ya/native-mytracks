import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

const PostForm = ({ title, button, error, nav }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  return (
    <>
      <Spacer><Text h3>{title}</Text></Spacer>
      <Input
        label="Email"
        value={input1}
        onChangeText={setInput1}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        secureTextEntry={true}
        label="Password"
        value={input2}
        onChangeText={setInput2}  
        autoCapitalize="none"
        autoCorrect={false}      
      />
      {!!error && <Spacer><Text style={styles.error}>{error}</Text></Spacer>}
      <Spacer>
        <Button
          title={button.title}
          onPress={() => button.handler(input1, input2)}
        />
      </Spacer>
      {nav && (
        <Spacer>
          <TouchableOpacity onPress={nav.press}>
            <Text style={styles.link}>{nav.text}</Text>
          </TouchableOpacity>
        </Spacer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
  link: {
    color: 'blue',
    fontSize: 16,
  },
});

export default PostForm;
