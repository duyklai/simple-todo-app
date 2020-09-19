import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
//component files
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";

const TodoContainer = (props) => {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);

  const handleCompletedToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
    setShow(!show);
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => setTodos(response.data));
  }, []);

  return (
    <div className="container">
      <Header headerSpan={show} />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={todos}
        handleCompleted={handleCompletedToggle}
        deleteTodoProps={delTodo}
      />
    </div>
  );
};

export default TodoContainer;
// class TodoContainer extends React.Component {
//   state = {
//     todos: [],
//     show: false,
//   };

//   handleCompletedToggle = (id) => {
//     this.setState({
//       todos: this.state.todos.map((todo) => {
//         if (todo.id === id) todo.completed = !todo.completed;
//         return todo;
//       }),
//       show: !this.state.show,
//     });
//   };

//   delTodo = (id) => {
//     axios
//       .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
//       .then((response) =>
//         this.setState({
//           todos: [
//             ...this.state.todos.filter((todo) => {
//               return todo.id !== id;
//             }),
//           ],
//         })
//       );
//   };

//   addTodoItem = (title) => {
//     axios
//       .post("https://jsonplaceholder.typicode.com/todos", {
//         title: title,
//         completed: false,
//       })
//       .then((response) =>
//         this.setState({
//           todos: [...this.state.todos, response.data],
//         })
//       );
//   };

//   componentDidMount() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
//       .then((response) => this.setState({ todos: response.data }));
//   }

//   render() {
//     return (
//       <div className="container">
//         <Header headerSpan={this.state.show} />
//         <InputTodo addTodoProps={this.addTodoItem} />
//         <TodosList
//           todos={this.state.todos}
//           handleCompleted={this.handleCompletedToggle}
//           deleteTodoProps={this.delTodo}
//         />
//       </div>
//     );
//   }
// }
// export default TodoContainer;
