import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Prompt({ text, icon, color, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons name={icon} color={color} size={50} />
      <Text style={{ color: color }}>{text}</Text>
    </TouchableOpacity>
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
