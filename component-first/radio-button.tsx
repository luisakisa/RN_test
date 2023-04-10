import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

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

const styles = StyleSheet.create({
  selectedContainer: {
    backgroundColor: "white",
    borderColor: "#72DDFF",
    borderWidth: 2,
  },
  setColorWhite: {
    color: "white",
  },
  container: {
    color: "white",
    backgroundColor: "rgba(255,255,255,0.2) ",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
    marginHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    height: 72,
    borderRadius: 20,
    maxWidth: 359,
    maxHeight: 82,
  },
  box_days: {
    marginTop: 2,
    backgroundColor: "#432AA9",
    borderRadius: 6,
    color: "white",
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 12,
    fontWeight: 500,
  },
  column_right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    paddingLeft: 15,
  },
  column_left: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    fontWeight: "600",
    fontSize: 17,
    marginBottom: 2,
  },
  price: {
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 2,
  },
  trial: {
    fontSize: 15,
    fontWeight: "400",
  },
});
