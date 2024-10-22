import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
import Foundation from "@expo/vector-icons/Foundation";
import React, { useEffect, useState } from "react";
import CartScreen from "../screens/CartScreen";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";

const Stack = createNativeStackNavigator();
  const tabHiddenRoutes = ["ProductDetails", "CartScreen"];

const { width, height } = Dimensions.get("window");


const MyStack = ({ navigation, route,CartItems }:{CartItems:{product:Product, quantity:number}[]}) => {
  const [totalPrice, setTotalPrice] = useState<number>(0)

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    console.log("Route Name is ", routeName);
    if (tabHiddenRoutes.includes(routeName)) {
      console.log("Kapat ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      console.log("Aç ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);


  
  const getProductsPrice = () => {
    var total=0

  
    CartItems.forEach(CartItems => {
      const price = (total += CartItems.product?.fiyat)
      setTotalPrice(price)
    })
  } 

useEffect(() => {
  getProductsPrice()

},[navigation,route,CartItems])


  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5C3EBC" },

          headerTitle: () => (
            <Image
              source={require("../../assets/GetirLogo.png")}
              style={{ width: 70, height: 30 }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: "#FFFFFF",
          headerBackTitleVisible: false,
          headerTitle: () => <Text style={styles.text}>Ürünler</Text>,
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CartScreen")}
              style={{
                width: width * 0.22,
                height: 33,
                backgroundColor: "white",
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 23, height: 23, marginLeft: 6 }}
                source={require("../../assets/cart.png")}
              />
              <View
                style={{ height: 33, width: 4, backgroundColor: "white" }}
              />
              <View
                style={{
                  flex: 1,
                  height: 33,
                 
                  borderTopRightRadius: 9,
                  borderBottomRightRadius: 9,
                  backgroundColor: "#f3feff",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "#5d3ebd", fontWeight: "bold", fontSize: 12 }}
                >
                  {totalPrice}

                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailScreen}
        options={{
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTintColor: "#FFFFFF",
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="close-sharp" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 14, color: "white" }}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CategoryDetails")}
              style={{}}
            >
              <Foundation name="heart" size={24} color="#32177a" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="CartScreen" component={CartScreen} 
      options={{
        headerStyle: { backgroundColor: "#5C3EBC" },
        headerTintColor: "#FFFFFF",
        headerBackTitleVisible: false,
        headerTitle: () => <Text style={{fontSize:16, color:'white', fontWeight:'bold'}}>Sepetim</Text>,
        headerLeft:()=>(
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="close-sharp" size={26} color="white" />
          </TouchableOpacity>
        ),
        headerRight:()=>(
          <TouchableOpacity
            onPress={() => navigation.navigate("ProductDetails")}
          >
            <Ionicons name="trash-sharp" size={24} color="white" />
          </TouchableOpacity>
        )
        
      }}
      />
    </Stack.Navigator>
  );
};


const mapStateToProps = (state) =>{
  const {CartItems} = state;
  return {
    CartItems:CartItems
  }
}


 function HomeNavigator({ navigation, route,CartItems }:{cartItems:Product[]}) {
  return <MyStack navigation={navigation} route={route} CartItems={CartItems}/>
}


export default connect(mapStateToProps,null)(HomeNavigator)



const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 14,
  },
});
