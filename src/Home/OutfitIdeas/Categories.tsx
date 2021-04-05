import React from 'react';
// Modules
import {ScrollView, View} from 'react-native';
// Components
import Category from './Category';
// Constants
const categories = [
  {
    id: 'newin',
    title: 'New In',
    color: '#FFE8E9',
  },
  {
    id: 'summer',
    title: 'Summer',
    color: '#F1e0FF',
  },
  {
    id: 'activewear',
    title: 'Active Wear',
    color: '#BFEAF5',
  },
  {
    id: 'outlet',
    title: 'Outlet',
    color: '#F1E0FF',
  },
  {
    id: 'accesories',
    title: 'Accesories',
    color: '#FFE8E9',
  },
];
// Categories
const Categories = () => {
  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ScrollView>
    </View>
  );
};
export default Categories;
