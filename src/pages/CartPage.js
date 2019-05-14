import React, {Component} from 'react';
import {Consumer} from "../context/context";

class CartPage extends Component {
  render() {
    return (
      <Consumer>
        {value => {

          return (
            <React.Fragment>
              <h1>cart page</h1>
            </React.Fragment>
          )
        }}
      </Consumer>
    );
  }
}

export default CartPage;