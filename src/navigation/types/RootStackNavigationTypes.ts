import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type WeatherCityListNavProps = undefined;

export type RootStackParamList = {
  WeatherCityList: WeatherCityListNavProps;
};

export type RootStackParamListKeys = keyof RootStackParamList;

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
