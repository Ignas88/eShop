import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Consumer } from "../../context/context";
import CartItem from './CartItem';
import ShopItem from "../ShopItem/ShopItem";

const styles = {
  list: {
    padding: 24
  }
};

class CartItemList extends Component {

  onDeleteItem = (id, dispatch) => {
    dispatch({type: 'DELETE_ITEM', payload: id});
  };

  render() {
    const { classes } = this.props;

    return (
      <Consumer>
        {value => {
          const {cartItems, dispatch} = value;

          let content;
          if (cartItems.length > 0) {
            content = cartItems.map(
              item => (
                <CartItem
                  key={item.id}
                  item={item}
                  click={this.onDeleteItem.bind(this, item.id, dispatch)}
                />
              ))
          } else {
            content = <h3>Your Cart is Empty!</h3>
          }

          return (
            <div className={classes.list}>
              {content}
            </div>
          )
        }}
      </Consumer>
    );
  }
}

ShopItem.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(CartItemList);