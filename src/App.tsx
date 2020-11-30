import React from 'react';

import SignIn from './pages/SignIn';
//import SignUp from './pages/SignUp';
import GlobalStyled from './styles/global';
import { AppProvider } from './hooks';




const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
        <GlobalStyled />
      </AppProvider>
    </>
  );
}

export default App;
