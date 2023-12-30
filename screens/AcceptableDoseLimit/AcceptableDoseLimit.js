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
    FlatList,
} from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'
import { COLORS, icons } from '../../constants'
import { commonStyles } from '../../styles/CommonStyles'
import { ADB } from '../../data/data'

const AcceptableDoseLimit = ({navigation}) => {
    const tableHead = ['Type of Dose Limit', 'Limit on Dose', 'Limit on Dose']
    const tableData = [
        ['Item 1', '111', '444'],
        ['Item 2', '333', '444'],
        ['Item 3', '666', '777'],
        ['Item 1', '111', '444'],
        ['Item 2', '333', '444'],
        ['Item 3', '666', '777'],
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
            {/* <TouchableOpacity style={styles.reorderButton}>
                        <Text
                            style={[
                                styles.buttonText,
                                styles.reorderButtonText,
                            ]}
                        >
                         AERB
                        </Text>
                    </TouchableOpacity>
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row
                        data={tableHead}
                        style={styles.head}
                        textStyle={styles.text}
                    />
                    <Rows data={tableData} textStyle={styles.text} />
                </Table> */}
                <FlatList data={ADB}   renderItem={({ item, index }) => (
                          
                          <TouchableOpacity
                          key={index}
                          style={styles.elementButton}
                          onPress={()=>navigation.navigate('ADBDetails',{
                            details:item,
                          })}
                         
                      >
                          <View>
                             
                                  <Text style={styles.elementButtonText}>
                                      {item.name}
                                  </Text>
                             
                          </View>
                      </TouchableOpacity>
                        
                      )}/>
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
    reorderButton: {
        height: 38,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3498DB',
       borderRadius:5,
        marginTop: 20,
        marginBottom:10
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'regular',
        color: 'white',
        fontWeight:'bold'
    },
    rateButtonText: {
        color: 'white',
    },
    elementButton: {
        backgroundColor: '#3498db', // You can replace this with your desired background color
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    elementButtonText: {
        color: '#fff', // Text color
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default AcceptableDoseLimit
