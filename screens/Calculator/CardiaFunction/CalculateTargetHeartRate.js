import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const CalculateTargetHeartRate = ({ route }) => {
  const { name } = route.params;
  const [age, setAge] = useState('');
  const [targetHeartRate90, setTargetHeartRate90] = useState(null);
  const [targetHeartRate85, setTargetHeartRate85] = useState(null);
  const [targetHeartRate75, setTargetHeartRate75] = useState(null);

  const calculateTargetHeartRates = () => {
    if (age) {
      const ageValue = parseFloat(age);

      const targetHeartRate90Result = (220 - ageValue) * 0.90;
      setTargetHeartRate90(targetHeartRate90Result.toFixed(2)); // rounding to 2 decimal places

      const targetHeartRate85Result = (220 - ageValue) * 0.85;
      setTargetHeartRate85(targetHeartRate85Result.toFixed(2));

      const targetHeartRate75Result = (220 - ageValue) * 0.75;
      setTargetHeartRate75(targetHeartRate75Result.toFixed(2));
    }
  };

  const resetFields = () => {
    setAge('');
    setTargetHeartRate90(null);
    setTargetHeartRate85(null);
    setTargetHeartRate75(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Age:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter age"
            value={age}
            onChangeText={(text) => setAge(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate Target Heart Rates' onPress={calculateTargetHeartRates} />
          </View>

          {targetHeartRate90 !== null ? (
            <Text style={styles.resultLabel}>Target Heart Rate (90%): {targetHeartRate90} beats/min</Text>
          ) : null}

          {targetHeartRate85 !== null ? (
            <Text style={styles.resultLabel}>Target Heart Rate (85%): {targetHeartRate85} beats/min</Text>
          ) : null}

          {targetHeartRate75 !== null ? (
            <Text style={styles.resultLabel}>Target Heart Rate (75%): {targetHeartRate75} beats/min</Text>
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

export default CalculateTargetHeartRate;
