import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import categoriesGetir from '../../assets/categoriesGetir'
import CategoryItem from './CategoryItem'



const MainCategories = () => {

  
    const [categories, setCategories] = useState(categoriesGetir);

    return (
        <View style={{ backgroundColor: "#F5F5F5" }}>
                  <View style={styles.listContainer}>
            {categories.map((item)=>(
                <CategoryItem key ={item.id} item={item} />
            ))}
          </View>
        </View>
      );
}

export default MainCategories

const styles = StyleSheet.create({
    listContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "wrap",
      //backgroundColor: "white",
      width: "100%",
    },
  });