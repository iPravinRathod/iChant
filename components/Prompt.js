import { View, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Prompt({ text, icon }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} color="white" size={50} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // backgroundColor: "blue",
    margin: 10,
    alignContent: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
