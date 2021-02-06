import React from "react";
import { Segment, Button, Header, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import FlowerDelete from "./FlowerDelete";

const FlowerItem = (props) => {
  const renderCondition = () => {
    if (!props.condition) {
      return null;
    } else {
      return <Icon disabled size="small" name="user" />;
    }
  };

  return (
    <Segment clearing>
      <Button floated="right" compact as={NavLink} to={`/flowers/${props.id}`}>
        View
      </Button>

      <FlowerDelete condition={props.condition} id={props.id} />
      <span>{renderCondition()}</span>
      <Header floated="left">{props.name}</Header>
    </Segment>
  );
};

export default FlowerItem;
