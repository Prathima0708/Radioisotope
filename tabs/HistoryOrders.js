import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import React from 'react'
import { homeCategories, orderHistory } from '../data/utils'
import { COLORS, FONTS } from '../constants'
import { useNavigation } from '@react-navigation/native'

const HistoryOrders = () => {
    const navigation = useNavigation()

    return (
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
                data={homeCategories}
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        backgroundColor: COLORS.primary,
        borderRadius: 8,
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

export default HistoryOrders
