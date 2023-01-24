import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStackNavigator from './navigation/navigators/RootStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default App;
