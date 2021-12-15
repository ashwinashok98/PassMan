import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./dialog-modal.styles.scss";

export const DialogModal = (props) => {
  const apply = () => {
    props.applyChange();
    props.onHide();
  };
  const cancel = () => {
    props.cancelChange();
    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body closeButton>
        <h4>Are you sure to apply the changes?</h4>
        <p>There would be no reverting once the changes are applied.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={apply}>
          Save Changes
        </Button>
        <Button variant="danger" onClick={cancel}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
