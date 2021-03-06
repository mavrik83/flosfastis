import React from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export const CreateButton = (props) => {
  if (props.events.length === 0) {
    return <div></div>;
  }

  return (
    <>
      <Menu.Item
        as={NavLink}
        to="/flowers/new"
        content="Add a New Flower"
        name="create"
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return { events: state.events };
};

export default connect(mapStateToProps, null)(CreateButton);
