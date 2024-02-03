import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

import { COLORS, SIZES } from '../constants'
import { useNavigation } from '@react-navigation/native'

const ReviewCard = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Unit Conversion</Text>

                <Text style={styles.description}>
                    Enter a value below to perform a conversion
                </Text>
                <TouchableOpacity
                    style={styles.reorderButton}
                    onPress={() => navigation.navigate('UnitConversion')}
                >
                    <Text style={[styles.buttonText, styles.reorderButtonText]}>
                        Click here {'>'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const {height,width}=Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 32,
        width: SIZES.width - 24,
       // marginBottom: height*0.01,
        paddingBottom:width*0.15,
    },
    avatar: {
        height: 48,
        width: 48,
        borderRadius: 24,
        marginRight: 12,
    },
    content: {
        flexDirection: 'column',
        flex: 1,
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 12,
        backgroundColor: COLORS.lightBlue,
    },
    date: {
        fontSize: 12,
        fontFamily: 'regular',
        color: COLORS.gray5,
    },
    title: {
        fontSize: 14,
        fontFamily: 'bold',
        marginVertical: 6,
    },
    description: {
        fontSize: 14,
        fontFamily: 'regular',
        marginTop: 6,
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
        fontSize: 16,
        fontFamily: 'regular',
    },
    rateButtonText: {
        color: COLORS.primary,
    },
    reorderButtonText: {
        color: COLORS.white,
        fontWeight: '500',
    },
})

export default ReviewCard
