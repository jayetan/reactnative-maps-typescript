/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AppProvider } from './src/store/context';
import BottomNav from './src/components/BottomNav';

Icon.loadFont();

const App = () => (
  <AppProvider>
    <PaperProvider>
      <BottomNav />
    </PaperProvider>
  </AppProvider>
);

export default App;
