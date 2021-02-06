import React from "react";
import { connect } from "react-redux";
import { Segment, Grid, Header } from "semantic-ui-react";
import _ from "lodash";
import { useParams } from "react-router-dom";
import AddEvent from "../events/AddEvent";

const FlowerDetail = (props) => {
  const { id } = useParams();
  const selectedFlower = _.filter(props.flowers, { id: `${id}` });
  const {
    variety,
    sowing_time,
    soil_temp,
    planting_depth,
    grow_height,
    spread,
    sun_light,
    annual,
    sow_indoors,
    transplant,
    days_to_maturity,
  } = selectedFlower[0].attributes;
  return (
    <Grid style={{ marginTop: "15px" }}>
      <Grid.Column width="3"></Grid.Column>
      <Grid.Column width="10">
        <Segment basic>
          <Header size="huge">Variety: {variety}</Header>
          <h3>{annual ? "Annual" : "Perennial"}</h3>
        </Segment>
        <Segment basic>
          <ul>
            <li style={{ padding: "5px", fontSize: "18px" }}>
              Sowing Time: <strong>{sowing_time ? sowing_time : "N/A"}</strong>
            </li>
            <li style={{ padding: "5px", fontSize: "18px" }}>
              Sow Indoors? <strong>{sow_indoors ? "yes" : "no"}</strong>
            </li>
            <li style={{ padding: "5px", fontSize: "18px" }}>
              Planting Depth:{" "}
              <strong>{planting_depth ? planting_depth : "N/A"}</strong>
            </li>
            <li style={{ padding: "5px", fontSize: "18px" }}>
              When to Transplant: <strong>{transplant}</strong>
            </li>
            <li style={{ padding: "5px", fontSize: "18px" }}>
              Grow Height: <strong>{grow_height ? grow_height : "N/A"}</strong>
            </li>
            <li style={{ padding: "5px", fontSize: "18px" }}>
              Best Soil Temperature in &deg;F:{" "}
              <strong>{soil_temp ? soil_temp : "N/A"} </strong>
            </li>
            <li style={{ padding: "5px", fontSize: "18px" }}>
              Planting Spread: <strong>{spread ? spread : "N/A"}</strong>
            </li>
            <li style={{ padding: "5px", fontSize: "18px" }}>
              Ideal Sun: <strong>{sun_light ? sun_light : "N/A"}</strong>
            </li>
            <li style={{ padding: "5px", fontSize: "18px" }}>
              Days to Maturity: <strong>{days_to_maturity}</strong>
            </li>
          </ul>
        </Segment>
        <AddEvent id={id} />
      </Grid.Column>
    </Grid>
  );
};
const mapStatetoProps = (state) => {
  return { flowers: state.flowers };
};

export default connect(mapStatetoProps)(FlowerDetail);
