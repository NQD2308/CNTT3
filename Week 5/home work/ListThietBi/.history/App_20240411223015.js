import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="gray"/>
      <Text style={styles.headerText}>SMART HOME</Text>
      <Text style={styles.headerLittleText}>Living Room</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 40
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  headerLittleText: {
    
  },
});
