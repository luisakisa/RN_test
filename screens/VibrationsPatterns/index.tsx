import React from 'react';
import {styles} from './styles';
import VibrationsPattern from '../../components/VibrationsPattern';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, ScrollView, Pressable} from 'react-native';
import Icons from './../../assets/svg/index';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {changeActivePattern} from '../../redux/slices/patternSlice';
import {incrementCounterPattern} from '../../redux/slices/counterSlice';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {NamesScreens} from '../../navigation/NamesScreens';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

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

type Prop = NativeStackScreenProps<
  RootStackParamList,
  NamesScreens.VibrationsPatterns
>;

export default function VibrationsPatterns({navigation}: Prop) {
  const safeAreaInsets = useSafeAreaInsets();
  const selectedPatternID = useSelector((state: RootState) => state.pattern.id);
  const dispatch = useDispatch();

  const handleSelect = (id: number) => {
    dispatch(changeActivePattern(id));
    dispatch(incrementCounterPattern());
  };

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={['#29246A', '#0F1A3C']}
      style={styles.gradintBackground}>
      <View style={[styles.header, {paddingTop: safeAreaInsets.top + 16}]}>
        <Pressable
          onPress={handlePress}
          style={[styles.arrow, {top: safeAreaInsets.top + 20}]}>
          <Icons.Arrow />
        </Pressable>
        <Text style={styles.whiteColor}>Vibrations patterns</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {data.map((item, index) => (
            <VibrationsPattern
              id={item.id}
              title={item.title}
              Icon={item.Icon}
              key={`VibrationsPattern-${item.title}-${index}`}
              selected={selectedPatternID === item.id}
              onSelect={() => handleSelect(item.id)}
            />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
