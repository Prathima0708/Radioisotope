import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const CalculateV1 = ({ route }) => {
  const { name } = route.params;
  const [concentration2, setConcentration2] = useState('');
  const [volume2, setVolume2] = useState('');
  const [concentration1, setConcentration1] = useState('');
  const [volume1, setVolume1] = useState(null);

  const calculateVolume1 = () => {
    if (concentration2 && volume2 && concentration1) {
      const c2 = parseFloat(concentration2);
      const v2 = parseFloat(volume2);
      const c1 = parseFloat(concentration1);

      const v1 = (c2 * v2) / c1;
      setVolume1(v1.toFixed(2)); // rounding to 2 decimal places
    }
  };

  const resetFields = () => {
    setConcentration2('');
    setVolume2('');
    setConcentration1('');
    setVolume1(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Concentration 2 (C2):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter C2 value"
            value={concentration2}
            onChangeText={(text) => setConcentration2(text)}
          />

          <Text style={styles.label}>Volume 2 (V2):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter V2 value"
            value={volume2}
            onChangeText={(text) => setVolume2(text)}
          />

          <Text style={styles.label}>Concentration 1 (C1):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter C1 value"
            value={concentration1}
            onChangeText={(text) => setConcentration1(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate V1' onPress={calculateVolume1} />
          </View>

          {volume1 !== null ? (
            <Text style={styles.resultLabel}>Volume 1 (V1): {volume1}</Text>
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

export default CalculateV1;
