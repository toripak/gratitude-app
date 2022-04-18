import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <>
      <Text style={styles.title}>Gratitude app 😇</Text>
      <View style={styles.container}>
        <Text>playing around with react native xD </Text>
        <Image source={require('./happy.jpg')} style={{ height: 150, width: 150, resizeMode: 'contain', borderRadius: 20 }} />
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  }
});
