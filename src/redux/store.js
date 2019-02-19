import { createStore } from "redux"

const todos = [
  { id: 1, name: "Call mom", complete: true },
  { id: 2, name: "Complete assignments", complete: false },
  { id: 3, name: "Blog post", complete: false },
  { id: 4, name: "Set up linkedin", complete: false }
]

function todosReducer(state = todos, action) {
  switch (action.type) {
    case "TOGGLE_TODO":
      // Do whatever we need to do when this action is dispatched
      // const todoToUpdate = state.find(todo => todo.id === action.payload)
      // todoToUpdate.complete = true
      const newState = state.map(todo =>
        todo.id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo
      )
      return newState
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(
  todosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
