import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export const DialogTextModal = (props) => {
  const [newCategory, setNewCategory] = useState("");
  const addNewCategory = (event) => {
    
    props.addNewCategory(newCategory);
    event.preventDefault();
    setNewCategory('')
  };
  return (
    <Modal
      {...props}
      size="sm"
      
      centered
    >
      <Modal.Body closeButton>
        <Form onSubmit={addNewCategory}>
          <Form.Group className="mb-3" controlId="add-category">
            <Form.Label>New category name</Form.Label>
            <Form.Control
              type="text"
              value={newCategory}
              required
              onChange={(e) => {
                setNewCategory(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Save Changes
          </Button>{" "}
          <Button variant="danger" onClick={props.onHide}>
            Cancel
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
