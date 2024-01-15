import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react'
import { Onboarding1, 
    Onboarding2, 
    Onboarding3, 
    Onboarding4 ,
    Signup, 
    Verification,
    Login, 
    StartUpScreen, 
    ForgotPassword, 
    ResetPassword, 
    LocationAccess,
    AddNewAddress,
    Address,
    Faqs,
    PaymentDeclined,
    PaymentMethod,
    PaymentSuccess,
    Settings,
    EditProfile,
    Cart,
    EditCart,
    AddNewPaymentMethod,
    PaymentCardSuccess,
    PaymentCardDeclined,
    SubmitQuestion,
    ProductByKeywords,
    ShopView2,
    ProductDetailsV1,
    ProductReviews,
    Call,
    Message,
    Favourite,
    PersonalProfile,
    AddNewPaymentMethodDeclined,
    AddNewPaymentMethodSuccess,
    TransactionHistory,
    Chat,
    VideoCall,
    ShopView1,
    ProductDetailsV2,
    TrackingOrdersV1,
    TrackingOrdersV2,
    AddReviews,
    History,
    Notifications,
    CancelOrders,
    OpenShops,
    TermsAndConditions,
    CaptureProduct
} from '../screens'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigation from './BottomTabNavigation'
import Radioisotope from '../screens/Radioisotope/Radioisotope'

