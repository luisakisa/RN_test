import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';

export default function StyledTextInput() {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(0);

  return (
    <View style={focused ? styles.containerWithFocus : styles.container}>
      <TextInput
        style={value ? styles.textInputWithValue : styles.textInput}
        placeholder="Write your dare..."
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        value={value}
        onChangeText={setValue}
        onFocus={() => setFocused(1)}
        onBlur={() => setFocused(0)}
      />
    </View>
  );
}
