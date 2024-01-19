import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const Activity = ({ route }) => {
  const { name } = route.params;
  const e=2.178
  const [initialActivity, setInitialActivity] = useState('');
  const [decayConstant, setDecayConstant] = useState('');
  const [time, setTime] = useState('');
  const [resultActivity, setResultActivity] = useState(null);

  const calculateActivity = () => {
    if (initialActivity && decayConstant && time) {
      const initialActivityValue = parseFloat(initialActivity);
      const decayConstantValue = parseFloat(decayConstant);
      const timeValue = parseFloat(time);
      console.log('Initial Activity:', initialActivityValue);
      console.log('Decay Constant:', decayConstantValue);
      console.log('Time:', timeValue);
      const result = initialActivityValue * Math.exp(-decayConstantValue * timeValue);
     // const result = initialActivityValue * Math.pow(2.178, -decayConstantValue * timeValue);
     
      setResultActivity(result.toFixed(2)); // rounding to 2 decimal places
    }
  };

  const resetFields = () => {
    setInitialActivity('');
    setDecayConstant('');
    setTime('');
    setResultActivity(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Initial Activity (A⁰):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter initial activity"
            value={initialActivity}
            onChangeText={(text) => setInitialActivity(text)}
          />

          <Text style={styles.label}>Lamda value (λ):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter lamda value"
            value={decayConstant}
            onChangeText={(text) => setDecayConstant(text)}
          />

          <Text style={styles.label}>Time (t) in hours:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter time"
            value={time}
            onChangeText={(text) => setTime(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate Activity' onPress={calculateActivity} />
          </View>

          {resultActivity !== null ? (
            <Text style={styles.resultLabel}>Activity (A): {resultActivity}</Text>
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

export default Activity;
