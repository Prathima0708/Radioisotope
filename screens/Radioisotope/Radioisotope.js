import { View, StyleSheet, FlatList, TextInput, TouchableOpacity, Text, Image } from 'react-native'
import React, { useState } from 'react'

import { ScrollView } from 'react-native-virtualized-view'
import { SafeAreaView } from 'react-native-safe-area-context'

import Header from '../../components/Header'
import { COLORS, SIZES } from '../../constants'
import TransactionCard from '../../components/RadioIsotopeCard'
import {
    Feather,
    Ionicons,
    MaterialIcons,
    Octicons,
    MaterialCommunityIcons,
    Fontisto,
} from '@expo/vector-icons'

import RadioIsotopeCard from '../../components/RadioIsotopeCard'
import { RadioisotopeData } from '../../data/radioisotopedata'

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

            {/* <View style={styles.boxcontainer}>
      <View style={styles.box}>
      <Text style={styles.text}>Cyclotron,Nuclear fission</Text>
        <Image
          source={require('../../assets/images/carbon.png')} // Replace with your image source
          style={styles.image}
        />
       
      </View>
      
      <View style={styles.box}>
      <Text style={styles.text}>Generator</Text>
        <Image
          source={require('../../assets/images/gallium.png')} // Replace with your image source
          style={styles.image}
        />
        
      </View>
    </View> */}
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
        marginLeft:10
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