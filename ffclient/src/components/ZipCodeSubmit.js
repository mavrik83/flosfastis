import React, { Component } from "react";
import { Input, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { getFrostInfo } from "../actions";

class ZipCodeSubmit extends Component {
  state = {
    term: "",
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.getFrostInfo(this.state.term);
  };

  render() {
    if (this.props.frost.length !== 0) {
      return null;
    }

    return (
      <>
        <p>Enter your zip code to find your frost date information</p>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field width="8">
            <Input
              action="Submit"
              placeholder="Enter zip code"
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </Form.Field>
        </Form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { frost: state.frost };
};

export default connect(mapStateToProps, { getFrostInfo })(ZipCodeSubmit);