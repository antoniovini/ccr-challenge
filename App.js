/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Vocational from './src/screens/Vocational';
import Result from './src/screens/Result';
import Careers from './src/screens/Careers';
import Premium from './src/screens/Premium';


const App = () => {
  return (
    <View
      style={styles.container}
    >
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
