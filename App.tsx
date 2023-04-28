import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SelectedGroup from "./screens/Second";
import ProgressButton from "./components/ProgressButton/ProgressButton";
import StyledTextInput from "./StyledTextInput/StyledTextInput";
import React from "react";


export default function App() {
  return (
    <View style={styles.container}>
      {/* <SelectedGroup></SelectedGroup> */}
      <ProgressButton></ProgressButton>
      {/* <StyledTextInput></StyledTextInput> */}
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
