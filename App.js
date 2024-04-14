import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { store } from './src/components/redux/store';
import { Provider } from 'react-redux';


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