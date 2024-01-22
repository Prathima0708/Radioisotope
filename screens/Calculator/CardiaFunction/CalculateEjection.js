import { View, Text, SafeAreaView, ScrollView, TextInput, Button, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Header from '../../../components/Header'
import { COLORS } from '../../../constants'
import UIButton from '../../../components/UIButton/UIButton'
import UIButtonReset from '../../../components/UIButton/UIButtonReset'


const CalculateEjection = ({route}) => {
 
    const {name}=route.params
    const [endDiastolic, setEndDiastolic] = useState('');
  const [endSystolic, setEndSystolic] = useState('');
  const [ejectionFraction, setEjectionFraction] = useState(null);

  const calculateEjectionFraction = () => {
    if (endDiastolic && endSystolic) {
      const edValue = parseFloat(endDiastolic);
      const esValue = parseFloat(endSystolic);

      if (edValue !== 0) {
        const ejectionFractionValue = ((edValue - esValue) / edValue) * 100;
        setEjectionFraction(ejectionFractionValue.toFixed(2)); // rounding to 2 decimal places
      }
    }
  };

  const resetFields = () => {
    setEndDiastolic('');
    setEndSystolic('');
    setEjectionFraction(null);
  };
  return (
    <SafeAreaView style={styles.area}>
    <ScrollView>
    <View style={styles.container}>
        <Header title={`Calculate ${name}`} />
       
        </View>
        <View style={styles.calculatecontainer}>
        <Text style={styles.label}>End Diastolic (ED):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter ED value"
        value={endDiastolic}
        onChangeText={(text) => setEndDiastolic(text)}
      />

      <Text style={styles.label}>End Systolic (ES):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter ES value"
        value={endSystolic}
        onChangeText={(text) => setEndSystolic(text)}
      />

      <View style={styles.buttonContainer}>
      <UIButtonReset title="Reset" onPress={resetFields} />
        <UIButton title="Calculate" onPress={calculateEjectionFraction} />
       
      </View>

      {ejectionFraction !== null && (
        <Text style={styles.resultLabel}>
          % Ejection Fraction: {ejectionFraction}%
        </Text>
      )}
    </View>
        </ScrollView>
        </SafeAreaView>
  )
}

export default CalculateEjection
const {height,width}=Dimensions.get('window')
const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: COLORS.white,
     
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 12,
        marginTop:height*0.03
    },
    calculatecontainer: {
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
})