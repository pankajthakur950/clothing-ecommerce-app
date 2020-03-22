import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "pages/homepage";
import ShopPage from "pages/shop";
import Header from "components/Header";
import LoginPage from "pages/login";
import { auth } from "firebase/firebase.util";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromUserAuth = null;
  componentDidMount() {
    this.unsubscribeFromUserAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromUserAuth();
  }
  render() {
    return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser} />
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={LoginPage} />
      </BrowserRouter>
    );
  }
}

export default App;
