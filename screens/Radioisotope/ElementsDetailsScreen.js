import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Modal,
} from 'react-native'
import Header from '../../components/Header'
import { COLORS } from '../../constants'
import { SafeAreaView } from 'react-native'
import ImageZoom from 'react-native-image-pan-zoom'
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated'
import { PinchGestureHandler } from 'react-native-gesture-handler'
import ImageViewer from 'react-native-image-zoom-viewer'

const ElementsDetailsScreen = ({ route }) => {
    const { elementDetails } = route.params
    const [isZoomModalVisible, setZoomModalVisible] = useState(false)

    const openZoomModal = () => {
        setZoomModalVisible(true)
    }

    const closeZoomModal = () => {
        setZoomModalVisible(false)
    }
    const [isZoomed, setIsZoomed] = useState(false);

    const toggleZoom = () => {
      setIsZoomed(!isZoomed);
    };
    return (
        <SafeAreaView style={styles.container}>
            <Header title={`${elementDetails.name} details`} />
            <ScrollView>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailText}>
                        Symbol: {elementDetails.symbol}
                    </Text>
                    <Text style={styles.detailText}>
                        Period: {elementDetails.period}
                    </Text>
                    <Text style={styles.detailText}>
                        Group: {elementDetails.group}
                    </Text>
                    <Text style={styles.detailText}>
                        Atomic Number: {elementDetails.atomicNumber}
                    </Text>
                    <Text style={styles.detailText}>
                        Atomic Weight: {elementDetails.atomicWeight}
                    </Text>
                    <Text style={styles.detailText}>
                        Energy Type: {elementDetails.energyType}
                    </Text>
                    <Text style={styles.detailText}>
                        Energy : {elementDetails.energy}
                    </Text>
                    <Text style={styles.detailText}>
                        Half Life: {elementDetails.halfLife}
                    </Text>
                    <Text style={styles.detailText}>
                        Production Method: {elementDetails.productionMethod}
                    </Text>

                    {/* <Text style={styles.detailText}>
                    Type of energy emission: {elementDetails.energyType}
                </Text> */}
                    <Text style={styles.detailText}>
                        Oxidation state: {elementDetails.oxidationstate}
                    </Text>

                    <Text style={styles.detailText}>
                        Parent Radionuclide: {elementDetails.parentRadionuclide}
                    </Text>
                    <Text style={styles.detailText}>
                        Decay Product : {elementDetails.decayproduct}
                    </Text>
                    <Text style={styles.detailText}>
                        Natural Structure : {elementDetails.naturalstructure}
                    </Text>
                    {elementDetails.decayimage && (
                        <React.Fragment>
                            <Text style={styles.detailText}>
                                {' '}
                                Decay Scheme:
                            </Text>
                            <ImageZoom
                               cropWidth={270}
                               cropHeight={200}
                               imageWidth={270}
                               imageHeight={200}
                               enableSwipeDown={true}
                               onSwipeDown={toggleZoom}
                               panToMove={true}
                               pinchToZoom={isZoomed}
                               enableCenterFocus={false}
                            >
                                <Image
                                    source={elementDetails.decayimage}
                                    style={{
                                        height: 200,
                                        width: 270,
                                        resizeMode: 'contain',
                                    }}
                                />
                            </ImageZoom>
                        </React.Fragment>
                    )}

{elementDetails.decayimage2 && (
                        <React.Fragment>
                            <Text style={styles.detailText}>
                                {' '}
                                Decay Scheme:
                            </Text>
                            <ImageZoom
                               cropWidth={270}
                               cropHeight={200}
                               imageWidth={270}
                               imageHeight={200}
                               enableSwipeDown={true}
                               onSwipeDown={toggleZoom}
                               panToMove={true}
                               pinchToZoom={isZoomed}
                               enableCenterFocus={false}
                            >
                                <Image
                                    source={elementDetails.decayimage2}
                                    style={{
                                        height: 200,
                                        width: 270,
                                        resizeMode: 'contain',
                                    }}
                                />
                            </ImageZoom>
                        </React.Fragment>
                    )}

                    {/* <React.Fragment>
      {elementDetails.decayimage && (
        <React.Fragment>
          <TouchableOpacity onPress={openZoomModal}>
            <Text style={styles.detailText}>Decay Scheme:</Text>
            <Image
              source={elementDetails.decayimage}
              style={{
                height: 200,
                width: 270,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </React.Fragment>
      )}

      <Modal visible={isZoomModalVisible} transparent={true} onRequestClose={closeZoomModal}>
        <ImageViewer
          imageUrls={[
            {
             // url: 'https://reactnative.dev/img/tiny_logo.png',
              props: {
                source:elementDetails.decayimage
                // You can add more props for customization here
              },
            },
          ]}
          enableSwipeDown
          onSwipeDown={closeZoomModal}
        />
      </Modal>
    </React.Fragment> */}
                </View>
                <View style={{ height: 50 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ElementsDetailsScreen
const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: width * 0.13,
        // marginBottom:10
    },
    detailsContainer: {
        padding: 16,
        marginHorizontal: 30,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 15,
        fontWeight: '500',
        fontFamily: 'regular',
        marginVertical: 10,
    },
})
