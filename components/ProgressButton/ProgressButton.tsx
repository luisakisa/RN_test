import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {styles} from './styles';

export default function ProgressButton() {
  const progress = useSharedValue(0);

  function animateProgress(): void {
    progress.value = withTiming(100, {duration: 4000});
  }

  const gradientAnimatedStyleWidth = useAnimatedStyle(() => {
    return {
      width: `${progress.value}%`,
    };
  });

  return (
      <TouchableOpacity style={styles.container} onPress={animateProgress}>
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
            <Text style={styles.textLow}>Unlocked only 32% of content</Text>
          </View>
          <Image source={require('./Vector.png')} style={styles.imgStyle} />
        </View>
      </TouchableOpacity>
  );
}
