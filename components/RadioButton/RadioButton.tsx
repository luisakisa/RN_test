import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";

interface Data {
  id: number;
  time: string;
  price: string;
  days: number;
}

export default function RadioButton(props: {
  data: Data;
  selected: boolean;
  onSelect: (id: number) => void;
}) {
  const { id, time, price, days } = props.data;
  const { selected, onSelect } = props;

  const handlePress = () => {
    onSelect(id);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={[styles.container, selected && styles.selectedContainer]}>
        <View style={styles.column_left}>
          <Text style={{ color: selected ? "black" : "white" }}>{time}</Text>
          <View style={styles.box_days}>
            <Text style={{ color: "white" }}>{days} days free trial</Text>
          </View>
        </View>
        <View style={styles.column_right}>
          <Text style={[styles.price, { color: selected ? "black" : "white" }]}>
            {price}
          </Text>
          <Text style={[styles.trial, { color: selected ? "black" : "white" }]}>
            Billing starts after trial
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

