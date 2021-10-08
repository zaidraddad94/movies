import React from 'react';
import AppWithNavication from './src/navication/appWithNavication'
import {NativeBaseProvider } from "native-base"

const App = () => {
  return (
    <NativeBaseProvider>
    <AppWithNavication />
    </NativeBaseProvider>
  );
}

export default App;