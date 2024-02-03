import { View, Text, SafeAreaView, ScrollView, TextInput, Button, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Header from '../../components/Header'
import { COLORS } from '../../constants'
import UIButtonReset from '../../components/UIButton/UIButtonReset'
import UIButton from '../../components/UIButton/UIButton'

const CalculateSensitivity = ({route}) => {
 
    const {name}=route.params
    const [countsInROI, setCountsInROI] = useState('');
    const [backgroundCountsInROI, setBackgroundCountsInROI] = useState('');
    const [time, setTime] = useState('');
    const [sourceActivity, setSourceActivity] = useState('');
    const [sensitivity, setSensitivity] = useState(null);
  
    const calculateSensitivity = () => {
      if (countsInROI && backgroundCountsInROI && time && sourceActivity) {
        const sensitivityValue =
          (parseFloat(countsInROI) - parseFloat(backgroundCountsInROI)) /
          (parseFloat(time) * parseFloat(sourceActivity));
        setSensitivity(sensitivityValue.toFixed(2)); // rounding to 2 decimal places
      }
    };
  
    const resetFields = () => {
      setCountsInROI('');
      setBackgroundCountsInROI('');
      setTime('');
      setSourceActivity('');
      setSensitivity(null);
    }
  return (
    <SafeAreaView style={styles.area}>
    <ScrollView>
    <View style={styles.container}>
        <Header title={`Calculate ${name}`} />
       
        </View>
        <View style={styles.calculatecontainer}>
      <Text style={styles.label}>Counts in ROI:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter counts in ROI"
        value={countsInROI}
        onChangeText={(text) => setCountsInROI(text)}
      />

      <Text style={styles.label}>Background Counts in ROI:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter background counts in ROI"
        value={backgroundCountsInROI}
        onChangeText={(text) => setBackgroundCountsInROI(text)}
      />

      <Text style={styles.label}>Time (sec):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter time in seconds"
        value={time}
        onChangeText={(text) => setTime(text)}
      />

      <Text style={styles.label}>Source Activity (Bq):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter source activity in Bq"
        value={sourceActivity}
        onChangeText={(text) => setSourceActivity(text)}
      />

      <View style={styles.buttonContainer}>
      <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate' onPress={calculateSensitivity} />
      </View>

      {sensitivity !== null && (
        <Text style={styles.resultLabel}>
          Sensitivity: {sensitivity} cps/Bq
        </Text>
      )}
    </View>
        </ScrollView>
        </SafeAreaView>
  )
}

export default CalculateSensitivity
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
        paddingTop: width*0.2,
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
})