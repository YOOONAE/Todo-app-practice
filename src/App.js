import React, { Component } from "react";
import TodoList from "./TodoList";
import "./App.css";

class App extends Component {
  render() {
    let i=0;
    const title = 'TODO-LIST';
    const title_array = [...title];
    
    const showTitle = title_array.map((text, i) => {
      return <span style={{ animationDelay: `calc(0.1s * ${i+1})` }}>{text}</span>
    })

    return (
      <div className="App">
        <div class="wavy">
          {showTitle}
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
