import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFlowers, fetchEvents } from "./actions";
import FlowerDetail from "./components/flowers/FlowerDetail";
import FlowerCreate from "./components/flowers/FlowerCreate";
import Header from "./components/Header";
import HomeContainer from "./components/HomeContainer";
import Footer from "./components/Footer";

class App extends Component {
  componentDidMount() {
    localStorage.clear();
    this.props.fetchFlowers();
    this.props.fetchEvents();
  }
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/flowers/new" exact component={FlowerCreate} />
            <Route path="/flowers/:id" exact component={FlowerDetail} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchFlowers, fetchEvents })(App);
