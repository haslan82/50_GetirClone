import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const {width, height} = Dimensions.get('window');

const CartButton = () => {
  return (
    <TouchableOpacity style={{width:'100%', height:height*0.12, backgroundColor:'white',position:'absolute',bottom:0, marginTop:-0, justifyContent:'center'}}>
   <View style={{height:height*0.06, backgroundColor:'#5d39c1', width:'90%', marginHorizontal:'5%', borderRadius:8, alignItems:'center',justifyContent:'center'}}>
   <Text style={{fontWeight:'bold', color:'white', fontSize:15}}>Sepete Ekle</Text>
   </View>
    </TouchableOpacity>
  )
}

export default CartButton

const styles = StyleSheet.create({})