import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const CalculateD2 = ({ route }) => {
  const { name } = route.params;
  const [intensity1, setIntensity1] = useState('');
  const [distance1, setDistance1] = useState('');
  const [intensity2, setIntensity2] = useState('');
  const [resultD2Square, setResultD2Square] = useState(null);
  const [resultD2, setResultD2] = useState(null);

  const calculateD2Square = () => {
    if (intensity1 && distance1 && intensity2) {
      const i1 = parseFloat(intensity1);
      const d1 = parseFloat(distance1);
      const i2 = parseFloat(intensity2);

      const resultSquare = (i1 * d1 ** 2) / i2;
      setResultD2Square(resultSquare.toFixed(2)); // rounding to 2 decimal places

      const resultD2 = Math.sqrt(parseFloat(resultSquare));
      setResultD2(resultD2.toFixed(3)); // rounding to 3 decimal places
    }
  };

  const resetFields = () => {
    setIntensity1('');
    setDistance1('');
    setIntensity2('');
    setResultD2Square(null);
    setResultD2(null);
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

          <Text style={styles.label}>Distance 1 (D1):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter D1 value"
            value={distance1}
            onChangeText={(text) => setDistance1(text)}
          />

          <Text style={styles.label}>Intensity 2 (I2):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter I2 value"
            value={intensity2}
            onChangeText={(text) => setIntensity2(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate D2²' onPress={calculateD2Square} />
          </View>

          {resultD2Square !== null ? (
            <Text style={styles.resultLabel}>D2²: {resultD2Square}</Text>
          ) : null}

          {resultD2 !== null ? (
            <Text style={styles.resultLabel}>D2: {resultD2}</Text>
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

export default CalculateD2;
