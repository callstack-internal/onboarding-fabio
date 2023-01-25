import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import WeatherCityDetailsScreen from '../../features/weather/city-details/WeatherCityDetailsScreen';
import WeatherCityListScreen from '../../features/weather/city-list/WeatherCityListScreen';
import {RootStackParamList} from '../types/RootStackNavigationTypes';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={'WeatherCityList'}>
      <RootStack.Screen
        name={'WeatherCityList'}
        component={WeatherCityListScreen}
        options={{headerTitle: 'Weather'}}
      />
      <RootStack.Screen
        name={'WeatherCityDetails'}
        component={WeatherCityDetailsScreen}
        options={({route}) => ({title: route.params.city.name})}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
