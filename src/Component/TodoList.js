import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, deleteList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo List</h3>
        {items.map(item => (
          <TodoItem
            key={item.id}
            title={item.item}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        ))}

        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={deleteList}
        >
          Delete List
        </button>
      </ul>
    );
  }
}
