import React from 'react';

import { Link } from 'react-router-dom';
import { Menu } from 'antd';


export const Navbar = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: '64px', float: 'right' }}
    >
      <Menu.Item key="1" onClick={ () => {} }>
        <Link to="/"> Whoami! </Link>
      </Menu.Item>
      <Menu.Item key="3" onClick={ () => {} }>
        Send me!
      </Menu.Item>
    </Menu>
  );
}