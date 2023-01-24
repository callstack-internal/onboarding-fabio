import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListSeparator from '../../../components/ListSeparator';
import {CityModel} from '../../../data/model/city/CityModel';
import {RootStackParamList} from '../../../navigation/types/RootStackNavigationTypes';
import WeatherCityListItem from './WeatherCityListItem';

type Props = NativeStackScreenProps<RootStackParamList, 'WeatherCityList'>;

const WeatherCityListScreen = () => {
  const listData: CityModel[] = [
    {
      id: 'city1',
      name: 'City 1',
      weather: '',
      temperature: 40,
    },
    {
      id: 'city2',
      name: 'City 2',
      weather: '',
      temperature: 50,
    },
    {
      id: 'city3',
      name: 'City 3',
      weather: '',
      temperature: 60,
    },
  ];

  const listKeyExtractor = (item: CityModel, _index: number) => item.id;

  const renderListItem = ({item}: ListRenderItemInfo<CityModel>) => {
    return <WeatherCityListItem item={item} />;
  };

  const renderListSeparator = () => <ListSeparator />;

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
