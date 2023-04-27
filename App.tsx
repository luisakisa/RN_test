import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import PageFirst from "./screens/Home";
import { RootStackParamList } from "./types";
import First from "./screens/First";
import Second from "./screens/Second";
import Third from "./screens/Third";
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
       <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={PageFirst} />
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Third" component={Third}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}






