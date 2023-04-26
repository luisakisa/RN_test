import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SelectedGroup from "./component-first/component";
import ProgressButton from "./component-second/button";
import StyledTextInput from "./component-third/input";
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import PageFirst from "./page-first";
import { RootStackParamList } from "./types";
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
       <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={PageFirst} />
        <Stack.Screen name="First" component={SelectedGroup} />
        <Stack.Screen name="Second" component={ProgressButton} />
        <Stack.Screen name="Third" component={StyledTextInput}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}






