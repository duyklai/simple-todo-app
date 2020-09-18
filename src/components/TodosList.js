import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    return (
      <>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleCompleted={this.props.handleCompleted}
            deleteTodoProps={this.props.deleteTodoProps}
          />
        ))}
      </>
    );
  }
}

export default TodosList;
