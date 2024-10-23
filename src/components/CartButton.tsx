import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import * as actions from "../../src/redux/actions/CartActions";
import { Product } from "../models/Index";
import { connect } from "react-redux";

const { width, height } = Dimensions.get("window");

type CartButtonType = {
  addItemToCart: (a: Product) => void;
  item: Product;
};

const CartButton = ({ item, addItemToCart }: CartButtonType) => {
  return (
    <TouchableOpacity
    onPress={()=>addItemToCart(item)}
      style={{
        width: "100%",
        height: height * 0.12,
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        marginTop: -0,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: height * 0.06,
          backgroundColor: "#5d39c1",
          width: "90%",
          marginHorizontal: "5%",
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
          Sepete Ekle
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({ product, quantity: 1 })),
  };
};

export default connect(null, mapDispatchToProps)(CartButton);

const styles = StyleSheet.create({});
