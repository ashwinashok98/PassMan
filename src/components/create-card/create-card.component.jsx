import React from "react";
import "./create-card.styles.scss";
import FormModal from "../form-modal/form-modal.component";
import {ReactComponent as PlusIcon} from './plus.svg'
const CreateCard = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    function click(){
        alert('clicked')
    }
  return (
    <div className="create-card">
      <div className="create-card-body">
      <PlusIcon onClick={() => setModalShow(true)}/>
      <FormModal show={modalShow}
        onHide={() => setModalShow(false)}
        application={props.application}/>
      </div>
    </div>
  );
};
export default CreateCard;
