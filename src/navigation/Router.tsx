import { StyleSheet, TouchableOpacity} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductScreen from '../screens/ProductScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import HomeNavigator from './HomeNavigator';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';



const Tab = createBottomTabNavigator();


const Router = () => {
  
const CustomTabBarButton = ({children} )=>{
  return (
    <TouchableOpacity
    style={{
      borderColor: "white",
      borderWidth: 2,
      borderRadius: 32,
      justifyContent: "center",
      marginTop: -1,
      alignItems: "center",
      backgroundColor: "#5C3EBC",
      width: 55,
      height: 55,
    }}
    /*   onPress={() => alert("This is a custom tab bar button")} */
    >
      <Entypo name="list" size={32} color="#FFD00C" />
     
    </TouchableOpacity>
  );
}

  return (
  
    <Tab.Navigator
    initialRouteName="AnaSayfa"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#5C3EBC",
          tabBarInactiveTintColor: "#959595",
          headerShown: false,
          tabBarStyle: {
            height: 80,
          },
        }}
    >
    <Tab.Screen name="Home" component={HomeNavigator} options={{
      tabBarIcon:({color}) =>(
        <AntDesign name="home" size={24} color={color} />
      )
    }}/>

<Tab.Screen
          name="Arama"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="search" size={24} color={color} />
            ),
          }}
        />

<Tab.Screen
          name="list"
          component={HomeNavigator}
          options={{
            tabBarButton:(props)=><CustomTabBarButton {...props}/>
          }}
          
        />

        
        <Tab.Screen
          name="Kullanıcı"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}
          
        />
        <Tab.Screen
          name="İlanlarım"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" size={24} color={color} />            ),
          }}
        />

   
  
  </Tab.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})








    