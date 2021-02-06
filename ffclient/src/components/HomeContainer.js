import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import FlowerList from "./FlowerList";
import LandingSplash from "./LandingSplash";
import EventList from "./EventList";

const HomeContainer = (props) => {
  const renderHome = () => {
    if (props.events.length === 0) {
      return (
        <>
          <FlowerList />
          <LandingSplash />
        </>
      );
    }
    return (
      <>
        <FlowerList />
        <EventList />
      </>
    );
  };

  return <Grid style={{ marginTop: "15px" }}>{renderHome()}</Grid>;
};

const mapStateToProps = (state) => {
  return { events: state.events };
};

export default connect(mapStateToProps, null)(HomeContainer);
