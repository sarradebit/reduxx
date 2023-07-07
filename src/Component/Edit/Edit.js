import React, { useState } from 'react'
import {Button , Modal , Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { editTask } from '../../JS/Actions/listTask';

const Edit = ({task}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newTask,setNewTask] = useState(task.text)
  const dispatch = useDispatch()

  const handleEdit = () => {
    dispatch (editTask(task.id , newTask))
    handleClose()
}
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control  placeholder="edit task" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit