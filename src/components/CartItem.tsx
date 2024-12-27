import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Product } from "../models/Index";
import * as actions from '../redux/actions/CartActions'
import { connect } from "react-redux";

type CartItemProps = {
  product: Product;
  quantity: number;
  removeFromCart: (product:Product)=>void;
};

const { width, height } = Dimensions.get("window");
const CartItem = ({ product,quantity,removeFromCart }: CartItemProps) => {
  return (
    <View style={{width:'100%', backgroundColor:'white'}}>
        <View
      style={{
        width:'89%',
        flexDirection: "row",
        height: height * 0.13,
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 'auto',// width*0.04
        backgroundColor: "white",
        borderBottomColor: "lightgrey",
        borderBottomWidth:0.4
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{borderWidth:0.4, borderColor:'lightgrey', borderRadius:8, padding:4}}>
         <Image
          style={{ height: height * 0.09, width: height * 0.09,  }}
          source={{ uri:product?.image }}
        /> 
        </View>
        
        <View style={{ marginLeft: 8 }}>
          <Text
            style={{ fontSize: 13, fontWeight: "600", maxWidth: width * 0.45 }}
          >
            {product?.name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginTop: 3,
              color: "#848897",
              fontWeight: "600",
            }}
          >
            {product?.miktar}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#5d3ebd",
              marginTop: 6,
            }}
          >
            ₺{product?.fiyat}
          </Text>
        </View>
      </View>

      <View
        style={{
          shadowOpacity: 0.4,
          shadowRadius: 10,
          shadowColor: "grey",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: width * 0.22,
          borderColor: "lightgrey",
          borderWidth: 0.5,
          height: height * 0.038,
          borderRadius: 10,
        }}
      >
        <TouchableOpacity
         onPress={() => removeFromCart(product)}
         style={{ flex: 1, alignItems: "center" }}>
          <Text>-</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#5d3ebd",
            height: height * 0.038,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 12 }}>
         {quantity}
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text>+</Text>
        </View>
      </View>
    </View>
    </View>
  );
};


const mapDispatchToProps =(dispatch)=>{
  return{
removeFromCart:(product:Product)=>
  dispatch(actions.removeFromCart(product))
  }
}

export default connect(null, mapDispatchToProps)(CartItem);

const styles = StyleSheet.create({});
