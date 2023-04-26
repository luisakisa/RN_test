import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SelectedGroup from "./component-first/component";
import ProgressButton from "./component-second/button";
import StyledTextInput from "./component-third/input";


export default function App() {
  return (
    <View style={styles.container}>
      <SelectedGroup></SelectedGroup>
      <ProgressButton></ProgressButton>
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
