import React, { Component } from "react";
import { Segment, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { clearFrost } from "../../actions";

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
          <Button
            compact
            size="mini"
            floated="right"
            onClick={() => this.props.clearFrost()}
          >
            clear
          </Button>
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

export default connect(mapStateToProps, { clearFrost })(FrostInfo);
