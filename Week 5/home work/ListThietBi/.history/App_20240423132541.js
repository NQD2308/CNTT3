import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

let rooms = [];

export default function App() {
  const [roomData, setRoomData] = useState([]);
  useEffect(() => {
    // Hàm này sẽ được gọi khi component được mount
    const fetchData = async () => {
      try {
        // Gọi API hoặc làm bất cứ công việc nào bạn cần
        const response = await fetch("http://192.168.182.1:5555/getAllRooms");
        const json = await response.json();

        console.log(json);
        setRoomData(json) 
        console.log("hehehehehe")

        console.log(rooms)
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // const rooms = [
  //   {
  //     name: "Living room",
  //     description: "4 lights",
  //     image: "r1.jpg",
  //     temperature: 29.4,
  //     humid: 50.2,
  //   },
  //   {
  //     name: "Bed room",
  //     description: "2 lights",
  //     image: "r2.jpg",
  //     temperature: 25.4,
  //     humid: 53.1,
  //   },
  //   {
  //     name: "Kitchen room",
  //     description: "2 lights",
  //     image: "r3.jpg",
  //     temperature: 20.1,
  //     humid: 43.4,
  //   },
  // ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="home" size={64} color="orange" />
        <Text style={styles.title}>Smart Home</Text>
        <Text style={styles.subTitle}>List rooms</Text>
      </View>
      <View style={styles.main}>
        {roomData.map((item) => (
          <View style={styles.itemBox} key={item.name}>
            <TouchableOpacity>
              <Image
                style={styles.img}
                source={{ uri: "./assets/images/" + item.image }}
              />
            </TouchableOpacity>
            <View>
              <Text style={styles.itemText1}>{item.name}</Text>
              <Text style={styles.itemText2}>{item.descript}</Text>
              <Text style={styles.itemText2}>{item.temp}</Text>
              <Text style={styles.itemText2}>{item.humid}</Text>

            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    color: "#fff",
    backgroundColor: "#000",
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 5,
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 5,
    marginTop: 30,
  },
  itemBox: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderStyle: "dotted",
    borderColor: "#dedede",
    paddingBottom: 15,
    paddingTop: 15,
  },
  title: {
    fontSize: 30,
    color: "orange",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    color: "#fff",
  },
  itemText1: {
    fontSize: 20,
    color: "#eeeeee",
  },
  itemText2: { fontSize: 12, color: "#fff" },
});
