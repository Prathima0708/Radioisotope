import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const DrawConcentration = ({ route }) => {
  const { name } = route.params;
  const [amount, setAmount] = useState('');
  const [volume, setVolume] = useState('');
  const [concentration, setConcentration] = useState(null);

  const calculateConcentration = () => {
    if (amount && volume) {
      const a0 = parseFloat(amount);
      const v1 = parseFloat(volume);

      const c1 = a0 / v1;
      setConcentration(c1.toFixed(2)); // rounding to 2 decimal places
    }
  };

  const resetFields = () => {
    setAmount('');
    setVolume('');
    setConcentration(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Enter A0 (A0):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter A0 value"
            value={amount}
            onChangeText={(text) => setAmount(text)}
          />

          <Text style={styles.label}>Volume (V1):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter V1 value"
            value={volume}
            onChangeText={(text) => setVolume(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate C1' onPress={calculateConcentration} />
          </View>

          {concentration !== null ? (
            <Text style={styles.resultLabel}>Concentration 1 (C1): {concentration}</Text>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const {height,width}=Dimensions.get('window')
const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    marginTop:height*0.03
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  resultLabel: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default DrawConcentration;
