import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';


const { height } = Dimensions.get("window");
const Header = () => {
  return (
    <SafeAreaView>
    <View style={styles.headerMain}>
    <View style={styles.headerOne}>
    <Image style={styles.image} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}}/>
    <View style={styles.headerOneView}>
        <Text style={{fontWeight:600, fontSize:16, marginLeft:5}}>Ev</Text>
        <Text style={{fontWeight:500, fontSize:12, color:"#6E7480", marginLeft:6}}>Çiğdem Mah. 12.Sok. No:7 Beykoz/İSTANBUL </Text>
        <Entypo name="chevron-right" size={24} color="#5D3EBD" />
    </View>
    <View style={styles.header2}>
        <Text style={{fontSize:10,color:'#5D3EBD',fontWeight:'bold',textAlign:'center'}}>TVS</Text>
        <Text style={{fontSize:20,color:'#5D3EBD',fontWeight:'bold',textAlign:'center'}}>
            14<Text style={{fontSize:16,color:'#5D3EBD',fontWeight:'bold',textAlign:'center'}}>dk</Text>
        </Text>
    </View>
      <View>

      </View>
    </View>
  </View>
  </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    headerMain: {
        backgroundColor: "#F7D102",
        height: height * 0.064,
      },
      image: {
        width:30,
        height:30
      },
      headerOne:{
        flexDirection: "row",
        height: height * 0.064,
        width:"80%",
    backgroundColor: "white",
    alignItems:"center",
    paddingHorizontal:"3%",
    borderTopRightRadius:30,
    borderBottomRightRadius:30
      },
      headerOneView:{
        flexDirection: "row",
        alignItems: "center",
        borderLeftColor: "#F3F2FD",
        borderLeftWidth:2,
        paddingLeft:8
      },
      header2:{
        width: "20%",
        height: height * 0.064,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft:18
       
      }


})