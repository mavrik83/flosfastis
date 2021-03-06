import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Grid, Segment, Header } from "semantic-ui-react";
import { createFlower } from "../../actions";
import { Link } from "react-router-dom";
import {
  required,
  sowingFormat,
  daysToMatFormat,
} from "../../utils/validations";

class FlowerCreate extends Component {
  renderInput = ({
    input,
    label,
    placeholder,
    className,
    meta: { touched, error, warning },
  }) => {
    return (
      <div className={`${className} field`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" placeholder={placeholder} />
        {touched &&
          ((error && (
            <span className="ui pointing red basic label">{error}</span>
          )) ||
            (warning && (
              <span className="ui pointing yellow basic label">{warning}</span>
            )))}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createFlower(formValues);
    this.props.history.push("/");
  };

  render() {
    return (
      <Grid style={{ marginTop: "15px" }}>
        <Grid.Column width="3"></Grid.Column>
        <Grid.Column width="8">
          <Segment basic textAlign="center">
            <Header>Add New Flower</Header>
            <p>
              Enter the following information. Leave a field blank if you do not
              know the information.
            </p>
          </Segment>
          <form
            className="ui form small"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <div className="inline fields">
              <label>
                <Field
                  name="annual"
                  component="input"
                  type="radio"
                  value="true"
                />{" "}
                Annual
              </label>
              <label>
                <Field
                  name="annual"
                  component="input"
                  type="radio"
                  value="false"
                />{" "}
                Perennial
              </label>
            </div>
            <div className="inline fields">
              <label>
                <Field name="sow_indoors" component="input" type="checkbox" />{" "}
                Should Plant be Sowed Inside?
              </label>
            </div>
            <Field
              name="variety"
              label="Variety"
              component={this.renderInput}
              placeholder="Enter the name of the flower"
              validate={required}
              className="required field"
            />
            <Field
              name="sowing_time"
              label="Indoor Sowing Range"
              component={this.renderInput}
              placeholder="How many weeks before or after first frost?"
              validate={[required, sowingFormat]}
              className="required field"
            />

            <Field
              name="grow_height"
              label="Grow Height"
              component={this.renderInput}
              placeholder="Enter the growth height in inches..."
            />
            <Field
              name="spread"
              label="Planting Spread"
              component={this.renderInput}
              placeholder="Enter the planting spread in inches..."
            />
            <Field
              name="soil_temp"
              label="Ideal Soil Temperature"
              component={this.renderInput}
              placeholder="Enter the ideal soil temperature in &deg;F..."
            />
            <Field
              name="sun_light"
              label="Required Sun Light"
              component={this.renderInput}
              placeholder="Enter the sunlight requirements..."
            />
            <Field
              name="days_to_maturity"
              label="Days to Maturity"
              component={this.renderInput}
              placeholder="How many days unitl harvest?"
              validate={[required, daysToMatFormat]}
              className="required field"
            />
            <Field
              name="planting_depth"
              label="Planting Depth"
              component={this.renderInput}
              placeholder="How many inches deep should seeds be sowed?"
            />
            <Field
              name="transplant"
              label="Transplant Time"
              component={this.renderInput}
              placeholder="When should plant be transplanted?"
            />
            <button className="ui button">Submit</button>
            <Link to="/">
              <button className="ui button">Cancel</button>
            </Link>
          </form>
        </Grid.Column>
      </Grid>
    );
  }
}

const formWrapped = reduxForm({
  form: "flowerCreate",
})(FlowerCreate);

export default connect(null, { createFlower })(formWrapped);
