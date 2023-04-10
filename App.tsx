import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import RadioButtonsGroup from "./component-first/radio-buttons-group";
import ProgressButton from "./component-second/button";
import StyledTextInput from "./component-third/input";


export default function App() {
  return (
    <View style={styles.container}>
      {/* <RadioButtonsGroup></RadioButtonsGroup> */}
      {/* <ProgressButton></ProgressButton> */}
      <StyledTextInput></StyledTextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A3ECD",
    alignItems: "center",
    justifyContent: "center",
  },
});
