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

    const { units,name } = route.params
    const inputRef = useRef()
    var result

    const [selectedSourceUnit, setSelectedSourceUnit] = useState(null)
    const [selectedDestinationUnit, setSelectedDestinationUnit] = useState(null)
    const [selectListKey, setSelectListKey] = useState(0);

    // Add your conversion logic here
    const convertUnits = () => {
        console.log(selectedSourceUnit ,selectedDestinationUnit)
        if (selectedSourceUnit==='Bq' && selectedDestinationUnit==='GBq'){
           const result= 1 * Math.pow(10, -9);
           setOutputValue(result)
        } else if (selectedSourceUnit==='Bq' && selectedDestinationUnit==='MBq'){
            const result= 1 * Math.pow(10, -6);
            setOutputValue(result)
         }
        // Implement your conversion logic based on inputValue
        // Update the outputValue state with the result
        // For example: setOutputValue(convertFunction(inputValue));
    }
    const filteredDestinationUnits = units
    .filter((unit) => unit.destinationUnit !== selectedSourceUnit)
    .map((unit) => ({
        key: unit.id,
        value: unit.destinationUnit,
        // disabled: shouldDisableDestination(unit.destinationUnit),
    }));

    const handleInputFocus = () => {
        // Immediately blur the input to prevent the keyboard from appearing
        inputRef.current.blur()
    }
    const handleCalculatorButtonClick = (buttonText) => {
        if (buttonText === 'C') {
          // Clear the input field when 'C' is pressed
          setInputValue('');
          setOutputValue('')
          setSelectedSourceUnit(null);
          setSelectedDestinationUnit(null); // Clear the state
          setSelectListKey((prevKey) => prevKey + 1);
        } else if (buttonText === '⌫' && inputValue.length > 0) {
          // Remove the last character from the input field when '⌫' is pressed
          setInputValue(inputValue.slice(0, -1));
        } else {
          // Append the button value to the input field for other buttons
          setInputValue(inputValue + buttonText);
        }
      };
    const renderCalculatorButton = (buttonText) => (
        <TouchableOpacity
            style={styles.calculatorButton}
            onPress={() => handleCalculatorButtonClick(buttonText)}
        >
            <Text style={styles.calculatorButtonText}>{buttonText}</Text>
        </TouchableOpacity>
    );
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
    console.log('out',outputValue)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar hidden={true} />
            {renderHeader()}
            <View style={styles.container}>
                <View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
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
                          <View style={styles.space}/>
                          <View style={{width: 100,}}> 
                          <SelectList
                            key={selectListKey}
                            setSelected={(val) => setSelectedSourceUnit(val)}
                            data={units.map((unit) => ({
                                key: unit.key,
                                value: unit.sourceUnit,
                            }))}
                            save="value"
                            placeholder='Select'
                        />
                          </View>
                       
                        
                    {/* <View style={{justifyContent:'center',position:'fixed',bottom:12,left:10}}>
                        <Text>To</Text>
                    </View> */}
                        
                           <View style={styles.space}/>
                           <View style={{width: 100}}> 
                            <SelectList
                            key={selectListKey}
                                setSelected={(val) =>
                                    setSelectedDestinationUnit(val)
                                }
                                data={filteredDestinationUnits}
                                save="value"
                                placeholder='Select'
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
        marginTop:50
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
