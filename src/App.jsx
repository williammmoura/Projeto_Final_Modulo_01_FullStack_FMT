import React from 'react';
import './App.css';
import Router from './Router'
import { StoreProvider } from './store/StoreProvider'

function App() {

  return (
    <div className="App">
      <StoreProvider>
        <Router />
      </StoreProvider>
    </div>
  );
}

export default App;