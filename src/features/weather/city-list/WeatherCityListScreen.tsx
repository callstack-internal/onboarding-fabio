import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../../navigation/types/RootStackNavigationTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'WeatherCityList'>;

const WeatherCityListScreen = () => {
  return (
    <View>
      <Text>WeatherCityListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeatherCityListScreen;
