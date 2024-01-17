import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const CalculateRAIU = ({ route }) => {
  const { name } = route.params;
  const [neckCounts, setNeckCounts] = useState('');
  const [backgroundCounts, setBackgroundCounts] = useState('');
  const [administeredDoseCounts, setAdministeredDoseCounts] = useState('');
  const [backgroundCorrectedCounts, setBackgroundCorrectedCounts] = useState(null);
  const [percentRAIU, setPercentRAIU] = useState(null);

  const calculateRAIU = () => {
    if (neckCounts && backgroundCounts && administeredDoseCounts) {
      const neckCountsValue = parseFloat(neckCounts);
      const backgroundCountsValue = parseFloat(backgroundCounts);
      const administeredDoseCountsValue = parseFloat(administeredDoseCounts);

      const backgroundCorrectedCountsResult = neckCountsValue - backgroundCountsValue;
      setBackgroundCorrectedCounts(backgroundCorrectedCountsResult);

      const percentRAIUResult = (backgroundCorrectedCountsResult / administeredDoseCountsValue) * 100;
      setPercentRAIU(percentRAIUResult.toFixed(2)); // rounding to 2 decimal places
    }
  };

  const resetFields = () => {
    setNeckCounts('');
    setBackgroundCounts('');
    setAdministeredDoseCounts('');
    setBackgroundCorrectedCounts(null);
    setPercentRAIU(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Neck Counts (for 1 min):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter neck counts"
            value={neckCounts}
            onChangeText={(text) => setNeckCounts(text)}
          />

          <Text style={styles.label}>Background Counts (for 1 min):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter background counts"
            value={backgroundCounts}
            onChangeText={(text) => setBackgroundCounts(text)}
          />

          <Text style={styles.label}>Administered Dose Capsule Counts (decay corrected and background corrected) (for 1 min):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter administered dose capsule counts"
            value={administeredDoseCounts}
            onChangeText={(text) => setAdministeredDoseCounts(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate RAIU' onPress={calculateRAIU} />
          </View>

          {backgroundCorrectedCounts !== null ? (
            <Text style={styles.resultLabel}>Background Corrected Counts: {backgroundCorrectedCounts}</Text>
          ) : null}

          {percentRAIU !== null ? (
            <Text style={styles.resultLabel}>%RAIU: {percentRAIU}%</Text>
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
