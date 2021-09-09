import React, { useEffect } from 'react';
import {
  Text
} from 'react-native';
import { Routes } from './src/routes/routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import DevService from './src/services/dev.service';
import { ToastProvider } from 'react-native-fast-toast'

function App() {

  useEffect(() => {
    DevService.setDevOption();
  }, [])

  return (
    <>
      <ToastProvider>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ToastProvider>
    </>
  );
};

export default App;
