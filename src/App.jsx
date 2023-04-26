import React from 'react';
import Router from './Router'
import { StoreProvider } from './context/store/StoreProvider'

function App() {

  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  );
}

export default App;