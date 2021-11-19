import Button from '@restart/ui/esm/Button'
import { Modal } from 'bootstrap'
import React from 'react'
import { Form, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let title
  let desc

  const onSubmit = (e) => {
    e.preventDefault()
    e.target.reset();
    if (!title.trim() === '' || !desc.trim()) {
      return
    }
    dispatch(addTodo(title, desc))
    title = ''
    desc = ''

  }
  return (
    <div>

      <Row className="g-2">
        <Form onSubmit={onSubmit}>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" size="sm" onChange={(e) => title = e.target.value} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" onChange={(e) => desc = e.target.value} rows={3} />
          </Form.Group>
          <Button type="submit">Add Todo</Button>
        </Form>
      </Row>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo





      {/* 
<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
      <Form onSubmit={onSubmit}>
    
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" size="sm"  onChange={(e) => title = e.target.value} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" onChange={(e) => desc = e.target.value} rows={3} />
  </Form.Group> 
  <Button type ="submit">Add Todo</Button>
</Form>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog> */}