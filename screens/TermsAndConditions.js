import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS } from '../constants'
import Header from '../components/Header'
import { ScrollView } from 'react-native-virtualized-view'

const TermsAndConditions = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <View
                style={{ flex: 1, backgroundColor: COLORS.white, padding: 16 }}
            >
                <Header title="About Application" />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* 3 Dose Limit Section */}

                    <Text style={{ ...FONTS.body4, marginTop: 10 }}>
                        Welcome to Radioisotope app! Go to the hub for
                        radioisotope related calculation and unit conversions.
                        Dive into our intuitive tools, ensuring accurate results
                        for your scientific endeavors. Explore our extensive
                        radioisotope library, tailored for professional,
                        researcher and student enthusiasts. Empower your work
                        with seamless calculations and comprehensive resources.
                        Data is taken from the most recent and reliable source (
                        Isotope browser by IAEA, AERB, etc.) and optimal search
                        and retrieve performance is achieved with an embedded
                        data base meaning that no network connection is
                        required. Thanks to the dedicated efforts of the AROHA
                        GROUP PVT. LTD. for bringing innovations and excellence
                        to your fingertips.
                    </Text>
                    {/* Button after 3 Dose Limit Section */}
                 

                    {/* Current Radiation Section */}
                    <Text
                        style={{
                            ...FONTS.h4,
                            fontWeight: 'bold',
                            marginTop: 30,
                        }}
                    >
                        COOKIES AND PRIVACY POLICY
                    </Text>
                    <Text style={{ ...FONTS.body4, marginTop: 10 }}>
                        Note that this app is provided under specific licensing
                        terms. For recirculation, adhere to the outlined
                        software details and ensure responsible use. Any misuse
                        or unauthorized redistribution may result in legal
                        action. Respect the terms and condition to maintain a
                        fair and secure environment for all users. By using the
                        app, you signify your agreement to be bound by
                        RADIOISOTOPE’s condition. For any queries or issues
                        related to RADIOISOTOPE, you can contact us by
                        ____________________________
                    </Text>
                    {/* Button after Current Radiation Section */}
                 
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
