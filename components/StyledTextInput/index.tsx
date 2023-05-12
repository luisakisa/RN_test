import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

export default function StyledTextInput() {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(0);
  const {t, i18n} = useTranslation();
  const textPlaceholder = i18n.t('third.placeholder');
  return (
    <View style={focused ? styles.containerWithFocus : styles.container}>
      <TextInput
        style={value ? styles.textInputWithValue : styles.textInput}
        placeholder={textPlaceholder}
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        value={value}
        onChangeText={setValue}
        onFocus={() => setFocused(1)}
        onBlur={() => setFocused(0)}
      />
    </View>
  );
}
