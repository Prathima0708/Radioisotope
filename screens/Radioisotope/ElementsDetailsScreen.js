import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import { COLORS } from '../../constants';

const ElementsDetailsScreen = ({ route }) => {
  const { elementDetails } = route.params;

  return (
    <View style={styles.container}>
      <Header title={`${elementDetails.name} details`} />

      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Symbol: {elementDetails.symbol}</Text>
        <Text style={styles.detailText}>Period: {elementDetails.period}</Text>
        <Text style={styles.detailText}>Group: {elementDetails.group}</Text>
        <Text style={styles.detailText}>Atomic Number: {elementDetails.atomicNumber}</Text>
        <Text style={styles.detailText}>Atomic Weight: {elementDetails.atomicWeight}</Text>
        <Text style={styles.detailText}>Energy Type: {elementDetails.energyType}</Text>
        <Text style={styles.detailText}>Half Life: {elementDetails.halfLife}</Text>
        <Text style={styles.detailText}>Production Method: {elementDetails.productionMethod}</Text>
        {/* Add more details as needed */}
      </View>
    </View>
  );
};

export default ElementsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 50,
  },
  detailsContainer: {
    padding: 16,
    marginHorizontal:30
  },
  detailText: {
    fontSize: 16,
    marginBottom: 8,
  },
});
