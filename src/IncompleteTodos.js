import React, { Component } from "react"
import Todos from "./Todos"
import { connect } from "react-redux"

class IncompleteTodos extends Component {
  render() {
    return (
      <div>
        <h1>Incomplete</h1>
        <Todos todos={this.props.incomplete} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    incomplete: state.filter(todo => !todo.complete)
  }
}

export default connect(mapStateToProps)(IncompleteTodos)
