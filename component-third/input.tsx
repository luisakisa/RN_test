import { RouteProp} from '@react-navigation/native';
import React, { useState } from 'react';
import { TextInput, View, StyleSheet,Text } from 'react-native';
import { RootStackParamList } from '../types';


type prop = {
  route: RouteProp<RootStackParamList, 'Third'>;
} 


export default function StyledTextInput({route}:prop) {
  const { data} = route.params;
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(0);

  return (
    <View style={{ flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#5A3ECD",
      }}>
        <Text style={{color:'white'}}>data: {JSON.stringify(data)}</Text>
    <View style={focused ? styles.containerWithFocus : styles.container} >
      <TextInput
        style={value ? styles.textInputWithValue : styles.textInput}
        placeholder="Write your dare..."
        placeholderTextColor='rgba(255, 255, 255, 0.7)'
        value={value}
        onChangeText={setValue}
        onFocus={() => setFocused(1)}
        onBlur={() => setFocused(0)}
      />
    </View></View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#785CEB',
    borderRadius: 24,
    padding: 16,
    marginBottom: 16,
    fontSize: 17,
    minWidth:359,
    minHeight:170,
  },
  containerWithFocus:{
    backgroundColor: '#9379FF',
    borderRadius: 24,
    padding: 16,
    marginBottom: 16,
    fontSize: 17,
    minWidth:359,
    minHeight:170,
  },
  textInput: {

  },
  textInputWithValue: {
    color:'#FFFFFF'
  },
});
