import * as React from 'react';
import {Navigation} from './navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {configureNotification} from './modules/notifications';
import './modules/i18n';

export default function App() {
  configureNotification();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
