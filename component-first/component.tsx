import { StyleSheet, Text, View } from "react-native";
import RadioButtonsGroup from "./radio-buttons-group";

export default function SelectedGroup() {
  return (
    <View style={styles.container}>
      <RadioButtonsGroup></RadioButtonsGroup>
      <Text style={{ color: "white" }}>
        You can cancel your subscription anytime
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A3ECD",
    alignItems: "center",
    justifyContent: "center",
  },
});
