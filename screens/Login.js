import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState, useReducer, useEffect, useCallback } from 'react'
import { COLORS, FONTS, icons } from '../constants'
import Checkbox from 'expo-checkbox'
import * as Animatable from "react-native-animatable"
import Input from '../components/Input'
import Button from '../components/Button'
import { validateInput } from '../utils/actions/formActions'
import { reducer } from '../utils/reducers/formReducers'
import { commonStyles } from '../styles/CommonStyles'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import axios from "axios";

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
    const [isChecked, setChecked] = useState(false);
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    // const [formState, dispatchFormState] = useReducer(reducer, initialState)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const [formState, setFormState] = useState({
        inputValidities: {
          email: true,
          password: true,
        },
      });

      const inputChangedHandler = (id, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };

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
        navigation.navigate('Main');
    
        // Validation successful, make API call
        try {
          setIsLoading(true);
    
          let headers = {
            "Content-Type": "application/json; charset=utf-8",
          };

          const user={
            email_address: formData.email,
            password: formData.password
          }

          const response = await axios.post(
            `http://10.0.2.2:8000/isotopes/user_login/`,
            user,
  
            {
              headers: headers,
            }
          );
          navigation.navigate('Main');
          console.log(response.data)
          // if (response.status==200) {
          //   navigation.navigate('Main'); // Navigate to the login screen after successful signup
          // } else {
          //   throw new Error('Login failed');
          // }
    
          setIsLoading(false);
          
        } catch (error) {
          // Handle error
          setIsLoading(false);
        //  alert('Error', 'Login failed. Please try again.');
        }
      };

    return (
        <LinearGradient 
          colors={[COLORS.btnclr, COLORS.btnclr]}
          style={{ flex: 1, backgroundColor: COLORS.blue }}>
            <StatusBar hidden />
            <View style={commonStyles.header}>
                <Text style={commonStyles.headerTitle}>Log In</Text>
                <Text
                    style={commonStyles.subHeaderTitle}>Please sign in to your existing account</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={commonStyles.footer}>
                <Text style={commonStyles.inputHeader}>Email</Text>
                <Input
                    id="email"
                    onInputChanged={inputChangedHandler}
                    errorText={formState.inputValidities['email']}
                    placeholder="example@gmail.com"
                    placeholderTextColor={COLORS.black}
                    keyboardType="email-address"
                />
                <Text style={commonStyles.inputHeader}>Password</Text>
                <Input
                    onInputChanged={inputChangedHandler}
                    errorText={formState.inputValidities['password']}
                    autoCapitalize="none"
                    id="password"
                    placeholder="*************"
                    placeholderTextColor={COLORS.black}
                    secureTextEntry={true}
                />



             <View style={{marginBottom:30}}/>
                <Button
                    title="LOG IN"
                    
                    isLoading={isLoading}
                    filled
                    onPress={handleLogin}
                    // onPress={() => navigation.navigate('Main')}
                    style={commonStyles.btn}
                />
              

                
                <View style={commonStyles.center}>
                    <Text style={{ ...FONTS.body4, color: COLORS.black }}>Don't have an account?{" "}</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text style={{ ...FONTS.body4, color: COLORS.blue }}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        ...FONTS.body4,
                        color: COLORS.black,
                        textAlign: 'center',
                    }}
                >
                    Or
                </Text>

                <View style={commonStyles.socialContainer}>
                <Text style={{ ...FONTS.body4, color: COLORS.black }}>Forgot password ?{" "}</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ForgotPassword")}
                    >
                        <Text style={{ ...FONTS.body4, color: COLORS.blue }}>Reset</Text>
                    </TouchableOpacity>
                </View>

              
            </Animatable.View>
        </LinearGradient>
    )
}

export default Login