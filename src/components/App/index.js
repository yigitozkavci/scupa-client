import React from 'react';
import NavbarInstance from './Navbar';

const App = ({ children }) => {
  return (
    <div>
      { NavbarInstance }
      { children }
    </div>
  )
}

export default App;

