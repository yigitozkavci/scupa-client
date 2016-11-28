import React from 'react';
import NavbarInstance from './Navbar';
import { Menu, SubMenu } from 'antd';

const App = ({ children }) => {
  return (
    <div>
      <Menu>
        <Menu.Item>Menu</Menu.Item>
        <SubMenu title="SubMenu">
          <Menu.Item>SubMenuItem</Menu.Item>
        </SubMenu>
      </Menu>
      { /* NavbarInstance */ }
      { children }
    </div>
  )
}

export default App;

