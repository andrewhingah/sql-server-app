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

  // renderTableHeader() {
  //   let header = Object.keys(this.state.categories[0]);
  //   return header.map((key, index) => {
  //     return <th key={index}>{key.toUpperCase()}</th>;
  //   });
  // }

  render() {
    return (
      <div>
        <h1 id="title">Performance Indicator: Categories</h1>
        <table id="students">
          {/* <tr>{this.renderTableHeader()}</tr> */}
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default PerformanceTable;
