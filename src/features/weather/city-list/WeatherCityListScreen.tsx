import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListEmptyComponent from '../../../components/list/ListEmptyComponent';
import ListLoadingComponent from '../../../components/list/ListLoadingComponent';
import ListSeparator from '../../../components/list/ListSeparator';
import {CityModel} from '../../../data/model/city/CityModel';
import {RootStackParamList} from '../../../navigation/types/RootStackNavigationTypes';
import useFetchCitiesWeather from '../useFetchCitiesWeather';
import WeatherCityListItem from './WeatherCityListItem';

type Props = NativeStackScreenProps<RootStackParamList, 'WeatherCityList'>;

const WeatherCityListScreen = ({navigation}: Props) => {
  const {data, isLoading, error, fetch} = useFetchCitiesWeather();

  const listKeyExtractor = (item: CityModel, _index: number) => item.id;

  const renderListItem = ({item}: ListRenderItemInfo<CityModel>) => {
    return <WeatherCityListItem item={item} onPress={onListItemPress} />;
  };

  const renderListSeparator = () => {
    return <ListSeparator />;
  };

  const renderListFooter = () => {
    return <SafeAreaView edges={['bottom']} />;
  };

  const renderEmptyList = () => {
    if (isLoading && data.length === 0) {
      return <ListLoadingComponent />;
    }

    return (
      <ListEmptyComponent
        description={error ? 'An error occured.' : 'No data to display.'}
        onTryAgainPress={fetch}
      />
    );
  };

  const onListItemPress = (item: CityModel) => {
    navigation.navigate('WeatherCityDetails', {city: item});
  };

  return (
    <FlatList<CityModel>
      style={styles.rootContainer}
      data={data}
      keyExtractor={listKeyExtractor}
      renderItem={renderListItem}
      ItemSeparatorComponent={renderListSeparator}
      ListFooterComponent={renderListFooter}
      ListEmptyComponent={renderEmptyList}
    />
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default WeatherCityListScreen;
