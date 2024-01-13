import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const CalculateDF = ({ route }) => {
  const { name ,value} = route.params;
  const [timePower, setTimePower] = useState('');

  const decayConstantMo99 = value;
  const e = 2.178;
  const [decayFactor, setDecayFactor] = useState(null);

  const calculateDecayFactor = () => {
    if (timePower ) {
      const tPower = parseFloat(timePower);
   
      const decayFactorValue = Math.exp(e * -decayConstantMo99 * tPower) ;
      setDecayFactor(decayFactorValue.toFixed(4)); // rounding to 4 decimal places
    }
  };

  const resetFields = () => {
    setTimePower('');
   
    setDecayFactor(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>e = {e}</Text>
          <Text style={styles.label}>Λ = {value}</Text>

          <Text style={styles.label}>Enter time (in hours only):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter time value for power"
            value={timePower}
            onChangeText={(text) => setTimePower(text)}
          />

         

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate Decay Factor' onPress={calculateDecayFactor} />
          </View>

          {decayFactor !== null ? (
            <Text style={styles.resultLabel}>Decay Factor: {decayFactor}</Text>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
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

export default CalculateDF;
