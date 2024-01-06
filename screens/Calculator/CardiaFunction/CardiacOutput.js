import { View, Text, SafeAreaView, ScrollView, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Header from '../../../components/Header'
import { COLORS } from '../../../constants'


const CardiacOutput = ({route}) => {
 
    const {name}=route.params
    const [strokeVolume, setStrokeVolume] = useState('');
    const [heartRate, setHeartRate] = useState('');
    const [cardiacOutput, setCardiacOutput] = useState(null);
  
    const calculateCardiacOutput = () => {
      if (strokeVolume && heartRate) {
        const svValue = parseFloat(strokeVolume);
        const hrValue = parseFloat(heartRate);
  
        const cardiacOutputValue = svValue * hrValue;
        setCardiacOutput(cardiacOutputValue.toFixed(2)); // rounding to 2 decimal places
      }
    };
  
    const resetFields = () => {
      setStrokeVolume('');
      setHeartRate('');
      setCardiacOutput(null);
    };
  return (
    <SafeAreaView style={styles.area}>
    <ScrollView>
    <View style={styles.container}>
        <Header title={`Calculate ${name}`} />
       
        </View>
        <View style={styles.calculatecontainer}>
        <Text style={styles.label}>Stroke Volume (SV):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter SV value"
        value={strokeVolume}
        onChangeText={(text) => setStrokeVolume(text)}
      />

      <Text style={styles.label}>Heart Rate (HR):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter HR value"
        value={heartRate}
        onChangeText={(text) => setHeartRate(text)}
      />

      <View style={styles.buttonContainer}>
        <Button title="Calculate" onPress={calculateCardiacOutput} />
        <Button title="Reset" onPress={resetFields} />
      </View>

      {cardiacOutput !== null && (
        <Text style={styles.resultLabel}>
          Cardiac Output (CO): {cardiacOutput} ml
        </Text>
      )}
    </View>
        </ScrollView>
        </SafeAreaView>
  )
}

export default CardiacOutput

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