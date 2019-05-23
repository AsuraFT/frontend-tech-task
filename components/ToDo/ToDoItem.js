class ToDoItem extends React.Component {

  constructor(props) {
    super();
  }

  render() {
    return (
          <div className="col-sm-12 mb-3 border">
          <h5 className="card-title">{ this.props.title}</h5>
          <p className="card-text">{ this.props.description }</p>
          </div>
    );
  }
}

export default ToDoItem;