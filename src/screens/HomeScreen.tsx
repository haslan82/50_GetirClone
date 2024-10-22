import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import HeaderMain from "../components/HeaderMain";
import MainCategories from "../components/MainCategories";



const HomeScreen = () => {
  return (

    <SafeAreaView style={{backgroundColor:"#f5f5f5"}}>
      <Header />
      <ScrollView
      /*   stickyHeaderIndices={[0]}
        style={{ backgroundColor: "#f5f5f5" }} */
        >
        <HeaderMain />
        <MainCategories/>
        <MainCategories/>
        
        



      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
