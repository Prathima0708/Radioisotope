import React, { useRef, useState } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image,
    SafeAreaView,
    StatusBar,
} from 'react-native'
import { COLORS, icons } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { commonStyles } from '../../styles/CommonStyles'
import UnitDropdown from './UnitDropdown'
import DropDownPicker from 'react-native-dropdown-picker'
import ModalDropdown from 'react-native-modal-dropdown'
import { SelectList } from 'react-native-dropdown-select-list'

const UnitConversionCalculator = ({ route }) => {
    const [inputValue, setInputValue] = useState('')
    const [outputValue, setOutputValue] = useState()

    const { units, name } = route.params
    const inputRef = useRef()

    const [selectedSourceUnit, setSelectedSourceUnit] = useState(null)
    const [selectedDestinationUnit, setSelectedDestinationUnit] = useState(null)
    const [selectListKey, setSelectListKey] = useState(0)

    // Add your conversion logic here
    // const convertUnits = () => {
    //     console.log(selectedSourceUnit ,selectedDestinationUnit)
    //     if (selectedSourceUnit==='Bq' && selectedDestinationUnit==='GBq'){
    //        const result= 1 * Math.pow(10, -9);
    //        setOutputValue(result)
    //     } else if (selectedSourceUnit==='Bq' && selectedDestinationUnit==='MBq'){
    //         const result= 1 * Math.pow(10, -6);
    //         setOutputValue(result)
    //      }else if (selectedSourceUnit==='Bq' && selectedDestinationUnit==='kBq'){
    //         const result= 1 * 0.0001
    //         setOutputValue(result)
    //      }
    //     // Implement your conversion logic based on inputValue
    //     // Update the outputValue state with the result
    //     // For example: setOutputValue(convertFunction(inputValue));
    // }

    // const convertUnits = () => {
    //     console.log(selectedSourceUnit, selectedDestinationUnit)
    //     if (selectedSourceUnit === 'Bq' && selectedDestinationUnit === 'GBq') {
    //         const result = inputValue * 1.0* Math.pow(10, -9)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Bq' &&
    //         selectedDestinationUnit === 'MBq'
    //     ) {
    //         const result = inputValue * Math.pow(10, -6)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Bq' &&
    //         selectedDestinationUnit === 'kBq'
    //     ) {
    //         const result = inputValue * 0.001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Bq' &&
    //         selectedDestinationUnit === 'mBq'
    //     ) {
    //         const result = inputValue * 1000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Bq' &&
    //         selectedDestinationUnit === 'KCi'
    //     ) {
    //         const result = inputValue * 2.7027027027027 * Math.pow(10, -14)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Bq' &&
    //         selectedDestinationUnit === 'Ci'
    //     ) {
    //         const result = inputValue * 2.7027027027027 * Math.pow(10, -11)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Bq' &&
    //         selectedDestinationUnit === 'mCi'
    //     ) {
    //         const result = inputValue * 2.7027027027027 * Math.pow(10, -8)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Bq' &&
    //         selectedDestinationUnit === 'µCi'
    //     ) {
    //         const result = inputValue * 2.7027027027027 * Math.pow(10, -7)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Bq' &&
    //         selectedDestinationUnit === 'dpm'
    //     ) {
    //         const result = inputValue * 60
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'GBq' &&
    //         selectedDestinationUnit === 'MBQ'
    //     ) {
    //         const result = inputValue * 1000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'GBq' &&
    //         selectedDestinationUnit === 'KBQ'
    //     ) {
    //         const result = inputValue * 1000000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'GBq' &&
    //         selectedDestinationUnit === 'Bq'
    //     ) {
    //         const result = inputValue * 1000000000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'GBq' &&
    //         selectedDestinationUnit === 'mBq'
    //     ) {
    //         const result = inputValue * 1000000000000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'GBq' &&
    //         selectedDestinationUnit === 'kCi'
    //     ) {
    //         const result = inputValue * 2.7 * Math.pow(10, -5)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'GBq' &&
    //         selectedDestinationUnit === 'Ci'
    //     ) {
    //         const result = inputValue * 0.027027
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'GBq' &&
    //         selectedDestinationUnit === 'mCi'
    //     ) {
    //         const result = inputValue * 27.027027
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'GBq' &&
    //         selectedDestinationUnit === 'µCi'
    //     ) {
    //         const result = 1 * 27027.027027
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'GBq' &&
    //         selectedDestinationUnit === 'pCi'
    //     ) {
    //         const result = inputValue * 27027027027.027
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'GBq' &&
    //         selectedDestinationUnit === 'dpm'
    //     ) {
    //         const result = inputValue * 60000000000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'MBq' &&
    //         selectedDestinationUnit === 'GBq'
    //     ) {
    //         const result = inputValue * 0.001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'MBq' &&
    //         selectedDestinationUnit === 'kBq'
    //     ) {
    //         const result = inputValue * 1000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'MBq' &&
    //         selectedDestinationUnit === 'Bq'
    //     ) {
    //         const result = inputValue * 1000000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'MBq' &&
    //         selectedDestinationUnit === 'mBq'
    //     ) {
    //         const result = inputValue * 1000000000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'MBq' &&
    //         selectedDestinationUnit === 'kCi'
    //     ) {
    //         const result = inputValue * 2.7027027027027 * Math.pow(10, -8)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'MBq' &&
    //         selectedDestinationUnit === 'Ci'
    //     ) {
    //         const result = inputValue * 2.7027027027027 * Math.pow(10, -5)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'MBq' &&
    //         selectedDestinationUnit === 'mCi'
    //     ) {
    //         const result = inputValue * 0.027027027027027
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'MBq' &&
    //         selectedDestinationUnit === 'µCi'
    //     ) {
    //         const result = inputValue * 27.027027027027
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'MBq' &&
    //         selectedDestinationUnit === 'pCi'
    //     ) {
    //         const result = inputValue * 27027027.027027
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'MBq' &&
    //         selectedDestinationUnit === 'dpm'
    //     ) {
    //         const result = inputValue * 60000000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'KBq' &&
    //         selectedDestinationUnit === 'GBq'
    //     ) {
    //         const result = inputValue * Math.pow(10, -6)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'KBq' &&
    //         selectedDestinationUnit === 'MBq'
    //     ) {
    //         const result = inputValue * 0.001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'KBq' &&
    //         selectedDestinationUnit === 'Bq'
    //     ) {
    //         const result = inputValue * 1000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'KBq' &&
    //         selectedDestinationUnit === 'mBq'
    //     ) {
    //         const result = inputValue * 1000000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'KBq' &&
    //         selectedDestinationUnit === 'kCi'
    //     ) {
    //         const result = inputValue * 2.7027027027027 * Math.pow(10, -11)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'KBq' &&
    //         selectedDestinationUnit === 'Ci'
    //     ) {
    //         const result = inputValue * 2.7027027027027 * Math.pow(10, -8)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'KBq' &&
    //         selectedDestinationUnit === 'mCi'
    //     ) {
    //         const result = inputValue * 2.7027027027027 * Math.pow(10, -5)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'KBq' &&
    //         selectedDestinationUnit === 'µCi'
    //     ) {
    //         const result = inputValue * 0.027027027027027
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'KBq' &&
    //         selectedDestinationUnit === 'pCi'
    //     ) {
    //         const result = inputValue * 27027.027027027
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'KBq' &&
    //         selectedDestinationUnit === 'dpm'
    //     ) {
    //         const result = inputValue * 60000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mBq' &&
    //         selectedDestinationUnit === 'GBq'
    //     ) {
    //         const result = inputValue * Math.pow(10, -12)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mBq' &&
    //         selectedDestinationUnit === 'MBq'
    //     ) {
    //         const result = inputValue * Math.pow(10, -9)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mBq' &&
    //         selectedDestinationUnit === 'Bq'
    //     ) {
    //         const result = inputValue * 0.001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mBq' &&
    //         selectedDestinationUnit === 'kBq'
    //     ) {
    //         const result = inputValue * Math.pow(10, -6)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mBq' &&
    //         selectedDestinationUnit === 'kCi'
    //     ) {
    //         const result = inputValue * 2.7027027027027 * Math.pow(10, -17)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mBq' &&
    //         selectedDestinationUnit === 'Ci'
    //     ) {
    //         const result = inputValue * 2.7027027027027 * Math.pow(10, -14)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mBq' &&
    //         selectedDestinationUnit === 'mCi'
    //     ) {
    //         const result = inputValue * 2.7027027027027 * Math.pow(10, -11)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mBq' &&
    //         selectedDestinationUnit === 'µCi'
    //     ) {
    //         const result = inputValue * 2.7027027027027 * Math.pow(10, -8)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mBq' &&
    //         selectedDestinationUnit === 'pCi'
    //     ) {
    //         const result = inputValue * 0.027027027027027
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mBq' &&
    //         selectedDestinationUnit === 'dpm'
    //     ) {
    //         const result = inputValue * 0.06
    //         setOutputValue(result)
    //     }
    //     //equivalent
    //     else if (
    //         selectedSourceUnit === 'Sv' &&
    //         selectedDestinationUnit === 'mSv'
    //     ) {
    //         const result = inputValue * 1000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Sv' &&
    //         selectedDestinationUnit === 'µSv'
    //     ) {
    //         const result = inputValue * 1000000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Sv' &&
    //         selectedDestinationUnit === 'rem'
    //     ) {
    //         const result = inputValue * 100
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Sv' &&
    //         selectedDestinationUnit === 'mrem'
    //     ) {
    //         const result = inputValue * 100000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Sv' &&
    //         selectedDestinationUnit === 'µrem'
    //     ) {
    //         const result = inputValue * 100000000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mSv' &&
    //         selectedDestinationUnit === 'Sv'
    //     ) {
    //         const result = inputValue * 0.001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mSv' &&
    //         selectedDestinationUnit === 'µSv'
    //     ) {
    //         const result = inputValue * 1000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mSv' &&
    //         selectedDestinationUnit === 'rem'
    //     ) {
    //         const result = inputValue * 0.1
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mSv' &&
    //         selectedDestinationUnit === 'mrem'
    //     ) {
    //         const result = inputValue * 100
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mSv' &&
    //         selectedDestinationUnit === 'µrem'
    //     ) {
    //         const result = inputValue * 100000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µSv' &&
    //         selectedDestinationUnit === 'Sv'
    //     ) {
    //         const result = inputValue * Math.pow(10, -6)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µSv' &&
    //         selectedDestinationUnit === 'mSv'
    //     ) {
    //         const result = inputValue * 0.001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µSv' &&
    //         selectedDestinationUnit === 'rem'
    //     ) {
    //         const result = inputValue * 0.0001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µSv' &&
    //         selectedDestinationUnit === 'mrem'
    //     ) {
    //         const result = inputValue * 0.1
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µSv' &&
    //         selectedDestinationUnit === 'µrem'
    //     ) {
    //         const result = inputValue * 100
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'rem' &&
    //         selectedDestinationUnit === 'Sv'
    //     ) {
    //         const result = inputValue * 0.01
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'rem' &&
    //         selectedDestinationUnit === 'Sv'
    //     ) {
    //         const result = inputValue * 10
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'rem' &&
    //         selectedDestinationUnit === 'µSv'
    //     ) {
    //         const result = inputValue * 10000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'rem' &&
    //         selectedDestinationUnit === 'mrem'
    //     ) {
    //         const result = inputValue * 1000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'rem' &&
    //         selectedDestinationUnit === 'µrem'
    //     ) {
    //         const result = inputValue * 1000000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrem' &&
    //         selectedDestinationUnit === 'Sv'
    //     ) {
    //         const result = inputValue * Math.pow(10, -5)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrem' &&
    //         selectedDestinationUnit === 'mSv'
    //     ) {
    //         const result = inputValue * 0.01
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrem' &&
    //         selectedDestinationUnit === 'µSv'
    //     ) {
    //         const result = inputValue * 10
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrem' &&
    //         selectedDestinationUnit === 'rem'
    //     ) {
    //         const result = inputValue * 0.001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrem' &&
    //         selectedDestinationUnit === 'µrem'
    //     ) {
    //         const result = inputValue * 1000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µrem' &&
    //         selectedDestinationUnit === 'Sv'
    //     ) {
    //         const result = inputValue * Math.pow(10, -8)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µrem' &&
    //         selectedDestinationUnit === 'mSv'
    //     ) {
    //         const result = inputValue * Math.pow(10, -5)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µrem' &&
    //         selectedDestinationUnit === 'µSv'
    //     ) {
    //         const result = inputValue * 0.01
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µrem' &&
    //         selectedDestinationUnit === 'rem'
    //     ) {
    //         const result = inputValue * Math.pow(10, -6)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µrem' &&
    //         selectedDestinationUnit === 'mrem'
    //     ) {
    //         const result = inputValue * 0.001
    //         setOutputValue(result)
    //     }
    //     //absorbed
    //     else if (
    //         selectedSourceUnit === 'Gy' &&
    //         selectedDestinationUnit === 'mGy'
    //     ) {
    //         const result = inputValue * 1000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Gy' &&
    //         selectedDestinationUnit === 'µGy'
    //     ) {
    //         const result = inputValue * 1000000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Gy' &&
    //         selectedDestinationUnit === 'rd'
    //     ) {
    //         const result = inputValue * 100
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Gy' &&
    //         selectedDestinationUnit === 'mrd'
    //     ) {
    //         const result = inputValue * 100000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Gy' &&
    //         selectedDestinationUnit === 'µrd'
    //     ) {
    //         const result = inputValue * 100000000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Gy' &&
    //         selectedDestinationUnit === 'J/kg'
    //     ) {
    //         const result = inputValue * 1
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Gy' &&
    //         selectedDestinationUnit === 'mJ/kg'
    //     ) {
    //         const result = inputValue * 1000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'Gy' &&
    //         selectedDestinationUnit === 'µJ/kg'
    //     ) {
    //         const result = inputValue * 1000000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mGy' &&
    //         selectedDestinationUnit === 'Gy'
    //     ) {
    //         const result = inputValue * 0.001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mGy' &&
    //         selectedDestinationUnit === 'µGy'
    //     ) {
    //         const result = inputValue * 1000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mGy' &&
    //         selectedDestinationUnit === 'rd'
    //     ) {
    //         const result = inputValue * 0.1
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mGy' &&
    //         selectedDestinationUnit === 'mrd'
    //     ) {
    //         const result = inputValue * 100
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mGy' &&
    //         selectedDestinationUnit === 'µrd'
    //     ) {
    //         const result = inputValue * 100000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mGy' &&
    //         selectedDestinationUnit === 'J/kg'
    //     ) {
    //         const result = inputValue * 0.001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mGy' &&
    //         selectedDestinationUnit === 'mJ/kg'
    //     ) {
    //         const result = inputValue * 1
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mGy' &&
    //         selectedDestinationUnit === 'µJ/kg'
    //     ) {
    //         const result = inputValue * 1000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µGy' &&
    //         selectedDestinationUnit === 'Gy'
    //     ) {
    //         const result = inputValue * Math.pow(10, -6)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µGy' &&
    //         selectedDestinationUnit === 'mGy'
    //     ) {
    //         const result = inputValue * 0.001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µGy' &&
    //         selectedDestinationUnit === 'rd'
    //     ) {
    //         const result = inputValue * 0.0001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µGy' &&
    //         selectedDestinationUnit === 'mrd'
    //     ) {
    //         const result = inputValue * 0.1
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µGy' &&
    //         selectedDestinationUnit === 'µrd'
    //     ) {
    //         const result = inputValue * 100
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µGy' &&
    //         selectedDestinationUnit === 'J/kg'
    //     ) {
    //         const result = inputValue * Math.pow(10, -6)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µGy' &&
    //         selectedDestinationUnit === 'mJ/kg'
    //     ) {
    //         const result = inputValue * 0.001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µGy' &&
    //         selectedDestinationUnit === 'µJ/kg'
    //     ) {
    //         const result = inputValue * 1
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'rd' &&
    //         selectedDestinationUnit === 'Gy'
    //     ) {
    //         const result = inputValue * 0.01
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'rd' &&
    //         selectedDestinationUnit === 'mGy'
    //     ) {
    //         const result = inputValue * 10
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'rd' &&
    //         selectedDestinationUnit === 'µGy'
    //     ) {
    //         const result = inputValue * 10000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'rd' &&
    //         selectedDestinationUnit === 'mrd'
    //     ) {
    //         const result = inputValue * 1000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'rd' &&
    //         selectedDestinationUnit === 'µrd'
    //     ) {
    //         const result = inputValue * 1000000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'rd' &&
    //         selectedDestinationUnit === 'J/kg'
    //     ) {
    //         const result = inputValue * 0.01
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'rd' &&
    //         selectedDestinationUnit === 'mJ/kg'
    //     ) {
    //         const result = inputValue * 10
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'rd' &&
    //         selectedDestinationUnit === 'µJ/kg'
    //     ) {
    //         const result = inputValue * 10000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrd' &&
    //         selectedDestinationUnit === 'Gy'
    //     ) {
    //         const result = inputValue * Math.pow(10, -5)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrd' &&
    //         selectedDestinationUnit === 'mGy'
    //     ) {
    //         const result = inputValue * 0.01
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrd' &&
    //         selectedDestinationUnit === 'µGy'
    //     ) {
    //         const result = inputValue * 10
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrd' &&
    //         selectedDestinationUnit === 'rd'
    //     ) {
    //         const result = inputValue * 0.001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrd' &&
    //         selectedDestinationUnit === 'µrd'
    //     ) {
    //         const result = inputValue * 1000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrd' &&
    //         selectedDestinationUnit === 'J/kg'
    //     ) {
    //         const result = inputValue * Math.pow(10, -5)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrd' &&
    //         selectedDestinationUnit === 'mJ/kg'
    //     ) {
    //         const result = inputValue * 0.01
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrd' &&
    //         selectedDestinationUnit === 'µJ/kg'
    //     ) {
    //         const result = inputValue * 10
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrd' &&
    //         selectedDestinationUnit === 'Gy'
    //     ) {
    //         const result = inputValue * Math.pow(10, -8)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrd' &&
    //         selectedDestinationUnit === 'mGy'
    //     ) {
    //         const result = inputValue * Math.pow(10, -5)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrd' &&
    //         selectedDestinationUnit === 'µGy'
    //     ) {
    //         const result = inputValue * 0.01
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrd' &&
    //         selectedDestinationUnit === 'rd'
    //     ) {
    //         const result = inputValue * Math.pow(10, -6)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrd' &&
    //         selectedDestinationUnit === 'mrd'
    //     ) {
    //         const result = inputValue * 0.001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrd' &&
    //         selectedDestinationUnit === 'J/kg'
    //     ) {
    //         const result = inputValue * Math.pow(10, -8)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrd' &&
    //         selectedDestinationUnit === 'mJ/kg'
    //     ) {
    //         const result = inputValue * Math.pow(10, -5)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mrd' &&
    //         selectedDestinationUnit === 'µJ/kg'
    //     ) {
    //         const result = inputValue * 0.01
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'J/kg' &&
    //         selectedDestinationUnit === 'Gy'
    //     ) {
    //         const result = inputValue * 1
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'J/kg' &&
    //         selectedDestinationUnit === 'mGy'
    //     ) {
    //         const result = inputValue * 1000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'J/kg' &&
    //         selectedDestinationUnit === 'µGy'
    //     ) {
    //         const result = inputValue * 1000000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'J/kg' &&
    //         selectedDestinationUnit === 'rd'
    //     ) {
    //         const result = inputValue * 100
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'J/kg' &&
    //         selectedDestinationUnit === 'mrd'
    //     ) {
    //         const result = inputValue * 100000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'J/kg' &&
    //         selectedDestinationUnit === 'µrd'
    //     ) {
    //         const result = inputValue * 100000000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'J/kg' &&
    //         selectedDestinationUnit === 'mJ/kg'
    //     ) {
    //         const result = inputValue * 1000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'J/kg' &&
    //         selectedDestinationUnit === 'µJ/kg'
    //     ) {
    //         const result = inputValue * 1000000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mJ/kg' &&
    //         selectedDestinationUnit === 'Gy'
    //     ) {
    //         const result = inputValue * 0.001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mJ/kg' &&
    //         selectedDestinationUnit === 'mGy'
    //     ) {
    //         const result = inputValue * 1
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mJ/kg' &&
    //         selectedDestinationUnit === 'µGy'
    //     ) {
    //         const result = inputValue * 1000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mJ/kg' &&
    //         selectedDestinationUnit === 'rd'
    //     ) {
    //         const result = inputValue * 0.1
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mJ/kg' &&
    //         selectedDestinationUnit === 'µrd'
    //     ) {
    //         const result = inputValue * 100
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mJ/kg' &&
    //         selectedDestinationUnit === 'J/kg'
    //     ) {
    //         const result = inputValue * 100000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mJ/kg' &&
    //         selectedDestinationUnit === 'µJ/kg'
    //     ) {
    //         const result = inputValue * 0.001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'mJ/kg' &&
    //         selectedDestinationUnit === 'µJ/kg'
    //     ) {
    //         const result = inputValue * 1000
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µJ/kg' &&
    //         selectedDestinationUnit === 'Gy'
    //     ) {
    //         const result = inputValue * Math.pow(10, -6)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µJ/kg' &&
    //         selectedDestinationUnit === 'mGy'
    //     ) {
    //         const result = inputValue * 0.001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µJ/kg' &&
    //         selectedDestinationUnit === 'µGy'
    //     ) {
    //         const result = inputValue * 1
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µJ/kg' &&
    //         selectedDestinationUnit === 'rd'
    //     ) {
    //         const result = inputValue * 0.0001
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µJ/kg' &&
    //         selectedDestinationUnit === 'mrd'
    //     ) {
    //         const result = inputValue * 0.1
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µJ/kg' &&
    //         selectedDestinationUnit === 'µrd'
    //     ) {
    //         const result = inputValue * 100
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µJ/kg' &&
    //         selectedDestinationUnit === 'J/kg'
    //     ) {
    //         const result = inputValue * Math.pow(10 - 6)
    //         setOutputValue(result)
    //     } else if (
    //         selectedSourceUnit === 'µJ/kg' &&
    //         selectedDestinationUnit === 'mJ/kg'
    //     ) {
    //         const result = inputValue * 0.001
    //         setOutputValue(result)
    //     }
    // }
    
    const convertUnits = () => {
        console.log(selectedSourceUnit, selectedDestinationUnit)
        if (selectedSourceUnit === 'Bq' && selectedDestinationUnit === 'GBq') {
            const result = inputValue * 1.0* Math.pow(10, -9)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Bq' &&
            selectedDestinationUnit === 'MBq'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -6)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Bq' &&
            selectedDestinationUnit === 'kBq'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Bq' &&
            selectedDestinationUnit === 'mBq'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Bq' &&
            selectedDestinationUnit === 'KCi'
        ) {
            const result = inputValue * 2.702 * Math.pow(10, -14)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Bq' &&
            selectedDestinationUnit === 'Ci'
        ) {
            const result = inputValue * 2.702 * Math.pow(10, -11)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Bq' &&
            selectedDestinationUnit === 'mCi'
        ) {
            const result = inputValue * 2.702 * Math.pow(10, -8)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Bq' &&
            selectedDestinationUnit === 'µCi'
        ) {
            const result = inputValue * 2.702 * Math.pow(10, -7)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Bq' &&
            selectedDestinationUnit === 'dpm'
        ) {
            const result = inputValue * 60
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'GBq' &&
            selectedDestinationUnit === 'MBQ'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'GBq' &&
            selectedDestinationUnit === 'KBQ'
        ) {
            const result = inputValue * 1000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'GBq' &&
            selectedDestinationUnit === 'Bq'
        ) {
            const result = inputValue * 1000000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'GBq' &&
            selectedDestinationUnit === 'mBq'
        ) {
            const result = inputValue * 1000000000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'GBq' &&
            selectedDestinationUnit === 'kCi'
        ) {
            const result = inputValue * 2.7 * Math.pow(10, -5)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'GBq' &&
            selectedDestinationUnit === 'Ci'
        ) {
            const result = inputValue * 0.027
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'GBq' &&
            selectedDestinationUnit === 'mCi'
        ) {
            const result = inputValue * 27.027
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'GBq' &&
            selectedDestinationUnit === 'µCi'
        ) {
            const result = 1 * 27027.02703
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'GBq' &&
            selectedDestinationUnit === 'pCi'
        ) {
            const result = inputValue * 270
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'GBq' &&
            selectedDestinationUnit === 'dpm'
        ) {
            const result = inputValue * 60000000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'MBq' &&
            selectedDestinationUnit === 'GBq'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'MBq' &&
            selectedDestinationUnit === 'kBq'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'MBq' &&
            selectedDestinationUnit === 'Bq'
        ) {
            const result = inputValue * 1000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'MBq' &&
            selectedDestinationUnit === 'mBq'
        ) {
            const result = inputValue * 1000000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'MBq' &&
            selectedDestinationUnit === 'kCi'
        ) {
            const result = inputValue * 2.702 * Math.pow(10, -8)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'MBq' &&
            selectedDestinationUnit === 'Ci'
        ) {
            const result = inputValue * 2.702 * Math.pow(10, -5)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'MBq' &&
            selectedDestinationUnit === 'mCi'
        ) {
            const result = inputValue * 0.027
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'MBq' &&
            selectedDestinationUnit === 'µCi'
        ) {
            const result = inputValue * 27.027
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'MBq' &&
            selectedDestinationUnit === 'pCi'
        ) {
            const result = inputValue * 27027027.027
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'MBq' &&
            selectedDestinationUnit === 'dpm'
        ) {
            const result = inputValue * 60000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'KBq' &&
            selectedDestinationUnit === 'GBq'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -6)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'KBq' &&
            selectedDestinationUnit === 'MBq'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'KBq' &&
            selectedDestinationUnit === 'Bq'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'KBq' &&
            selectedDestinationUnit === 'mBq'
        ) {
            const result = inputValue * 1000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'KBq' &&
            selectedDestinationUnit === 'kCi'
        ) {
            const result = inputValue * 2.702 * Math.pow(10, -11)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'KBq' &&
            selectedDestinationUnit === 'Ci'
        ) {
            const result = inputValue * 2.702 * Math.pow(10, -8)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'KBq' &&
            selectedDestinationUnit === 'mCi'
        ) {
            const result = inputValue * 2.702 * Math.pow(10, -5)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'KBq' &&
            selectedDestinationUnit === 'µCi'
        ) {
            const result = inputValue * 0.027
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'KBq' &&
            selectedDestinationUnit === 'pCi'
        ) {
            const result = inputValue * 27027.027
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'KBq' &&
            selectedDestinationUnit === 'dpm'
        ) {
            const result = inputValue * 60000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'GBq'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -12)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'MBq'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -9)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'Bq'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'kBq'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -6)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'kCi'
        ) {
            const result = inputValue * 2.702 * Math.pow(10, -17)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'Ci'
        ) {
            const result = inputValue * 2.702 * Math.pow(10, -14)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'mCi'
        ) {
            const result = inputValue * 2.702 * Math.pow(10, -11)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'µCi'
        ) {
            const result = inputValue * 2.702 * Math.pow(10, -8)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'pCi'
        ) {
            const result = inputValue * 0.027
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'dpm'
        ) {
            const result = inputValue * 0.06
            setOutputValue(result)
        }
        //equivalent
        else if (
            selectedSourceUnit === 'Sv' &&
            selectedDestinationUnit === 'mSv'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Sv' &&
            selectedDestinationUnit === 'µSv'
        ) {
            const result = inputValue * 1000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Sv' &&
            selectedDestinationUnit === 'rem'
        ) {
            const result = inputValue * 100
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Sv' &&
            selectedDestinationUnit === 'mrem'
        ) {
            const result = inputValue * 100000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Sv' &&
            selectedDestinationUnit === 'µrem'
        ) {
            const result = inputValue * 100000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mSv' &&
            selectedDestinationUnit === 'Sv'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mSv' &&
            selectedDestinationUnit === 'µSv'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mSv' &&
            selectedDestinationUnit === 'rem'
        ) {
            const result = inputValue * 0.1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mSv' &&
            selectedDestinationUnit === 'mrem'
        ) {
            const result = inputValue * 100
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mSv' &&
            selectedDestinationUnit === 'µrem'
        ) {
            const result = inputValue * 100000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µSv' &&
            selectedDestinationUnit === 'Sv'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -6)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µSv' &&
            selectedDestinationUnit === 'mSv'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µSv' &&
            selectedDestinationUnit === 'rem'
        ) {
            const result = inputValue * 0.0001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µSv' &&
            selectedDestinationUnit === 'mrem'
        ) {
            const result = inputValue * 0.1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µSv' &&
            selectedDestinationUnit === 'µrem'
        ) {
            const result = inputValue * 100
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'rem' &&
            selectedDestinationUnit === 'Sv'
        ) {
            const result = inputValue * 0.01
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'rem' &&
            selectedDestinationUnit === 'mSv'
        ) {
            const result = inputValue * 10
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'rem' &&
            selectedDestinationUnit === 'µSv'
        ) {
            const result = inputValue * 10000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'rem' &&
            selectedDestinationUnit === 'mrem'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'rem' &&
            selectedDestinationUnit === 'µrem'
        ) {
            const result = inputValue * 1000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mrem' &&
            selectedDestinationUnit === 'Sv'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -5)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mrem' &&
            selectedDestinationUnit === 'mSv'
        ) {
            const result = inputValue * 0.01
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mrem' &&
            selectedDestinationUnit === 'µSv'
        ) {
            const result = inputValue * 10
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mrem' &&
            selectedDestinationUnit === 'rem'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mrem' &&
            selectedDestinationUnit === 'µrem'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrem' &&
            selectedDestinationUnit === 'Sv'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -8)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrem' &&
            selectedDestinationUnit === 'mSv'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -5)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrem' &&
            selectedDestinationUnit === 'µSv'
        ) {
            const result = inputValue * 0.01
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrem' &&
            selectedDestinationUnit === 'rem'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -6)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrem' &&
            selectedDestinationUnit === 'mrem'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        }
        //absorbed
        else if (
            selectedSourceUnit === 'Gy' &&
            selectedDestinationUnit === 'mGy'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Gy' &&
            selectedDestinationUnit === 'µGy'
        ) {
            const result = inputValue * 1000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Gy' &&
            selectedDestinationUnit === 'rd'
        ) {
            const result = inputValue * 100
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Gy' &&
            selectedDestinationUnit === 'mrd'
        ) {
            const result = inputValue * 100000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Gy' &&
            selectedDestinationUnit === 'µrd'
        ) {
            const result = inputValue * 100000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Gy' &&
            selectedDestinationUnit === 'J/kg'
        ) {
            const result = inputValue * 1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Gy' &&
            selectedDestinationUnit === 'mJ/kg'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Gy' &&
            selectedDestinationUnit === 'µJ/kg'
        ) {
            const result = inputValue * 1000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mGy' &&
            selectedDestinationUnit === 'Gy'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mGy' &&
            selectedDestinationUnit === 'µGy'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mGy' &&
            selectedDestinationUnit === 'rd'
        ) {
            const result = inputValue * 0.1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mGy' &&
            selectedDestinationUnit === 'mrd'
        ) {
            const result = inputValue * 100
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mGy' &&
            selectedDestinationUnit === 'µrd'
        ) {
            const result = inputValue * 100000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mGy' &&
            selectedDestinationUnit === 'J/kg'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mGy' &&
            selectedDestinationUnit === 'mJ/kg'
        ) {
            const result = inputValue * 1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mGy' &&
            selectedDestinationUnit === 'µJ/kg'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µGy' &&
            selectedDestinationUnit === 'Gy'
        ) {
            const result = inputValue * 1.0* Math.pow(10, -6)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µGy' &&
            selectedDestinationUnit === 'mGy'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µGy' &&
            selectedDestinationUnit === 'rd'
        ) {
            const result = inputValue * 0.0001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µGy' &&
            selectedDestinationUnit === 'mrd'
        ) {
            const result = inputValue * 0.1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µGy' &&
            selectedDestinationUnit === 'µrd'
        ) {
            const result = inputValue * 100
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µGy' &&
            selectedDestinationUnit === 'J/kg'
        ) {
            const result = inputValue *1.0* Math.pow(10, -6)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µGy' &&
            selectedDestinationUnit === 'mJ/kg'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µGy' &&
            selectedDestinationUnit === 'µJ/kg'
        ) {
            const result = inputValue * 1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'rd' &&
            selectedDestinationUnit === 'Gy'
        ) {
            const result = inputValue * 0.01
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'rd' &&
            selectedDestinationUnit === 'mGy'
        ) {
            const result = inputValue * 10
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'rd' &&
            selectedDestinationUnit === 'µGy'
        ) {
            const result = inputValue * 10000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'rd' &&
            selectedDestinationUnit === 'mrd'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'rd' &&
            selectedDestinationUnit === 'µrd'
        ) {
            const result = inputValue * 1000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'rd' &&
            selectedDestinationUnit === 'J/kg'
        ) {
            const result = inputValue * 0.01
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'rd' &&
            selectedDestinationUnit === 'mJ/kg'
        ) {
            const result = inputValue * 10
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'rd' &&
            selectedDestinationUnit === 'µJ/kg'
        ) {
            const result = inputValue * 10000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mrd' &&
            selectedDestinationUnit === 'Gy'
        ) {
            const result = inputValue *1.0* Math.pow(10, -5)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mrd' &&
            selectedDestinationUnit === 'mGy'
        ) {
            const result = inputValue * 0.01
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mrd' &&
            selectedDestinationUnit === 'µGy'
        ) {
            const result = inputValue * 10
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mrd' &&
            selectedDestinationUnit === 'rd'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mrd' &&
            selectedDestinationUnit === 'µrd'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mrd' &&
            selectedDestinationUnit === 'J/kg'
        ) {
            const result = inputValue * 1.0* Math.pow(10, -5)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mrd' &&
            selectedDestinationUnit === 'mJ/kg'
        ) {
            const result = inputValue * 0.01
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mrd' &&
            selectedDestinationUnit === 'µJ/kg'
        ) {
            const result = inputValue * 10
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrd' &&
            selectedDestinationUnit === 'Gy'
        ) {
            const result = inputValue * 1.0*Math.pow(10, -8)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrd' &&
            selectedDestinationUnit === 'mGy'
        ) {
            const result = inputValue *1.0* Math.pow(10, -5)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrd' &&
            selectedDestinationUnit === 'µGy'
        ) {
            const result = inputValue * 0.01
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrd' &&
            selectedDestinationUnit === 'rd'
        ) {
            const result = inputValue *1.0* Math.pow(10, -6)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrd' &&
            selectedDestinationUnit === 'mrd'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrd' &&
            selectedDestinationUnit === 'J/kg'
        ) {
            const result = inputValue * 1.0*Math.pow(10, -8)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrd' &&
            selectedDestinationUnit === 'mJ/kg'
        ) {
            const result = inputValue * 1.0*Math.pow(10, -5)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrd' &&
            selectedDestinationUnit === 'µJ/kg'
        ) {
            const result = inputValue * 0.01
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'J/kg' &&
            selectedDestinationUnit === 'Gy'
        ) {
            const result = inputValue * 1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'J/kg' &&
            selectedDestinationUnit === 'mGy'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'J/kg' &&
            selectedDestinationUnit === 'µGy'
        ) {
            const result = inputValue * 1000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'J/kg' &&
            selectedDestinationUnit === 'rd'
        ) {
            const result = inputValue * 100
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'J/kg' &&
            selectedDestinationUnit === 'mrd'
        ) {
            const result = inputValue * 100000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'J/kg' &&
            selectedDestinationUnit === 'µrd'
        ) {
            const result = inputValue * 100000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'J/kg' &&
            selectedDestinationUnit === 'mJ/kg'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'J/kg' &&
            selectedDestinationUnit === 'µJ/kg'
        ) {
            const result = inputValue * 1000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mJ/kg' &&
            selectedDestinationUnit === 'Gy'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mJ/kg' &&
            selectedDestinationUnit === 'mGy'
        ) {
            const result = inputValue * 1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mJ/kg' &&
            selectedDestinationUnit === 'µGy'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mJ/kg' &&
            selectedDestinationUnit === 'rd'
        ) {
            const result = inputValue * 0.1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mJ/kg' &&
            selectedDestinationUnit === 'µrd'
        ) {
            const result = inputValue * 100
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mJ/kg' &&
            selectedDestinationUnit === 'J/kg'
        ) {
            const result = inputValue * 100000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mJ/kg' &&
            selectedDestinationUnit === 'µJ/kg'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mJ/kg' &&
            selectedDestinationUnit === 'µJ/kg'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µJ/kg' &&
            selectedDestinationUnit === 'Gy'
        ) {
            const result = inputValue *1.0* Math.pow(10, -6)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µJ/kg' &&
            selectedDestinationUnit === 'mGy'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µJ/kg' &&
            selectedDestinationUnit === 'µGy'
        ) {
            const result = inputValue * 1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µJ/kg' &&
            selectedDestinationUnit === 'rd'
        ) {
            const result = inputValue * 0.0001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µJ/kg' &&
            selectedDestinationUnit === 'mrd'
        ) {
            const result = inputValue * 0.1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µJ/kg' &&
            selectedDestinationUnit === 'µrd'
        ) {
            const result = inputValue * 100
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µJ/kg' &&
            selectedDestinationUnit === 'J/kg'
        ) {
            const result = inputValue * 1.0*Math.pow(10,-6)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µJ/kg' &&
            selectedDestinationUnit === 'mJ/kg'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        }
    //Contiunation
    //weight
    
        else if (
            selectedSourceUnit === 'kgs' &&
            selectedDestinationUnit === 'lbs'
        ) {
            const result = inputValue / 2.2
            setOutputValue(result)
        }
    
        else if (
            selectedSourceUnit === 'lbs' &&
            selectedDestinationUnit === 'kg'
        ) {
            const result = inputValue * 2.2
            setOutputValue(result)
        }
    //height
        else if (
            selectedSourceUnit === 'inches' &&
            selectedDestinationUnit === 'cm'
        ) {
            const result = inputValue / 2.54
            setOutputValue(result)
        }
    
        else if (
            selectedSourceUnit === 'cm' &&
            selectedDestinationUnit === 'inches'
        ) {
            const result = inputValue * 2.54
            setOutputValue(result)
        }
        //Temperature
        else if (
            selectedSourceUnit === 'F' &&
            selectedDestinationUnit === 'C'
        ) {
            const result = (inputValue - 32)/1.8
            setOutputValue(result)
        }
        else if (
            selectedSourceUnit === 'C' &&
            selectedDestinationUnit === 'F'
        ) {
            const result = (inputValue * 1.8)+32
            setOutputValue(result)
        }
    
        //Liquid
        else if (
            selectedSourceUnit === 'Ounce' &&
            selectedDestinationUnit === 'mL'
        ) {
            const result = inputValue * 29.57352956
            setOutputValue(result)
        }
        else if (
            selectedSourceUnit === 'mL' &&
            selectedDestinationUnit === 'Ounce'
        ) {
            const result = inputValue / 29.57
            setOutputValue(result)
        }
        else if (
            selectedSourceUnit === 'Ounce' &&
            selectedDestinationUnit === 'mL'
        ) {
            const result = inputValue / 29.57
            setOutputValue(result)
        }
    //Energy
    else if (
        selectedSourceUnit === 'J' &&
        selectedDestinationUnit === 'eV'
    ) {
        const result = inputValue * 6.242*Math.pow(10,18)     
        setOutputValue(result)
    }
    else if (
        selectedSourceUnit === 'eV' &&
        selectedDestinationUnit === 'J'
    ) {
        const result = inputValue * 1.602 *Math.pow(10,-19)    
        setOutputValue(result)
    }
    //Exposure
    else if (
        selectedSourceUnit === 'C/kg' &&
        selectedDestinationUnit === 'R'
    ) {
        const result = inputValue * 3876     
        setOutputValue(result)
    }
    else if (
        selectedSourceUnit === 'R' &&
        selectedDestinationUnit === 'C/kg'
    ) {
        const result = inputValue * 2.58 *Math.pow(10,-4)   
        setOutputValue(result)
    }
    
    
    
    }
    const filteredDestinationUnits = units
        .filter((unit) => unit.destinationUnit !== selectedSourceUnit)
        .map((unit) => ({
            key: unit.id,
            value: unit.destinationUnit,
            // disabled: shouldDisableDestination(unit.destinationUnit),
        }))

    const handleInputFocus = () => {
        // Immediately blur the input to prevent the keyboard from appearing
        inputRef.current.blur()
    }
    const handleCalculatorButtonClick = (buttonText) => {
        if (buttonText === 'C') {
            // Clear the input field when 'C' is pressed
            setInputValue('')
            setOutputValue('')
            setSelectedSourceUnit(null)
            setSelectedDestinationUnit(null) // Clear the state
            setSelectListKey((prevKey) => prevKey + 1)
        } else if (buttonText === '⌫' && inputValue.length > 0) {
            // Remove the last character from the input field when '⌫' is pressed
            setInputValue(inputValue.slice(0, -1))
        } else {
            // Append the button value to the input field for other buttons
            setInputValue(inputValue + buttonText)
        }
    }
    const renderCalculatorButton = (buttonText) => (
        <TouchableOpacity
            style={styles.calculatorButton}
            onPress={() => handleCalculatorButtonClick(buttonText)}
        >
            <Text style={styles.calculatorButtonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
    const renderHeader = () => {
        const navigation = useNavigation()
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    marginHorizontal: 16,
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={commonStyles.header1Icon}
                    >
                        <Image
                            resizeMode="contain"
                            source={icons.arrowLeft}
                            style={{
                                height: 24,
                                width: 24,
                                tintColor: COLORS.black,
                            }}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{
                            marginLeft: 12,
                            fontSize: 17,
                            fontFamily: 'regular',
                        }}
                    >
                        {name} Calculator
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => console.log('Pressed')}
                    style={commonStyles.header1Icon}
                ></TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar hidden={true} />
            {renderHeader()}
            <View style={styles.container}>
                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <TextInput
                            ref={inputRef}
                            style={{
                                height: 40,
                                borderColor: 'gray',
                                borderWidth: 1,
                                marginBottom: 20,
                                paddingHorizontal: 10,
                            }}
                            placeholder="Enter value"
                            keyboardType="numeric"
                            value={inputValue}
                            onChangeText={(text) => setInputValue(text)}
                            onFocus={handleInputFocus}
                        />
                        <View style={styles.space} />
                        <View style={{ width: 100 }}>
                            <SelectList
                                key={selectListKey}
                                setSelected={(val) =>
                                    setSelectedSourceUnit(val)
                                }
                                data={units.map((unit) => ({
                                    key: unit.key,
                                    value: unit.sourceUnit,
                                }))}
                                save="value"
                                placeholder="Select"
                            />
                        </View>

                        {/* <View style={{justifyContent:'center',position:'fixed',bottom:12,left:10}}>
                        <Text>To</Text>
                    </View> */}

                        <View style={styles.space} />
                        <View style={{ width: 100 }}>
                            <SelectList
                                key={selectListKey}
                                setSelected={(val) =>
                                    setSelectedDestinationUnit(val)
                                }
                                data={filteredDestinationUnits}
                                save="value"
                                placeholder="Select"
                            />
                        </View>
                    </View>

                    {/* <UnitDropdown
                            label="Select Source Unit"
                            options={sourceOptions}
                            selectedUnit={sourceUnit}
                            onValueChange={(value) => setSourceUnit(value)}
                        />
                    </View>

                    <UnitDropdown
                        label="Select Destination Unit"
                        options={destinationOptions}
                        selectedUnit={destinationUnit}
                        onValueChange={(value) => setDestinationUnit(value)}
                    /> */}
                </View>
                {/* Calculator Buttons */}
                <Text>{outputValue}</Text>
                <View style={styles.calculatorContainer}>
                    <View style={styles.rowContainer}>
                        {renderCalculatorButton('1')}
                        {renderCalculatorButton('2')}
                        {renderCalculatorButton('3')}
                        {renderCalculatorButton('⌫')}
                    </View>
                    <View style={styles.rowContainer}>
                        {renderCalculatorButton('4')}
                        {renderCalculatorButton('5')}
                        {renderCalculatorButton('6')}
                    </View>
                    <View style={styles.rowContainer}>
                        {renderCalculatorButton('7')}
                        {renderCalculatorButton('8')}
                        {renderCalculatorButton('9')}
                    </View>
                    <View style={styles.rowContainer}>
                        {renderCalculatorButton('0')}
                        {renderCalculatorButton('.')}
                        {renderCalculatorButton('C')}

                        {/* Add more calculator buttons as needed */}
                    </View>
                    <TouchableOpacity
                        style={styles.calculateButton}
                        onPress={convertUnits}
                    >
                        <Text style={styles.calculateButtonText}>Convert</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginHorizontal: 30,
    },
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    textInput: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 10,
        paddingLeft: 10,
    },
    outputTextInput: {
        backgroundColor: '#eee',
    },
    calculatorContainer: {
        width: 300,
        marginHorizontal: 20,
        marginTop: 50,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    calculatorButton: {
        flex: 1,
        backgroundColor: COLORS.lightBlue,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 7,
        margin: 3,
    },
    calculatorButtonText: {
        fontSize: 20,
    },
    calculateButton: {
        backgroundColor: COLORS.blue,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 5,
        marginTop: 10,
    },
    calculateButtonText: {
        color: 'white',
        fontSize: 20,
    },
    space: {
        width: 20, // or whatever size you need
        height: 20,
    },
})

export default UnitConversionCalculator
