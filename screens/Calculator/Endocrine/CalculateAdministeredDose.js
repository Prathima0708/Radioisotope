import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const CalculateAdministeredDose = ({ route }) => {
  const { name } = route.params;
  const [thyroidGramSize, setThyroidGramSize] = useState('');
  const [thiourea, setThiourea] = useState('');
  const [raiU24Hours, setRaiU24Hours] = useState('');
  const [administeredDose, setAdministeredDose] = useState(null);

  const calculateAdministeredDose = () => {
    if (thyroidGramSize && thiourea && raiU24Hours) {
      const gramSize = parseFloat(thyroidGramSize);
      const thioureaValue = parseFloat(thiourea);
      const raiUValue = parseFloat(raiU24Hours);

      const administeredDoseValue = (gramSize * 100 - thioureaValue) / raiUValue;
      setAdministeredDose(administeredDoseValue.toFixed(2)); // rounding to 2 decimal places
    }
  };

  const resetFields = () => {
    setThyroidGramSize('');
    setThiourea('');
    setRaiU24Hours('');
    setAdministeredDose(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Gram Size of Thyroid Gland (X100):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter gram size of thyroid gland"
            value={thyroidGramSize}
            onChangeText={(text) => setThyroidGramSize(text)}
          />

          <Text style={styles.label}>Thiourea (180 µCi/g):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter thiourea value"
            value={thiourea}
            onChangeText={(text) => setThiourea(text)}
          />

          <Text style={styles.label}>24-Hour %RAIU:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter 24-hour %RAIU value"
            value={raiU24Hours}
            onChangeText={(text) => setRaiU24Hours(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate Administered Dose' onPress={calculateAdministeredDose} />
          </View>

          {administeredDose !== null ? (
            <Text style={styles.resultLabel}>Administered Dose: {administeredDose} µCi</Text>
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

export default CalculateAdministeredDose;
