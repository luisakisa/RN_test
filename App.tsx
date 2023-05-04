import * as React from 'react';
import {Navigation} from './navigation';
import VibrationsPatterns from './screens/VibrationsPatterns';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <VibrationsPatterns />
    </SafeAreaProvider>
  );
}
