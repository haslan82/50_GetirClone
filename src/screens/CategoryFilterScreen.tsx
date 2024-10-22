import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import CategoryFiltering from "../components/CategoryFiltering";
import { Category } from "../models/Index";
import TypeFiltering from "../components/TypeFiltering";
import ProductsContainer from "../components/ProductsContainer";

const CategoryFilterScreen = (props) => {
  const [category, setCategory] = useState<Category>(
    props.route.params.category
  );

  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
<ProductsContainer/>
      
    </ScrollView>
  );
};

export default CategoryFilterScreen;

const styles = StyleSheet.create({});
