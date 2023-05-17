import {Button, View} from 'react-native';
import {RootStackParamList} from '../../navigation/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {NamesScreens} from '../../navigation/NamesScreens';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

type Prop = NativeStackScreenProps<RootStackParamList, NamesScreens.Home>;

export default function Home({navigation}: Prop) {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Button
        title={t('home.button1')}
        onPress={() => navigation.navigate(NamesScreens.First)}
      />
      <Button
        title={t('home.button2')}
        onPress={() => navigation.navigate(NamesScreens.Second)}
      />
      <Button
        title={t('home.button3')}
        onPress={() => {
          navigation.navigate(NamesScreens.Third, {
            data: 'some data from home',
          });
        }}
      />
      <Button
        title={t('home.button4')}
        onPress={() => navigation.navigate(NamesScreens.VibrationsPatterns)}
      />
    </View>
  );
}
