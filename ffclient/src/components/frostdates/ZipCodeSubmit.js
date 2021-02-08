import React, { Component } from "react";
import { Input, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { getFrostInfo } from "../../actions";

class ZipCodeSubmit extends Component {
  state = {
    term: "",
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.term && /^[0-9]{5}$/.test(this.state.term)) {
      this.props.getFrostInfo(this.state.term);
      this.setState({ term: "" });
    }
  };

  render() {
    if (this.props.frost.length !== 0) {
      return null;
    }

    return (
      <>
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
