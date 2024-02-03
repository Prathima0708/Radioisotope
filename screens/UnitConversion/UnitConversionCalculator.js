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
    Dimensions,
} from 'react-native'
import { COLORS, icons } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { commonStyles } from '../../styles/CommonStyles'
import UnitDropdown from './UnitDropdown'
import DropDownPicker from 'react-native-dropdown-picker'

import { SelectList } from 'react-native-dropdown-select-list'
import { Dropdown } from 'react-native-element-dropdown'
import { AntDesign } from '@expo/vector-icons'
const { height, width } = Dimensions.get('window')
const UnitConversionCalculator = ({ route }) => {
    const [inputValue, setInputValue] = useState('')
    const [outputValue, setOutputValue] = useState()

    const { units, name } = route.params
    const inputRef = useRef()

    const [selectedSourceUnit, setSelectedSourceUnit] = useState(null)
    const [selectedDestinationUnit, setSelectedDestinationUnit] = useState(null)
    const [showDestinationUnit, setShowDestinationUnit] = useState(false)
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

    const convertUnits = () => {
        setShowDestinationUnit(true)

        if (selectedSourceUnit === 'Bq' && selectedDestinationUnit === 'GBq') {
            const result = inputValue * 1.0 * Math.pow(10, -9)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Bq' &&
            selectedDestinationUnit === 'MBq'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -6)
            const formattedResult = result
                .toExponential(1)
                .replace(/e\+(\d+)/, 'E+$1')
            setOutputValue(formattedResult)
        } else if (
            selectedSourceUnit === 'Bq' &&
            selectedDestinationUnit === 'mBq'
        ) {
            const result = inputValue * 1000
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
            selectedDestinationUnit === 'kCi'
        ) {
            const result = inputValue * 2.7027027027027 * Math.pow(10, -14)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Bq' &&
            selectedDestinationUnit === 'Ci'
        ) {
            const result = inputValue * 2.7027027027027 * Math.pow(10, -11)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Bq' &&
            selectedDestinationUnit === 'mCi'
        ) {
            const result = inputValue * 2.7027027027027 * Math.pow(10, -8)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Bq' &&
            selectedDestinationUnit === 'µCi'
        ) {
            const result = inputValue * 2.7027027027027 * Math.pow(10, -7)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Bq' &&
            selectedDestinationUnit === 'dpm'
        ) {
            const result = inputValue * 60
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Bq' &&
            selectedDestinationUnit === 'pCi'
        ) {
            const result = inputValue * 2.7027027027027 * Math.pow(10, 0)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'GBq' &&
            selectedDestinationUnit === 'MBq'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'GBq' &&
            selectedDestinationUnit === 'mBq'
        ) {
            const result = inputValue * 1000000000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'GBq' &&
            selectedDestinationUnit === 'kBq'
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
            const formattedResult = result
                .toExponential(2)
                .replace(/e\+(\d+)/, 'E+$1')

            setOutputValue(formattedResult)
        } else if (
            selectedSourceUnit === 'GBq' &&
            selectedDestinationUnit === 'Ci'
        ) {
            const result = inputValue * 0.027027027
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'GBq' &&
            selectedDestinationUnit === 'mCi'
        ) {
            const result = inputValue * 27.02702703
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
            const result = inputValue * 27027027027
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
            const result = inputValue * 2.7027027027027 * Math.pow(10, -8)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'MBq' &&
            selectedDestinationUnit === 'Ci'
        ) {
            const result = inputValue * 2.7027027027027 * Math.pow(10, -5)
            const formattedResult = result.toExponential(13).replace(/e\+(\d+)/, 'E+$1');
            setOutputValue(formattedResult)
        } else if (
            selectedSourceUnit === 'MBq' &&
            selectedDestinationUnit === 'mCi'
        ) {
            const result = inputValue * 0.027027027027027
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'MBq' &&
            selectedDestinationUnit === 'µCi'
        ) {
            const result = inputValue * 27.027027027027
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'MBq' &&
            selectedDestinationUnit === 'pCi'
        ) {
            const result = inputValue * 27027027.027027
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'MBq' &&
            selectedDestinationUnit === 'dpm'
        ) {
            const result = inputValue * 60000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'kBq' &&
            selectedDestinationUnit === 'GBq'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -6)
            const formattedResult = result.toExponential(1).replace(/e\+(\d+)/, 'E+$1');
            setOutputValue(formattedResult)
        } else if (
            selectedSourceUnit === 'kBq' &&
            selectedDestinationUnit === 'MBq'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        }
        else if (
            selectedSourceUnit === 'kBq' &&
            selectedDestinationUnit === 'mBq'
        ) {
            const result = inputValue * 1000000
            setOutputValue(result)
        }
         else if (
            selectedSourceUnit === 'kBq' &&
            selectedDestinationUnit === 'Bq'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'kBq' &&
            selectedDestinationUnit === 'mBq'
        ) {
            const result = inputValue * 1000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'kBq' &&
            selectedDestinationUnit === 'kCi'
        ) {
            const result = inputValue * 2.7027027027027 * Math.pow(10, -11)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'kBq' &&
            selectedDestinationUnit === 'Ci'
        ) {
            const result = inputValue * 2.7027027027027 * Math.pow(10, -8)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'kBq' &&
            selectedDestinationUnit === 'mCi'
        ) {
            const result = inputValue * 2.7027027027027 * Math.pow(10, -5)
            const formattedResult = result.toExponential(13).replace(/e\+(\d+)/, 'E+$1');
            setOutputValue(formattedResult)
        } 
        else if (
            selectedSourceUnit === 'kBq' &&
            selectedDestinationUnit === 'pCi'
        ) {
            const result = inputValue * 27027.027027027
            setOutputValue(result)
        }
        else if (
            selectedSourceUnit === 'kBq' &&
            selectedDestinationUnit === 'µCi'
        ) {
            const result = inputValue * 0.027027027027027
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'pCi'
        ) {
            const result = inputValue * 27027.027027027
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'kBq' &&
            selectedDestinationUnit === 'dpm'
        ) {
            const result = inputValue * 60000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'GBq'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -12)
            const formattedResult = result.toExponential(1).replace(/e\+(\d+)/, 'E+$1');
            setOutputValue(formattedResult)
        }
        else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'MBq'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -9)
            const formattedResult = result.toExponential(1).replace(/e\+(\d+)/, 'E+$1');
            setOutputValue(formattedResult)
        }
         else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'mBq'
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
            const formattedResult = result.toExponential(1).replace(/e\+(\d+)/, 'E+$1');
            setOutputValue(formattedResult)
        } else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'kCi'
        ) {
            const result = inputValue * 2.7027027027027 * Math.pow(10, -17)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'Ci'
        ) {
            const result = inputValue * 2.7027027027027 * Math.pow(10, -14)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'mCi'
        ) {
            const result = inputValue * 2.7027027027027 * Math.pow(10, -11)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'µCi'
        ) {
            const result = inputValue * 2.7027027027027 * Math.pow(10, -8)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mBq' &&
            selectedDestinationUnit === 'pCi'
        ) {
            const result = inputValue * 0.027027027027027
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
            selectedDestinationUnit === 'J/Kg'
        ) {
            const result = inputValue * 1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Gy' &&
            selectedDestinationUnit === 'mJ/Kg'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Gy' &&
            selectedDestinationUnit === 'µJ/Kg'
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
            selectedDestinationUnit === 'J/Kg'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mGy' &&
            selectedDestinationUnit === 'mJ/Kg'
        ) {
            const result = inputValue * 1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mGy' &&
            selectedDestinationUnit === 'µJ/Kg'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µGy' &&
            selectedDestinationUnit === 'Gy'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -6)
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
            selectedDestinationUnit === 'J/Kg'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -6)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µGy' &&
            selectedDestinationUnit === 'mJ/Kg'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µGy' &&
            selectedDestinationUnit === 'µJ/Kg'
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
            selectedDestinationUnit === 'J/Kg'
        ) {
            const result = inputValue * 0.01
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'rd' &&
            selectedDestinationUnit === 'mJ/Kg'
        ) {
            const result = inputValue * 10
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'rd' &&
            selectedDestinationUnit === 'µJ/Kg'
        ) {
            const result = inputValue * 10000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mrd' &&
            selectedDestinationUnit === 'Gy'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -5)
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
            selectedDestinationUnit === 'J/Kg'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -5)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mrd' &&
            selectedDestinationUnit === 'mJ/Kg'
        ) {
            const result = inputValue * 0.01
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mrd' &&
            selectedDestinationUnit === 'µJ/Kg'
        ) {
            const result = inputValue * 10
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrd' &&
            selectedDestinationUnit === 'Gy'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -8)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrd' &&
            selectedDestinationUnit === 'mGy'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -5)
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
            const result = inputValue * 1.0 * Math.pow(10, -6)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrd' &&
            selectedDestinationUnit === 'mrd'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrd' &&
            selectedDestinationUnit === 'J/Kg'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -8)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrd' &&
            selectedDestinationUnit === 'mJ/Kg'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -5)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µrd' &&
            selectedDestinationUnit === 'µJ/Kg'
        ) {
            const result = inputValue * 0.01
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'J/Kg' &&
            selectedDestinationUnit === 'Gy'
        ) {
            const result = inputValue * 1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'J/Kg' &&
            selectedDestinationUnit === 'mGy'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'J/Kg' &&
            selectedDestinationUnit === 'µGy'
        ) {
            const result = inputValue * 1000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'J/Kg' &&
            selectedDestinationUnit === 'rd'
        ) {
            const result = inputValue * 100
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'J/Kg' &&
            selectedDestinationUnit === 'mrd'
        ) {
            const result = inputValue * 100000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'J/Kg' &&
            selectedDestinationUnit === 'µrd'
        ) {
            const result = inputValue * 100000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'J/Kg' &&
            selectedDestinationUnit === 'mJ/Kg'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'J/Kg' &&
            selectedDestinationUnit === 'µJ/Kg'
        ) {
            const result = inputValue * 1000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mJ/Kg' &&
            selectedDestinationUnit === 'Gy'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mJ/Kg' &&
            selectedDestinationUnit === 'mGy'
        ) {
            const result = inputValue * 1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mJ/Kg' &&
            selectedDestinationUnit === 'µGy'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mJ/Kg' &&
            selectedDestinationUnit === 'rd'
        ) {
            const result = inputValue * 0.1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mJ/Kg' &&
            selectedDestinationUnit === 'mrd'
        ) {
            const result = inputValue * 100
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mJ/Kg' &&
            selectedDestinationUnit === 'µrd'
        ) {
            const result = inputValue * 100000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mJ/Kg' &&
            selectedDestinationUnit === 'J/Kg'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mJ/Kg' &&
            selectedDestinationUnit === 'µJ/Kg'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µJ/Kg' &&
            selectedDestinationUnit === 'Gy'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -6)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µJ/Kg' &&
            selectedDestinationUnit === 'mGy'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µJ/Kg' &&
            selectedDestinationUnit === 'µGy'
        ) {
            const result = inputValue * 1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µJ/Kg' &&
            selectedDestinationUnit === 'rd'
        ) {
            const result = inputValue * 0.0001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µJ/Kg' &&
            selectedDestinationUnit === 'mrd'
        ) {
            const result = inputValue * 0.1
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µJ/Kg' &&
            selectedDestinationUnit === 'µrd'
        ) {
            const result = inputValue * 100
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µJ/Kg' &&
            selectedDestinationUnit === 'J/Kg'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -6)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µJ/Kg' &&
            selectedDestinationUnit === 'mJ/Kg'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        }
        //Contiunation
        //weight
        else if (
            selectedSourceUnit === 'kg' &&
            selectedDestinationUnit === 'lbs'
        ) {
            const result = inputValue * 2.2
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'lbs' &&
            selectedDestinationUnit === 'kg'
        ) {
            const result = inputValue / 2.2
            setOutputValue(result)
        }
        //height
        else if (
            selectedSourceUnit === 'inches' &&
            selectedDestinationUnit === 'cm'
        ) {
            const result = inputValue * 2.54
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'cm' &&
            selectedDestinationUnit === 'inches'
        ) {
            const result = inputValue / 2.54
            setOutputValue(result)
        }
        //Temperature
        else if (
            selectedSourceUnit === 'F' &&
            selectedDestinationUnit === 'C'
        ) {
            const result = (inputValue - 32) / 1.8
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'C' &&
            selectedDestinationUnit === 'F'
        ) {
            const result = inputValue * 1.8 + 32
            setOutputValue(result)
        }

        //Liquid
        else if (
            selectedSourceUnit === 'Ounce' &&
            selectedDestinationUnit === 'ML'
        ) {
            const result = inputValue * 29.57352956
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'ML' &&
            selectedDestinationUnit === 'Ounce'
        ) {
            const result = inputValue / 29.57
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Ounce' &&
            selectedDestinationUnit === 'ML'
        ) {
            const result = inputValue / 29.57
            setOutputValue(result)
        }
        //Energy
        else if (
            selectedSourceUnit === 'J' &&
            selectedDestinationUnit === 'eV'
        ) {
            const result = (
                inputValue *
                6.242 *
                Math.pow(10, 18)
            ).toExponential(3)
            const formattedResult = result.replace(/e\+(\d+)/, 'E$1 ')
            setOutputValue(formattedResult)
        } else if (
            selectedSourceUnit === 'eV' &&
            selectedDestinationUnit === 'J'
        ) {
            const result = inputValue * 1.602 * Math.pow(10, -19)
            setOutputValue(result)
        }
        //Exposure
        else if (
            selectedSourceUnit === 'C/Kg' &&
            selectedDestinationUnit === 'R'
        ) {
            const result = inputValue * 3876
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'R' &&
            selectedDestinationUnit === 'C/Kg'
        ) {
            const result = inputValue * 2.58e-4
            setOutputValue(result.toFixed(6))
        }

        // source :dpm
        else if (
            selectedSourceUnit === 'dpm' &&
            selectedDestinationUnit === 'GBq'
        ) {
            const result = inputValue * 1.6666666666667 * Math.pow(10, -11)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'dpm' &&
            selectedDestinationUnit === 'MBq'
        ) {
            const result = inputValue * 1.6666666666667 * Math.pow(10, -8)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'dpm' &&
            selectedDestinationUnit === 'mbq'
        ) {
            const result = inputValue * 16.666666666667
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'dpm' &&
            selectedDestinationUnit === 'kBq'
        ) {
            const result = inputValue * 1.6666666666667 * Math.pow(10, -5)
            const formattedResult = result
                .toExponential(13)
                .replace(/e\+(\d+)/, 'E+$1')
            setOutputValue(formattedResult)
        } else if (
            selectedSourceUnit === 'dpm' &&
            selectedDestinationUnit === 'Bq'
        ) {
            const result = inputValue * 0.016666666666667
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'dpm' &&
            selectedDestinationUnit === 'mBq'
        ) {
            const result = inputValue * 16.666666666667
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'dpm' &&
            selectedDestinationUnit === 'kCi'
        ) {
            const result = inputValue * 4.5045045045045 * Math.pow(10, -16)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'dpm' &&
            selectedDestinationUnit === 'Ci'
        ) {
            const result = inputValue * 4.5045045045045 * Math.pow(10, -13)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'dpm' &&
            selectedDestinationUnit === 'mCi'
        ) {
            const result = inputValue * 4.5045045045045 * Math.pow(10, -10)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'dpm' &&
            selectedDestinationUnit === 'µCi'
        ) {
            const result = inputValue * 4.5045045045045 * Math.pow(10, -7)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'dpm' &&
            selectedDestinationUnit === 'pCi'
        ) {
            const result = inputValue * 0.45045045045045
            setOutputValue(result)
        }

        //CONVERSION OF CURIE (Ci) INTO BECQUEREL(Bq), CURIE(Ci), RUTHERFORD (Rd) AND DISINTEGRATION PER MINUTE (dpm)
        //source:kci
        else if (
            selectedSourceUnit === 'kCi' &&
            selectedDestinationUnit === 'GBq'
        ) {
            const result = inputValue * 37000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'kCi' &&
            selectedDestinationUnit === 'MBq'
        ) {
            const result = inputValue * 37000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'kCi' &&
            selectedDestinationUnit === 'mBq'
        ) {
            const result = inputValue * 3.7 * Math.pow(10, 16)
            const formattedResult = result
                .toExponential(1)
                .replace(/e\+(\d+)/, 'E+$1')
            setOutputValue(formattedResult)
        } else if (
            selectedSourceUnit === 'kCi' &&
            selectedDestinationUnit === 'kBq'
        ) {
            const result = inputValue * 37000000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'kCi' &&
            selectedDestinationUnit === 'Bq'
        ) {
            const result = inputValue * 37000000000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'kCi' &&
            selectedDestinationUnit === 'mBq'
        ) {
            const result = inputValue * 3.7 * Math.pow(10, 16)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'kCi' &&
            selectedDestinationUnit === 'Ci'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'kCi' &&
            selectedDestinationUnit === 'mCi'
        ) {
            const result = inputValue * 1000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'kCi' &&
            selectedDestinationUnit === 'µCi'
        ) {
            const result = inputValue * 1000000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'kCi' &&
            selectedDestinationUnit === 'pCi'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, 15)
            const formattedResult = result
                .toExponential(1)
                .replace(/e\+(\d+)/, 'E+$1')
            setOutputValue(formattedResult)
        } else if (
            selectedSourceUnit === 'kCi' &&
            selectedDestinationUnit === 'dpm'
        ) {
            const result = inputValue * 2.22 * Math.pow(10, 15)
            const formattedResult = result
                .toExponential(2)
                .replace(/e\+(\d+)/, 'E$1')
            setOutputValue(formattedResult)
        }
        //source : mci
        else if (
            selectedSourceUnit === 'mCi' &&
            selectedDestinationUnit === 'GBq'
        ) {
            const result = inputValue * 0.037
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mCi' &&
            selectedDestinationUnit === 'MBq'
        ) {
            const result = inputValue * 37
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mCi' &&
            selectedDestinationUnit === 'mBq'
        ) {
            const result = inputValue * 37000000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mCi' &&
            selectedDestinationUnit === 'kBq'
        ) {
            const result = inputValue * 37000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mCi' &&
            selectedDestinationUnit === 'Bq'
        ) {
            const result = inputValue * 37000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mCi' &&
            selectedDestinationUnit === 'mBq'
        ) {
            const result = inputValue * 37000000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mCi' &&
            selectedDestinationUnit === 'kCi'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -6)
            const formattedResult = result
                .toExponential(1)
                .replace(/e\+(\d+)/, 'E+$1')
            setOutputValue(formattedResult)
        } else if (
            selectedSourceUnit === 'mCi' &&
            selectedDestinationUnit === 'Ci'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mCi' &&
            selectedDestinationUnit === 'µCi'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mCi' &&
            selectedDestinationUnit === 'pCi'
        ) {
            const result = inputValue * 1000000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'mCi' &&
            selectedDestinationUnit === 'dpm'
        ) {
            const result = inputValue * 2220000000
            setOutputValue(result)
        }
        //source : µCi
        else if (
            selectedSourceUnit === 'µCi' &&
            selectedDestinationUnit === 'GBq'
        ) {
            const result = inputValue * 3.7 * Math.pow(10, -5)
            const formattedResult = result
                .toExponential(1)
                .replace(/e\+(\d+)/, 'E+$1')
            setOutputValue(formattedResult)
        } else if (
            selectedSourceUnit === 'µCi' &&
            selectedDestinationUnit === 'MBq'
        ) {
            const result = inputValue * 0.037
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µCi' &&
            selectedDestinationUnit === 'mBq'
        ) {
            const result = inputValue * 37000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µCi' &&
            selectedDestinationUnit === 'kBq'
        ) {
            const result = inputValue * 37
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µCi' &&
            selectedDestinationUnit === 'Bq'
        ) {
            const result = inputValue * 37000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µCi' &&
            selectedDestinationUnit === 'mBq'
        ) {
            const result = inputValue * 37000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µCi' &&
            selectedDestinationUnit === 'kCi'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -9)
            const formattedResult = result
                .toExponential(1)
                .replace(/e\+(\d+)/, 'E+$1')
            setOutputValue(formattedResult)
        } else if (
            selectedSourceUnit === 'µCi' &&
            selectedDestinationUnit === 'Ci'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -6)
            const formattedResult = result
                .toExponential(1)
                .replace(/e\+(\d+)/, 'E+$1')
            setOutputValue(formattedResult)
        } else if (
            selectedSourceUnit === 'µCi' &&
            selectedDestinationUnit === 'mCi'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µCi' &&
            selectedDestinationUnit === 'pCi'
        ) {
            const result = inputValue * 1000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'µCi' &&
            selectedDestinationUnit === 'dpm'
        ) {
            const result = inputValue * 2220000
            setOutputValue(result)
        }

        //source : pci
        else if (
            selectedSourceUnit === 'pCi' &&
            selectedDestinationUnit === 'GBq'
        ) {
            const result = inputValue * 3.7 * Math.pow(10, -11)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'pCi' &&
            selectedDestinationUnit === 'kBq'
        ) {
            const result = inputValue * 3.7 * Math.pow(10, -5)
            const formattedResult = result
                .toExponential(1)
                .replace(/e\+(\d+)/, 'E+$1')
            setOutputValue(formattedResult)
        } else if (
            selectedSourceUnit === 'pCi' &&
            selectedDestinationUnit === 'Bq'
        ) {
            const result = inputValue * 0.037
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'pCi' &&
            selectedDestinationUnit === 'MBq'
        ) {
            const result = inputValue * 3.7 * Math.pow(10, -8)
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'pCi' &&
            selectedDestinationUnit === 'mBq'
        ) {
            const result = inputValue * 37
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'pCi' &&
            selectedDestinationUnit === 'kCi'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -15)
            const formattedResult = result
                .toExponential(1)
                .replace(/e\+(\d+)/, 'E+$1')
            setOutputValue(formattedResult)
        } else if (
            selectedSourceUnit === 'pCi' &&
            selectedDestinationUnit === 'Ci'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -12)
            const formattedResult = result
                .toExponential(1)
                .replace(/e\+(\d+)/, 'E+$1')
            setOutputValue(formattedResult)
        } else if (
            selectedSourceUnit === 'pCi' &&
            selectedDestinationUnit === 'mCi'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -9)
            const formattedResult = result
                .toExponential(1)
                .replace(/e\+(\d+)/, 'E+$1')
            setOutputValue(formattedResult)
        } else if (
            selectedSourceUnit === 'pCi' &&
            selectedDestinationUnit === 'µCi'
        ) {
            const result = inputValue * 1.0 * Math.pow(10, -6)
            const formattedResult = result
                .toExponential(1)
                .replace(/e\+(\d+)/, 'E+$1')
            setOutputValue(formattedResult)
        } else if (
            selectedSourceUnit === 'pCi' &&
            selectedDestinationUnit === 'dpm'
        ) {
            const result = inputValue * 2.22
            setOutputValue(result)
        }

        //source:Ci
        else if (
            selectedSourceUnit === 'Ci' &&
            selectedDestinationUnit === 'GBq'
        ) {
            const result = inputValue * 37
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Ci' &&
            selectedDestinationUnit === 'MBq'
        ) {
            const result = inputValue * 37000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Ci' &&
            selectedDestinationUnit === 'mBq'
        ) {
            const result = inputValue * 37000000000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Ci' &&
            selectedDestinationUnit === 'kBq'
        ) {
            const result = inputValue * 37000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Ci' &&
            selectedDestinationUnit === 'Bq'
        ) {
            const result = inputValue * 37000000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Ci' &&
            selectedDestinationUnit === 'mBq'
        ) {
            const result = inputValue * 37000000000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Ci' &&
            selectedDestinationUnit === 'kCi'
        ) {
            const result = inputValue * 0.001
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Ci' &&
            selectedDestinationUnit === 'mCi'
        ) {
            const result = inputValue * 1000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Ci' &&
            selectedDestinationUnit === 'µCi'
        ) {
            const result = inputValue * 1000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Ci' &&
            selectedDestinationUnit === 'dpm'
        ) {
            const result = inputValue * 2220000000000
            setOutputValue(result)
        } else if (
            selectedSourceUnit === 'Ci' &&
            selectedDestinationUnit === 'dps'
        ) {
            const result = inputValue * 37000000000
            setOutputValue(result)
        }
    }

    const filteredDestinationUnits = units
        .filter((unit) => unit.destinationUnit !== selectedSourceUnit)
        .map((unit) => ({
            label: unit.id,
            value: unit.destinationUnit,
            // disabled: shouldDisableDestination(unit.destinationUnit),
        }))
    const filteredSourceUnits = units
        .filter((unit) => unit.sourceUnit !== null) // Filter out units where sourceUnit is null
        .map((unit) => ({
            key: unit.id,
            value: unit.sourceUnit,
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
                    marginTop: height * 0.09,
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
                        {name} Conversion
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
            <StatusBar barStyle="dark-content" backgroundColor="white" />
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
                                marginTop: 25,
                                paddingHorizontal: 10,
                            }}
                            placeholder="Enter value"
                            keyboardType="numeric"
                            value={inputValue}
                            onChangeText={(text) => setInputValue(text)}
                            onFocus={handleInputFocus}
                        />
                        <View style={styles.space} />
                        <View style={{ width: 120 }}>
                            <Dropdown
                                search
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={filteredSourceUnits}
                                maxHeight={300}
                                labelField="value"
                                valueField="value"
                                placeholder="Select "
                                searchPlaceholder="Search"
                                value={selectedSourceUnit}
                                onChange={(item) => {
                                    setSelectedSourceUnit(item.value)
                                }}
                                // renderLeftIcon={() => (
                                //     <AntDesign
                                //         style={styles.icon}
                                //         color="black"
                                //         name="Safety"
                                //         size={20}
                                //     />
                                // )}
                            />
                            {/* <SelectList
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
                            /> */}
                        </View>

                        {/* <View style={{justifyContent:'center',position:'fixed',bottom:12,left:10}}>
                        <Text>To</Text>
                    </View> */}

                        {/* <View style={styles.space} /> */}
                        <View style={{ width: 120 }}>
                            <Dropdown
                                search
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={filteredDestinationUnits}
                                maxHeight={300}
                                labelField="value"
                                valueField="value"
                                placeholder="Select"
                                searchPlaceholder="Search..."
                                value={selectedDestinationUnit}
                                onChange={(item) => {
                                    setSelectedDestinationUnit(item.value)
                                }}
                                // renderLeftIcon={() => (
                                //     <AntDesign
                                //         style={styles.icon}
                                //         color="black"
                                //         name="Safety"
                                //         size={20}
                                //     />
                                // )}
                            />

                            {/* <SelectList
                                key={selectListKey}
                                setSelected={(val) =>
                                    setSelectedDestinationUnit(val)
                                }
                                data={filteredDestinationUnits}
                                save="value"
                                placeholder="Select"
                            /> */}
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
                {outputValue && (
                    <Text style={styles.resultLabel}>
                        {outputValue} {selectedDestinationUnit}
                    </Text>
                )}
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
    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    resultLabel: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
    },
})

export default UnitConversionCalculator
