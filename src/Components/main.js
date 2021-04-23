import React, { Component } from "react";
import Expense from "./Expense";


export default class Main extends Component {
  value = [];
  Expense = "";
  Price = 0;
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <Expense />
        </div>
      </div>
    );
  }
}