import AcceptableDoseLimit from '../screens/AcceptableDoseLimit/AcceptableDoseLimit'
import RadioisotopeElements from '../screens/Radioisotope/RadioisotopeElements'
import ElementsDetailsScreen from '../screens/Radioisotope/ElementsDetailsScreen'
import ADBDetailsScreen from '../screens/AcceptableDoseLimit/ADBDetailsScreen'
import UnitConversionCalculator from '../screens/UnitConversion/UnitConversionCalculator'
import UnitConversion from '../screens/UnitConversion/UnitConversion'
import CalculatorOptions from '../screens/Calculator/CalculatorOptions'
import Calculate from '../screens/Calculator/CalculatePD'
import CalculatePD from '../screens/Calculator/CalculatePD'
import CalculateSensitivity from '../screens/Calculator/CalculateSensitivity'
import Cardiacfunction from '../screens/Calculator/CardiaFunction/Cardiacfunction'
import CalculateTargetHeartRate from '../screens/Calculator/CardiaFunction/CalculateTargetHeartRate'
import CalculateEjection from '../screens/Calculator/CardiaFunction/CalculateEjection'
import StrokeVolume from '../screens/Calculator/CardiaFunction/StrokeVolume'
import CardiacOutput from '../screens/Calculator/CardiaFunction/CardiacOutput'
import InverseSL from '../screens/Calculator/InverseSquareLaw/InverseSL'
import Shielding from '../screens/Calculator/Shielding/Shielding'
import BiologicalHL from '../screens/Calculator/BiologicalHL/BiologicalHL'
import CalculateTE from '../screens/Calculator/BiologicalHL/CalculateTE'
import CalculateTB from '../screens/Calculator/BiologicalHL/CalculateTB'
import VolumeDraw from '../screens/Calculator/VolumeToDraw/VolumeDraw'
import CalculateI1 from '../screens/Calculator/InverseSquareLaw/CalculateI1'
import CalculateD1 from '../screens/Calculator/InverseSquareLaw/CalculateD1'
import CalculateI2 from '../screens/Calculator/InverseSquareLaw/CalculateI2'
import CalculateD2 from '../screens/Calculator/InverseSquareLaw/CalculateD2'
import Concentration from '../screens/Calculator/Concentration/Concentration'
import CalculateC1 from '../screens/Calculator/Concentration/CalculateC1'
import CalculateV1 from '../screens/Calculator/Concentration/CalculateV1'
import CalculateC2 from '../screens/Calculator/Concentration/CalculateC2'
import CalculateV2 from '../screens/Calculator/Concentration/CalculateV2'
import DosesConcentration from '../screens/Calculator/DosesConcentration/DosesConcentration'
import DrawConcentration from '../screens/Calculator/DosesConcentration/DrawConcentration'
import DecayFactor from '../screens/Calculator/DecayFactor/DecayFactor'
import CalculateDF from '../screens/Calculator/DecayFactor/CalculateDF'
import Endocrine from '../screens/Calculator/Endocrine/Endocrine'
import CalculateRAIU from '../screens/Calculator/Endocrine/CalculateRAIU'
import CalculateAdministeredDose from '../screens/Calculator/Endocrine/CalculateAdministeredDose'
import Genitournary from '../screens/Calculator/Genitournary/Genitournary'
import CalculateClearance from '../screens/Calculator/Genitournary/CalculateClearance'
import CalculateFillingPhase from '../screens/Calculator/Genitournary/CalculateFillingPhase'
import PetOncology from '../screens/Calculator/PetOncology/PetOncology'
import Gastrointestinal from '../screens/Calculator/Gastrointestinal/Gastrointestinal'
import Extraformulas from '../screens/Calculator/ExtraFormulas/Extraformulas'
import NetCounts from '../screens/Calculator/ExtraFormulas/NetCounts'
import AdministeredCounts from '../screens/Calculator/ExtraFormulas/AdministeredCounts'
import ElutionEfficiency from '../screens/Calculator/ExtraFormulas/ElutionEfficiency'
import Infection from '../screens/Calculator/Infection/Infection'
import Activity from '../screens/Calculator/ExtraFormulas/Activity'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const checkIfFirstLaunch = async () => {
            try {
                const value = await AsyncStorage.getItem('alreadyLaunched')
                if (value === null) {
                    await AsyncStorage.setItem('alreadyLaunched', 'true')
                    setIsFirstLaunch(true)
                } else {
                    setIsFirstLaunch(false)
                }
            } catch (error) {
                setIsFirstLaunch(false)
            }
            setIsLoading(false) // Set loading state to false once the check is complete
        }

        checkIfFirstLaunch()
    }, [])

    if (isLoading) {
        return null // Render a loader or any other loading state component
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={ isFirstLaunch ? 'Onboarding1' : 'Onboarding1'}
                 screenOptions={{
                    headerShown: false
                 }}
                >
                {/* <Stack.Screen name="Onboarding1" component={Onboarding1}/>
                <Stack.Screen name="Onboarding2" component={Onboarding2}/>
                <Stack.Screen name="Onboarding3" component={Onboarding3}/>
                <Stack.Screen name="Onboarding4" component={Onboarding4}/>
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="StartUpScreen" component={StartUpScreen}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
                <Stack.Screen name="ResetPassword" component={ResetPassword}/>
                <Stack.Screen name="Verification" component={Verification}/>
                <Stack.Screen name="LocationAccess" component={LocationAccess}/> */}
                
                {/* <Stack.Screen name="PersonalProfile" component={PersonalProfile}/>
                <Stack.Screen name="AddNewAddress" component={AddNewAddress}/>
                <Stack.Screen name="Address" component={Address}/>
                <Stack.Screen name="EditProfile" component={EditProfile}/>
                <Stack.Screen name="PaymentDeclined" component={PaymentDeclined}/>
                <Stack.Screen name="PaymentMethod" component={PaymentMethod}/>
                <Stack.Screen name="PaymentSuccess" component={PaymentSuccess}/>
                <Stack.Screen name="AddNewPaymentMethod" component={AddNewPaymentMethod} />
                <Stack.Screen name="PaymentCardSuccess" component={PaymentCardSuccess}/>
                <Stack.Screen name="PaymentCardDeclined" component={PaymentCardDeclined}/>
                <Stack.Screen name="AddNewPaymentMethodDeclined" component={AddNewPaymentMethodDeclined}/>
                <Stack.Screen name="AddNewPaymentMethodSuccess" component={AddNewPaymentMethodSuccess}/>
                <Stack.Screen name="Faqs" component={Faqs}/>
                <Stack.Screen name="Settings" component={Settings}/>
                <Stack.Screen name="SubmitQuestion" component={SubmitQuestion}/>
                <Stack.Screen name="Call"  component={Call}/>
                <Stack.Screen name="Chat"  component={Chat}/>
                <Stack.Screen name='VideoCall' component={VideoCall}/>
                <Stack.Screen name='CancelOrders' component={CancelOrders}/>
                <Stack.Screen name='AddReviews' component={AddReviews}/>
                <Stack.Screen name='TrackingOrdersV1' component={TrackingOrdersV1}/>
                <Stack.Screen name='TrackingOrdersV2' component={TrackingOrdersV2}/>
                <Stack.Screen name='History' component={History}/>
                <Stack.Screen name='OpenShops' component={OpenShops}/>
                <Stack.Screen name='ShopView1' component={ShopView1}/>
                <Stack.Screen name='ShopView2' component={ShopView2}/>
                <Stack.Screen name="ProductByKeywords" component={ProductByKeywords}/>
                <Stack.Screen name="ProductDetails" component={ProductDetailsV2} />
                <Stack.Screen name="ProductReviews" component={ProductReviews} />
                <Stack.Screen name="Cart" component={Cart}/>
                <Stack.Screen name="EditCart" component={EditCart}/>
                <Stack.Screen name="TransactionHistory" component={TransactionHistory}/>
                <Stack.Screen name="Message" component={Message}/>
                <Stack.Screen name='Notifications' component={Notifications}/>
                <Stack.Screen name="Favourite" component={Favourite}/>
                <Stack.Screen name="TermsAndConditions" component={TermsAndConditions}/>
                <Stack.Screen name="CaptureProduct" component={CaptureProduct}/> */}


                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Main" component={BottomTabNavigation}/>
                <Stack.Screen name="PersonalProfile" component={PersonalProfile}/>
                <Stack.Screen name="EditProfile" component={EditProfile}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
                <Stack.Screen name="Radio" component={Radioisotope}/>
                <Stack.Screen name="Radioisotopeelements" component={RadioisotopeElements}/>
                <Stack.Screen name="ElementDetailsScreen" component={ElementsDetailsScreen}/>
                <Stack.Screen name="UnitConversion" component={UnitConversion}/>
                <Stack.Screen name="UnitConversionCalculator" component={UnitConversionCalculator}/>

                <Stack.Screen name="Calculator" component={CalculatorOptions}/>
                <Stack.Screen name="CalculatePD" component={CalculatePD}/>
                <Stack.Screen name="CalculateSensitivity" component={CalculateSensitivity}/>
                <Stack.Screen name="Cardiacfunction" component={Cardiacfunction}/>
                <Stack.Screen name="CalculateTargetHeartRate" component={CalculateTargetHeartRate}/>
                <Stack.Screen name="CalculateEjection" component={CalculateEjection}/>
                <Stack.Screen name="StrokeVolume" component={StrokeVolume}/>
                <Stack.Screen name="CardiacOutput" component={CardiacOutput}/>

                <Stack.Screen name="InverseSL" component={InverseSL}/>
                <Stack.Screen name="CalculateI1" component={CalculateI1}/>
                <Stack.Screen name="CalculateI2" component={CalculateI2}/>
                <Stack.Screen name="CalculateD1" component={CalculateD1}/>
                <Stack.Screen name="CalculateD2" component={CalculateD2}/>

                <Stack.Screen name="Shielding" component={Shielding}/>

                <Stack.Screen name="CalculateConcentration" component={Concentration}/>
                <Stack.Screen name="CalculateC1" component={CalculateC1}/>
                <Stack.Screen name="CalculateV1" component={CalculateV1}/>
                <Stack.Screen name="CalculateC2" component={CalculateC2}/>
                <Stack.Screen name="CalculateV2" component={CalculateV2}/>

                <Stack.Screen name="DosesConcentration" component={DosesConcentration}/>
                <Stack.Screen name="DrawConcentration" component={DrawConcentration}/>

                <Stack.Screen name="BiologicalHL" component={BiologicalHL}/>
                <Stack.Screen name="CalculateTe" component={CalculateTE}/>
                <Stack.Screen name="CalculateTb" component={CalculateTB}/>

                <Stack.Screen name="Volumedraw" component={VolumeDraw}/>

                <Stack.Screen name="DecayFactor" component={DecayFactor}/>
                <Stack.Screen name="CalculateDF" component={CalculateDF}/>

                <Stack.Screen name="Endocrine" component={Endocrine}/>
                <Stack.Screen name="CalculateRAIU" component={CalculateRAIU}/>
                <Stack.Screen name="CalculateAdministeredDose" component={CalculateAdministeredDose}/>

                <Stack.Screen name="Genitournary" component={Genitournary}/>
                <Stack.Screen name="CalculateClearance" component={CalculateClearance}/>
                <Stack.Screen name="CalculateFillingPhase" component={CalculateFillingPhase}/>

                <Stack.Screen name="PetOncology" component={PetOncology}/>

                <Stack.Screen name="Gastrointestinal" component={Gastrointestinal}/>

                <Stack.Screen name="Extraformulas" component={Extraformulas}/>
                <Stack.Screen name="NetCounts" component={NetCounts}/>
                <Stack.Screen name="AdministeredCounts" component={AdministeredCounts}/>
                <Stack.Screen name="ElutionEfficiency" component={ElutionEfficiency}/>
                <Stack.Screen name="Activity" component={Activity}/>

                <Stack.Screen name="Infection" component={Infection}/>

                <Stack.Screen name="AcceptableDoseLimit" component={AcceptableDoseLimit}/>
                <Stack.Screen name="ADBDetails" component={ADBDetailsScreen}/>
                <Stack.Screen name="Aboutapplication" component={TermsAndConditions}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation