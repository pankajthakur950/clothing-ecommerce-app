import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "pages/homepage";
import ShopPage from "pages/shop";
import Header from "components/Header"

function App() {
  return (
    
    <BrowserRouter>
      <Header/>
      <Route exact path="/" component={Homepage}/>
      <Route path="/shop" component={ShopPage}/>
    </BrowserRouter>
  );
}

export default App;
