import { View, ScrollView, Platform, StatusBar } from 'react-native';
import React from 'react';
import Header from '../../components/Home/Header';
import Slider from './../../components/Home/Slider';
import Category from '../../components/Home/Category';
import PopularBusiness from '../../components/Home/PopularBusiness';

export default function Home() {
  return (
    <View style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <ScrollView>
        <Header />
        <Slider />
        <Category />
        <PopularBusiness />
        <View style={{ height: 50 }}></View>
      </ScrollView>
    </View>
  );
}
