import React from 'react'
import PropTypes from 'prop-types'
import Button from '@restart/ui/esm/Button'
import { useSelector } from 'react-redux'
import { ButtonGroup, Table } from 'react-bootstrap'

const Todo = ({ onClick, completed, text, desc }) => (
  <>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Title</th>
      <th>Description</th>
     
    </tr>
  </thead>
  <tbody>
    <tr onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}> 
      <td>{text}</td>
      <td>{desc}</td>
    
      </tr>
      <tr>  <td><ButtonGroup>
  <Button> Update </Button>
 
</ButtonGroup></td> </tr>
     
   
  </tbody>
</Table>
   
   
   
   
    {/* <ul><br />
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        Title : {text} <br />
        <li>   Description : {desc} </li>
      </li>
      <Button onClick>Update</Button>
    </ul> */}
  </>
)
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  // desc: PropTypes.string.isRequired
}

export default Todo
