import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListSeparator from '../../../components/ListSeparator';
import {CityModel} from '../../../data/model/city/CityModel';
import {RootStackParamList} from '../../../navigation/types/RootStackNavigationTypes';
import useFetchCitiesWeather from '../useFetchCitiesWeather';
import WeatherCityListItem from './WeatherCityListItem';

type Props = NativeStackScreenProps<RootStackParamList, 'WeatherCityList'>;

const WeatherCityListScreen = ({navigation}: Props) => {
  const {data: listData} = useFetchCitiesWeather();

  const listKeyExtractor = (item: CityModel, _index: number) => item.id;

  const renderListItem = ({item}: ListRenderItemInfo<CityModel>) => {
    return <WeatherCityListItem item={item} onPress={onListItemPress} />;
  };

  const renderListSeparator = () => <ListSeparator />;

  const onListItemPress = (item: CityModel) => {
    navigation.navigate('WeatherCityDetails', {city: item});
  };

  return (
    <FlatList<CityModel>
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
