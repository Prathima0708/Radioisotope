import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import Header from '../../components/Header'
import { COLORS } from '../../constants'

const RadioisotopeElements = ({ route,navigation }) => {
    const { itemName, itemDetails } = route.params
   
    //  const elementsArray = itemDetails.split('\n')
    const getElementDetails = (element) => {
        // Retrieve and format additional details for the clicked element
        // Modify this logic based on your actual data structure
        return `
          Symbol: ${element.symbol}
          Period: ${element.period}
          Group: ${element.group}
          Atomic Number: ${element.atomicNumber}
          Atomic Weight: ${element.atomicWeight}
          // ... other details
        `
    }
    const navigateToDetailsScreen = (element) => {
        // Navigate to a new screen and pass the details as parameters
        navigation.navigate('ElementDetailsScreen', {
          elementDetails: element,
        });
      };
    return (
        <View style={styles.container}>
            <Header title={`${itemName} elements`} />

            <ScrollView style={{ padding: 16, }}>
                {itemDetails?.map((element, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.elementButton}
                        onPress={() => navigateToDetailsScreen(element)}
                    >
                        <View>
                            {element.name ? (
                                <Text style={styles.elementButtonText}>
                                    {element.name}
                                </Text>
                            ) : (
                                <Text style={styles.elementButtonText}>
                                    Name Missing
                                </Text>
                            )}
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default RadioisotopeElements

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
