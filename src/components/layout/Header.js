import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from "../../context/context";
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import ShopItem from "../ShopItem/ShopItem";

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 5,
  }
};

const Header = props => {

  const { classes } = props;

  return (
    <Consumer>
      {value => {
        const {cartItems} = value;

        return (
          <React.Fragment>
            <AppBar position="static">
              <Toolbar className={classes.header}>
                <Button component={Link} style={{color: 'white'}} to="/">Items</Button>
                <Button component={Link} style={{color: 'white'}} to="/cart">
                  <Badge badgeContent={cartItems.length} color="secondary" classes={{ badge: classes.badge }}>
                    Cart <ShoppingCartIcon className={classes.icon} />
                  </Badge>
                </Button>
              </Toolbar>
            </AppBar>
          </React.Fragment>
        )
      }}
    </Consumer>
  );
};

ShopItem.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Header);