import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS } from '../constants'
import Header from '../components/Header'
import { ScrollView } from 'react-native-virtualized-view'

const TermsAndConditions = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{ flex: 1, backgroundColor: COLORS.white, padding: 16 }}
            >
                <Header title="About Application" />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* 3 Dose Limit Section */}
                    <Text style={{ ...FONTS.h4, fontWeight: 'bold' ,marginTop:10}}>
                        3 dose limit
                    </Text>
                    <Text style={{ ...FONTS.body4, marginTop: 10 }}>
                        The dose objective parameter is a set of numerical
                        values that defines the acceptable dose limits for a
                        specific organ and their relative importance over the
                        other clinical criteria.
                    </Text>
                    {/* Button after 3 Dose Limit Section */}
                    <TouchableOpacity style={styles.reorderButton}>
                        <Text
                            style={[
                                styles.buttonText,
                                styles.reorderButtonText,
                            ]}
                        >
                            Learn More  {'>'}
                        </Text>
                    </TouchableOpacity>

                    {/* Current Radiation Section */}
                    <Text
                        style={{
                            ...FONTS.h4,
                            fontWeight: 'bold',
                            marginTop: 30,
                        }}
                    >
                        Current radiation
                    </Text>
                    <Text style={{ ...FONTS.body4,marginTop:10 }}>
                        The dose limits specified in 10CFR20 are based on the
                        general recommendations by the ICRP and NCRP (Section
                        B.7) that an individual's total effective dose should
                        not exceed 50 mSv (5 rem) per year. Furthermore, 10CFR20
                        requires that the deep-dose equivalent to any individual
                        organ or tissue (excluding the lens of the eye) should
                        not exceed 500 mSv (50 rem) per year. The limit for
                        shallow-dose equivalent to the skin and extremities also
                        is 500 mSv (50 rem) per year.
                    </Text>
                    {/* Button after Current Radiation Section */}
                    <TouchableOpacity style={styles.reorderButton}>
                        <Text
                            style={[
                                styles.buttonText,
                                styles.reorderButtonText,
                            ]}
                        >
                            Learn More  {'>'}
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 12,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'bold',
        color: COLORS.black,
    },
    itemContainer: {
        flexDirection: 'column',
    },
    borderBottom: {
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 1,
        marginVertical: 12,
        flexDirection: 'row',
        paddingBottom: 4,
    },
    typeText: {
        fontSize: 14,
        fontFamily: 'bold',
    },
    statusText: {
        fontSize: 14,
        fontFamily: 'bold',
        marginLeft: 12,
    },
    completedStatus: {
        color: COLORS.green,
    },
    pendingStatus: {
        color: COLORS.red,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 8,
    },
    nameText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    priceText: {
        fontSize: 14,
        fontFamily: 'bold',
    },
    dateText: {
        fontSize: 12,
        fontFamily: 'regular',
        marginHorizontal: 2,
    },
    numberOfItemsText: {
        fontSize: 12,
        fontFamily: 'regular',
    },
    receiptText: {
        fontSize: 14,
        textDecorationLine: 'underline',
        textDecorationColor: COLORS.gray5,
        fontFamily: 'regular',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 18,
    },
    rateButton: {
        height: 38,
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 8,
    },
    reorderButton: {
        height: 38,
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.btnclr,
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'regular',
    },
    rateButtonText: {
        color: COLORS.primary,
    },
    reorderButtonText: {
        color: COLORS.white,
    },
})

export default TermsAndConditions
