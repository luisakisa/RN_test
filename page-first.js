import { Button, StyleSheet, Text, View } from "react-native";


export default function PageFirst({navigation}) {
  return (
    <View style={styles.container}>
       <Button
        title="Go to selected group buttons"
        onPress={() => navigation.navigate('First')}
      />
      <Button
        title="Go to progress button"
        onPress={() => navigation.navigate('Second')}
      />
      <Button
        title="Go to styled text input"
        onPress={() => navigation.navigate('Third')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
