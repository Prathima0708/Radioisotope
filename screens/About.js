import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Dimensions,
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS } from '../constants'
import Header from '../components/Header'
import { ScrollView } from 'react-native-virtualized-view'
const {height,width}=Dimensions.get('window')
const About = () => {
    return (
        <SafeAreaView style={{ flex: 1,backgroundColor: COLORS.white }}>
           <StatusBar barStyle="dark-content" backgroundColor="white" />
            <View
                style={{ flex: 1, backgroundColor: COLORS.white, padding: width*0.06,paddingTop:width*0.01 }}
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
                        radioisotopia@gmail.com
                    </Text>
                    
                    {/* Button after Current Radiation Section */}
                 <View style={{height:70}}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}


export default About