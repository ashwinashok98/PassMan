import React, { useState } from "react";

import "./card.styles.scss";
import { Modal, Button, Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

const Card = ({ id, name, username, password }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = (event) => {
    event.preventDefault();
    setPasswordShown(passwordShown ? false : true);
  };
  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

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
            value={username}
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cardPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            value={password}
            disabled
          />
          <i class="i-password" onClick={togglePasswordVisiblity}>
            {passwordShown ? eye : eyeSlash}
          </i>{" "}
        </Form.Group>
       
        <button class="edit-btn" onClick={() => null}>
          <i class="fa fa-pencil"></i>
        </button>
      </div>
    </div>
  );
};
export default Card;
