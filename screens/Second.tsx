import { Text, View } from "react-native";
import RadioButtonsGroup from "../components/RadioButtonsGroup";
import { styles } from "./styles";

export default function SelectedGroup() {
  return (
    <View style={styles.container}>
      <RadioButtonsGroup/>
      <Text style={{ color: "white" }}>
        You can cancel your subscription anytime
      </Text>
    </View>
  );
}

