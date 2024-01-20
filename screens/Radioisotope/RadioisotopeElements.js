import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import Header from '../../components/Header'
import { COLORS } from '../../constants'

const RadioisotopeElements = ({ route, navigation }) => {
    const { itemName, itemDetails } = route.params

    const navigateToDetailsScreen = (element) => {
        // Navigate to a new screen and pass the details as parameters
        navigation.navigate('ElementDetailsScreen', {
            elementDetails: element,
        })
    }
    return (
        <View style={styles.container}>
            <Header title={`${itemName} elements`} />

            <ScrollView style={{ marginHorizontal:20 }}>
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
                <View style={{ height: 30 }} />
            </ScrollView>
            {/* <FlatList
                style={{ padding: 16 }}
                data={itemDetails}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={styles.elementButton}
                        onPress={() => navigateToDetailsScreen(item)}
                    >
                        <View>
                            {item.name ? (
                                <Text style={styles.elementButtonText}>
                                    {item.name}
                                </Text>
                            ) : (
                                <Text style={styles.elementButtonText}>
                                    Name Missing
                                </Text>
                            )}
                        </View>
                    </TouchableOpacity>
                )}
            /> */}
        </View>
    )
}

export default RadioisotopeElements
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: width * 0.15,
    },
    elementButton: {
        backgroundColor: '#3498db', // You can replace this with your desired background color
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal:5
    },
    elementButtonText: {
        color: '#fff', // Text color
        fontSize: 16,
        fontWeight: 'bold',
    },
})
