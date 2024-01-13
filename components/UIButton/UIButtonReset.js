import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'

const UIButtonReset = ({onPress,title}) => {
  return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={styles.resetButton}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>


  </View>
  )
}

export default UIButtonReset
const styles = StyleSheet.create({
    // ... (other styles)
  
   
    resetButton: {
      backgroundColor: '#DAEEF9',
      padding: 14,
      borderRadius: 5,
    },
  
    buttonText: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });