import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View >
        <View style= {{marginBottom: 20, marginTop: 20}}>
          <Text style={{color:'#e76f51', fontSize: 24, fontWeight: 'bold'}}>SMART HOME</Text>
          <Text style={{color:'white', textAlign: 'center'}}>Lights</Text>
        </View>
        
        <View style={{marginTop: 20}}>
          <TouchableOpacity style={[styles.btn, {backgroundColor:'#98c1d9', }]}>
            <Text style={{color: 'white', textAlign: 'center'}}>On</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {backgroundColor:'#e76f51', }]}>
            <Text style={{color: 'white', textAlign: 'center'}}>On</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={{color: 'white'}}>THCNTT3</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000814',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    height: 30,
    marginBottom: 10,
    marginTop: 10,
    fontSize: 24, 
    fontWeight: 'bold',
    backgroundColor: '#98c1d9',
    justifyContent: 'center',
    borderRadius: 6
  }
});
