import React, { Component } from "react"
import { connect } from "react-redux"

class Grandchild extends Component {
  render() {
    return (
      <div>
        {this.props.whatever.map(todo => (
          <p key={todo.id}>{todo.name}</p>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    whatever: state
  }
}

export default connect(mapStateToProps)(Grandchild)
