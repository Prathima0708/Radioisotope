import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'

import { ScrollView } from 'react-native-virtualized-view'
import { SafeAreaView } from 'react-native-safe-area-context'

import Header from '../../components/Header'
import { COLORS } from '../../constants'

import RadioIsotopeCard from '../../components/RadioIsotopeCard'
import { RadioisotopeData } from '../../data/radioisotopedata'

const Radioisotope = () => {
    return (
        <SafeAreaView style={styles.area}>
            <ScrollView>
                <View style={styles.container}>
                    <Header title="Radioisotope Library" />

                    <ScrollView>
                        <FlatList
                            data={RadioisotopeData}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item, index }) => (
                                <RadioIsotopeCard
                                    item={item}
                                    key={index}
                                    image={item.image}
                                    amount={item.amount}
                                    type={item.type}
                                    price={item.price}
                                    date={item.date}
                                    name={item.name}
                                />
                            )}
                        />
                    </ScrollView>
                </View>
            </ScrollView>
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

        marginHorizontal: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 12,
        alignItems: 'center',
    },
    headerIcon: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999,
        backgroundColor: COLORS.gray,
    },
    arrowLeft: {
        height: 24,
        width: 24,
        tintColor: COLORS.black,
    },
    moreIcon: {
        height: 24,
        width: 24,
        tintColor: COLORS.black,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'bold',
        color: COLORS.black,
    },
    boxcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    box: {
        flex: 1,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        padding: 16,
        marginLeft: 10,
    },
    image: {
        width: 90,
        height: 50,
        borderRadius: 10,
        marginBottom: 8,
    },
    text: {
        fontSize: 16,
    },
})

export default Radioisotope
