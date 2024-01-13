import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import Header from '../../../components/Header'
import { COLORS } from '../../../constants'
import { morecalculatorOptions } from '../../../data/calculatoroptions'


const Concentration = ({ route,navigation }) => {
    const {name}=route.params
   
  

    return (
        <View style={styles.container}>
            <Header title={`Calculate ${name}`} />

            <ScrollView style={{ padding: 16,height:500 }}>
      

      {/* Map the options inside the object with id 5 */}
      {morecalculatorOptions.find((option) => option.id === 5)?.options?.map((subOption) => (
        <TouchableOpacity
          key={subOption.id}
          style={styles.elementButton}
          onPress={() => navigation.navigate(subOption.navigate,{
            name:subOption.name
          })}
        >
          <Text style={styles.elementButtonText}>{subOption.name}</Text>
        </TouchableOpacity>
      ))}
    
            </ScrollView>
        </View>
    )
}

export default Concentration

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 50,
    },
    elementButton: {
        backgroundColor: '#3498db', // You can replace this with your desired background color
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    elementButtonText: {
        color: '#fff', // Text color
        fontSize: 16,
        fontWeight: 'bold',
    },
})
