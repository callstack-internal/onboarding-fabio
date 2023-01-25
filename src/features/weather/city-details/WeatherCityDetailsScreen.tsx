import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../../../navigation/types/RootStackNavigationTypes';
import WeatherCityListItem from '../city-list/WeatherCityListItem';

type Props = NativeStackScreenProps<RootStackParamList, 'WeatherCityDetails'>;

const WeatherCityDetailsScreen = ({route}: Props) => {
  return (
    <View style={styles.rootContainer}>
      <WeatherCityListItem item={route.params.city} />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default WeatherCityDetailsScreen;
