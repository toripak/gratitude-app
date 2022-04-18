import { StyleSheet, Text, View, Image } from 'react-native';
import Item from './components/Item';
import React, { useState } from 'react';

const mood = [
  {
    state: 'angry',
    src: './angry.jpg'
  },
  {
    state: 'happy',
    src: './happy.jpg'
  },
  {
    state: 'neutral',
    src: './neutral.jpg'
  },
  {
    state: 'sad',
    src: './sad.jpg'
  },
  {
    state: 'upset',
    src: './upset.jpg'
  }
]

export default function App() {
  const [start, setStart] = useState(false);
  const [moodIcon, setmoodIcon] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gratitude app 😇</Text>
      <Text style={styles.paragraph}>Count your blessings!</Text>

      {!start && <Image source={require('./hero-icon.jpg')} style={{ height: 100, width: 100, resizeMode: 'contain' }} />}

      <View style={styles.items}>
        <Item />
        <Item />
        <Item />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center'
  },
  paragraph: {
    margin: 5,
    textAlign: 'center',
    fontStyle: 'italic'
  },
  items: {

  }
});
