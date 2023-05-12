import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

interface Data {
  id: number;
  time: string;
  price: string;
  days: number;
}

export default function RadioButton(props: {
  data: Data;
  selected: boolean;
  onSelect: (id: number) => void;
}) {
  const {id, time, price, days} = props.data;
  const {selected, onSelect} = props;
  const {t} = useTranslation();

  const handlePress = () => {
    onSelect(id);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={[styles.container, selected && styles.selectedContainer]}>
        <View style={styles.columnLeft}>
          <Text style={selected ? styles.colorBlack : styles.colorWhite}>
            {time}
          </Text>
          <View style={styles.boxDays}>
            <Text style={styles.colorWhite}>
              {days} {t('first.trial')}
            </Text>
          </View>
        </View>
        <View style={styles.columnRight}>
          <Text
            style={[
              styles.price,
              selected ? styles.colorBlack : styles.colorWhite,
            ]}>
            {price}
          </Text>
          <Text
            style={[
              styles.trial,
              selected ? styles.colorBlack : styles.colorWhite,
            ]}>
            {t('first.billing')}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
