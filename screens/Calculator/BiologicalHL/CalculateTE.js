import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import Header from '../../../components/Header';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';
import UIButton from '../../../components/UIButton/UIButton';

const CalculateTE = ({route}) => {
    const {name}=route.params
  const [halfLife, setHalfLife] = useState('');
  const [totalTime, setTotalTime] = useState('');
  const [elapsedTime, setElapsedTime] = useState('');
  const [decayTime, setDecayTime] = useState(null);

  const calculateDecayTime = () => {
    if (halfLife && totalTime && elapsedTime) {
      const tHalf = parseFloat(halfLife);
      const tb = parseFloat(totalTime);
      const te = parseFloat(elapsedTime);

      const result = (tHalf * tb) / (tHalf - te);
      setDecayTime(result.toFixed(2)); // rounding to 2 decimal places
    }
  };

  const resetFields = () => {
    setHalfLife('');
    setTotalTime('');
    setElapsedTime('');
    setDecayTime(null);
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

          <Text style={styles.label}>Total Time (\(t_b\)):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter \(t_b\) value"
            value={totalTime}
            onChangeText={(text) => setTotalTime(text)}
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
            <UIButton title='Calculate Te' onPress={calculateDecayTime} />
          
          </View>

          {decayTime !== null && (
            <Text style={styles.resultLabel}>Decay Time (\(T_e\)): {decayTime}</Text>
          )}
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
    marginTop:height*0.04
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

export default CalculateTE
