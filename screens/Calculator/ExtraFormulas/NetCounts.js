import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const NetCounts = ({ route }) => {
  const { name } = route.params;
  const [rightLobeCounts, setRightLobeCounts] = useState('');
  const [leftLobeCounts, setLeftLobeCounts] = useState('');
  const [netCounts, setNetCounts] = useState(null);

  const calculateNetCounts = () => {
    if (rightLobeCounts && leftLobeCounts) {
      const rightLobeCountsValue = parseFloat(rightLobeCounts);
      const leftLobeCountsValue = parseFloat(leftLobeCounts);

      const netCountsValue = rightLobeCountsValue + leftLobeCountsValue;
      setNetCounts(netCountsValue.toFixed(2)); // rounding to 2 decimal places
    }
  };

  const resetFields = () => {
    setRightLobeCounts('');
    setLeftLobeCounts('');
    setNetCounts(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Right Lobe Counts:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter right lobe counts"
            value={rightLobeCounts}
            onChangeText={(text) => setRightLobeCounts(text)}
          />

          <Text style={styles.label}>Left Lobe Counts:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter left lobe counts"
            value={leftLobeCounts}
            onChangeText={(text) => setLeftLobeCounts(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate Net Counts' onPress={calculateNetCounts} />
          </View>

          {netCounts !== null ? (
            <Text style={styles.resultLabel}>Net Counts: {netCounts}</Text>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
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
});

export default NetCounts;
