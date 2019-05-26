import React from "react";
import Head from "./Head";
import NavBar from "./NavBar";

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from '../containers/VisibleTodoList';

const store = createStore(rootReducer) 
const App = () => (

  <Provider store={store}>
    <Head title="Todo List" />
    <NavBar />
    <div className="container">
      <div className="jumbotron text-center">
        <h1>Todo list</h1>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <AddTodo />
          <VisibleTodoList />
        </div>
      </div>  
    </div>
    
  </Provider>
);

export default App;
