export const CHNAGE_INPUT ="CHNAGE_INPUT";
export const ADD_TODO = "ADD_TODO";

let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

// export const handleinput = (payload) =>({
//   type : "CHNAGE_INPUT",
//   payload

// })

// export const addtodo = (payload) => ({
//   type : "ADD_TODO",
//   payload
// })
