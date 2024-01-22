import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const CalculateFillingPhase = ({ route }) => {
  const { name } = route.params;
  const [age, setAge] = useState('');
  const [volumeInstilled, setVolumeInstilled] = useState(null);

  const calculateVolumeInstilled = () => {
    if (age) {
      const ageValue = parseFloat(age);
      const volumeInstilledValue = (ageValue + 2) * 30;
      setVolumeInstilled(volumeInstilledValue.toFixed(2)); // rounding to 2 decimal places
    }
  };

  const resetFields = () => {
    setAge('');
    setVolumeInstilled(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Age:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter age"
            value={age}
            onChangeText={(text) => setAge(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate Volume Instilled' onPress={calculateVolumeInstilled} />
          </View>

          {volumeInstilled !== null ? (
            <Text style={styles.resultLabel}>Volume Instilled: {volumeInstilled} mm</Text>
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

export default CalculateFillingPhase;
