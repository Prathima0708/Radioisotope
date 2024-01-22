import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import Header from '../../../components/Header';
import { COLORS } from '../../../constants';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const VolumeDraw = ({route}) => {
    const {name}=route?.params
  const [doseNeeded, setDoseNeeded] = useState('');
  const [concentrationOnHand, setConcentrationOnHand] = useState('');
  const [volumeToDraw, setVolumeToDraw] = useState(null);

  const calculateVolumeToDraw = () => {
    if (doseNeeded && concentrationOnHand) {
      const dose = parseFloat(doseNeeded);
      const concentration = parseFloat(concentrationOnHand);

      if (concentration !== 0) {
        const result = dose / concentration;
        setVolumeToDraw(result.toFixed(2)); // rounding to 2 decimal places
      } else {
        // Handle the case where the concentration is zero (division by zero)
        // You may want to show an error message or handle it differently based on your requirements.
        console.error("Error: Division by zero");
      }
    }
  };

  const resetFields = () => {
    setDoseNeeded('');
    setConcentrationOnHand('');
    setVolumeToDraw(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
        <Header title={`Calculate ${name}`} />
          <Text style={styles.label}>Dose Needed (mCi):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter Dose Needed value"
            value={doseNeeded}
            onChangeText={(text) => setDoseNeeded(text)}
          />

          <Text style={styles.label}>Concentration on Hand (mCi/ml):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter Concentration on Hand value"
            value={concentrationOnHand}
            onChangeText={(text) => setConcentrationOnHand(text)}
          />
          <View style={styles.buttonContainer}>
          <UIButtonReset title='Reset' onPress={resetFields}/>
          <UIButton title='Calculate' onPress={calculateVolumeToDraw}/>
          </View>
         

          {/* <View style={styles.buttonContainer}>
            <Button title="Calculate" onPress={calculateVolumeToDraw} />
            <Button title="Reset" onPress={resetFields} />
          </View> */}

          {volumeToDraw !== null ? (
            <Text style={styles.resultLabel}>Volume to Draw (ml): {volumeToDraw}</Text>
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
        backgroundColor: COLORS.white,
     
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20,
        marginTop:height*0.03
    },
    calculatecontainer: {
        padding: 20,
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop:20
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
      },
      resultLabel: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
      },
});

export default VolumeDraw;
