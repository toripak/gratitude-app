import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Item({ text }) {
  return (
    <View style={styles.item}>
      <Text>{text}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF5F7',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  }
});

