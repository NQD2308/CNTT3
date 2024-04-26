import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import F5Icon from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="gray"/>
      <Text style={styles.headerText}>SMART HOME</Text>
      <Text style={styles.headerLittleText}>Living Room</Text>
      <View>
        <View>
        <F5Icon name="v" size={60} color={'#ffaa00'} />
        </View>
        <Switch/>
      </View>
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
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20
  },
});
