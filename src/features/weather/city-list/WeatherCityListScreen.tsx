import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListSeparator from '../../../components/ListSeparator';
import {CityModel} from '../../../data/model/city/CityModel';
import {RootStackParamList} from '../../../navigation/types/RootStackNavigationTypes';
import WeatherCityListItem from './WeatherCityListItem';

type Props = NativeStackScreenProps<RootStackParamList, 'WeatherCityList'>;

const WeatherCityListScreen = ({navigation}: Props) => {
  const listData: CityModel[] = [
    {
      id: 'city1',
      name: 'City 1',
      weather: 'Clear',
      temperature: 40,
      iconURL: 'https://openweathermap.org/img/wn/01d.png',
      cloudCover: 100,
      humidity: 100,
      pressure: 50,
      windSpeed: 60,
    },
    {
      id: 'city2',
      name: 'City 2',
      weather: 'Clouds',
      temperature: 50,
      iconURL: 'https://openweathermap.org/img/wn/03d.png',
      cloudCover: 100,
      humidity: 100,
      pressure: 50,
      windSpeed: 60,
    },
    {
      id: 'city3',
      name: 'City 3',
      weather: 'Rain',
      temperature: 60,
      iconURL: 'https://openweathermap.org/img/wn/10d.png',
      cloudCover: 100,
      humidity: 100,
      pressure: 50,
      windSpeed: 60,
    },
  ];

  const listKeyExtractor = (item: CityModel, _index: number) => item.id;

  const renderListItem = ({item}: ListRenderItemInfo<CityModel>) => {
    return <WeatherCityListItem item={item} onPress={onListItemPress} />;
  };

  const renderListSeparator = () => <ListSeparator />;

  const onListItemPress = (item: CityModel) => {
    navigation.navigate('WeatherCityDetails', {city: item});
  };

  return (
    <FlatList
      style={styles.rootContainer}
      data={listData}
      keyExtractor={listKeyExtractor}
      renderItem={renderListItem}
      ItemSeparatorComponent={renderListSeparator}
      ListFooterComponent={<SafeAreaView edges={['bottom']} />}
    />
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default WeatherCityListScreen;
