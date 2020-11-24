import React from 'react';

//import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import GlobalStyled from './styles/global';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <SignUp />
      <GlobalStyled />
    </>
  );
}

export default App;
