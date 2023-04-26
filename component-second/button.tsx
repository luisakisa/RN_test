import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Animated,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ProgressButton() {
  const [progress, setProgress] = useState<Animated.Value>(
    new Animated.Value(0)
  );

  const animateProgress = () => {
    Animated.timing(progress, {
      toValue: 100,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  };

  const gradientWidth = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  const gradientColor = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ["#DD4E58", "#FF8158"],
  });

  return (
    <View style={{ flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#5A3ECD",
      }}>
    <TouchableOpacity style={styles.container} onPress={animateProgress}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
          Free User
        </Text>
        <Text
          style={{ color: "white", opacity: 0.64, fontSize: 15, paddingTop: 4 }}
        >
          Unlocked only 32% of content
        </Text>
      </View>
      <Image
        source={require("./Vector.png")}
        style={{ margin: 7, marginLeft: 90 }}
      />
      <Animated.View
        style={[
          styles.gradientButton,
          {
            backgroundColor: gradientColor,
            width: gradientWidth,
          },
        ]}
      ></Animated.View>
    </TouchableOpacity></View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "white",
    backgroundColor: "#432AA9",
    marginBottom: 8,
    marginHorizontal: 8,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 34,
    padding: 16,
    borderWidth: 8,
    borderColor: "#785CEB",
    position: "relative",

  },
  gradientButton: {
    borderRadius: 25,
    position: "absolute",
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: -1
  },
});
