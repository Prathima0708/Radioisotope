import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState, useReducer, useEffect, useCallback } from 'react'
import { COLORS, FONTS, icons } from '../constants'
import Checkbox from 'expo-checkbox'
import * as Animatable from 'react-native-animatable'
import Input from '../components/Input'
import Button from '../components/Button'
import { validateInput } from '../utils/actions/formActions'
import { reducer } from '../utils/reducers/formReducers'
import { commonStyles } from '../styles/CommonStyles'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import axios from 'axios'

const isTestMode = true

const initialState = {
    inputValues: {
        email: isTestMode ? 'example@gmail.com' : '',
        password: isTestMode ? '**********' : '',
    },
    inputValidities: {
        email: false,
        password: false,
    },
    formIsValid: false,
}

const Login = ({ navigation }) => {
    const [isChecked, setChecked] = useState(false)
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    // const [formState, dispatchFormState] = useReducer(reducer, initialState)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [formState, setFormState] = useState({
        inputValidities: {
            email: true,
            password: true,
        },
    })

    const inputChangedHandler = (id, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }))
    }

    // const inputChangedHandler = useCallback(
    //     (inputId, inputValue) => {
    //         const result = validateInput(inputId, inputValue)
    //         dispatchFormState({ inputId, validationResult: result, inputValue })
    //     },
    //     [dispatchFormState]
    // )

    useEffect(() => {
        if (error) {
            Alert.alert('An error occured', error)
        }
    }, [error])

    // implementing facebook authentication
    const facebookAuthHandler = () => {
        return null
    }

    // implementing twitter authentication
    const twitterAuthHandler = () => {
        return null
    }

    // implementing apple authentication
    const appleAuthHandler = () => {
        return null
    }

    const handleLogin = async () => {
        console.log(formData)
        // if (!formData.email || !formData.password) {
        //   alert('Please fill in all fields');
        //   return
        // }
        navigation.navigate('Main')

        // Validation successful, make API call
        try {
            setIsLoading(true)

            let headers = {
                'Content-Type': 'application/json; charset=utf-8',
            }

            const user = {
                email_address: formData.email,
                password: formData.password,
            }

            const response = await axios.post(
                `http://10.0.2.2:8000/isotopes/user_login/`,
                user,

                {
                    headers: headers,
                }
            )
            navigation.navigate('Main')
            console.log(response.data)
            // if (response.status==200) {
            //   navigation.navigate('Main'); // Navigate to the login screen after successful signup
            // } else {
            //   throw new Error('Login failed');
            // }

            setIsLoading(false)
        } catch (error) {
            // Handle error
            setIsLoading(false)
            //  alert('Error', 'Login failed. Please try again.');
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/w2.png')} // Replace with the actual path to your first image
                style={styles.image}
            />
            <Image
                source={require('../assets/images/wtext.png')} // Replace with the actual path to your first image
                style={{ height: 100, width: 300 }}
            />
            {/* <Text style={styles.heading}>Welcome to Radioisotope App</Text> */}
            <Text style={styles.paragraph}>
                Go to the hub for radioisotope related to radiation based calculation and Conversions!
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Main')}
            >
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300, // Set the width as per your design
        height: 200, // Set the height as per your design
        resizeMode: 'contain',
        marginBottom: 10, // Adjust as needed
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 30,
        fontFamily:'regular',
        marginHorizontal:3,
    },
    button: {
        backgroundColor: '#3498db', // You can change the color to your preference
        padding: 15,
        paddingHorizontal: 30,
        borderRadius: 9,
        alignItems: 'center',
        margin: 20,
    },
    buttonText: {
        color: '#fff', // Text color
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily:'regular'
    },
})

export default Login

// import React from 'react'
// import {
//     StyleSheet,
//     View,
//     Image,
//     Text,
//     TouchableOpacity,
//     Button,
//     Dimensions,
// } from 'react-native'
// import { commonStyles } from '../styles/CommonStyles'

// const Login = ({ navigation }) => {
//     return (
//         <View style={[{ flex: 1 }, { flexDirection: 'column' }]}>
//             <View style={{ flex: 35, backgroundColor: 'white' }}>
//                 <Image
//                     style={styles.bannerImage}
//                     source={require('../assets/images/w2.png')}
//                 />
//                 <Text
//                     style={{
//                         left: 30,
//                         color: 'grey',
//                         fontSize: deviceWidth < 370 ? 18 : 22,
//                         top: 5,
//                         fontFamily: 'Regular',
//                     }}
//                 >
//                     Welcome to
//                 </Text>
//                 <Text
//                     style={{
//                         left: 30,
//                         fontSize: deviceWidth < 370 ? 24 : 32,
//                         fontWeight: '900',
//                         fontFamily: 'Regular',
//                         top: '1%',
//                     }}
//                 >
//                     ddd
//                 </Text>

//                 <View style={styles.typeText}>
//                     <Text
//                         style={{
//                             fontSize: deviceWidth < 370 ? 16 : 18,
//                             margin: 10,
//                             fontFamily: 'Regular',
//                             top: '3%',
//                         }}
//                     >
//                         We provide qualitative education in a safe and caring
//                         environment, inspiring all our students to reach their
//                         true potential and emerge as responsible participants in
//                         a global society.
//                     </Text>
//                 </View>
//             </View>
//             <View style={{ flex: 5, backgroundColor: 'white' }}>
//                 <View style={[{ flex: 1 }, { flexDirection: 'row' }]}>
//                     <View style={{ flex: 2.5 }}></View>
//                     <View style={{ flex: 0.8, right: '40%', bottom: '12%' }}>
//                         <Button
//                             title="LOG IN"
//                             filled
//                             // onPress={() => navigation.navigate('Main')}
//                             style={commonStyles.btn}
//                         />
//                     </View>
//                 </View>
//             </View>
//         </View>
//     )
// }

// const deviceHieght = Dimensions.get('window').height
// const deviceWidth = Dimensions.get('window').width
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     inner: {
//         backgroundColor: 'white',
//     },

//     mainContainer: {
//         height: deviceHieght < 600 ? '105%' : '100%',
//     },
//     bannerImage: {
//         width: '100%',
//         height: '48%',
//     },
//     textContainer: {
//         position: 'absolute',
//         top: deviceHieght < 600 ? '40%' : '40%',
//     },
//     typeText: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         top: -15,
//         padding: 20,
//     },
//     logo: {
//         width: '30%',
//         height: '20%',
//         marginLeft: 25,
//         position: 'absolute',
//         top: 120,
//     },

//     submit: {
//         width: deviceWidth < 370 ? '32%' : '30%',
//         height: deviceWidth < 370 ? '24%' : '22%',
//         left: deviceHieght < 600 ? '60%' : '60%',
//         backgroundColor: '#002D62',
//         borderRadius: 10,
//         borderWidth: 1,
//         top: deviceHieght < 600 ? '90%' : '100%',
//         position: 'absolute',
//         borderColor: '#fff',
//     },
//     submitText: {
//         padding: '13%',
//         paddingTop: deviceHieght < 600 ? '6%' : '7%',

//         color: '#fff',
//         fontSize: 24,
//         fontFamily: 'HindSemiBold',
//     },
// })

// export default Login
