import React, { Component } from "react";
import { connect } from "react-redux";
import { selectFlower } from "../actions";
import { Segment, Item, Header } from "semantic-ui-react";

class FlowerDetail extends Component {
  componentDidMount() {
    const flowerId = this.props.match.params.id;
    this.props.selectFlower(flowerId);
  }

  render() {
    console.log(this.props.flower);
    return (
      <Segment.Group>
        <Segment basic>{this.props.flower.variety}</Segment>
        <Segment basic>{this.props.flower.outdoor_sowing_date}</Segment>
        <Segment basic>{this.props.flower.soil}</Segment>
        <Segment basic>{this.props.flower.planting_depth}</Segment>
        <Segment basic>{this.props.flower.sun_light}</Segment>
      </Segment.Group>
    );
  }
}

const mapStatetoProps = (state) => {
  return { flower: state.selectedFlower.attributes };
};

export default connect(mapStatetoProps, { selectFlower: selectFlower })(
  FlowerDetail
);
