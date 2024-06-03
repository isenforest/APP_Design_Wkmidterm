import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { store } from './src/components/redux/store';
import { Provider } from 'react-redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: ''
  }
};

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <GluestackUIProvider config={config}>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </GluestackUIProvider>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}



export default App;