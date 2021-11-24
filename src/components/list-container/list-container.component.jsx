import React, { useContext } from "react";
import "./list-container.styles.scss";
import CardList from "../card-list/CardList.component";
import { UserContext } from "../../context/userContext";
import { CategoryContext } from "../../context/categoryContext";

const ListContainer = () => {
  const [users] = useContext(UserContext);
  const [category] = useContext(CategoryContext);
  
  const groupBy = (xs, key) => {
    return xs.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  const groubedByCategory = groupBy(users, "category");

  return category.map((category, index) => {
    if (!groubedByCategory[category]) {
      const usrList = {};
      return (
        <>
          <CardList key={index} userList={usrList} categoryName={category} />
          
        </>
      );
    } else {
      const usrList = groubedByCategory[category];
      return (
        <>
          <CardList key={index} userList={usrList} categoryName={category} />
          
        </>
      );
    }
  });
};
export default ListContainer;
