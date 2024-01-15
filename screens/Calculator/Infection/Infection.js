import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const Infection = ({ route }) => {
  const { name } = route.params;
  const [activityCells, setActivityCells] = useState('');
  const [activityWash, setActivityWash] = useState('');
  const [labelingEfficiency, setLabelingEfficiency] = useState(null);

  const calculateLabelingEfficiency = () => {
    if (activityCells && activityWash) {
      const activityCellsValue = parseFloat(activityCells);
      const activityWashValue = parseFloat(activityWash);

      const labelingEfficiencyValue = (activityCellsValue / (activityCellsValue + activityWashValue)) * 100;
      setLabelingEfficiency(labelingEfficiencyValue.toFixed(2)); // rounding to 2 decimal places
    }
  };

  const resetFields = () => {
    setActivityCells('');
    setActivityWash('');
    setLabelingEfficiency(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Activity associated with the cells:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter activity associated with the cells"
            value={activityCells}
            onChangeText={(text) => setActivityCells(text)}
          />

          <Text style={styles.label}>Activity associated with the wash:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter activity associated with the wash"
            value={activityWash}
            onChangeText={(text) => setActivityWash(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate Labeling Efficiency' onPress={calculateLabelingEfficiency} />
          </View>

          {labelingEfficiency !== null ? (
            <Text style={styles.resultLabel}>Labeling Efficiency: {labelingEfficiency}%</Text>
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

export default Infection;
