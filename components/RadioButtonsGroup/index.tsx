import React, {useState} from 'react';
import {View} from 'react-native';
import RadioButton from '../RadioButton';
import i18n from '../../i18n';
('./../../i18n');

export default function RadioButtonsGroup() {
  const data = [
    {
      id: 1,
      time: i18n.t('first.monthly'),
      price: `$99 / ${i18n.t('first.month')}`,
      days: 3,
    },
    {
      id: 2,
      time: `3 ${i18n.t('first.of-mounth')}`,
      price: '$199',
      days: 7,
    },
    {
      id: 3,
      time: `1 ${i18n.t('first.year')}`,
      price: '$399',
      days: 7,
    },
  ];
  const [selected, setSelected] = useState(1);

  const handleSelect = (id: number) => {
    setSelected(id);
  };

  return (
    <View>
      {data.map(item => (
        <RadioButton
          key={item.id}
          selected={selected === item.id}
          onSelect={() => handleSelect(item.id)}
          data={item}
        />
      ))}
    </View>
  );
}
