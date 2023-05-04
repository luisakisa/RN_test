import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import First from '../screens/First';
import Second from '../screens/Second';
import Third from '../screens/Third';
import {RootStackParamList} from './types';
import Home from '../screens/Home';
import {NamesScreens} from './NamesScreens';
import VibrationsPatterns from '../screens/VibrationsPatterns';

const Stack = createNativeStackNavigator<RootStackParamList>();
export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={NamesScreens.Home} component={Home} />
        <Stack.Screen name={NamesScreens.First} component={First} />
        <Stack.Screen name={NamesScreens.Second} component={Second} />
        <Stack.Screen name={NamesScreens.Third} component={Third} />
        <Stack.Screen
          name={NamesScreens.VibrationsPatterns}
          component={VibrationsPatterns}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
