import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import RadioButtonsGroup from "./component-first/radio-buttons-group";
import ProgressButton from "./component-second/button";


export default function App() {
  return (
    <View style={styles.container}>
      <ProgressButton></ProgressButton>
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
