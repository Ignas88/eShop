import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ShopItemsList from '../components/ShopItem/ShopItemList';
import PropTypes from "prop-types";

const styles = {
  page: {
    marginTop: 74,
    height: '90vh',
    overflowY: 'scroll',
  }
};

const ItemsPage = (props) => {
  const { classes } = props;

  return (
    <div className={classes.page}>
      <h1>Music Albums Shop</h1>
      <ShopItemsList/>
    </div>
  );
};

ItemsPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ItemsPage);