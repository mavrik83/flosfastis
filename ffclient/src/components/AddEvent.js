import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import _, { toInteger } from "lodash";
import { createEvent } from "../actions";
import { NavLink } from "react-router-dom";
import ZipCodeSubmit from "./ZipCodeSubmit";

class AddEvent extends Component {
  buildConfigObj(variety, plantDay, harvestDay, dayToPlantInMs) {
    const eventObject = {
      name: variety,
      begin_time: dayToPlantInMs,
      planting_day: plantDay,
      harvest_day: harvestDay,
    };
    return eventObject;
  }
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
    const timeToSowArr = _.dropRight(
      sowing_time.replace(/-/g, " ").split(/[\s]/),
      2
    ).map((day) => {
      return day * 7;
    });
    const timeToSowAvgInMs =
      timeToSowArr.length === 2
        ? ((timeToSowArr[0] + timeToSowArr[1]) / 2) * 86400000
        : timeToSowArr[0] * 86400000;
    const dayToPlantInMs = springLastFrostDayInMs - timeToSowAvgInMs;
    const dayToPlant = new Date(dayToPlantInMs);
    const harvestDayArr = days_to_maturity
      .replace(/-/g, " ")
      .split(/[\s]/)
      .map((day) => {
        return toInteger(day);
      });
    const harvestDayAvgInMs =
      harvestDayArr.length === 2
        ? ((harvestDayArr[0] + harvestDayArr[1]) / 2) * 86400000
        : harvestDayArr[0] * 86400000;
    const dayToHarvestInMs = dayToPlantInMs + harvestDayAvgInMs;
    const dayToHarvest = new Date(dayToHarvestInMs);
    const dayToHarvestString = dayToHarvest.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    const dayToPlantString = dayToPlant.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
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
