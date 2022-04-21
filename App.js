import { StyleSheet, ScrollView, Text, View, Image, Button } from 'react-native';
import Item from './components/Item';
import InputField from './components/InputField';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [start, setStart] = useState(false);
  const [thankeesList, setThankeesList] = useState([]);

  const thankeeItem = thankeesList?.map(t => (
    <Item key={Math.random()} text={t} />
  ))

  const handleAdd = (thankee) => {
    setThankeesList(prev => [thankee, ...prev]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gratitude app 😇</Text>
      <Text style={styles.paragraph}>Count your blessings!✨</Text>

      {!start && <Image source={require('./hero-icon.jpg')} style={styles.icons} />}

      {/*hide the start Button, set start to 'true' so Input is rendered */}
      {!start && <Button
        onPress={() => setStart(true)}
        title="Start!"
        color='#4299E1'
      />}

      {/* input field */}
      {start && <InputField
        handleAdd={handleAdd}
      />}

      {/* render a mood icon depending on array length */}
      {(start && thankeesList?.length === 0) && <Image source={require('./sad.jpg')} style={styles.icons} />}
      {thankeesList?.length === 1 && <Image source={require('./neutral.jpg')} style={styles.icons} />}
      {thankeesList?.length === 2 && <Image source={require('./happy.jpg')} style={styles.icons} />}
      {thankeesList?.length === 3 && <Image source={require('./hero-icon.jpg')} style={styles.icons} />}
      {/* gif */}
      {thankeesList.length >= 4 && <Image source={require('./love.gif')} style={{ width: 170, resizeMode: 'contain' }} />}

      {/* list */}
      {thankeesList?.length > 0 && <Item text={thankeeItem} />}

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
  icons: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  }
});

