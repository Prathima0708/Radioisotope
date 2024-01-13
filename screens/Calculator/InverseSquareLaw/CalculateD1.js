import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const CalculateD1 = ({ route }) => {
  const { name } = route.params;
  const [intensity1, setIntensity1] = useState('');
  const [intensity2, setIntensity2] = useState('');
  const [distance2, setDistance2] = useState('');
  const [resultD1Square, setResultD1Square] = useState(null);
  const [resultD1, setResultD1] = useState(null);

  const calculateD1Square = () => {
    if (intensity1 && intensity2 && distance2) {
      const i1 = parseFloat(intensity1);
      const i2 = parseFloat(intensity2);
      const d2 = parseFloat(distance2);

      const resultSquare = (i2 * d2 ** 2) / i1;
      setResultD1Square(resultSquare.toFixed(2)); // rounding to 2 decimal places

      const resultD1 = Math.sqrt(parseFloat(resultSquare));
      setResultD1(resultD1.toFixed(3)); // rounding to 3 decimal places
    }
  };

  const calculateD1 = () => {
    if (resultD1Square !== null) {
      const result = Math.sqrt(parseFloat(resultD1Square));
      setResultD1(result.toFixed(3)); // rounding to 3 decimal places
    }
  };

  const resetFields = () => {
    setIntensity1('');
    setIntensity2('');
    setDistance2('');
    setResultD1Square(null);
    setResultD1(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Intensity 1 (I1):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter I1 value"
            value={intensity1}
            onChangeText={(text) => setIntensity1(text)}
          />

          <Text style={styles.label}>Intensity 2 (I2):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter I2 value"
            value={intensity2}
            onChangeText={(text) => setIntensity2(text)}
          />

          <Text style={styles.label}>Distance 2 (D2):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter D2 value"
            value={distance2}
            onChangeText={(text) => setDistance2(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate D1²' onPress={calculateD1Square} />
         
          </View>

          {resultD1Square !== null ? (
            <Text style={styles.resultLabel}>D1²: {resultD1Square}</Text>
          ) : null}

          {resultD1 !== null ? (
            <Text style={styles.resultLabel}>D1: {resultD1}</Text>
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

export default CalculateD1;
