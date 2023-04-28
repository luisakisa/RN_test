import {StyleSheet, View} from 'react-native';
import React from 'react';
import ProgressButton from '../components/ProgressButton';

export default function Second() {
  return (
    <View style={styles.container}>
      <ProgressButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A3ECD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
