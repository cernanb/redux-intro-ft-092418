import React, { Component } from "react"
import Child from "./Child"
import { toggleTodo } from "./redux/actions"
import { connect } from "react-redux"

class Todos extends Component {
  toggle = id => {
    this.props.toggleTodo(id)
  }
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <p key={todo.id}>
            {todo.name}{" "}
            <input onChange={() => this.toggle(todo.id)} type="checkbox" />
          </p>
        ))}
      </div>
    )
  }
}

export default connect(
  null,
  { toggleTodo }
)(Todos)
