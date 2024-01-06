import { View, Platform, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, icons } from '../constants'
import { Profile, Search, Message, HomeV1, MyOrders, HomeV2, HomeV3, PersonalProfile } from '../screens'
import { Ionicons } from '@expo/vector-icons'
import DrawerNavigation from './DrawerNavigation'

const Tab = createBottomTabNavigator()

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        background: COLORS.white,
    },
}

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="Home"
                component={DrawerNavigation}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={focused ? icons.home : icons.homeOutline}
                                resizeMode="contain"
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.blue : COLORS.black
                                }}
                            />
                        )
                    },
                }}
            />

            <Tab.Screen
                name="Orders"
                component={DrawerNavigation}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={focused ? icons.shoppingBag : icons.shoppingBagOutline}
                                resizeMode="contain"
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.blue : COLORS.black
                                }}
                            />
                        )
                    },
                }}
            />

          

            <Tab.Screen
                name="Message"
                component={DrawerNavigation}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={focused ? icons.chat : icons.chatOutline2}
                                resizeMode="contain"
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.blue : COLORS.black
                                }}
                            />
                        )
                    },
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={focused ? icons.user : icons.userOutline}
                                resizeMode="contain"
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.blue : COLORS.black
                                }}
                            />
                        )
                    },
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation