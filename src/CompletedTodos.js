import React, { Component } from "react"
import Todos from "./Todos"
import { connect } from "react-redux"

class CompletedTodos extends Component {
  render() {
    return (
      <div>
        <h1>Completed</h1>
        <Todos todos={this.props.completed} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    completed: state.filter(todo => todo.complete)
  }
}

export default connect(mapStateToProps)(CompletedTodos)
