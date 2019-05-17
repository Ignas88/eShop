import React, {Component} from 'react';
import { Consumer } from "../context/context";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CartItemList from "../components/CartItem/CartItemList";
import Typography from "@material-ui/core/Typography";

class CartPage extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const {cartItems} = value;

          return (
            <div>
              <h1>
                Your Albums
                {cartItems.length > 0 &&
                <Button style={{marginLeft: 10}} variant="outlined" color="primary" onClick={this.handleClickOpen}>
                  CheckOut
                </Button>}
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{"TOTAL:"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      {cartItems.map(item => (
                        <Typography variant="caption" key={item.id}>{item.qty} x {item.price} €</Typography>
                      ))}
                    </DialogContentText>
                    <hr/>
                    <p>{cartItems.length > 0 && cartItems.map(item => (item.qty * item.price)).reduce((a,b) => a + b, 0)} €</p>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Disagree
                    </Button>
                    <Button onClick={this.handleClose} color="primary" autoFocus>
                      Agree
                    </Button>
                  </DialogActions>
                </Dialog>
              </h1>
              <CartItemList/>
            </div>
          )
        }}
      </Consumer>
    );

  }
}

export default CartPage;