import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native'
import Header from '../../components/Header'
import { COLORS } from '../../constants'

const ElementsDetailsScreen = ({ route }) => {
    const { elementDetails } = route.params

    return (
        <ScrollView style={styles.container}>
            <Header title={`${elementDetails.name} details`} />

            <View style={styles.detailsContainer}>
                <Text style={styles.detailText}>
                    Symbol: {elementDetails.symbol}
                </Text>
                <Text style={styles.detailText}>
                    Period: {elementDetails.period}
                </Text>
                <Text style={styles.detailText}>
                    Group: {elementDetails.group}
                </Text>
                <Text style={styles.detailText}>
                    Atomic Number: {elementDetails.atomicNumber}
                </Text>
                <Text style={styles.detailText}>
                    Atomic Weight: {elementDetails.atomicWeight}
                </Text>
                <Text style={styles.detailText}>
                    Energy Type: {elementDetails.energyType}
                </Text>
                <Text style={styles.detailText}>
                    Energy : {elementDetails.energy}
                </Text>
                <Text style={styles.detailText}>
                    Half Life: {elementDetails.halfLife}
                </Text>
                <Text style={styles.detailText}>
                    Production Method: {elementDetails.productionMethod}
                </Text>

                {/* <Text style={styles.detailText}>
                    Type of energy emission: {elementDetails.energyType}
                </Text> */}
                <Text style={styles.detailText}>
                    Oxidation state: {elementDetails.oxidationstate}
                </Text>

                <Text style={styles.detailText}>
                    Parent Radionuclide: {elementDetails.parentRadionuclide}
                </Text>
                <Text style={styles.detailText}>
                    Decay Product : {elementDetails.decayproduct}
                </Text>
                <Text style={styles.detailText}>
                    Natural Structure : {elementDetails.naturalstructure}
                </Text>
                {elementDetails.decayimage && (
                    <React.Fragment>
                        <Text style={styles.detailText}> Decay Scheme:</Text>
                        <Image
                            source={elementDetails.decayimage}
                            style={{
                                height: 200,
                                width: 270,
                                resizeMode: 'contain',
                            }}
                        />
                    </React.Fragment>
                )}

                {/* <Image
                    source={elementDetails.decayimage}
                    //style={{ height: 100, width: 200 }}
                /> */}

                {/* Add more details as needed */}
            </View>
            <View style={{ height: 70 }} />
        </ScrollView>
    )
}

export default ElementsDetailsScreen
const {height,width}=Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: width*0.13,
        // marginBottom:10
    },
    detailsContainer: {
        padding: 16,
        marginHorizontal: 30,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 15,
        fontWeight: '500',
        fontFamily: 'regular',
        marginVertical: 10,
    },
})
