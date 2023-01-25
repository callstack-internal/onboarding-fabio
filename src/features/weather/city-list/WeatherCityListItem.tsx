import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {CityModel} from '../../../data/model/city/CityModel';
import Colors from '../../../styles/Colors';

type Props = {
  item: CityModel;
  onPress?: (item: CityModel) => void;
};

const WeatherCityListItem = ({item, onPress}: Props) => {
  const _onPress = () => {
    onPress?.(item);
  };

  return (
    <Pressable accessibilityRole={'button'} onPress={_onPress}>
      <SafeAreaView style={styles.rootContainer} edges={['left', 'right']}>
        <Image
          style={styles.image}
          source={{uri: item.iconURL}}
          accessibilityIgnoresInvertColors
        />

        <View style={styles.detailsContainer}>
          <Text style={styles.detailsNameLabel} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.detailsWeatherLabel} numberOfLines={1}>
            {item.weather}
          </Text>
        </View>

        <View style={styles.chipContainer}>
          <Text style={styles.chipLabel} numberOfLines={1}>
            {`${item.temperature} °F`}
          </Text>
        </View>

        {onPress && (
          <MaterialIcon
            style={styles.chevronIcon}
            name={'chevron-right'}
            size={24}
            color={Colors.black}
          />
        )}
      </SafeAreaView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 20,
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
  },

  detailsContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  detailsNameLabel: {
    fontSize: 14,
    color: Colors.black,
  },
  detailsWeatherLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.gray,
    marginTop: 4,
  },

  chipContainer: {
    height: 30,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: Colors.lightGray,
  },
  chipLabel: {
    fontSize: 14,
    color: Colors.black,
  },

  chevronIcon: {
    marginLeft: 10,
  },
});

export default WeatherCityListItem;
