import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Product } from "../models/Index";

type CartItemProps = {
  product: Product;
};

const { width, height } = Dimensions.get("window");
const CartItem = ({ product }: CartItemProps) => {
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
          source={{ uri:product?.product?.image }}
        /> 
        </View>
        
        <View style={{ marginLeft: 8 }}>
          <Text
            style={{ fontSize: 13, fontWeight: "600", maxWidth: width * 0.45 }}
          >
            {product?.product?.name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginTop: 3,
              color: "#848897",
              fontWeight: "600",
            }}
          >
            {product?.product?.miktar}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#5d3ebd",
              marginTop: 6,
            }}
          >
            ₺{product?.product?.fiyat}
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
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text>-</Text>
        </View>
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
            8
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

export default CartItem;

const styles = StyleSheet.create({});
