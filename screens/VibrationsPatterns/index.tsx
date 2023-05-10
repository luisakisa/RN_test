import React from 'react';
import {styles} from './styles';
import VibrationsPattern from '../../components/VibrationsPattern';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, ScrollView} from 'react-native';
import Icons from './../../assets/svg/index';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {changeActivePattern} from './../../redux/reducer';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';

const data = [
  {id: 1, title: 'Impulse', Icon: Icons.Impulse},
  {id: 2, title: 'Breeze', Icon: Icons.Breeze},
  {id: 3, title: 'Heartbeat', Icon: Icons.Heartbeat},
  {id: 4, title: 'Tornado', Icon: Icons.Tornado},
  {id: 5, title: 'Rain', Icon: Icons.Rain},
  {id: 6, title: 'Universe', Icon: Icons.Universe},
  {id: 7, title: 'Waterfall', Icon: Icons.Waterfall},
  {id: 8, title: 'Tsunami', Icon: Icons.Tsunami},
  {id: 9, title: 'Volcano', Icon: Icons.Volcano},
  {id: 10, title: 'Impulse', Icon: Icons.Impulse},
  {id: 11, title: 'Breeze', Icon: Icons.Breeze},
  {id: 12, title: 'Heartbeat', Icon: Icons.Heartbeat},
  {id: 13, title: 'Tornado', Icon: Icons.Tornado},
  {id: 14, title: 'Rain', Icon: Icons.Rain},
  {id: 15, title: 'Universe', Icon: Icons.Universe},
];

export default function VibrationsPatterns() {
  const safeAreaInsets = useSafeAreaInsets();
  const selected = useAppSelector(state => state.value);
  const dispatch = useAppDispatch();

  const handleSelect = (id: number) => {
    dispatch(changeActivePattern(id));
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
              id={item.id}
              key={`VibrationsPattern-${item.title}-${index}`}
              selected={selected === item.id}
              onSelect={() => handleSelect(item.id)}
            />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
