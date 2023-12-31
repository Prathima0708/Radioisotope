import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { calculatorOptions, homeCategories, morecalculatorOptions } from '../../data/calculatoroptions'
import { COLORS } from '../../constants'
import Header from '../../components/Header'

const CalculatorOptions = () => {
    const navigation = useNavigation()

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
            >
               
            </View>

            <FlatList
                horizontal={false} // Set to false for vertical display
                numColumns={2} // Set the number of columns to 2
                data={morecalculatorOptions}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{
                         
                            flexDirection: 'column',
                            marginHorizontal: 50,
                            marginBottom: 30,
                            marginRight:30,
                             // Adjust spacing between rows
                        }}
                        onPress={()=>navigation.navigate(item.navigate,{
                            name:item.name
                        })}
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
                                resizeMode="cover"
                                style={{
                                    height: 30,
                                    width: 30,
                                    borderRadius: 35,
                                }}
                            />
                        </View>
                        <Text style={{ fontSize: 16, fontFamily: 'regular' }}>
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
        paddingTop:20,
    },
})