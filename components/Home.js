import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Button,
  Pressable,
} from "react-native";

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
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={require("../assets/krishna.jpg")} />
      </View>
      <View style={styles.chantCountContainer}>
        <Text>How many times do you want to chant</Text>
        <View>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
          <View style={{ flexDirection: "row" }}>
            <Button title="Add Custom Count" color="#841584" />
            <Button title="Clear Count" color="#841584" />
          </View>
        </View>
      </View>
      <View style={styles.promptContainer}>
        <Text>How do you want us to prompt you when japa ends</Text>
        <View>
          <Text>Prompt</Text>
        </View>
      </View>
      <View style={styles.JapaButtonContainer}>
        <Pressable>
          <Text>Start Japa</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    flex: 1,
    paddingTop: 50,
    borderRadius: 100,
  },
  chantCountContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 150,
  },
  promptContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  JapaButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    width: "100%",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
    borderRadius: "50%",
    borderWidth: 5,
    borderColor: "white",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
