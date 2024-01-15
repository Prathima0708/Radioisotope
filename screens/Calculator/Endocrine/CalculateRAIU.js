import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const CalculateRAIU = ({ route }) => {
  const { name } = route.params;
  const [countThigh, setCountThigh] = useState('');
  const [countNeck, setCountNeck] = useState('');
  const [administeredDoseCounts, setAdministeredDoseCounts] = useState('');
  const [backgroundCounts, setBackgroundCounts] = useState('');
  const [percentRAIU, setPercentRAIU] = useState(null);

  const calculatePercentRAIU = () => {
    if (countThigh && countNeck && administeredDoseCounts) {
      const thighCount = parseFloat(countThigh);
      const neckCount = parseFloat(countNeck);
      const doseCounts = parseFloat(administeredDoseCounts);

      const backgroundCountsValue = thighCount - neckCount;
      setBackgroundCounts(backgroundCountsValue.toFixed(2)); // rounding to 2 decimal places

      const percentRAIUValue = (backgroundCountsValue / doseCounts) * 100;
      setPercentRAIU(percentRAIUValue.toFixed(2)); // rounding to 2 decimal places
    }
  };

  const resetFields = () => {
    setCountThigh('');
    setCountNeck('');
    setAdministeredDoseCounts('');
    setBackgroundCounts('');
    setPercentRAIU(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Count Patient Thigh (for 1 min):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter count for patient thigh"
            value={countThigh}
            onChangeText={(text) => setCountThigh(text)}
          />

          <Text style={styles.label}>Count Patient Neck (for 1 min):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter count for patient neck"
            value={countNeck}
            onChangeText={(text) => setCountNeck(text)}
          />

          <Text style={styles.label}>Administered Dose Capsule Counts (decay and background corrected) per min:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter administered dose capsule counts"
            value={administeredDoseCounts}
            onChangeText={(text) => setAdministeredDoseCounts(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate %RAIU' onPress={calculatePercentRAIU} />
          </View>

          {backgroundCounts !== '' ? (
            <Text style={styles.resultLabel}>Background Counts: {backgroundCounts}</Text>
          ) : null}

          {percentRAIU !== null ? (
            <Text style={styles.resultLabel}>%RAIU: {percentRAIU}</Text>
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

export default CalculateRAIU;
