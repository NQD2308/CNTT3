import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import F5Icon from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="gray"/>
      <Text style={styles.headerText}>SMART HOME</Text>
      <Text style={styles.headerLittleText}>Living Room</Text>
      <View style={styles.option}>
        <View style={styles.leftSide}>
        <F5Icon name="lightbulb" size={50} color={'#ffaa00'} />
        <Text style={styles.nameText}>Lights</Text>
        </View>
        <Switch style={styles.switch} />
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
  option: {
    width: '90%',
    backgroundColor: '#adb5bd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop:
     borderRadius: 6
  },
  leftSide: {
    flexDirection: 'row',
    gap: 16 ,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18
  }
});
