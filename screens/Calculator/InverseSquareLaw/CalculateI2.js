import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../../components/Header';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';
import UIButton from '../../../components/UIButton/UIButton';

const CalculateI2 = ({ route }) => {
  const { name } = route.params;
  const [intensity1, setIntensity1] = useState('');
  const [distance1, setDistance1] = useState('');
  const [distance2, setDistance2] = useState('');
  const [resultI2, setResultI2] = useState(null);

  const calculateI2 = () => {
    if (intensity1 && distance1 && distance2) {
      const i1 = parseFloat(intensity1);
      const d1 = parseFloat(distance1);
      const d2 = parseFloat(distance2);

      const result = (i1 * d1 ** 2) / d2 ** 2;
      setResultI2(result.toFixed(2)); // rounding to 2 decimal places
    }
  };

  const resetFields = () => {
    setIntensity1('');
    setDistance1('');
    setDistance2('');
    setResultI2(null);
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
            <UIButton title='Calculate I2' onPress={calculateI2} />
          </View>

          {resultI2 !== null ? (
            <Text style={styles.resultLabel}> Intensity 12 (I2): {resultI2}</Text>
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

export default CalculateI2;
