import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import _, { toInteger } from "lodash";
import { createEvent } from "../actions";
import { NavLink } from "react-router-dom";
import ZipCodeSubmit from "./ZipCodeSubmit";

class AddEvent extends Component {
  render() {
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
