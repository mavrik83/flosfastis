import React from "react";
import { Card } from "semantic-ui-react";
import EventDelete from "./EventDelete";

const EventItem = (props) => {
  return (
    <Card>
      <Card.Content>
        <EventDelete id={props.id} />
        <Card.Header content={`Sow: ${props.plantingDay}`} />
        <Card.Meta content={props.name} />
        <Card.Description
          content={`approx harvest day: ${props.harvestDay}.`}
        />
      </Card.Content>
    </Card>
  );
};

export default EventItem;
