import React from 'react';

class ToDoForm extends React.Component { 

      constructor(props) {
            super(props);
            this.state = {
                  title: '',
                  description: ''
            };

            this.handleTitle = this.handleTitle.bind(this);
            this.handleDescription = this.handleDescription.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleTitle(event) {
            this.setState({ title: event.target.value });
      }
      handleDescription(event) {
            this.setState({ description: event.target.value });
      }

      handleSubmit(event) {
            event.preventDefault();
            console.log('Task to be added = ' + this.state.title + " " + this.state.description );
            //    Clear form elements after submit
      }

      render() {
            return(
                  <form action="" onSubmit={ this.handleSubmit } className="p-3 bg-light">
                        <div className="form-group">
                              <label htmlFor="title">Title</label>
                              <input type="text" id="title" name="title" placeholder="Enter task title" 
                              className="form-control" onChange={ this.handleTitle}  required />
                        </div>
                        <div className="form-group">
                              <label htmlFor="description">Description</label>
                              <textarea id="description" name="description" placeholder="Enter task description" 
                              value={ this.state.description } className="form-control" onChange={ this.handleDescription } />
                        </div>
                        <div className="form-group">
                              <button type="submit" className="btn btn-primary">Add</button>      
                        </div>           
                  </form>
            );
      }     
}

export default ToDoForm;