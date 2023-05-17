import {Button, Platform, View} from 'react-native';
import {RootStackParamList} from '../../navigation/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {NamesScreens} from '../../navigation/NamesScreens';
import {styles} from './styles';
// import {request, PERMISSIONS} from 'react-native-permissions';

type Prop = NativeStackScreenProps<RootStackParamList, NamesScreens.Home>;

export default function Home({navigation}: Prop) {
  // useEffect(() => {
  //   if(Platform.OS==="android"){
  //     request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
  //   }
  // },[]);
  return (
    <View style={styles.container}>
      <Button
        title="Go to selected group buttons"
        onPress={() => navigation.navigate(NamesScreens.First)}
      />
      <Button
        title="Go to progress button"
        onPress={() => navigation.navigate(NamesScreens.Second)}
      />
      <Button
        title="Go to styled text input"
        onPress={() => {
          navigation.navigate(NamesScreens.Third, {
            data: 'some data from home',
          });
        }}
      />
      <Button
        title="Go to vibrattions patterns"
        onPress={() => navigation.navigate(NamesScreens.VibrationsPatterns)}
      />
    </View>
  );
}
