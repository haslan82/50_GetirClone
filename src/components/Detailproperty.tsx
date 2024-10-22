import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';



const Detailproperty = () => {

const [details, setDetails] = useState<string[]>(['Sütlü çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti', "İçindekiler", 'Besin Değerleri', 'Kullanım',"Ek Bilgiler"])

const TextComponent =({detail, index}:{detail:string, index:number}) => {
    return(
    <View style={{paddingVertical:12,
        borderBottomColor:'lightgray',
        borderBottomWidth:index === details.length -1 ? 0 : 0.4,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
       
    }}>
        <Text style={{color:index === 0 ? 'black' : '#687482', fontSize:index === 0 ? 11 : 13, fontWeight:index === 0 ? '400' : '500'}}>{detail} </Text>
        {index!= 0 && <Entypo name="chevron-down" size={24} color="#9f9f9f" />}
    </View>
    )
}

  return (
    <View style={{backgroundColor:'white', paddingHorizontal:16 , paddingVertical:8}}>
      {details.map((item, index)=>(
        <TextComponent detail={item} key ={index} index={index} />
      ))}
    </View>
  )
}

export default Detailproperty

const styles = StyleSheet.create({})