import {
  ScrollView,
} from 'react-native';
import React from 'react';
import CakeTypes from './CakeTypes';

function MainScreenScrollview() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-5"
    >
      <CakeTypes />
    </ScrollView>
  );
}

export default MainScreenScrollview;
