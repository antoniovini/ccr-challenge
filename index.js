/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import {name as appName} from './app.json';

const theme = {
	...DefaultTheme,
	colors: {
    ...DefaultTheme.colors,
    primary: "white",
    accent: '#00DAE8',
    background: 'white',
    
  },
  text: {
    dark: "#009EB3",
  }
}

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
