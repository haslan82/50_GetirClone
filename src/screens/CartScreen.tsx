import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import ProductsGetir from "../../assets/ProductsGetir";
import CartItem from "../components/CartItem";
import ProductItem from "../components/ProductItem";
import { connect } from "react-redux";

const { width, height } = Dimensions.get("window");

const CartScreen = ({CartItems,
  route}:{CartItems:{product:Product; quantity:number }[],route:any;}) => {

 const [totalPrice, setTotalPrice]  = useState<number>(0)
 const getProductsPrice = () => {
  let total = 0;
  CartItems.forEach((product) => {
    total += product.product.fiyat;
    setTotalPrice(total);
  });

  CartItems.length ? null : setTotalPrice(0)

};
useEffect(()=>{
  getProductsPrice()
},[CartItems])
  return (

    <GestureHandlerRootView>
      <View style={{ flex: 1 }}>
        <ScrollView>
           <FlatList
          style={{ flex: 1 }}
          data={CartItems}
          renderItem={({ item }) => <CartItem product={item.product} quantity ={item.quantity} />}
        />
       
      <Text style={{color:'#5d3ebd', padding:15, fontWeight:'bold'}}>Önerilen Ürünler</Text> 

<ScrollView 
horizontal={true}
showsHorizontalScrollIndicator={false}
bounces={true}// standart tanımlı 
style={{backgroundColor:'white'}}
>
  {ProductsGetir.map((item, index)=>(
    <ProductItem key ={index} item={item} />
  ))}
</ScrollView>
</ScrollView>

        <View
          style={{
            height: height * 0.12,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: "4%",
            width: "100%",
            backgroundColor: "#f8f8f8",
            position:'absolute',
            bottom:0
            
           
           
          }}
        >
          <TouchableOpacity
            style={{
              height: height * 0.06,
              flex: 3,
              backgroundColor: "#5d3ebd",
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              marginTop: -10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Devam
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              marginTop: -10,
              height:height*0.06,
              borderTopRightRadius:8,
              borderBottomRightRadius:8,
            }}
          >
            <Text
              style={{ color: "#5d3ebd", fontSize: 15, fontWeight: "bold" }}
            >
              {totalPrice.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};
const mapStateToProps = (state) =>{
  const {CartItems} = state;
  return {
    CartItems:CartItems
  }
}

export default connect(mapStateToProps,null)(CartScreen);

const styles = StyleSheet.create({});
