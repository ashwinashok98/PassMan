import React,{useState,useContext} from "react";
import axios from 'axios';
import Card from "../card/card.component";
import "./card-list.styles.scss";
import CreateCard from "../create-card/create-card.component";
import { CategoryContext } from "../../context/categoryContext";
import { UserContext } from "../../context/userContext";
import { DialogModal } from "../dialog-modal/dialog-modal.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const baseURL = "http://localhost:3000";

const CardList = (props) => {
  const userNumber = Object.keys(props.userList).length;
  const [category, setCategory] = useContext(CategoryContext);

  const [showDialog, setShowDialog] = useState(false); //Dialog box
  const handleClose = () => setShowDialog(false);
  const handleShow = () => setShowDialog(true);
  const confirmChange = () => {
    handleShow();
  };

  const applyChange =  () => {
   console.log("In apply change")
   
   const newCategoryList = category.filter((category) => category != props.categoryName );
   console.log(newCategoryList)
    axios.delete(`${baseURL}/category/delete/${props.categoryName}`).then(res=>{
      console.log(res);  
      console.log(res.data);
      setCategory(newCategoryList);
    })
    axios.delete(`${baseURL}/users/category/delete/${props.categoryName}`).then(res=>{
      console.log(res);  
      console.log(res.data);
      //setCategory(newCategoryList);
    })
  }
  const cancelChange = () => {
    
   console.log("In cancel change")

  };
 
    
const trash = <FontAwesomeIcon className="delete_list_btn" icon={faTimes} onClick={ ()=>{ confirmChange()}}/>
  return (
    <div className="card-list-name">
      <div className="list-name">{props.categoryName.toUpperCase()}{trash}</div>
      
      <div className="underline"></div>
      <div className="card-list">
        {userNumber > 0
          ? props.userList.map(({ _id, ...otherUserProps }) => (
              <Card key={_id} {...otherUserProps} id={_id} />
            ))
          : null}
        <CreateCard category={props.categoryName} />
      </div>
      <DialogModal
        show={showDialog}
        onHide={handleClose}
        cancelChange={cancelChange}
        applyChange={applyChange}
      />
    </div>
  );
};
export default CardList;
