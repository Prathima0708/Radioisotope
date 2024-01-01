import React from 'react';
import { View, Text } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const UnitDropdown = ({ label, options = [], selectedUnit, onValueChange }) => {
    console.log('Options:', options);
  // Ensure that options is an array before mapping over it
  const dropdownItems = Array.isArray(options)
    ? options.map((option) => ({
        value: option.id,
        Checkbox: option.destinationUnit === selectedUnit,
        Selected: option.destinationUnit === selectedUnit,
      }))
    : [];

  return (
    <View>
      <Text>{label}:</Text>
      <SelectList
        items={dropdownItems}
        checkboxProp="Checkbox"
        selectedProp="Selected"
        onTap={(item) => onValueChange(item.value)}
        multipleSelection={false}
      />
    </View>
  );
};

export default UnitDropdown;
