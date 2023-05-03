import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {SvgProps} from 'react-native-svg';

interface Props {
  data: {
    name: string;
    svg: React.FC<SvgProps>;
  };
  key: number;
  selected: boolean;
  onSelect: (id: number) => void;
}

export default function VibrationsPattern(props: Props) {
  const ComponentSVG = props.data.svg;

  const handlePress = () => {
    props.onSelect(props.key);
  };

  return (
    <Pressable onPress={handlePress}>
      <View
        style={[
          styles.container,
          props.selected && styles.selectedColorBackground,
        ]}>
        <ComponentSVG
          fill={
            props.selected ? 'rgba(55, 50, 137, 1)' : 'white'
          }></ComponentSVG>
        <Text
          style={[styles.whiteColor, props.selected && styles.selectedColor]}>
          {props.data.name}
        </Text>
      </View>
    </Pressable>
  );
}
