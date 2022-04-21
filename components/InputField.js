import { StyleSheet, Keyboard, TouchableOpacity, Text, View, Image, KeyboardAvoidingView, TextInput, Platform } from 'react-native';
import React, { useState } from 'react';
import { registerAsset } from 'react-native-web/dist/cjs/modules/AssetRegistry';

export default function InputField({ handleAdd }) {
  const [thankee, setThankee] = useState('');

  const checkInput = thankee => {
    if (!thankee.trim()) {
      alert('The input cannot be empty');
      return;
    }
    Keyboard.dismiss();
    handleAdd(thankee);
    setThankee('');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.inputContainer}
    >
      <TextInput
        style={styles.input}
        placeholder='I am thankful for...'
        onChangeText={text => setThankee(text)}
        value={thankee}
      />

      {/* add a gratitude message */}
      <TouchableOpacity onPress={() => checkInput(thankee)} >
        <View style={styles.addButtonContainer}>
          <Text style={styles.addButton}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    width: 270,
    borderColor: '#FED7E2',
    borderRadius: 20,
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: '#FFF',
  },
  inputContainer: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 10,
    padding: 20,
    marginVertical: 10,
  },
  addButtonContainer: {
    borderColor: '#FED7E2',
    borderWidth: 1,
    width: 45,
    height: 45,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF5F7',
  },
  addButton: {
    fontSize: 18,
  },
});
