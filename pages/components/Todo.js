import React from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import RemoveTodo from '../containers/RemoveTodo';

const Todo = ({ onComplete, completed, text,  id }) => (
  <li className="list-group-item todo-item">
    <div className="row">
    <div className="col-md-8 col-xs-6"  style={{ textDecoration: completed ? 'line-through' : 'none' }}> { text }</div>
    <div className="col-md-4 col-xs-6 text-right">
      <button className="btn btn-sm btn-danger mr-2"><RemoveTodo id={ id } /></button>
      <button className="btn btn-sm btn-info mr-2" onClick={EditTask}>Edit</button>
      <button className="btn btn-sm btn-success mr-2" onClick={ onComplete }>Complete</button>
    </div>
    </div>
  </li>
)

const EditTask = (props) => {
  //  populate this task  information into a new form element and allow to be resaved
}

export default connect()(Todo);