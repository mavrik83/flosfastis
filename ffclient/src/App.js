import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import FlowerDetail from "./components/FlowerDetail";
import FlowerList from "./components/FlowerList";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="ui container transparent">
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={FlowerList} />
          <Route path="/flowers/:id" exact component={FlowerDetail} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
