import {Text, View} from 'react-native';
import RadioButtonsGroup from '../../components/RadioButtonsGroup';
import React from 'react';
import {styles} from './styles';

export default function First() {
  return (
    <View style={styles.container}>
      <RadioButtonsGroup />
      <Text style={styles.colorWhite}>
        You can cancel your subscription anytime
      </Text>
    </View>
  );
}
