import { Modal, Button, Form } from "react-bootstrap";
import React, { useContext, useState } from "react";
import axios from "axios";

import { UserContext } from "../../context/userContext";
const baseURL = "http://localhost:3000";

const FormModal = (props) => {
  const [users, setUsers] = useContext(UserContext);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newName, setNewName] = useState("");

  const formHandler = (event) => {
    const newUser = {
      name: newName,
      category: props.category,
      username: newUsername,
      password: newPassword,
    };
    axios
      .post(`${baseURL}/users/create`, newUser)
      .then((res) => {
        users.push(newUser);
        setUsers([...users]);
        console.log(res.data);
        

      })
      .catch((err) => {
        console.log(err);
      });

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
          <Form.Group className="mb-3" controlId="formcategory">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" disabled value={props.category} />
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
