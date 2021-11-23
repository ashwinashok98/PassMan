import React, { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  const [category, setCategory] = useState(["gmail", "Facebook", "yah"]);
  
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      {props.children}
    </CategoryContext.Provider>
  );
};
