import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'


const {width, height} =Dimensions.get('window');
const TypeBox = ({setCat, item,active}: {item:string, active:string, setCat:any} )=>{
  return(
    <TouchableOpacity onPress={()=>setCat(item)} style={[{flexDirection:'row',alignItems:'center',justifyContent:'center', paddingHorizontal:10,borderRadius:6,height:height*0.044,marginRight:12},item == active ? {backgroundColor:'#5C3EBC'}:{borderColor:'lightgray',borderWidth:0.3}]}>
    <Text style={[{fontSize:12,color:'#7849F7',fontWeight:'600'},item==active && {color:'white'}]}>{item}</Text>
</TouchableOpacity>
  )
}




const TypeFiltering = () => {
  const [category, setCategory] = useState<String>("Çubuk")
  return (
    <ScrollView style={{width:'100%',backgroundColor:'white', height:height*0.072, flexDirection:"row", paddingVertical:height*0.014, paddingHorizontal:12, borderBottomWidth:1, borderBottomColor:"lightgrey" }}
    showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
 {["Birlikte İyi Gider","Çubuk","Kutu","Külah","Çoklu","Bar"].map((item)=>(
                 <TypeBox setCat={setCategory} item={item} active={category}  />
            ))
            }
    </ScrollView>
  )
}

export default TypeFiltering

const styles = StyleSheet.create({})