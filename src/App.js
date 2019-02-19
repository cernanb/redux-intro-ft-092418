import React, { Component } from "react"
import Todos from "./Todos"
import Navbar from "./Navbar"
import "./App.css"
import CompletedTodos from "./CompletedTodos"
import IncompleteTodos from "./IncompleteTodos"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <CompletedTodos />
        <IncompleteTodos />
      </div>
    )
  }
}

export default App
