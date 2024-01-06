import { View, Text, SafeAreaView, ScrollView, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Header from '../../../components/Header'
import { COLORS } from '../../../constants'


const InverseSL = ({route}) => {
 
    const {name}=route.params
    const [intensity1, setIntensity1] = useState('');
    const [distance12, setDistance12] = useState('');
    const [intensity2, setIntensity2] = useState('');
    const [distance22, setDistance22] = useState('');
  
    const calculateMissingValue = () => {
      // Check how many values are available
      const count = [intensity1, distance12, intensity2, distance22].filter((value) => value !== '').length;
  
      // If only one value is missing, calculate it
      if (count === 3) {
        if (intensity1 === '' && distance12 !== '' && intensity2 !== '' && distance22 !== '') {
          setIntensity1((parseFloat(intensity2) * parseFloat(distance22) ** 2) / parseFloat(distance12 ** 2));
        } else if (distance12 === '' && intensity1 !== '' && intensity2 !== '' && distance22 !== '') {
          setDistance12(Math.sqrt((parseFloat(intensity2) * parseFloat(distance22) ** 2) / parseFloat(intensity1)));
        } else if (intensity2 === '' && intensity1 !== '' && distance12 !== '' && distance22 !== '') {
          setIntensity2((parseFloat(intensity1) * parseFloat(distance12) ** 2) / parseFloat(distance22 ** 2));
        } else if (distance22 === '' && intensity1 !== '' && distance12 !== '' && intensity2 !== '') {
          setDistance22(Math.sqrt((parseFloat(intensity1) * parseFloat(distance12) ** 2) / parseFloat(intensity2)));
        }
      }
    };
  
    const resetFields = () => {
      setIntensity1('');
      setDistance12('');
      setIntensity2('');
      setDistance22('');
    };
  return (
    <SafeAreaView style={styles.area}>
    <ScrollView>
    <View style={styles.container}>
        <Header title={`Calculate ${name}`} />
       
        </View>
        <View style={styles.calculatecontainer}>
        <Text style={styles.label}>Intensity 1 (I1):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter I1 value"
        value={intensity1}
        onChangeText={(text) => setIntensity1(text)}
      />

      <Text style={styles.label}>Distance 1 (D1):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter D1 value"
        value={distance12}
        onChangeText={(text) => setDistance12(text)}
      />

      <Text style={styles.label}>Intensity 2 (I2):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter I2 value"
        value={intensity2}
        onChangeText={(text) => setIntensity2(text)}
      />

      <Text style={styles.label}>Distance 2 (D2):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter D2 value"
        value={distance22}
        onChangeText={(text) => setDistance22(text)}
      />

      <View style={styles.buttonContainer}>
        <Button title="Calculate" onPress={calculateMissingValue} />
        <Button title="Reset" onPress={resetFields} />
      </View>
      <Text style={styles.resultLabel}>
            {intensity1 !== '' ? `Intensity 1 (I1): ${intensity1}` : ''}
            {distance12 !== '' ? `\nDistance 1 (D1): ${distance12}` : ''}
            {intensity2 !== '' ? `\nIntensity 2 (I2): ${intensity2}` : ''}
            {distance22 !== '' ? `\nDistance 2 (D2): ${distance22}` : ''}
          </Text>
    </View>
        </ScrollView>
        </SafeAreaView>
  )
}

export default InverseSL

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