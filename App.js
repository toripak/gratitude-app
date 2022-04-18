import { StyleSheet, TouchableOpacity, Text, View, Image, Button, KeyboardAvoidingView, TextInput, Platform } from 'react-native';
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
  const [text, setText] = useState('thank you');

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
        <Item text={text} />
        <Item text={text} />
      </View>

      {/* input field */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          placeholder='I am thankful for...' />

        {/* add a gratitude message */}
        <TouchableOpacity>
          <View style={styles.addButtonContainer}>
            <Text style={styles.addButton}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  input: {
    padding: 5,
    marginTop: 10,
    maxWidth: 270,
    borderColor: '#FED7E2',
    borderRadius: 20,
    borderWidth: 1,
  },
  inputContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 50,
    padding: 20,
  },
  addButtonContainer: {
    borderColor: '#FBB6CE',
    borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    fontSize: 18,
  }

});
