import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Consumer } from "../../context/context";
import ShopItem from './ShopItem';
import Spinner from "../shared/Spinner";

const styles = {
  list: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }
};

class ShopItemList extends Component {

  onAddItem = (item, dispatch, cartItems) => {
    const selectedItem = {
      id: item.id.attributes['im:id'],
      artist: item['im:artist'].label,
      name: item['im:name'].label,
      image: item['im:image'][0].label,
      price: parseFloat(item['im:price'].attributes.amount).toFixed(2),
      qty: 1
    };

    if (!cartItems.map(item => item.id).includes(selectedItem.id)) {
      dispatch({type: 'ADD_ITEM', payload: selectedItem});
    } else {
      alert("You already selected this Item!")
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Consumer>
        {value => {
          const {items, cartItems, dispatch} = value;

          let content;
          if (items.length > 0) {
            content = items.map(
              item => (
                <ShopItem
                  key={item.id.attributes['im:id']}
                  item={item}
                  click={this.onAddItem.bind(this, item, dispatch, cartItems)}
                />
              ))
          } else {
            content = <Spinner/>
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

ShopItemList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShopItemList);