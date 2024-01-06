import { View, Text, SafeAreaView, ScrollView, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Header from '../../../components/Header'
import { COLORS } from '../../../constants'


const CalculateTargetHeartRate = ({route}) => {
 
    const {name}=route.params
    const [age, setAge] = useState('');
    const [targetHeartRate, setTargetHeartRate] = useState(null);
  
    const calculateTargetHeartRate = () => {
      if (age) {
        const targetHeartRateValue = 220 - parseInt(age, 10);
        setTargetHeartRate(targetHeartRateValue);
      }
    };
  
    const resetFields = () => {
      setAge('');
      setTargetHeartRate(null);
    };
  return (
    <SafeAreaView style={styles.area}>
    <ScrollView>
    <View style={styles.container}>
        <Header title={`Calculate ${name}`} />
       
        </View>
        <View style={styles.calculatecontainer}>
      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter age"
        value={age}
        onChangeText={(text) => setAge(text)}
      />

      <View style={styles.buttonContainer}>
        <Button title="Calculate" onPress={calculateTargetHeartRate} />
        <Button title="Reset" onPress={resetFields} />
      </View>

      {targetHeartRate !== null && (
        <Text style={styles.resultLabel}>
          Target Heart Rate (100%): {targetHeartRate} bpm
        </Text>
      )}
    </View>
        </ScrollView>
        </SafeAreaView>
  )
}

export default CalculateTargetHeartRate

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