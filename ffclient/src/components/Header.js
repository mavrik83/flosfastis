import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import FrostInfo from "./FrostInfo";
import { NavLink } from "react-router-dom";
import CreateButton from "./CreateButton";

class Header extends Component {
  render() {
    return (
      <div>
        <Menu pointing secondary style={{ marginTop: "10px" }}>
          <Menu.Item as={NavLink} to="/" content="Flos Fastis" name="home" />
          <CreateButton />
          <Menu.Menu position="right">
            <FrostInfo />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Header;
