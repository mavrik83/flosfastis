import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteFlower } from "../actions";

class FlowerDelete extends Component {
  onClick = () => {
    this.props.deleteFlower(this.props.id);
  };

  render() {
    if (!this.props.condition) {
      return <></>;
    }
    return (
      <>
        <Button color="red" compact floated="right" onClick={this.onClick}>
          Delete
        </Button>
      </>
    );
  }
}

export default connect(null, { deleteFlower })(FlowerDelete);
