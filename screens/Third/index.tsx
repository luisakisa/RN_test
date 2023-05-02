import {Text, View} from 'react-native';
import React from 'react';
import StyledTextInput from '../../components/StyledTextInput';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {NamesScreens} from '../../navigation/NamesScreens';
import {styles} from './styles';

type prop = {
  route: RouteProp<RootStackParamList, NamesScreens.Third>;
};

export default function Third({route}: prop) {
  const {data} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.colorWhite}>data: {data}</Text>
      <StyledTextInput />
    </View>
  );
}
