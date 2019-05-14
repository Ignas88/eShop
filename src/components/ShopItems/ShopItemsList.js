import React, {Component} from 'react';
import {Consumer} from "../../context/context";
import ShopItem from './ShopItem';
import Spinner from "../shared/Spinner";

class ShopItemsList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const {items} = value;
          let content;
          console.log(items)
          if (items.length > 0) {
            content = items.map(
              item => (
                <ShopItem key={item.id.attributes['im:id']} item={item}/>
              ))
          } else {
            content = <Spinner/>
          }

          return (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              {content}
            </div>
          )
        }}
      </Consumer>
    );
  }
}

export default ShopItemsList;