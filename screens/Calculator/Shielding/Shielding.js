import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TextInput,
    Button,
    Dimensions,
} from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Header from '../../../components/Header'
import { COLORS } from '../../../constants'
import UIButton from '../../../components/UIButton/UIButton'
import UIButtonReset from '../../../components/UIButton/UIButtonReset'

const Shielding = ({ route }) => {
    const { name } = route.params
    const [initialIntensity, setInitialIntensity] = useState('')
    const [halfValueLayer, setHalfValueLayer] = useState('')
    const [thickness, setThickness] = useState('')
    const [resultIntensity, setResultIntensity] = useState(null)

    const calculateResultIntensity = () => {
        if (initialIntensity && halfValueLayer && thickness) {
            const i1 = parseFloat(initialIntensity)
            const hvl = parseFloat(halfValueLayer)
            const x = parseFloat(thickness)

            const result = i1 * Math.exp(-0.693 / (hvl * x))
            setResultIntensity(result.toFixed(2)) // rounding to 2 decimal places
        }
    }

    const resetFields = () => {
        setInitialIntensity('')
        setHalfValueLayer('')
        setThickness('')
        setResultIntensity(null)
    }
    return (
        <SafeAreaView style={styles.area}>
            <ScrollView>
                <View style={styles.container}>
                    <Header title={`Calculate ${name}`} />
                </View>
                <View style={styles.calculatecontainer}>
                    <Text style={styles.label}>Initial Intensity (I1):</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Enter I1 value"
                        value={initialIntensity}
                        onChangeText={(text) => setInitialIntensity(text)}
                    />

                    <Text style={styles.label}>Half Value Layer (HVL):</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Enter HVL value"
                        value={halfValueLayer}
                        onChangeText={(text) => setHalfValueLayer(text)}
                    />

                    <Text style={styles.label}>Thickness (X):</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Enter X value"
                        value={thickness}
                        onChangeText={(text) => setThickness(text)}
                    />

                    <View style={styles.buttonContainer}>
                    <UIButtonReset title='Reset' onPress={resetFields} />
            <UIButton title='Calculate C1' onPress={calculateResultIntensity} />
                        
                    </View>

                    {resultIntensity !== null && (
                        <Text style={styles.resultLabel}>
                            Result Intensity (I2): {resultIntensity}
                        </Text>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Shielding
const {height,width}=Dimensions.get('window')
const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 12,
        paddingTop: width*0.1,
    },
    calculatecontainer: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    resultLabel: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
})
