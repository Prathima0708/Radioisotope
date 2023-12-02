import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { COLORS } from '../constants';

const Converter = () => {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    
    // Add your conversion logic here
    const convertUnits = () => {
        // Implement your conversion logic based on inputValue
        // Update the outputValue state with the result
        // For example: setOutputValue(convertFunction(inputValue));
    };

    const renderCalculatorButton = (buttonText) => (
        <TouchableOpacity
            style={styles.calculatorButton}
            onPress={() => setInputValue(inputValue + buttonText)}
        >
            <Text style={styles.calculatorButtonText}>{buttonText}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Bq"
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />
                <TextInput
                    style={[styles.textInput, styles.outputTextInput]}
                    placeholder="Converted value"
                    value={outputValue}
                    editable={false}
                />
            </View>
            
            {/* Calculator Buttons */}
            <View style={styles.calculatorContainer}>
                <View style={styles.rowContainer}>
                    {renderCalculatorButton('1')}
                    {renderCalculatorButton('2')}
                    {renderCalculatorButton('3')}
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:50,
        
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
        marginHorizontal:20,
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
});

export default Converter;
