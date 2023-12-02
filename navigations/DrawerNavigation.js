import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import {
  Feather,
  Ionicons,
  AntDesign
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS, images } from "../constants";
import { Address, Notifications, PaymentMethod, MyOrders, HomeV1, HomeV2, Search, HomeV3, Profile, Favourite } from "../screens";

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <SafeAreaView>
                <View
                  style={{
                    height: 200,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Image
                    source={images.avatar3}
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 50
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      marginVertical: 6,
                      fontFamily: "bold",
                      color: COLORS.black
                    }}
                  >John Bulla</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: COLORS.black,
                      fontFamily: 'regular'
                    }}
                  >Product Designer</Text>
                </View>
                <DrawerItemList {...props} />
              </SafeAreaView>
            )
          }
        }
        screenOptions={{
          drawerStyle: {
            backgroundColor: COLORS.white,
            width: 250,
          },
          headerStyle: {
            backgroundColor: COLORS.white,
          },
          headerShown:false,
          headerTintColor: COLORS.black,
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerLabelStyle: {
            color: COLORS.black,
            fontFamily: "regular",
            fontSize: 14,
            marginLeft: -10,
          }
        }}
      >
         <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            headerShadowVisible:false,
            drawerIcon: () => (
              <Ionicons name="md-home-outline" size={24} color={COLORS.black} />
            )
          }}
          component={HomeV1}
        />
        <Drawer.Screen
          name="Orders"
          options={{
            drawerLabel: "Orders",
            title: "Orders",
            drawerIcon: () => (
              <Ionicons name="gift-outline" size={24} color={COLORS.black} />
            )
          }}
          component={MyOrders}
        />
        <Drawer.Screen
          name="Search"
          options={{
            drawerLabel: "Search",
            title: "Search",
            drawerIcon: () => (
              <Ionicons name="search-outline" size={24} color={COLORS.black} />
            )
          }}
          component={Search}
        />
          <Drawer.Screen
          name="Whishlist"
          options={{
            drawerLabel: "Wishlist",
            title: "Wishlist",
            drawerIcon: () => (
              <Ionicons name="heart-outline" size={24} color={COLORS.black} />
            )
          }}
          component={Favourite}
        />

        <Drawer.Screen
          name="Delivery Address"
          options={{
            drawerLabel: "Delivery Address",
            title: "Delivery Address",
            drawerIcon: () => (
              <Ionicons name="location-outline" size={24} color={COLORS.black} />
            )
          }}
          component={Address}
        />

        
        <Drawer.Screen
          name="Payment Methods"
          options={{
            drawerLabel: "Payment Methods",
            title: "Payment Methods",
            drawerIcon: () => (
              <AntDesign name="creditcard" size={24} color={COLORS.black} />
            )
          }}
          component={PaymentMethod}
        />

        <Drawer.Screen
          name="Notifications"
          options={{
            drawerLabel: "Notifications",
            title: "Notifications",
            drawerIcon: () => (
              <Ionicons name="notifications-outline" size={24} color={COLORS.black} />
            )
          }}
          component={Notifications}
        />

        <Drawer.Screen
          name="Help"
          options={{
            drawerLabel: "Help",
            title: "Help",
            drawerIcon: () => (
              <Feather name="help-circle" size={24} color={COLORS.black} />
            )
          }}
          component={Profile}
        />
    

      </Drawer.Navigator>
  )
}

export default DrawerNavigation