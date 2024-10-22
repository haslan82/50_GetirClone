import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductItem from './ProductItem'
import ProductsGetir from '../../assets/ProductsGetir'

const ProductsContainer = () => {
  return (
    <View>
      <View style={{flexDirection:"row", backgroundColor:"white", alignItems:"center", }}>
        {ProductsGetir.slice(0,2).map((item)=>(
           <ProductItem key={item.id} item={item}/> 
        ))}
      
      </View>
<Text style={{color:"gray",fontWeight:"bold", padding:14}}>bar bar</Text>

      <View style={{flexDirection:"row", flexWrap:"wrap", flex:1, backgroundColor:"white",paddingVertical:10, alignItems:"center"}}>
        {ProductsGetir.slice(2).map((item)=>(
        <ProductItem key={item.id} item={item} />
      ))} 
      </View>
    </View>
  )
}

export default ProductsContainer

const styles = StyleSheet.create({})