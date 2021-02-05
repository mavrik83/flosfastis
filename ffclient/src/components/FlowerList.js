import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFlowers } from "../actions";
import FlowerItem from "./FlowerItem";
import { Segment, Grid } from "semantic-ui-react";
import _ from "lodash";
import LandingSplash from "./LandingSplash";

class FlowerList extends Component {
  componentDidMount() {
    this.props.fetchFlowers();
  }

  render() {
    const renderedFlowers = _.orderBy(this.props.flowers, [
      "attributes.variety",
    ]).map((flower) => {
      return (
        <FlowerItem
          key={flower.attributes.id}
          name={flower.attributes.variety}
          id={flower.attributes.id}
        />
      );
    });
    return (
      <Grid style={{ marginTop: "15px" }}>
        <Grid.Column width="6">
          <Segment.Group style={{ overflow: "auto", maxHeight: "85vh" }}>
            {renderedFlowers}
          </Segment.Group>
        </Grid.Column>
        <Grid.Column width="1"></Grid.Column>
        <LandingSplash />
      </Grid>
    );
  }
}

const mapStatetoProps = (state) => {
  return { flowers: state.flowers };
};

export default connect(mapStatetoProps, { fetchFlowers: fetchFlowers })(
  FlowerList
);