import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Product } from '../models/Index'
import ImageCarousel from '../components/ImageCarousel'
import DetailBox from '../components/DetailBox'
import Detailproperty from '../components/Detailproperty'
import CartButton from '../components/CartButton'




const ProductDetailScreen = (props) => {
    const [product, setProduct] = useState<Product>()
    useEffect(() =>{
        setProduct(props.route.params.product)
    },[])

    if(!product){
        return <ActivityIndicator color={'#5d3ebd'}/>
    }

  return (
    <View style={{flex:1}}>
    <ScrollView>
    <ImageCarousel images={product.images}/>
    <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar} />
    <Text style={{paddingHorizontal:10, paddingVertical:14, color:'#808b99', fontWeight:'600'}}>Detaylar</Text>
    <Detailproperty />
    </ScrollView>
    <CartButton product={product}/>
    
    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({})