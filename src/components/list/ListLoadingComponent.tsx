import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../styles/Colors';

const ListLoadingComponent = () => {
  return (
    <SafeAreaView style={styles.rootContainer} edges={['left', 'right']}>
      <ActivityIndicator size={'large'} color={Colors.black} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
});

export default ListLoadingComponent;
