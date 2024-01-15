import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const Gastrointestinal = ({ route }) => {
  const { name } = route.params;
  const [esophagealCounts, setEsophagealCounts] = useState('');
  const [totalCounts, setTotalCounts] = useState('');
  const [percentRetention, setPercentRetention] = useState(null);

  const calculatePercentRetention = () => {
    if (esophagealCounts && totalCounts) {
      const esophagealCountsValue = parseFloat(esophagealCounts);
      const totalCountsValue = parseFloat(totalCounts);

      const percentRetentionValue = (esophagealCountsValue / totalCountsValue) * 100;
      setPercentRetention(percentRetentionValue.toFixed(2)); // rounding to 2 decimal places
    }
  };

  const resetFields = () => {
    setEsophagealCounts('');
    setTotalCounts('');
    setPercentRetention(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Esophageal Counts:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter esophageal counts"
            value={esophagealCounts}
            onChangeText={(text) => setEsophagealCounts(text)}
          />

          <Text style={styles.label}>Total Counts:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter total counts"
            value={totalCounts}
            onChangeText={(text) => setTotalCounts(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate Percent Retention' onPress={calculatePercentRetention} />
          </View>

          {percentRetention !== null ? (
            <Text style={styles.resultLabel}>Percent Retention: {percentRetention}%</Text>
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

export default Gastrointestinal;
