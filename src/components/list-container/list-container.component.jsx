import React, { useContext } from "react";
import "./list-container.styles.scss";
import CardList from "../card-list/CardList.component";
import { UserContext } from "../../context/userContext";
import { ApplicationContext } from "../../context/applicationContext";

const ListContainer = (props) => {
  const [users] = useContext(UserContext);
  const [application] = useContext(ApplicationContext);

  const groupBy = (xs, key) => {
    return xs.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  const groubedByApplication = groupBy(users, "application");

  return application.map((category, index) => {
    if (!groubedByApplication[category]) {
      const usrList = {};
      return (
        <>
          <CardList key={index} userList={usrList} applicationName={category} />
          
        </>
      );
    } else {
      const usrList = groubedByApplication[category];
      return (
        <>
          <CardList key={index} userList={usrList} applicationName={category} />
          
        </>
      );
    }
  });
};
export default ListContainer;
