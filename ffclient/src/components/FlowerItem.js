import React from "react";
import { Segment, Button, Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { selectFlower } from "../actions";
import { connect } from "react-redux";

const FlowerItem = (props) => {
  return (
    <Segment clearing>
      <Button floated="right" compact as={NavLink} to={`/flowers/${props.id}`}>
        Click
      </Button>
      <Header floated="left">{props.name}</Header>
    </Segment>
  );
};

export default connect(null, { selectFlower: selectFlower })(FlowerItem);
