import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const CalculateI1 = ({ route }) => {
  const { name } = route.params;
  const [intensity2, setIntensity2] = useState('');
  const [distance1, setDistance1] = useState('');
  const [distance2, setDistance2] = useState('');
  const [intensity1, setIntensity1] = useState(null);

  const calculateIntensity1 = () => {
    if (intensity2 && distance1 && distance2) {
      const i2 = parseFloat(intensity2);
      const d12 = parseFloat(distance1) ** 2; // D1^2
      const d22 = parseFloat(distance2) ** 2; // D2^2

      if (d12 !== 0) {
        const result = (i2 * d22) / d12;
        setIntensity1(result.toFixed(2)); // rounding to 2 decimal places
      } else {
        // Handle the case where the denominator is zero (division by zero)
        // You may want to show an error message or handle it differently based on your requirements.
        console.error("Error: Division by zero");
      }
    }
  };

  const resetFields = () => {
    setIntensity2('');
    setDistance1('');
    setDistance2('');
    setIntensity1(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Intensity 2 (I2):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter I2 value"
            value={intensity2}
            onChangeText={(text) => setIntensity2(text)}
          />

          <Text style={styles.label}>Distance 1 (D1):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter D1 value"
            value={distance1}
            onChangeText={(text) => setDistance1(text)}
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
            <UIButton title='Calculate' onPress={calculateIntensity1} />
          </View>

          {intensity1 !== null ? (
            <Text style={styles.resultLabel}>Intensity 1 (I1): {intensity1}</Text>
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
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultLabel: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default CalculateI1;
