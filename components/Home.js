import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Button,
  Pressable,
  Modal,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Prompt from "./Prompt";
import React from "react";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item}</Text>
  </TouchableOpacity>
);

export default function Home() {
  const [count, setCount] = useState([10, 50, 108]);
  const [prompt, setPrompt] = useState([
    { text: "Sound", icon: "bell" },
    { text: "Vibrate", icon: "vibrate" },
    { text: "Sound & Vibrate", icon: "cellphone-sound" },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [number, onChangeNumber] = React.useState("");
  const onAddCount = () => {
    setCount((prevValue) => [...prevValue, number]);
    setModalVisible(!modalVisible);
  };
  const [selectedItem, setSelectedItem] = useState(0);
  // const [selectedItemValue, setSelectedItemValue] = useState("pk");
  // console.log("selectedItemValue " + selectedItemValue);

  const renderItem = ({ item, index }) => {
    console.log("item " + index, selectedItem, item);
    const backgroundColor = index === selectedItem ? "#6e3b6e" : "#f9c2ff";
    const color = index === selectedItem ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedItem(index);
          // setSelectedItemValue(item);
        }}
        // backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const renderPrompt = ({ item, index }) => {
    // console.log("element " + item.text, item.icon, index, selectedPrompt);
    const color = index === selectedPrompt ? "white" : "black";
    return (
      <Prompt
        text={item.text}
        icon={item.icon}
        color={color}
        onPress={() => setSelectedPrompt(index)}
      />
      // <Item
      //   item={item}
      //   onPress={() => setSelectedItem(index)}
      //   // backgroundColor={backgroundColor}
      //   textColor={color}
      // />
    );
  };

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
          data={count}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{ backgroundColor: "green", borderRadius: 5, margin: 5 }}
          >
            <Button
              title="Add Custom Count"
              color="white"
              onPress={() => setModalVisible(true)}
            />
          </View>
          <View
            style={{ backgroundColor: "green", borderRadius: 10, margin: 5 }}
          >
            <Button
              title="Clear Count"
              color="white"
              onPress={() => {
                setCount((prevValue) => [(prevValue.length = 108)]);
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
          <FlatList data={prompt} renderItem={renderPrompt} horizontal />
        </View>
      </View>

      <View style={styles.JapaButtonContainer}>
        <View
          style={{ backgroundColor: "white", borderRadius: 5, width: "90%" }}
        >
          <Button
            title="Start Japa"
            color="orange"
            onPress={() => {
              alert("Start Japa" + selectedItem);
            }}
          />
        </View>
      </View>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Please enter japa count</Text>
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={onAddCount}
                >
                  <Text style={styles.textStyle}>Ok</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
