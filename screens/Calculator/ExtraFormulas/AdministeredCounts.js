import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../../components/Header';
import UIButton from '../../../components/UIButton/UIButton';
import UIButtonReset from '../../../components/UIButton/UIButtonReset';

const AdministeredCounts = ({ route }) => {
  const { name } = route.params;
  const [preSyringeCounts, setPreSyringeCounts] = useState('');
  const [postSyringeCounts, setPostSyringeCounts] = useState('');
  const [administeredCounts, setAdministeredCounts] = useState(null);

  const calculateAdministeredCounts = () => {
    if (preSyringeCounts && postSyringeCounts) {
      const preSyringeCountsValue = parseFloat(preSyringeCounts);
      const postSyringeCountsValue = parseFloat(postSyringeCounts);

      const administeredCountsValue = preSyringeCountsValue - postSyringeCountsValue;
      setAdministeredCounts(administeredCountsValue.toFixed(2)); // rounding to 2 decimal places
    }
  };

  const resetFields = () => {
    setPreSyringeCounts('');
    setPostSyringeCounts('');
    setAdministeredCounts(null);
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
          <Header title={` ${name}`} />

          <Text style={styles.label}>Pre Syringe Counts:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter pre syringe counts"
            value={preSyringeCounts}
            onChangeText={(text) => setPreSyringeCounts(text)}
          />

          <Text style={styles.label}>Post Syringe Counts:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter post syringe counts"
            value={postSyringeCounts}
            onChangeText={(text) => setPostSyringeCounts(text)}
          />

          <View style={styles.buttonContainer}>
            <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate Administered Counts' onPress={calculateAdministeredCounts} />
          </View>

          {administeredCounts !== null ? (
            <Text style={styles.resultLabel}>Administered Counts: {administeredCounts}</Text>
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

export default AdministeredCounts;
