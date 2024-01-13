import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useReducer, useEffect, useCallback } from 'react'
import { COLORS, images } from '../constants'
import * as Animatable from "react-native-animatable"
import Input from '../components/Input'
import Button from '../components/Button'
import { validateInput } from '../utils/actions/formActions'
import { reducer } from '../utils/reducers/formReducers'
import { commonStyles } from '../styles/CommonStyles'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'
import axios from "axios";
const isTestMode = true

const initialState = {
    inputValues: {
        fullName: isTestMode ? 'John Doe' : '',
        email: isTestMode ? 'example@gmail.com' : '',
        password: isTestMode ? '**********' : '',
        confirmPassword: isTestMode ? '**********' : ''
    },
    inputValidities: {
        fullName: false,
        email: false,
        password: false,
        confirmPassword: false
    },
    formIsValid: false,
}

const Signup = ({ navigation }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
      });
    
      const [formState, setFormState] = useState({
        inputValidities: {
          fullName: true,
          email: true,
          password: true,
        },
      });
    
      const [isLoading, setIsLoading] = useState(false);
    
      const inputChangedHandler = (id, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };
    
      const validateInput = () => {
        const newInputValidities = {
          fullName: formData.fullName.trim() !== '',
          email: /^\S+@\S+\.\S+$/.test(formData.email),
          password: formData.password.trim().length >= 6,
        };
    
        setFormState((prevFormState) => ({
          ...prevFormState,
          inputValidities: newInputValidities,
        }));
    
        return Object.values(newInputValidities).every((isValid) => isValid);
      };
    
      const handleSignUp = async () => {
        console.log(formData)
        // if (!formData.fullName || !formData.email || !formData.password) {
        //   alert('Please fill in all fields');
        //   return
        // }
        navigation.navigate('Login');
    
        // Validation successful, make API call
        try {
          setIsLoading(true);
    
          let headers = {
            "Content-Type": "application/json; charset=utf-8",
          };

          const user={
            username:formData.fullName,
            email_address: formData.email,
            password: formData.password
          }

          const response = await axios.post(
            `http://10.0.2.2:8000/isotopes/user_save_details/`,
            user,
  
            {
              headers: headers,
            }
          );

          if (response.status==201) {
            navigation.navigate('Login'); // Navigate to the login screen after successful signup
          } else {
            throw new Error('Signup failed');
          }
    
          setIsLoading(false);
          
        } catch (error) {
          // Handle error
          setIsLoading(false);
          alert('Error', 'Signup failed. Please try again.');
        }
      };
    return (
        <LinearGradient 
          colors={[COLORS.btnclr, COLORS.btnclr]}
          style={{ flex: 1, backgroundColor: 'red' }}>
            <StatusBar hidden={true} />
            <View style={commonStyles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={commonStyles.backIcon}>
                    <MaterialIcons name="keyboard-arrow-left" size={24} color={COLORS.black} />
                </TouchableOpacity>
                <Text style={commonStyles.headerTitle}>Sign up</Text>
                <Text
                    style={commonStyles.subHeaderTitle}>Please sign up to get started</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={commonStyles.footer}>
                < KeyboardAwareScrollView>
                    <Text style={commonStyles.inputHeader}>Name</Text>
                    <Input
                        id="fullName"
                        onInputChanged={inputChangedHandler}
                        errorText={formState.inputValidities['fullName']}
                        placeholder="Name"
                        placeholderTextColor={COLORS.black}
                    />
                    <Text style={commonStyles.inputHeader}>Email</Text>
                    <Input
                        id="email"
                        onInputChanged={inputChangedHandler}
                        errorText={formState.inputValidities['email']}
                        placeholder="email"
                        placeholderTextColor={COLORS.black}
                        keyboardType="email-address"
                    />
                    <Text style={commonStyles.inputHeader}>Password</Text>
                    <Input
                        onInputChanged={inputChangedHandler}
                        errorText={formState.inputValidities['password']}
                        autoCapitalize="none"
                        id="password"
                        placeholder="password"
                        placeholderTextColor={COLORS.black}
                        secureTextEntry={true}
                    />

                 

                    <Button
                        title="SIGN UP"
                        isLoading={isLoading}
                        filled
                        onPress={handleSignUp}
                        style={commonStyles.btn1}
                    />
                </KeyboardAwareScrollView>
            </Animatable.View>
        </LinearGradient>
    )
}

export default Signup