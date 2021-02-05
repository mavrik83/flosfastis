import React from "react";
import { Grid, Segment, Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ZipCodeSubmit from "./ZipCodeSubmit";

const LandingSplash = () => {
  return (
    <>
      <Grid.Column width="9">
        <Grid.Row>
          <Segment style={{ marginTop: "30px" }} padded="very" basic>
            <Header style={{ fontSize: "40px" }} textAlign="left">
              Welcome to Flos Fastis
            </Header>
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
              Welcome! To begin planning for your flower planting season, select
              a flower from the list.
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
            <Link to={"/flowers/new"}>
              <Button>Add New Flower</Button>
            </Link>
          </Segment>
        </Grid.Row>
      </Grid.Column>
    </>
  );
};

export default LandingSplash;
