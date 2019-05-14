import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Header = () => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} style={{color: 'white'}} to="/">Items</Button>
          <Button component={Link} style={{color: 'white'}} to="/cart">Cart</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;