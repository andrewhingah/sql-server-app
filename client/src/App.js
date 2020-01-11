import React, { Component } from "react";
import "./App.css";

class PerformanceTable extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    fetch("/api/getAllData")
      .then(res => res.json())
      .then(data => {
        this.setState({ categories: data });
      })
      .catch(console.log);
  }

  renderTableData() {
    return this.state.categories.map((category, index) => {
      const { Id, Name, ParentId } = category;
      return (
        <tr key={Id}>
          <td>{Id}</td>
          <td>{Name}</td>
          <td>{ParentId}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">Performance Indicator: Categories</h1>
        <table id="categories">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>ParentId</th>
          </tr>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default PerformanceTable;
