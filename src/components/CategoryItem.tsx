import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Category } from '../models/Index'
import { useNavigation } from '@react-navigation/native';


const {width, height} = Dimensions.get('window')
type categoryItemProps = {
  item: Category;
};



const CategoryItem=({item}:categoryItemProps) => {

  const navigation = useNavigation();

  return (

   <TouchableOpacity
   onPress={()=>navigation.navigate("CategoryDetails", {category:item})}
   style={styles.touch} >
    <Image
        style={{ width: width * 0.18, height: width * 0.18, borderRadius: 10 }}
        source={{ uri: item.src }}
      />
    <Text style={styles.text}>
    {item.name}
    </Text>

   </TouchableOpacity>

  );
}
export default CategoryItem

const styles = StyleSheet.create({
  touch:{
    width:width*0.25, 
    height:height*0.15, 
    borderRadius:8,
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    marginTop:10
  },
  text:{
    color:"#616161",
    fontSize:12,
    fontWeight:"500",
    marginTop:25
  }
})
