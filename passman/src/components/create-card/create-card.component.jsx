import React from "react";
import "./create-card.styles.scss";
import FormModal from "../form-modal/form-modal.component";
import {ReactComponent as PlusIcon} from './plus.svg'
const CreateCard = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    
  return (
    <div className="create-card">
      <div className="create-card-body">
      <PlusIcon onClick={() => setModalShow(true)}/>
      <FormModal show={modalShow}
        onHide={() => setModalShow(false)}
        category={props.category}/>
      </div>
    </div>
  );
};
export default CreateCard;
