import React, {useState} from 'react';
import {styles} from './styles';
import VibrationsPattern from '../../components/VibrationsPattern';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, ScrollView} from 'react-native';
import Arrow from './../../assets/svg/arrow/index.svg';
import Rain from './../../assets/svg/rain/index.svg';
import Volcano from './../../assets/svg/volcano/index.svg';
import Tsunami from './../../assets/svg/tsunami/index.svg';
import Waterfall from './../../assets/svg/waterfall/index.svg';
import Universe from './../../assets/svg/universe/index.svg';
import Tornado from './../../assets/svg/tornado/index.svg';
import Breeze from './../../assets/svg/breeze/index.svg';
import Impulse from './../../assets/svg/impulse/index.svg';
import Heartbeat from './../../assets/svg/heartbeat/index.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const data = [
  {name: 'Impulse', svg: Impulse},
  {name: 'Breeze', svg: Breeze},
  {name: 'Heartbeat', svg: Heartbeat},
  {name: 'Tornado', svg: Tornado},
  {name: 'Rain', svg: Rain},
  {name: 'Universe', svg: Universe},
  {name: 'Waterfall', svg: Waterfall},
  {name: 'Tsunami', svg: Tsunami},
  {name: 'Volcano', svg: Volcano},
  {name: 'Impulse', svg: Impulse},
  {name: 'Breeze', svg: Breeze},
  {name: 'Heartbeat', svg: Heartbeat},
  {name: 'Tornado', svg: Tornado},
  {name: 'Rain', svg: Rain},
  {name: 'Universe', svg: Universe},
];

export default function VibrationsPatterns() {
  const [selected, setSelected] = useState(1);
  const safeAreaInsets = useSafeAreaInsets();

  const handleSelect = (id: number) => {
    setSelected(id);
  };

  return (
    <LinearGradient
      colors={['#29246A', '#0F1A3C']}
      style={styles.gradintBackground}>
      <View style={[styles.header, {paddingTop: safeAreaInsets.top + 16}]}>
        <Arrow style={[styles.arrow, {top: safeAreaInsets.top + 20}]}></Arrow>
        <Text style={styles.whiteColor}>Vibrations patterns</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {data.map((item, index) => (
            <VibrationsPattern
              data={item}
              id={index}
              key={`VibrationsPattern-${item.name}-${index}`}
              selected={selected === index}
              onSelect={() => handleSelect(index)}
            />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
