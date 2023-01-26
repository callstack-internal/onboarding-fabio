import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListSeparator from '../../../components/list/ListSeparator';
import {RootStackParamList} from '../../../navigation/types/RootStackNavigationTypes';
import WeatherCityListItem from '../city-list/WeatherCityListItem';
import WeatherCityDetailsInfoItem from './WeatherCityDetailsInfoItem';

interface ListItem {
  label: string;
  value: string;
}

type Props = NativeStackScreenProps<RootStackParamList, 'WeatherCityDetails'>;

const WeatherCityDetailsScreen = ({route}: Props) => {
  const {city} = route.params;

  const listData: ListItem[] = [];
  listData.push({label: 'Humidity', value: `${city.humidity}%`});
  listData.push({label: 'Pressure', value: `${city.pressure} hPa`});
  listData.push({label: 'Wind Speed', value: `${city.windSpeed} mph`});
  listData.push({label: 'Cloud Cover', value: `${city.cloudCover}%`});

  const listKeyExtractor = (item: ListItem, _index: number) => item.label;

  const renderListItem = ({item}: ListRenderItemInfo<ListItem>) => {
    return <WeatherCityDetailsInfoItem label={item.label} value={item.value} />;
  };

  const renderListSeparator = () => {
    return <ListSeparator />;
  };

  const renderListHeader = () => {
    return (
      <>
        <WeatherCityListItem item={city} />
        <ListSeparator />
      </>
    );
  };

  const renderListFooter = () => {
    return <SafeAreaView edges={['bottom']} />;
  };

  return (
    <FlatList<ListItem>
      testID={'weather-city-details-screen'}
      style={styles.rootContainer}
      data={listData}
      keyExtractor={listKeyExtractor}
      renderItem={renderListItem}
      ItemSeparatorComponent={renderListSeparator}
      ListHeaderComponent={renderListHeader}
      ListFooterComponent={renderListFooter}
    />
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default WeatherCityDetailsScreen;
