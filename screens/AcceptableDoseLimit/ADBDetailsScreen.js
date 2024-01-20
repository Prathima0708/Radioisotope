import { View, Text, StyleSheet, SafeAreaView, StatusBar, Dimensions } from 'react-native'
import React from 'react'
import { Row, Rows, Table } from 'react-native-table-component'
import { COLORS } from '../../constants'
import Header from '../../components/Header'

const ADBDetailsScreen = ({ route }) => {
    const { details } = route.params
    
    return (
        <SafeAreaView style={styles.area}>
            <StatusBar/>
            <View style={styles.container}>
      <Header title={`${details.name} `} />
      <View style={styles.tableContainer}>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                <Row
                    data={details.tableHead}
                    style={styles.head}
                    textStyle={styles.text}
                />
                <Rows data={details.tableData} textStyle={styles.text} />
            </Table>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default ADBDetailsScreen
const {height,width}=Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginTop: height*0.09,
      },
    head: { height: 65, backgroundColor: '#f1f8ff', width: 'auto' },
    text: { margin: 6 },
    tableContainer: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff',
        marginHorizontal:10
    },
    area: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
})
