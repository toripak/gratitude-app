import { StyleSheet, TouchableOpacity, Text, View, Image, Button, KeyboardAvoidingView, TextInput, Platform } from 'react-native';
import Item from './components/Item';
import InputField from './components/InputField';
import React, { useState } from 'react';

const mood = [
  {
    state: 'happy',
    src: './happy.jpg',
    score: 4,
  },
  {
    state: 'neutral',
    src: './neutral.jpg',
    score: 3,
  },
  {
    state: 'sad',
    src: './sad.jpg',
    score: 1,
  },
  {
    state: 'upset',
    src: './upset.jpg',
    score: 2,
  },
]

export default function App() {
  const [start, setStart] = useState(false);
  const [moodIcon, setmoodIcon] = useState('');
  const [thankee, setThankee] = useState('');
  const [thankeesList, setThankeesList] = useState([]);

  const thankeeItem = thankeesList.map(t => (
    <Item key={Math.random()} text={t} />
  ))

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gratitude app 😇</Text>
      <Text style={styles.paragraph}>Count your blessings!✨</Text>

      {!start && <Image source={require('./hero-icon.jpg')} style={{ height: 100, width: 100, resizeMode: 'contain' }} />}

      {!start && <Button
        onPress={() => setStart(true)}
        title="Start!"
        color='#4299E1'
      />}

      <View style={styles.items}>
        {thankeeItem}
      </View>

      {/* input field */}
      {start && <InputField setThankee={setThankee} setThankeesList={setThankeesList} />}

    </View >
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
});
