import React, { Component } from "react";
import { connect } from "react-redux";
import { doFetchStories } from "../actions/story.js";
import Button from "./Button";

const applyQueryState = query => () => ({
  query
});

class SearchStories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const { value } = event.target;
    this.setState(applyQueryState(value));
  }

  onSubmit(event) {
    const { query } = this.state;
    if (query) {
      this.props.onFetchStories(query);
      this.setState(applyQueryState(""));
    }

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} class="col s12">
        <div class="input-field inline">
          <input
            placeholder="Type your Search in Here"
            type="text"
            value={this.state.query}
            onChange={this.onChange}
          />
        </div>
        <Button type="submit" className="btn waves-effect waves-purple">
          Search
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onFetchStories: query => dispatch(doFetchStories(query))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchStories);
