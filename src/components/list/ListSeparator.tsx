import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../styles/Colors';

const ListSeparator = () => {
  return <View style={styles.rootContainer} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.lightGray,
    height: 1,
  },
});

export default ListSeparator;
