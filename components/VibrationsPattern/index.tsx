import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {SvgProps} from 'react-native-svg';
import {useDispatch} from 'react-redux';
import {createAction} from '@reduxjs/toolkit';

interface Props {
  data: {
    title: string;
    Icon: React.FC<SvgProps>;
  };
  id: number;
  selected: boolean;
  onSelect: (id: number) => void;
}

let action = createAction();

export default function VibrationsPattern(props: Props) {
  const dispatch = useDispatch();

  const handlePress = () => {
    props.onSelect(props.id);
    dispatch(ACTIONS_CREATORS.CURRENT_PATTERN(props.id));
  };

  return (
    <Pressable onPress={handlePress}>
      <View
        style={[
          styles.container,
          props.selected && styles.selectedColorBackground,
        ]}>
        <props.data.Icon fill={props.selected ? 'rgb(55, 50, 137)' : 'white'} />
        <Text
          style={[styles.whiteColor, props.selected && styles.selectedColor]}>
          {props.data.title}
        </Text>
      </View>
    </Pressable>
  );
}
