import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const PetOncology = ({ route }) => {
  const { name } = route.params;
  const [tissueActivity, setTissueActivity] = useState('');
  const [injectedDose, setInjectedDose] = useState('');
  const [weight, setWeight] = useState('');
  const [suv, setSUV] = useState(null);

  const calculateSUV = () => {
    if (tissueActivity && injectedDose && weight) {
      const tissueActivityValue = parseFloat(tissueActivity);
      const injectedDoseValue = parseFloat(injectedDose);
      const weightValue = parseFloat(weight);

      const suvValue = tissueActivityValue / (injectedDoseValue / weightValue);
      setSUV(suvValue.toFixed(2)); // rounding to 2 decimal places
    }
  };

  const resetFields = () => {
    setTissueActivity('');
    setInjectedDose('');
    setWeight('');
    setSUV(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Tissue Activity (mCi/mL):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter tissue activity"
            value={tissueActivity}
            onChangeText={(text) => setTissueActivity(text)}
          />

          <Text style={styles.label}>Injected Dose (mCi):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter injected dose"
            value={injectedDose}
            onChangeText={(text) => setInjectedDose(text)}
          />

          <Text style={styles.label}>Weight (g):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter weight"
            value={weight}
            onChangeText={(text) => setWeight(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate SUV' onPress={calculateSUV} />
          </View>

          {suv !== null ? (
            <Text style={styles.resultLabel}>SUV: {suv}</Text>
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

export default PetOncology;
