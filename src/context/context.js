import React, {Component} from 'react';
import reducer from '../context/reducer';
import axios from 'axios/index';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    items: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    const res = await axios
      .get('https://itunes.apple.com/us/rss/topalbums/limit=100/json');

    this.setState({items: res.data.feed.entry});
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;