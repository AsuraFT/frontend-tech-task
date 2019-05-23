import ToDoItem from './ToDoItem';


function ToDos(props) {

      const items = props.items;
      const todoItems = items.map((item, index) => 
            <ToDoItem title={ item.title } description={ item.description } key= { index }/>
      );

      return (
        <>
          <div className="card-group">{todoItems}</div>
        </>
      );
      
}

export default ToDos;
