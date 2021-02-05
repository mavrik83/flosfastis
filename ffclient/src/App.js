import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFlowers } from "./actions";
import FlowerDetail from "./components/FlowerDetail";
import FlowerList from "./components/FlowerList";
import FlowerCreate from "./components/FlowerCreate";
import Header from "./components/Header";
// import Timeline from "./components/Timeline";

class App extends Component {
  componentDidMount() {
    localStorage.clear();
    this.props.fetchFlowers();
  }
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Header />
          {/* <Timeline /> */}
          <Switch>
            <Route path="/" exact component={FlowerList} />
            <Route path="/flowers/new" exact component={FlowerCreate} />
            <Route path="/flowers/:id" exact component={FlowerDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchFlowers: fetchFlowers })(App);
