import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CityModel} from '../../data/model/city/CityModel';

export type WeatherCityListNavProps = undefined;

export type WeatherCityDetailsNavProps = {
  city: CityModel;
};

export type RootStackParamList = {
  WeatherCityList: WeatherCityListNavProps;
  WeatherCityDetails: WeatherCityDetailsNavProps;
};

export type RootStackParamListKeys = keyof RootStackParamList;

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
