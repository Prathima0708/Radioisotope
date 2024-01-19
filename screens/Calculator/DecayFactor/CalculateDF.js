import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const CalculateDF = ({ route }) => {
  const { name ,value } = route.params;
  const [initialCount, setInitialCount] = useState('');
  const [decayConstant, setDecayConstant] = useState('');
  const [time, setTime] = useState('');
  const [resultCount, setResultCount] = useState(null);

  const calculateDecayFactor = () => {
    if (initialCount && value && time) {
      const n0 = parseFloat(initialCount);
      const lambda = parseFloat(decayConstant);
      const t = parseFloat(time);

      const result = n0 * Math.exp(-value * t);
      setResultCount(result.toFixed(3)); // rounding to 3 decimal places
    }
  };

  const resetFields = () => {
    setInitialCount('');
    setDecayConstant('');
    setTime('');
    setResultCount(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={[styles.label,{marginTop:10,marginBottom:30}]}>Lamda value (λ):{value}</Text>
         
          <Text style={styles.label}>Enter N⁰ value:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter initial count"
            value={initialCount}
            onChangeText={(text) => setInitialCount(text)}
          />

          {/* <Text style={styles.label}>Decay Constant (λ):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter decay constant"
            value={decayConstant}
            onChangeText={(text) => setDecayConstant(text)}
          /> */}

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
            <UIButton title='Calculate Decay Factor' onPress={calculateDecayFactor} />
          </View>

          {resultCount !== null ? (
            <Text style={styles.resultLabel}>Decay Factor (N): {resultCount}</Text>
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
