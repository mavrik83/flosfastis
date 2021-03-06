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
        <Card.Description>
          approx harvest day: {props.harvestDay}. <br />
          <small style={{ color: "gray", fontSize: "10px" }}>
            Location: {props.location}
          </small>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default EventItem;
