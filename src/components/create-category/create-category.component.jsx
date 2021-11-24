import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";

import "./create-category.styles.scss";
import { CategoryContext } from "../../context/categoryContext";
import { DialogTextModal } from "../dialog-text-modal/dialog-text-modal";
const CreateCategory = () => {
  const [category, setCategory] = useContext(CategoryContext);

  const [showDialog, setShowDialog] = useState(false); //Dialog box
  const handleClose = () => setShowDialog(false);
  const handleShow = () => setShowDialog(true);

  const addNewCategory = (newCategory) => {
    category.push(newCategory);
    const newCatList = [...category];
    console.log(newCatList);
    setCategory(newCatList);
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
