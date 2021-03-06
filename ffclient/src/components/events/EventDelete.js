import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteEvent } from "../../actions";

class EventDelete extends Component {
  onClick = () => {
    this.props.deleteEvent(this.props.id);
  };

  render() {
    return (
      <>
        <Button size="mini" compact floated="right" onClick={this.onClick}>
          Remove
        </Button>
      </>
    );
  }
}

export default connect(null, { deleteEvent })(EventDelete);
