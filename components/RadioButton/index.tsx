import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

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
            <Text style={styles.colorWhite}>{days} days free trial</Text>
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
            Billing starts after trial
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
