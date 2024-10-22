import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import * as actions from "../../src/redux/actions/CartActions";
import { Product } from "../models/Index";

const { width, height } = Dimensions.get("window");
type productItemType = {
  item: Product;
  addItemToCart: (a: Product) => void;
};

const ProductItem = ({ item, addItemToCart }: productItemType) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
      style={{
        width: width * 0.3,
        marginTop: 12,
        height: height * 0.23,
        marginBottom: 10,
        marginLeft: 12,
      }}
    >
      <Image
        style={{
          width: width * 0.28,
          height: width * 0.28,
          borderRadius: 12,
          borderColor: "gray",
          borderWidth: 0.2,
        }}
        source={{
          uri: item.image,
        }}
      />
      <View
        style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 12,
            color: "#747990",
            textDecorationLine: "line-through",
          }}
        >
          <Text>₺</Text>
          {item.fiyat}
        </Text>
        <Text
          style={{
            color: "#5d3ebd",
            fontWeight: "bold",
            fontSize: 14,
            marginLeft: 10,
          }}
        >
          <Text>₺</Text>
          {item.fiyatIndirimli}
        </Text>
      </View>

      <Text style={{ fontWeight: "600", fontSize: 12, marginTop: 12 }}>
        {item.name}
      </Text>
      <Text
        style={{
          color: "#747990",
          fontWeight: "600",
          fontSize: 12,
          marginTop: 4,
        }}
      >
        {item.miktar}
      </Text>

      <TouchableOpacity
      onPress={()=>{addItemToCart(item)}}
        style={{
          width: 30,
          height: 30,
          borderColor: "lightgrey",
          borderWidth: 0.3,
          position: "absolute",
          right: 4,
          borderRadius: 6,
          top: -6,
          alignItems: "center",
          justifyContent: "center",
          shadowRadius: 3.8,
          shadowOpacity: 0.05,
          backgroundColor: "white",
        }}
      >
        <Entypo name="plus" size={24} color="#5d3ebd" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (Product) => {
      dispatch(actions.addToCart({ quantity: 1, Product }));
    },
  };
};
export default connect(null, mapDispatchToProps)(ProductItem);

const styles = StyleSheet.create({});
