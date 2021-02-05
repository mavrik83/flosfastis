import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";

class FrostInfo extends Component {
  render() {
    if (this.props.frost.length === 0) {
      return null;
    }

    const {
      altitude,
      lastSpringFrost,
      firstFallFrost,
      growingSeason,
    } = this.props.frost;
    return (
      <div>
        <Segment basic size="mini">
          Altitude: {altitude} | Last Spring Frost: {lastSpringFrost} | First
          Fall Frost: {firstFallFrost} | Growing Season: {growingSeason}
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { frost: state.frost };
};

export default connect(mapStateToProps, null)(FrostInfo);
