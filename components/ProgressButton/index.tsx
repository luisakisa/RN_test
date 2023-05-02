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

const AnimatedText = Animated.createAnimatedComponent(TextInput);

export default function ProgressButton() {
  const progress = useSharedValue(0);
  const gradientAnimatedStyleWidth = useAnimatedStyle(() => {
    return {
      width: `${progress.value}%`,
    };
  });

  function toggleProgress(): void {
    progress.value = withTiming(progress.value > 0 ? 0 : 100, {duration: 4000});
  }

  const valueAnimatedProps = useAnimatedProps(() => {
    return {
      text: `Unlocked only ${Math.round(progress.value)}% of content`,
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
          <Text style={styles.textUp}>Free User</Text>
          <AnimatedText
            value={'Unlocked only 0% of content'}
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
