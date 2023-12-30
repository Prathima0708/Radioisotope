import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
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
      <Header title={`${details.name} details`} />
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 50,
      },
    head: { height: 65, backgroundColor: '#f1f8ff', width: 'auto' },
    text: { margin: 6 },
    tableContainer: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff',
    },
    area: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
})
