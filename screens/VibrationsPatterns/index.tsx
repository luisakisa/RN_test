import React, {useState} from 'react';
import {styles} from './styles';
import VibrationsPattern from '../../components/VibrationsPattern';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, ScrollView} from 'react-native';
import Icons from './../../assets/svg/index';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const data = [
  {title: 'Impulse', Icon: Icons.Impulse},
  {title: 'Breeze', Icon: Icons.Breeze},
  {title: 'Heartbeat', Icon: Icons.Heartbeat},
  {title: 'Tornado', Icon: Icons.Tornado},
  {title: 'Rain', Icon: Icons.Rain},
  {title: 'Universe', Icon: Icons.Universe},
  {title: 'Waterfall', Icon: Icons.Waterfall},
  {title: 'Tsunami', Icon: Icons.Tsunami},
  {title: 'Volcano', Icon: Icons.Volcano},
  {title: 'Impulse', Icon: Icons.Impulse},
  {title: 'Breeze', Icon: Icons.Breeze},
  {title: 'Heartbeat', Icon: Icons.Heartbeat},
  {title: 'Tornado', Icon: Icons.Tornado},
  {title: 'Rain', Icon: Icons.Rain},
  {title: 'Universe', Icon: Icons.Universe},
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
        <Icons.Arrow style={[styles.arrow, {top: safeAreaInsets.top + 20}]} />
        <Text style={styles.whiteColor}>Vibrations patterns</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {data.map((item, index) => (
            <VibrationsPattern
              data={item}
              id={index}
              key={`VibrationsPattern-${item.title}-${index}`}
              selected={selected === index}
              onSelect={() => handleSelect(index)}
            />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
