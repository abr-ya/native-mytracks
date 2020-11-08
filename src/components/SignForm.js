import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

const PostForm = ({ title, button }) => {
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
      <Spacer>
        <Button
          title={button.title}
          onPress={() => button.handler(input1, input2)}
        />
      </Spacer>  
    </>
  );
}

const styles = StyleSheet.create({});

export default PostForm;
