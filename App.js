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

import { NativeRouter, Route } from 'react-router-native';

import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Vocational from './src/screens/Vocational';
import Result from './src/screens/Result';
import Careers from './src/screens/Careers';
import Premium from './src/screens/Premium';


const App = () => {
  return (
    <NativeRouter>
      <View
        style={styles.container}
      >
        <Route exact path="/" component={Login} />
        <Route path="/welcome" component={Welcome} />
        <Route exact path="/vocational" component={Vocational} />
        <Route exact path="/result" component={Result} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/premium" component={Premium} />
        <Route exact path="/home" component={Home} />
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
