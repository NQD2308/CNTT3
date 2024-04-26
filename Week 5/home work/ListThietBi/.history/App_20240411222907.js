import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#bfd200"/>
      <Text style={styles.headerText}>SMART HOME</Text>
      <Text>Living Room</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    marginTop: 40
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold'
  },
});
