import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CityModel} from '../../../data/model/city/CityModel';

type Props = {
  item: CityModel;
  onPress?: (item: CityModel) => void;
};

const WeatherCityListItem = ({item, onPress}: Props) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeatherCityListItem;
