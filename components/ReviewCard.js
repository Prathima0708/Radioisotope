import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import ReviewStars from './ReviewStars'
import { COLORS, SIZES } from "../constants"

const ReviewCard = ({ image, date, title, description, num }) => {
    return (
        <View style={styles.container}>
           
            <View style={styles.content}>
               
                <Text style={styles.title}>Unit Conversion</Text>
                
                <Text style={styles.description}>Enter a value below to perform a conversion</Text>
                <TouchableOpacity style={styles.reorderButton}>
                        <Text
                            style={[
                                styles.buttonText,
                                styles.reorderButtonText,
                            ]}
                        >
                           Click here {'>'}
                        </Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 12,
        width: SIZES.width - 24,
        marginBottom:10,
        paddingBottom:70,
       
    },
    avatar: {
        height: 48,
        width: 48,
        borderRadius: 24,
        marginRight: 12
    },
    content: {
        flexDirection: 'column',
        flex: 1,
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 12,
        backgroundColor: COLORS.lightBlue
    },
    date: {
        fontSize: 12,
        fontFamily: 'regular',
        color: COLORS.gray5
    },
    title: {
        fontSize: 14,
        fontFamily: 'bold',
        marginVertical: 6
    },
    description: {
        fontSize: 14,
        fontFamily: 'regular',
        marginTop: 6
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
        fontWeight:'500'
    },
})

export default ReviewCard