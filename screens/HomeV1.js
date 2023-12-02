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
import { furnitureCategories, homeCategories } from '../data/utils'
import { useNavigation } from '@react-navigation/native'
import { homescreenOptions, products, reviews } from '../data/products'
import ReviewCard from '../components/ReviewCard'

const HomeV1 = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [modalVisible, setModalVisible] = useState(true)

    const handlePressGotIt = () => {
        // Handle the logic when the "GOT IT" button is pressed
        setModalVisible(false)
    }

    const handleSearch = (text) => {
        setSearchQuery(text)
    }

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
                    data={homeCategories}
                    keyExtractor={(item) => item.id.toString()} // Ensure the key is a string
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                flexDirection: 'column',
                                marginHorizontal:3,
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
    const renderSearchBar = () => {
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

    const renderShops = () => {
        return (
            <View style={{ height: 'auto' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 8,
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ ...FONTS.body2 }}>Open Shops</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OpenShops')}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Text style={{ fontSize: 16, fontFamily: 'regular' }}>
                            See All
                        </Text>
                        <View>
                            <MaterialIcons
                                name="keyboard-arrow-right"
                                size={24}
                                color={COLORS.gray4}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <FlatList
                    nestedScrollEnabled
                    data={furnitureStores}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ShopView2')}
                            style={{
                                width: SIZES.width - 32,
                                borderColor: COLORS.tertiaryGray,
                                borderWidth: 1,
                                paddingBottom: 2,
                                marginBottom: 12,
                                borderRadius: 15,
                            }}
                        >
                            <Image
                                source={item.image}
                                style={{
                                    width: SIZES.width - 32,
                                    height: 136,
                                    borderRadius: 15,
                                }}
                            />
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontFamily: 'regular',
                                    marginVertical: 6,
                                }}
                            >
                                {item.name}
                            </Text>
                            <View
                                style={{
                                    marginBottom: 4,
                                    flexDirection: 'row',
                                }}
                            >
                                {item.keywords.map((keyword, index) => (
                                    <Text
                                        key={index}
                                        style={{
                                            fontSize: 14,
                                            color: COLORS.gray5,
                                            textTransform: 'capitalize',
                                        }}
                                    >
                                        {keyword}
                                        {index !== item.keywords.length - 1
                                            ? '-'
                                            : ''}
                                    </Text>
                                ))}
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Octicons
                                        name="star"
                                        size={24}
                                        color={COLORS.primary}
                                    />
                                    <Text style={{ marginLeft: 8 }}>
                                        {item.rating}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginHorizontal: SIZES.padding3,
                                    }}
                                >
                                    <MaterialCommunityIcons
                                        name="truck-delivery-outline"
                                        size={24}
                                        color={COLORS.primary}
                                    />
                                    <Text style={{ marginLeft: 8 }}>
                                        {item.shipping}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Fontisto
                                        name="stopwatch"
                                        size={22}
                                        color={COLORS.primary}
                                    />
                                    <Text style={{ marginLeft: 8 }}>
                                        {item.deliveryTime} days
                                    </Text>
                                </View>
                            </View>
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
                <StatusBar hidden={true} />
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
                        <TouchableOpacity
                            // onPress={() => navigation.toggleDrawer()}
                            style={{
                                height: 45,
                                width: 45,
                                borderRadius: 22.5,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.gray,
                            }}
                        >
                            <Image
                                source={icons.menu}
                                style={{
                                    height: 24,
                                    width: 24,
                                }}
                            />
                        </TouchableOpacity>
                        <View
                            style={{
                                flexDirection: 'column',
                                marginLeft: 12,
                            }}
                        >
                            <Image
                                source={images.logo}
                                style={{
                                    height: 55,
                                    width: 224,
                                }}
                            />
                        </View>
                    </View>
                </View>

                <ScrollView style={{ marginTop: 5 }}>
                    {renderSearchBar()}

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
