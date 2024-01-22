import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import Header from '../../../components/Header';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';
import UIButton from '../../../components/UIButton/UIButton';

const CalculateTB = ({route}) => {
    const {name}=route.params
  const [halfLife, setHalfLife] = useState('');
  const [elapsedTime, setElapsedTime] = useState('');
  const [totalTime, setTotalTime] = useState(null);

  const calculateTotalTime = () => {
    if (halfLife && elapsedTime) {
      const tHalf = parseFloat(halfLife);
      const te = parseFloat(elapsedTime);

      if (tHalf - te !== 0) {
        const result = (tHalf * te) / (tHalf - te);
        setTotalTime(result.toFixed(2)); // rounding to 2 decimal places
      } else {
        // Handle the case where the denominator is zero (division by zero)
        // You may want to show an error message or handle it differently based on your requirements.
        console.error("Error: Division by zero");
      }
    }
  };

  const resetFields = () => {
    setHalfLife('');
    setElapsedTime('');
    setTotalTime(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
        <Header title={` ${name}`} />
         

          <Text style={styles.label}>Half-Life (\(t_{1/2}\)):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter \(t_{1/2}\) value"
            value={halfLife}
            onChangeText={(text) => setHalfLife(text)}
          />

          <Text style={styles.label}>Elapsed Time (\(t_e\)):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter \(t_e\) value"
            value={elapsedTime}
            onChangeText={(text) => setElapsedTime(text)}
          />

          <View style={styles.buttonContainer}>
          <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate Tb' onPress={calculateTotalTime} />
         
          </View>

          {totalTime !== null ? (
            <Text style={styles.resultLabel}>Total Time (\(T_b\)): {totalTime}</Text>
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
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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

export default CalculateTB;
