import { View, Text, SafeAreaView, ScrollView, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Header from '../../components/Header'
import { COLORS } from '../../constants'

const CalculatePD = ({route}) => {
 
    const {name}=route?.params
    const [weight, setWeight] = useState('');
    const [adultDose, setAdultDose] = useState('');
    const [pediatricDose, setPediatricDose] = useState(null);
  
    const calculatePediatricDose = () => {
      if (weight && adultDose) {
        const pediatricDoseValue = (parseFloat(weight) * parseFloat(adultDose)) / 70;
        setPediatricDose(pediatricDoseValue.toFixed(2)); // rounding to 2 decimal places
      }
    };
    const resetFields = () => {
        setWeight('');
        setAdultDose('');
        setPediatricDose(null);
      };
  return (
    <SafeAreaView style={styles.area}>
    <ScrollView>
    <View style={styles.container}>
        <Header title={`Calculate ${name}`} />
       
        </View>
        <View style={styles.calculatecontainer}>
      <Text style={styles.label}>Weight (kgs):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter weight"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />

      <Text style={styles.label}>Adult Dose:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter adult dose"
        value={adultDose}
        onChangeText={(text) => setAdultDose(text)}
      />

<View style={styles.buttonContainer}>
        <Button title="Calculate" onPress={calculatePediatricDose} />
        <Button title="Reset" onPress={resetFields} />
      </View>

      {pediatricDose !== null && (
        <Text style={styles.resultLabel}>
          Pediatric Dose: {pediatricDose} mg
        </Text>
      )}
    </View>
        </ScrollView>
        </SafeAreaView>
  )
}

export default CalculatePD

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: COLORS.white,
     
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 12,
        paddingTop:50,
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