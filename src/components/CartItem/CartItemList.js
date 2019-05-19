import React, {Component} from 'react';
import { Consumer } from "../../context/context";
import CartItem from './CartItem';

class CartItemList extends Component {

  onDeleteItem = (id, dispatch) => {
    dispatch({type: 'DELETE_ITEM', payload: id});
  };

  render() {

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
            <div>
              {content}
            </div>
          )
        }}
      </Consumer>
    );
  }
}

export default CartItemList;