import React from 'react'

const Todo = ({ completed, text }) => (
  <li className="list-group-item todo-item">
    <div className="row">
    <div className="col-md-8 col-xs-6"><span className="text">{ text }</span></div>
    <div className="col-md-4 col-xs-6 text-right">
      <button className="btn btn-sm btn-danger mr-2" onClick={deleteTask}>Del</button>
      <button className="btn btn-sm btn-info mr-2" onClick={editTask}>Edit</button>
      <button className="btn btn-sm btn-success mr-2" onClick={completeTask}>Done</button>
    </div>
    </div>
  </li>
)

const editTask = () => {

}

const completeTask = () => {

}

const deleteTask = () => {
  
}

export default Todo