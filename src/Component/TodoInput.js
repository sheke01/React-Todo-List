import React, { Component } from "react";
import { classBody } from "@babel/types";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, formSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={formSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-black">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Add a todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={
              editItem
                ? "btn btn-block btn-success mt-2"
                : "btn btn-block btn-secondary mt-2"
            }
          >
            {editItem ? "Edit Item" : "Add Item"}
          </button>
        </form>
      </div>
    );
  }
}
