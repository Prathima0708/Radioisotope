import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Dimensions,
} from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    calculatorOptions,
    homeCategories,
    morecalculatorOptions,
} from '../../data/calculatoroptions'
import { COLORS } from '../../constants'
import Header from '../../components/Header'

const CalculatorOptions = () => {
    const navigation = useNavigation()
    const {height,width}=Dimensions.get('window')
    return (
        <SafeAreaView style={styles.area}>
            <View style={styles.container}>
                <Header title="Calculator options" />
                <View>
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            marginVertical: 8,
                            alignItems: 'center',
                        }}
                    ></View>

                    <FlatList
                        horizontal={false} // Set to false for vertical display
                        numColumns={2} // Set the number of columns to 2
                        data={morecalculatorOptions}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                   margin: height*0.07, 
                                   marginVertical:height*0.03
                                  
                                    // Adjust spacing between rows
                                }}
                                onPress={() =>
                                    navigation.navigate(item.navigate, {
                                        name: item.name,
                                    })
                                }
                            >
                                <View
                                    style={{
                                        height: 70,
                                        width: 70,
                                        borderRadius: 35,
                                        overflow: 'hidden',
                                        marginBottom: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        shadowColor: 'rgba(150, 150, 154, 0.4)',
                                        shadowOffset: {
                                            width: 12,
                                            height: 12,
                                        },
                                        shadowOpacity: 0.15,
                                        shadowRadius: 30,
                                        elevation: 0.1,
                                        borderColor: COLORS.tertiaryGray,
                                        borderWidth: 1,
                                    }}
                                >
                                    <Image
                                        source={item.image}
                                        style={{
                                            height: 40,
                                            width: 40,
                                            borderRadius: 35,
                                            resizeMode: 'contain',
                                        }}
                                    />
                                </View>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontFamily: 'regular',
                                    }}
                                >
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
            <View style={{ height: 90 }} />
        </SafeAreaView>
    )
}

const { width, height } = Dimensions.get('window')
export default CalculatorOptions
const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 12,
        paddingTop: width * 0.15,
    },
})
