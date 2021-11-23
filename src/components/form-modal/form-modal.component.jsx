import { Modal, Button, Form } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";

const FormModal = (props) => {
  const [users, setUsers] = useContext(UserContext);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newName, setNewName] = useState("");

  const formHandler = (event) => {
    const newUser = {
      id: users.length + 1,
      name: newName,
      application: props.application,
      username: newUsername,
      password: newPassword,
    };
    users.push(newUser);

    setUsers([...users]);

    event.preventDefault();
    setNewName("");
    setNewUsername("");
    setNewPassword("");
    props.onHide();
  };
  return (
    <Modal {...props} size="md" aria-labelledby="formModal" centered>
      <Modal.Header closeButton>
        <Modal.Title id="formModal">Add Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formHandler}>
          <Form.Group className="mb-3" controlId="formApplication">
            <Form.Label>Application</Form.Label>
            <Form.Control type="text" disabled value={props.application} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formname">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name/Title"
              onChange={(event) => setNewName(event.target.value)}
              value={newName}
              maxLength={20}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              onChange={(event) => setNewUsername(event.target.value)}
              value={newUsername}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => setNewPassword(event.target.value)}
              value={newPassword}
              required
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default FormModal;
