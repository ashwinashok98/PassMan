import React, { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import "./card.styles.scss";
import { Modal, Button, Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faTimes,
  faCheck,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

const edit_btn = <FontAwesomeIcon icon={faEdit} />;

const Card = ({ id, name, username, password }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newUsername, setNewUsername] = useState(username);
  const [newPassword, setNewPassword] = useState(password);
  const [users, setUsers] = useContext(UserContext);
  const togglePasswordVisiblity = (event) => {
    event.preventDefault();
    setPasswordShown(!passwordShown);
  };
  const toggleEdit = (event) => {
    event.preventDefault();
    setEdit(!edit);
  };
  const confirmChange = () => {
    console.log("In confirm change");
    users.map((user) => {
      if (user.id === id) {
        user.username = newUsername;
        user.password = newPassword;
      }
    });
    setUsers([...users])
  };
  const cancelChange = () => {
    setNewUsername(username);
    setNewPassword(password);
  };
 

  return (
    <div className="card">
      <div class="card-title">
        {name.toUpperCase()}
        

        <div className="underline-title"></div>
      </div>
      <div className="card-body">
        
          <Form.Group className="mb-3" controlId="cardUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              value={newUsername}
              onChange={(e) => {
                setNewUsername(e.target.value);
              }}
              disabled={!edit}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cardPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              disabled={!edit}
            />
            <i class="i-password" onClick={togglePasswordVisiblity}>
              {passwordShown ? eye : eyeSlash}
            </i>{" "}
          </Form.Group>

          <button class="edit-btn" onClick={toggleEdit}>
            {edit ? (
              <>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="confirm_btn"
                  onClick={confirmChange}
                />{" "}
                <FontAwesomeIcon
                  icon={faTimes}
                  className="cancel_btn"
                  onClick={cancelChange}
                />
              </>
            ) : (
              edit_btn
            )}
          </button>
        
      </div>
    </div>
  );
};
export default Card;
