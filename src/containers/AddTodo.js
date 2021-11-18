import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input
  let desc
  const onSubmit = (e) => {
    e.preventDefault()
    if (!input.trim() && desc.trim()) {
      return
    }
    dispatch(addTodo(input))
    input = ''
    dispatch(addTodo(desc))
    desc = ''
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={(e) => input = e.target.value} /><br /><br />
        <input type="text" onChange={(e) => desc = e.target.value} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
