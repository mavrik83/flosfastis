import React from "react";
import { Grid, Segment, Button, Header } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import ZipCodeSubmit from "./frostdates/ZipCodeSubmit";

const LandingSplash = () => {
  return (
    <>
      <Grid.Column width="9">
        <Grid.Row>
          <Segment style={{ marginTop: "30px" }} padded="very" basic>
            <Header style={{ fontSize: "40px" }} textAlign="left">
              Welcome to Flos Fastis
            </Header>
            <p style={{ float: "right", marginRight: "20px" }}>
              <small>
                <em>{`[Latin]`}: flower calendar</em>
              </small>
            </p>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <Segment padded="very" textAlign="left" basic>
            <p style={{ fontSize: "20px" }}>
              Welcome! To begin planning for your flower planting season, first
              enter your zip code below to find your frost dates, then select a
              flower from the list.
            </p>

            <ZipCodeSubmit />
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <Segment
            style={{ marginTop: "30px" }}
            padded="very"
            textAlign="left"
            basic
          >
            <p style={{ fontSize: "20px" }}>
              If there is a flower that is not listed, you may add it to the
              list.
            </p>

            <Button as={NavLink} to={"/flowers/new"}>
              Add New Flower
            </Button>
          </Segment>
        </Grid.Row>
      </Grid.Column>
    </>
  );
};

export default LandingSplash;
