import { StyleSheet, Keyboard, TouchableOpacity, Text, View, Image, KeyboardAvoidingView, TextInput, Platform } from 'react-native';
import React, { useState } from 'react';

export default function InputField({ setThankee, setThankeeList }) {

  const handleAdd = () => {
    Keyboard.dismiss();
    // setThankeeList(prev => [...prev, thankee]);
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
      />

      {/* add a gratitude message */}
      <TouchableOpacity onPress={handleAdd()}>
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
    marginTop: 10,
    width: 270,
    borderColor: '#FED7E2',
    borderRadius: 20,
    borderWidth: 1,
    marginVertical: 10,
  },
  inputContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 50,
    padding: 20,
    marginVertical: 10,
  },
  addButtonContainer: {
    borderColor: '#FBB6CE',
    borderWidth: 1,
    width: 35,
    height: 35,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    fontSize: 18,
  }
});
