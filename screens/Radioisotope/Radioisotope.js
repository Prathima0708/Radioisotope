import { View, StyleSheet, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'

import { ScrollView } from 'react-native-virtualized-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RadioisotopeData, TransactionHistoryData } from '../../data/utils'
import Header from '../../components/Header'
import { COLORS, SIZES } from '../../constants'
import TransactionCard from '../../components/TransactionCard'
import {
    Feather,
    Ionicons,
    MaterialIcons,
    Octicons,
    MaterialCommunityIcons,
    Fontisto,
} from '@expo/vector-icons'

const renderSearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const handleSearch = (text) => {
        setSearchQuery(text)
    }
    return (
        <View
            style={{
                width: SIZES.width - 32,
                height: 62,
                borderRadius: 10,
                backgroundColor: COLORS.tertiaryGray,
                alignItems: 'center',
                flexDirection: 'row',
            }}
        >
            <View
                style={{
                    marginHorizontal: SIZES.padding,
                }}
            >
                <Ionicons name="search" size={24} color={COLORS.gray4} />
            </View>
            <TextInput
                placeholder="Search here..."
                onChangeText={handleSearch}
                placeholderTextColor={COLORS.gray5}
            />
        </View>
    )
}
const Radioisotope = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.area}>
            <View style={styles.container}>
                <Header title="Radioisotope Library" />
               {renderSearchBar()}
                <ScrollView>
                    <FlatList
                        data={RadioisotopeData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => (
                            <TransactionCard
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
})

export default Radioisotope