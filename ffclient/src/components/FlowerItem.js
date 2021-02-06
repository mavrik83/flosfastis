import React from "react";
import { Segment, Button, Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import FlowerDelete from "./FlowerDelete";

const FlowerItem = (props) => {
  return (
    <Segment clearing>
      <Button floated="right" compact as={NavLink} to={`/flowers/${props.id}`}>
        View
      </Button>

      <FlowerDelete condition={props.condition} id={props.id} />
      <Header floated="left">{props.name}</Header>
    </Segment>
  );
};

export default FlowerItem;
