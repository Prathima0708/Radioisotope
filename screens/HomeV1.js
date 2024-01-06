import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES, icons, images } from '../constants'
import {
    Feather,
    Ionicons,
    MaterialIcons,
    Octicons,
    MaterialCommunityIcons,
    Fontisto,
} from '@expo/vector-icons'
import { ScrollView } from 'react-native-virtualized-view'
import { StatusBar } from 'expo-status-bar'
import CustomModal from '../components/CustomModal'
import { furnitureStores } from '../data/shops'

import { useNavigation } from '@react-navigation/native'

import ReviewCard from '../components/ReviewCard'
import {  homescreenOptions } from '../data/homescreendata'
import { calculatorOptions, homeCategories } from '../data/calculatoroptions'

const HomeV1 = ({ navigation }) => {
    

   

    const renderProductCategories = () => {
        return (
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 15,
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ ...FONTS.body2 }}>Calculator</Text>
                </View>

                <FlatList
                    horizontal={true}
                    data={calculatorOptions}
                    keyExtractor={(item) => item.id.toString()} // Ensure the key is a string
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                flexDirection: 'column',
                                marginHorizontal:11,
                            }}
                            onPress={()=>navigation.navigate(item.navigate)}
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
                                        borderRadius: 35, // Set the same borderRadius as the parent View
                                    }}
                                />
                            </View>
                            <Text
                                style={{ fontSize: 16, fontFamily: 'regular' }}
                            >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }
  

   

    const renderProducts = () => {
        const navigation = useNavigation()
        return (
            <View style={{ marginVertical: 5 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        width: SIZES.width - 32,
                    }}
                >
                    {homescreenOptions.map((item) => (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate(`${item.navigate}`)
                            }
                            key={item.id}
                            style={{
                                flexDirection: 'column',
                                paddingHorizontal: 12,
                                height: 100,
                                width: 130,
                                marginVertical: 7,
                                marginLeft: 30,
                                borderWidth: 1,
                                borderColor: COLORS.gray6,
                                borderRadius: 15,
                                backgroundColor: COLORS.lightBlue,
                                // Adjust the shadow properties for a shadow only at the bottom
                                shadowColor: COLORS.black,
                                shadowOffset: { width: 0, height: 4 }, // Positive height for a shadow at the bottom
                                shadowOpacity: 0.2,
                                shadowRadius: 4,
                                elevation: 3,
                                marginTop:20
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 14,
                                    marginTop: 33,
                                    fontFamily: 'bold',
                                    textAlign: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center', // Center the text
                                }}
                            >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.area}>
            <View style={{ flex: 1, marginHorizontal: 16 }}>
                <StatusBar  />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 20,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                      
                        <View
                            style={{
                                flexDirection: 'column',
                                marginLeft: 12,
                            }}
                        >
                            <Image
                                source={images.logo}
                                style={{
                                    height: 61,
                                    width: 254,
                                }}
                            />
                        </View>
                    </View>
                </View>

                <ScrollView style={{ marginTop: 5 }}>
                

                    {renderProducts()}
                    {renderProductCategories()}
                    <View>
                        <ReviewCard />
                    </View>
                </ScrollView>
            </View>
            {/* <CustomModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              onPressGotIt={handlePressGotIt}
              code="#1243CD2"
          /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
})

export default HomeV1
