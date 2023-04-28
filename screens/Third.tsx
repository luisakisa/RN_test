import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StyledTextInput from '../components/StyledTextInput';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/types';
import {NamesScreens} from '../navigation/NamesScreens';

type prop = {
  route: RouteProp<RootStackParamList, NamesScreens.Third>;
};

export default function Third({route}: prop) {
  const {data} = route.params;
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>data: {data}</Text>
      <StyledTextInput></StyledTextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A3ECD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});