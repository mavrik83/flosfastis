import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import _ from "lodash";
import { createEvent } from "../../actions";
import { NavLink } from "react-router-dom";
import ZipCodeSubmit from "../frostdates/ZipCodeSubmit";
import { parseData } from "../../utils/eventdataparse";

class AddEvent extends Component {
  onClick(eventObject) {
    this.props.createEvent(eventObject);
  }

  render() {
    if (this.props.frost.length === 0) {
      return (
        <div>
          Enter your zip code to add this flower to the timeline
          <ZipCodeSubmit />
        </div>
      );
    }

    const selectedFlower = _.filter(this.props.flowers, {
      id: `${this.props.id}`,
    });
    const {
      variety,
      sowing_time,
      days_to_maturity,
    } = selectedFlower[0].attributes;
    const springLastFrostDayInMs = Date.parse(
      this.props.frost.lastSpringFrost + ", 2021"
    );
    const location = this.props.frost.location;

    const eventObject = parseData(
      location,
      variety,
      sowing_time,
      days_to_maturity,
      springLastFrostDayInMs
    );

    return (
      <>
        <Button
          as={NavLink}
          to="/"
          compact
          onClick={() => this.onClick(eventObject)}
        >
          Add to Timeline
        </Button>
      </>
    );
  }
}

const mapStatetoProps = (state) => {
  return { flowers: state.flowers, frost: state.frost };
};

export default connect(mapStatetoProps, { createEvent })(AddEvent);
