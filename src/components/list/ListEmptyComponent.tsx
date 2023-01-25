import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';

type Props = {
  description: string;
  onTryAgainPress: () => void;
};

const ListEmptyComponent = ({description, onTryAgainPress}: Props) => {
  return (
    <SafeAreaView style={styles.rootContainer} edges={['left', 'right']}>
      <Text style={styles.descriptionLabel}>{description}</Text>

      <Pressable
        style={styles.tryAgainButtonContainer}
        accessibilityRole={'button'}
        onPress={onTryAgainPress}>
        <Text style={styles.tryAgainButtonLabel}>Try Again</Text>
        <MaterialIcon name={'refresh'} size={24} color={Colors.blue} />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },

  descriptionLabel: {
    fontSize: 14,
    color: Colors.black,
  },

  tryAgainButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  tryAgainButtonLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.blue,
  },
});

export default ListEmptyComponent;
