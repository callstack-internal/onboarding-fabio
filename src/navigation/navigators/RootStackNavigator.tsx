import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import WeatherCityListScreen from '../../features/weather/city-list/WeatherCityListScreen';
import {RootStackParamList} from '../types/RootStackNavigationTypes';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={'WeatherCityList'}>
      <RootStack.Screen
        name={'WeatherCityList'}
        component={WeatherCityListScreen}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
