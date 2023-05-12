import React, {useState} from 'react';
import {View} from 'react-native';
import RadioButton from '../RadioButton';
import {useTranslation} from 'react-i18next';

export default function RadioButtonsGroup() {
  const {t, i18n} = useTranslation();
  const month = i18n.t('first.month');
  const year = i18n.t('first.year');
  const ofMounth = i18n.t('first.of-mounth');
  const monthly = i18n.t('first.monthly');

  const data = [
    {
      id: 1,
      time: monthly,
      price: `$99 / ${month}`,
      days: 3,
    },
    {
      id: 2,
      time: `3 ${ofMounth}`,
      price: '$199',
      days: 7,
    },
    {
      id: 3,
      time: `1 ${year}`,
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
