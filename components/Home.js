import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Button,
  Pressable,
} from "react-native";
import Prompt from "./Prompt";

export default function Home() {
  const DATA = [
    {
      id: 1,
      title: 10,
    },
    {
      id: 2,
      title: 50,
    },
    {
      id: 3,
      title: 108,
    },
  ];

  const [count, setCount] = useState(DATA);
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={[styles.title, styles.textWhite]}>{title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={require("../assets/krishna.jpg")} />
      </View>

      <View style={styles.chantCountContainer}>
        <Text style={styles.textWhite}>
          How many times do you want to chant ?
        </Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{ backgroundColor: "green", borderRadius: 5, margin: 5 }}
          >
            <Button
              title="Add Custom Count"
              color="white"
              onPress={() => {
                // setTimesPressed((current) => current + 1);
                alert("pressed");
              }}
            />
          </View>
          {/* <Pressable onPress={() => alert("pressed")}>
            <Text style={styles.textWhite}>Add Custom Count</Text>
          </Pressable> */}
          <View
            style={{ backgroundColor: "green", borderRadius: 10, margin: 5 }}
          >
            <Button
              title="Clear Count"
              color="white"
              onPress={() => {
                // setTimesPressed((current) => current + 1);
                alert("pressed");
              }}
            />
          </View>
        </View>
      </View>

      <View style={styles.promptContainer}>
        <Text style={styles.textWhite}>
          How do you want us to prompt you when japa ends ?
        </Text>
        <View style={styles.promptIconContainer}>
          <Prompt text="sound" icon="bell" />
          <Prompt text="vibrate" icon="vibrate" />
          <Prompt text="sound & vibrate " icon="cellphone-sound" />
        </View>
      </View>

      <View style={styles.JapaButtonContainer}>
        {/* <Pressable>
          <Text>Start Japa</Text>
        </Pressable> */}

        <View
          style={{ backgroundColor: "white", borderRadius: 5, width: "90%" }}
        >
          <Button
            title="Start Japa"
            color="orange"
            onPress={() => {
              // setTimesPressed((current) => current + 1);
              alert("pressed");
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },

  imgContainer: {
    flex: 3.75,
    padding: 5,
    // backgroundColor: "yellow",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 200,
    borderWidth: 5,
    borderColor: "white",
  },

  chantCountContainer: {
    // backgroundColor: "red",
    flex: 3.75,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  promptContainer: {
    // backgroundColor: "green",
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  JapaButtonContainer: {
    // backgroundColor: "blue",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  item: {
    padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 50,
  },
  textWhite: {
    color: "white",
  },
  promptIconContainer: {
    flexDirection: "row",
    // justifyContent: "center",
  },
});
