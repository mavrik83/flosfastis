import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Card, Grid } from "semantic-ui-react";
import EventItem from "./EventItem";

class EventList extends Component {
  render() {
    if (this.props.events.length === 0) {
      return null;
    }

    const renderedItems = _.orderBy(this.props.events, [
      "attributes.begin_time",
    ]).map((item) => {
      return (
        <EventItem
          id={item.id}
          key={item.id}
          name={item.attributes.name}
          plantingDay={item.attributes.planting_day}
          harvestDay={item.attributes.harvest_day}
          location={item.attributes.location}
        />
      );
    });
    return (
      <Grid.Column width="9">
        <Card.Group centered style={{ overflow: "auto", maxHeight: "85vh" }}>
          {renderedItems}
        </Card.Group>
      </Grid.Column>
    );
  }
}

const mapStateToProps = (state) => {
  return { events: state.events };
};

export default connect(mapStateToProps, null)(EventList);
