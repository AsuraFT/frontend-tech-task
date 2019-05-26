import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="my-3">
      <form
        className="border bg-light px-3 pt-3"
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <div className="form-group">
          <div className="input-group">
            <input
              ref={node => (input = node)}
              className="form-control"
              placeholder="Add new task..."
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
