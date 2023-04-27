import React, {useState} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function ProgressButton() {
  const progress = useSharedValue(0);

  const animateProgress = () => {
    progress.value = withTiming(110, {duration: 4000});
  };
  const linearGradientStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value}%`,
    };
  });

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={animateProgress}>
        <Animated.View style={[styles.linearGradient,linearGradientStyle]}>
          <LinearGradient
            colors={['#DD4E58', '#FF8158']}
            style={{flex:1, alignSelf:'stretch',borderRadius: 26}}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
          />
        </Animated.View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
            Free User
          </Text>
          <Text
            style={{
              color: 'white',
              opacity: 0.64,
              fontSize: 15,
              paddingTop: 4,
            }}>
            Unlocked only 32% of content
          </Text>
        </View>
        <Image
          source={require('./Vector.png')}
          style={{margin: 7, marginLeft: 90}}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#432AA9',
    marginBottom: 8,
    marginHorizontal: 8,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 34,
    padding: 16,
    borderWidth: 8,
    borderColor: '#785CEB',
    position: 'relative',
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
