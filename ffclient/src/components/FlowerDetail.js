import React, { Component } from "react";
import { connect } from "react-redux";
import { selectFlower } from "../actions";
import { Segment, Item, Header } from "semantic-ui-react";

class FlowerDetail extends Component {
  render() {
    return (
    );
  }
}

const mapStatetoProps = (state) => {
  return { flower: state.selectedFlower.attributes };
};

export default connect(mapStatetoProps, { selectFlower: selectFlower })(
  FlowerDetail
);
