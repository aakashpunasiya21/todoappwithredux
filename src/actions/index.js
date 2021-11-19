export const UPDATE_TODO = "UPDATE_TODO"

let nextTodoId = 0
export const addTodo = (text, desc) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text, desc
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
export const updateTodo = (payload) => ({ type: 'UPDATE_TODO', payload });
// export const handleinput = (payload) =>({
//   type : "CHNAGE_INPUT",
//   payload

// })

// export const addtodo = (payload) => ({
//   type : "ADD_TODO",
//   payload
// })
