import React from 'react'
import {connect} from 'react-redux'
import {deleteTodo} from '../actions'

let RemoveTodo = ({id, dispatch}) => {
  return (
      <div>
        <a onClick={e => {
          e.preventDefault()
          console.log(dispatch(deleteTodo(id)));
          dispatch(deleteTodo(id))
        }}>Del</a>
      </div>
  )
}

RemoveTodo = connect()(RemoveTodo)

export default RemoveTodo