import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar,
    FlatList,
    Dimensions,
} from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'
import { COLORS, icons } from '../../constants'
import { commonStyles } from '../../styles/CommonStyles'
import { ADB } from '../../data/data'
import { UnitConversionOptions } from '../../data/unitconversiondata'

const {height,width}=Dimensions.get('window')
const UnitConversion = ({ navigation }) => {
   
    const renderHeader = () => {
        const navigation = useNavigation()
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: height*0.09,
                    marginHorizontal: 16,
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={commonStyles.header1Icon}
                    >
                        <Image
                            resizeMode="contain"
                            source={icons.arrowLeft}
                            style={{
                                height: 24,
                                width: 24,
                                tintColor: COLORS.black,
                            }}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{
                            marginLeft: 12,
                            fontSize: 17,
                            fontFamily: 'regular',
                        }}
                    >
                        Unit Conversion
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => console.log('Pressed')}
                    style={commonStyles.header1Icon}
                ></TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
            {renderHeader()}
            <View style={styles.container}>
                <FlatList
                    data={UnitConversionOptions}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.elementButton}
                            onPress={() =>
                                navigation.navigate('UnitConversionCalculator', {
                                    name:item.name,
                                  units: item.units,
                                })
                              }
                        >
                            <View>
                                <Text style={styles.elementButtonText}>
                                    {item.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff',
    },
    head: { height: 65, backgroundColor: '#f1f8ff', width: 'auto' },
    text: { margin: 6 },
    reorderButton: {
        height: 38,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3498DB',
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'regular',
        color: 'white',
        fontWeight: 'bold',
    },
    rateButtonText: {
        color: 'white',
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

export default UnitConversion
