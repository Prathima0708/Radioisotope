import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar,
} from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'
import { COLORS, icons } from '../../constants'
import { commonStyles } from '../../styles/CommonStyles'

const AcceptableDoseLimit = () => {
    const tableHead = ['Type of Dose Limit', 'Limit on Dose', 'Limit on Dose']
    const tableData = [
        ['Item 1', '111', '444'],
        ['Item 2', '333', '444'],
        ['Item 3', '666', '777'],
    ]
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
                        Acceptable Dose Limit Info
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
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row
                        data={tableHead}
                        style={styles.head}
                        textStyle={styles.text}
                    />
                    <Rows data={tableData} textStyle={styles.text} />
                </Table>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff',
    },
    head: { height: 65, backgroundColor: '#f1f8ff', width: 'auto' },
    text: { margin: 6 },
})

export default AcceptableDoseLimit
