import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const CalculateClearance = ({ route }) => {
  const { name } = route.params;
  const [urineConcentration, setUrineConcentration] = useState('');
  const [urineFlow, setUrineFlow] = useState('');
  const [plasmaConcentration, setPlasmaConcentration] = useState('');
  const [clearance, setClearance] = useState(null);

  const calculateClearance = () => {
    if (urineConcentration && urineFlow && plasmaConcentration) {
      const urineConcentrationValue = parseFloat(urineConcentration);
      const urineFlowValue = parseFloat(urineFlow);
      const plasmaConcentrationValue = parseFloat(plasmaConcentration);

      const clearanceValue = (urineConcentrationValue * urineFlowValue) / plasmaConcentrationValue;
      setClearance(clearanceValue.toFixed(2)); // rounding to 2 decimal places
    }
  };

  const resetFields = () => {
    setUrineConcentration('');
    setUrineFlow('');
    setPlasmaConcentration('');
    setClearance(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Urine Concentration (mg/mL):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter urine concentration"
            value={urineConcentration}
            onChangeText={(text) => setUrineConcentration(text)}
          />

          <Text style={styles.label}>Urine Flow (mL/min):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter urine flow"
            value={urineFlow}
            onChangeText={(text) => setUrineFlow(text)}
          />

          <Text style={styles.label}>Plasma Concentration (mg/mL):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter plasma concentration"
            value={plasmaConcentration}
            onChangeText={(text) => setPlasmaConcentration(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate Clearance' onPress={calculateClearance} />
          </View>

          {clearance !== null ? (
            <Text style={styles.resultLabel}>Clearance: {clearance} mL/min</Text>
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

export default CalculateClearance;
