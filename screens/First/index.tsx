import {Text, View} from 'react-native';
import RadioButtonsGroup from '../../components/RadioButtonsGroup';
import React from 'react';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

export default function First() {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <RadioButtonsGroup />
      <Text style={styles.colorWhite}>{t('first.text-subscribe')}</Text>
    </View>
  );
}
