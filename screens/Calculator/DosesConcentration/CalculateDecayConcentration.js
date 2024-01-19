import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const CalculateDecayConcentration = ({ route }) => {
  const { name } = route.params;
  const [initialConcentration, setInitialConcentration] = useState('');
  const [decayConstant, setDecayConstant] = useState('');
  const [time, setTime] = useState('');
  const [resultConcentration, setResultConcentration] = useState(null);

  const calculateDecayConcentration = () => {
    if (initialConcentration && decayConstant && time) {
      const c1 = parseFloat(initialConcentration);
      const lambda = parseFloat(decayConstant);
      const t = parseFloat(time);
      const result = c1 * Math.exp(-lambda * t);
    //  const result = c1 * Math.exp(-lambda * t);
      setResultConcentration(result.toFixed(5)); // rounding to 3 decimal places
    }
  };

  const resetFields = () => {
    setInitialConcentration('');
    setDecayConstant('');
    setTime('');
    setResultConcentration(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Initial Concentration (C1):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter initial concentration"
            value={initialConcentration}
            onChangeText={(text) => setInitialConcentration(text)}
          />

          <Text style={styles.label}>Decay Constant (λ):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter decay constant"
            value={decayConstant}
            onChangeText={(text) => setDecayConstant(text)}
          />

          <Text style={styles.label}>Time (t) in hours:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter time"
            value={time}
            onChangeText={(text) => setTime(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate Decay Concentration' onPress={calculateDecayConcentration} />
          </View>

          {resultConcentration !== null ? (
            <Text style={styles.resultLabel}>Decay Concentration (C2): {resultConcentration}</Text>
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

export default CalculateDecayConcentration;
