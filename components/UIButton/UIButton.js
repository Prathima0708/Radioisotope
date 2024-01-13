import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'

const UIButton = ({onPress,title}) => {
  return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={styles.calculateButton}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>


  </View>
  )
}

export default UIButton
const styles = StyleSheet.create({
    // ... (other styles)
  
    calculateButton: {
      backgroundColor: '#1F66CD',
      padding: 10,
      borderRadius: 5,
    },

  
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily:'regular',
      fontSize:16
    },
  });