import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useReducer, useEffect, useCallback } from 'react'
import { COLORS } from '../constants'
import * as Animatable from 'react-native-animatable'
import Input from '../components/Input'
import Button from '../components/Button'
import { validateInput } from '../utils/actions/formActions'
import { reducer } from '../utils/reducers/formReducers'
import { commonStyles } from '../styles/CommonStyles'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import axios from "axios";

const isTestMode = true

const initialState = {
    inputValues: {
        email: isTestMode ? 'example@gmail.com' : '',
    },
    inputValidities: {
        email: false,
    },
    formIsValid: false,
}

const ForgotPassword = ({ navigation }) => {
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [formState, dispatchFormState] = useReducer(reducer, initialState)

    const [formData, setFormData] = useState({
        password: ''
      });

    // const inputChangedHandler = useCallback(
    //     (inputId, inputValue) => {
    //         const result = validateInput(inputId, inputValue)
    //         dispatchFormState({ inputId, validationResult: result, inputValue })
    //     },
    //     [dispatchFormState]
    // )

    const inputChangedHandler = (id, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };

    useEffect(() => {
        if (error) {
            Alert.alert('An error occured', error)
        }
    }, [error])

    const handlePasswordChange = async () => {

        // if (!formData.email || !formData.password) {
        //   alert('Please fill in all fields');
        //   return
        // }
  
    
        // Validation successful, make API call
        try {
          setIsLoading(true);
    
          let headers = {
            "Content-Type": "application/json; charset=utf-8",
          };

          const user={
            password: formData.password
          }

          const pk=1;

          const response = await axios.put(
            `http://10.0.2.2:8000/isotopes/forgotpass/${pk}/`,
            user,
  
            {
              headers: headers,
            }
          );

          console.log(response.status)

          if (response.status==200) {
            navigation.navigate('Main'); // Navigate to the login screen after successful signup
          } else {
            throw new Error('Login failed');
          }
    
          setIsLoading(false);
          
        } catch (error) {
          // Handle error
          setIsLoading(false);
        //   alert('Error', 'Login failed. Please try again.');
        }
      };

    return (
        <LinearGradient
            colors={[COLORS.btnclr, COLORS.btnclr]}
            style={{ flex: 1, backgroundColor: COLORS.blue }}
        >
            <StatusBar style="light" />
            <View style={commonStyles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={commonStyles.backIcon}
                >
                    <MaterialIcons
                        name="keyboard-arrow-left"
                        size={24}
                        color={COLORS.black}
                    />
                </TouchableOpacity>
                <Text style={commonStyles.headerTitle}>Forgot Password</Text>
                <Text style={commonStyles.subHeaderTitle}>
                    Please provide to your existing email
                </Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={commonStyles.footer}
            >
                <Text style={commonStyles.inputHeader}>New Password</Text>
                <Input
                    id="newPassword"
                    onInputChanged={inputChangedHandler}
                    errorText={formState.inputValidities['newPassword']}
                    placeholder="*************"
                    placeholderTextColor={COLORS.black}
                    secureTextEntry={true}
                />
                <Text style={commonStyles.inputHeader}>Retype Password</Text>
                <Input
                    id="retypePassword"
                    onInputChanged={inputChangedHandler}
                    errorText={formState.inputValidities['retypePassword']}
                    placeholder="*************"
                    placeholderTextColor={COLORS.black}
                    secureTextEntry={true}
                />
                <Button
                    title="SAVE"
                    isLoading={isLoading}
                    filled
                    onPress={handlePasswordChange}
                    style={commonStyles.btn1}
                />
            </Animatable.View>
        </LinearGradient>
    )
}

export default ForgotPassword
