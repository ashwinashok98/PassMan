import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';
import "./create-category.styles.scss";
import { CategoryContext } from "../../context/categoryContext";
import { DialogTextModal } from "../dialog-text-modal/dialog-text-modal";
const baseURL = "http://localhost:3000";

const CreateCategory = () => {
  const [category, setCategory] = useContext(CategoryContext);

  const [showDialog, setShowDialog] = useState(false); //Dialog box
  const handleClose = () => setShowDialog(false);
  const handleShow = () => setShowDialog(true);

  const addNewCategory = (newCategoryName) => {
    const newCategory={name:newCategoryName}
    axios
      .post(`${baseURL}/category/create`, newCategory)
      .then((res) => {
        

        category.push(newCategoryName);
        const newCatList = [...category];
        setCategory(newCatList);
        console.log(res.data);
        

      })
      .catch((err) => {
        console.log(err);
      });
    
    handleClose();
  };
  return (
    <>
      <Button variant="dark" className="add-category" onClick={handleShow}>
        Add Category
      </Button>

      <DialogTextModal
        show={showDialog}
        onHide={handleClose}
        addNewCategory={addNewCategory}
      />
    </>
  );
};
export default CreateCategory;
