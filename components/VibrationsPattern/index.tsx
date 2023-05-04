import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {SvgProps} from 'react-native-svg';

export default function VibrationsPattern(props: {
  title: string;
  Icon: React.FC<SvgProps>;
  id: number;
  selected: boolean;
  onSelect: (id: number) => void;
}) {
  const {title, Icon, id, selected, onSelect} = props;

  const handlePress = () => {
    onSelect(id);
  };

  return (
    <Pressable onPress={handlePress}>
      <View
        style={[styles.container, selected && styles.selectedColorBackground]}>
        <Icon fill={selected ? 'rgb(55, 50, 137)' : 'white'} />
        <Text style={[styles.whiteColor, selected && styles.selectedColor]}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
}
