import React from "react"
import { connect } from "react-redux"

const Navbar = props => {
  return (
    <ul>
      <li>New Todo {props.todoNum}</li>
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    todoNum: state.filter(todo => !todo.complete).length
  }
}

export default connect(mapStateToProps)(Navbar)
