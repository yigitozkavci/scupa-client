import React from 'react';
import NavbarInstance from './Navbar';

const App = ({ children }) => {
  return (
    <div>
      WII
      { NavbarInstance }
      { children }
    </div>
  )
}

export default App;

