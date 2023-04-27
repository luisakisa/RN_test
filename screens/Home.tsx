import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";

type prop = NativeStackScreenProps<RootStackParamList, 'Home'>;
export default function Home({navigation}:prop) {
  return (
    <View style={styles.container}>
       <Button
        title="Go to selected group buttons"
        onPress={() => navigation.navigate('First')}
      />
      <Button
        title="Go to progress button"
        onPress={() => navigation.navigate('Second')}
      />
      <Button
        title="Go to styled text input"
        onPress={() => {
          navigation.navigate('Third', {
            data: 'some data from home',
          });
        }}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
