import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

const AnimatedText = Animated.createAnimatedComponent(TextInput);

export default function ProgressButton() {
  const progress = useSharedValue(0);
  const {t, i18n} = useTranslation();

  const gradientAnimatedStyleWidth = useAnimatedStyle(() => {
    return {
      width: `${progress.value}%`,
    };
  });

  function toggleProgress(): void {
    progress.value = withTiming(progress.value > 0 ? 0 : 100, {duration: 4000});
  }

  const text1 = i18n.t('second.text-percent1');
  const text2 = i18n.t('second.text-percent2');
  const textPercent = i18n.t('second.text-percent');

  const valueAnimatedProps = useAnimatedProps(() => {
    return {
      text: `${text1} ${Math.round(progress.value) + text2}`,
    } as any;
  }, [progress.value]);

  return (
    <TouchableOpacity style={styles.container} onPress={toggleProgress}>
      <Animated.View
        style={[styles.gradientAnimatedStyle, gradientAnimatedStyleWidth]}>
        <LinearGradient
          colors={['#DD4E58', '#FF8158']}
          style={styles.gradient}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
        />
      </Animated.View>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.textUp}>{t('second.free-user')}</Text>
          <AnimatedText
            value={textPercent}
            editable={false}
            animatedProps={valueAnimatedProps}
            style={styles.textLow}
          />
        </View>
        <Image
          source={require('./../../assets/images/arrow/index.png')}
          style={styles.imgStyle}
        />
      </View>
    </TouchableOpacity>
  );
}
