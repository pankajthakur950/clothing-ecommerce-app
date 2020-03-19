import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "pages/homepage";
import ShopPage from "pages/shop";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Homepage}/>
      <Route path="/shop" component={ShopPage}/>
    </BrowserRouter>
  );
}

export default App;
