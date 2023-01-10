import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(localStorage.getItem("localData")) || [],
    };
    this.showTodos = this.showTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(newTodo) {
    // console.log('addTodo worked');
    newTodo = { todo: newTodo, id: uuid() };
    const newData = [...this.state.data, newTodo];

    this.setState({ data: newData });
    localStorage.setItem("localData", JSON.stringify(newData));
  }

  editTodo(todo, id) {
    // const localData = JSON.parse(localStorage.getItem('localData'));
    // const updatedData = localData.map(data => {

    const updatedData = this.state.data.map((data) => {
      if (data.id === id) {
        data.todo = todo;
        return data;
      }
      return data;
    });

    this.setState({ data: updatedData });
    localStorage.setItem("localData", JSON.stringify(updatedData));
  }

  removeTodo(id) {
    console.log("removeTodo has been called");

    // below, when refreshed, the data in state will be disappeared.
    // then it should load data from local stroage and update the state data to re-render the lay out.

    // const localData = JSON.parse(localStorage.getItem('localData'));
    // const updatedData = localData.filter(todo => todo.id !== id)

    const updatedData = this.state.data.filter((todo) => todo.id !== id);
    // const updatedData = this.state.data.filter(todo => todo.id !== id)

    this.setState({ data: updatedData });
    localStorage.setItem("localData", JSON.stringify(updatedData));
    // localStorage.setItem('localData', JSON.stringify(this.state.data));
  }

  showTodos() {
    // console.log('showTodos worked')
    // console.log(this.state.data);
    // const localData = JSON.parse(localStorage.getItem('localData')) || [];

    return this.state.data.map(
      (data) => (
        <li key={data.id} className="show">
          <Todo
            todo={data.todo}
            id={data.id}
            
            removeTodo={(data) => this.removeTodo(data)}
            editTodo={(todo, id) => this.editTodo(todo, id)}
          />
        </li>
      )
      // 여기 removeTodo() 괄호안에 arg 전달하는거 .. 이렇게 하는거랑 찢어서 하는거 리뷰하기
      // call the method in the child component which calss the remove method in the parent component
      // , instead of using arrow function in the parent component.
    );
  }

  render() {
    return (
      <div className="TodoList-wrapper">
        <span className="TodoList-title">TodoList here</span>
        <div>
          <NewTodoForm addTodo={(todo) => this.addTodo(todo)} />
        </div>

        <ul className="TodoList-ul">{this.showTodos()}</ul>
      </div>
    );
  }
}

export default TodoList;
