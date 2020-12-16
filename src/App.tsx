import React from 'react';


import GlobalStyled from './styles/global';
import { AppProvider } from './hooks';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './route';




const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
        <GlobalStyled />
      </AppProvider>
    </Router>
  );
}

export default App;
