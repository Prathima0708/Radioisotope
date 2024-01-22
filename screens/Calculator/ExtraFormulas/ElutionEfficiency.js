import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const ElutionEfficiency = ({ route }) => {
  const { name } = route.params;
  const [obtainedActivity, setObtainedActivity] = useState('');
  const [expectedActivity, setExpectedActivity] = useState('');
  const [elutionEfficiency, setElutionEfficiency] = useState(null);

  const calculateElutionEfficiency = () => {
    if (obtainedActivity && expectedActivity) {
      const obtainedActivityValue = parseFloat(obtainedActivity);
      const expectedActivityValue = parseFloat(expectedActivity);

      const elutionEfficiencyValue = (obtainedActivityValue / expectedActivityValue) * 100;
      setElutionEfficiency(elutionEfficiencyValue.toFixed(2)); // rounding to 2 decimal places
    }
  };

  const resetFields = () => {
    setObtainedActivity('');
    setExpectedActivity('');
    setElutionEfficiency(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Obtained Activity:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter obtained activity"
            value={obtainedActivity}
            onChangeText={(text) => setObtainedActivity(text)}
          />

          <Text style={styles.label}>Expected Activity:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter expected activity"
            value={expectedActivity}
            onChangeText={(text) => setExpectedActivity(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate Elution Efficiency' onPress={calculateElutionEfficiency} />
          </View>

          {elutionEfficiency !== null ? (
            <Text style={styles.resultLabel}>Elution Efficiency: {elutionEfficiency}%</Text>
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

export default ElutionEfficiency;
