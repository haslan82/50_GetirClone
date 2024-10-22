import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'



const {width, height} = Dimensions.get('window')

const ImageCarousel = ({images}:{images:string[]}) => {

const [activeIndex, setActiveIndex]= useState(0)
const onViewRef = React.useRef((viewableItems)=>{
    if(viewableItems.viewableItems.length > 0)
        {
      setActiveIndex(viewableItems.viewableItems[0].index || 0)
    }
})

const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold:50})


  return (
  <View style={styles.container}>
     <FlatList
   style={{width:width*0.5, height:height*0.21}} 
   data={images}

   renderItem={(item)=>(

     <Image style={{width:width*0.5, height:height*0.21,}} 
     source={{uri:item.item}} />
   )}
   horizontal
   showsHorizontalScrollIndicator={false}
   snapToInterval={width*0.5}
   snapToAlignment={"center"}
   decelerationRate={"fast"}
   viewabilityConfig={viewConfigRef.current}
   onViewableItemsChanged={onViewRef.current}
   >
     
   </FlatList>
   <View>
<View style={{flexDirection:"row", alignItems:"center", width:30, height:12, justifyContent:"space-around"}}>
    {images.map((image,index)=>(
        <View key={index} style={[styles.dot,{backgroundColor: index === activeIndex ?  '#5D3EBD' : '#F2F0FD' }]} />
    ))}
</View>
   </View>
  </View>
  )
}

export default ImageCarousel

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        width:"100%",
        backgroundColor:'white',
        height:height*.25,
        paddingTop:25,
        marginTop:12,
        resizeMode:"stretch",  
    },
    dot:{
        width:8,
        height:8,
        borderRadius:4,
        marginHorizontal:3,
    }
})