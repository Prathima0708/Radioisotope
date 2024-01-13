import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const CalculateC2 = ({ route }) => {
  const { name } = route.params;
  const [concentration1, setConcentration1] = useState('');
  const [volume1, setVolume1] = useState('');
  const [volume2, setVolume2] = useState('');
  const [concentration2, setConcentration2] = useState(null);

  const calculateConcentration2 = () => {
    if (concentration1 && volume1 && volume2) {
      const c1 = parseFloat(concentration1);
      const v1 = parseFloat(volume1);
      const v2 = parseFloat(volume2);

      const c2 = (c1 * v1) / v2;
      setConcentration2(c2.toFixed(2)); // rounding to 2 decimal places
    }
  };

  const resetFields = () => {
    setConcentration1('');
    setVolume1('');
    setVolume2('');
    setConcentration2(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Concentration 1 (C1):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter C1 value"
            value={concentration1}
            onChangeText={(text) => setConcentration1(text)}
          />

          <Text style={styles.label}>Volume 1 (V1):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter V1 value"
            value={volume1}
            onChangeText={(text) => setVolume1(text)}
          />

          <Text style={styles.label}>Volume 2 (V2):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter V2 value"
            value={volume2}
            onChangeText={(text) => setVolume2(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate C2' onPress={calculateConcentration2} />
          </View>

          {concentration2 !== null ? (
            <Text style={styles.resultLabel}>Concentration 2 (C2): {concentration2}</Text>
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

export default CalculateC2;