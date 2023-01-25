import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../../styles/Colors';

type Props = {
  label: string;
  value: string;
};

const WeatherCityDetailsInfoItem = ({label, value}: Props) => {
  return (
    <SafeAreaView style={styles.rootContainer} edges={['left', 'right']}>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
      <Text style={styles.valueLabel} numberOfLines={1}>
        {value}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: 20,
  },
  label: {
    flex: 1,
    fontSize: 14,
    color: Colors.black,
  },
  valueLabel: {
    fontSize: 14,
    color: Colors.gray,
  },
});

export default WeatherCityDetailsInfoItem;
