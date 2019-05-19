import React from 'react';
import {Provider} from "./context/context";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Header from "./components/layout/Header";
import Chat from "./components/layout/Chat";
import ItemsPage from "./pages/ItemsPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={ItemsPage}/>
            <Route exact path="/cart" component={CartPage}/>
          </Switch>
          <Chat />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
