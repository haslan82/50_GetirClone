import { StyleSheet, Text, View } from 'react-native'


type DetailBoxProps={
    price:number;
    name:string;
    quantity:string;
}


const DetailBox = ({price,name,quantity}:DetailBoxProps) => {
  return (
    <View style={{width:'100%',backgroundColor:'#fff', alignItems:'center'}}>
      <Text style={{color:'#5d3ebd', fontWeight:'bold', marginTop:12, fontSize:20}}>₺{price}</Text>
      <Text style={{fontWeight:'600', fontSize:16, marginTop:12}}>{name}</Text>
      <Text style={{color:'#848897', fontWeight:'600',marginTop:8, fontSize:14 , paddingBottom:16}}>{quantity}</Text>
    </View>
  )
}

export default DetailBox

const styles = StyleSheet.create({})