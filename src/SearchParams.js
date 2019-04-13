import React, { Component } from "react";
import SearchBox from "./SearchBox";
import { navigate } from "@reach/router";

export default class SearchParams extends Component {
  handleSearchSubmit() {
    navigate("/");
  }
  render() {
    return (
      <div className="search-route">
        <SearchBox search={this.handleSearchSubmit} />
      </div>
    );
  }
}
