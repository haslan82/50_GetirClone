import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import categoriesGetir from "../../assets/categoriesGetir";


const { height, width } = Dimensions.get("window");


const CategoryBox = ({ active, item }: { active: string; item: string }) => {
  
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 9,
        },
        item == active && {
          borderBottomColor: "#FFD00C",
          borderBottomWidth: 2.5,
        },
      ]}
    >
      <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>
        {item}
      </Text>
    </View>
  );
};

const CategoryFiltering = ({ category }: { category: string }) =>{
  const [categories, setCategories] = useState(categoriesGetir);

  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "#7849F7",
        height: height * 0.065,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
        
      {categories.map((item) => (
        <CategoryBox item={item.name} active={category} />
      ))}
     
    </ScrollView>
  );
};

export default CategoryFiltering;

const styles = StyleSheet.create({});
