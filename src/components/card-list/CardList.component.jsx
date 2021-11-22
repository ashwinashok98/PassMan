import React, { useState } from "react";
import Card from "../card/card.component";
import "./card-list.styles.scss";
import CreateCard from "../create-card/create-card.component";

const CardList = (props) => {
  const userNumber = Object.keys(props.userList).length;

  return (
    <div className="card-list-name">
      <div className="list-name">{props.applicationName.toUpperCase()}</div>

      <div className="underline"></div>
      <div className="card-list">
        {userNumber > 0
          ? props.userList.map(({ id, ...otherUserProps }) => (
              <Card key={id} {...otherUserProps} />
            ))
          : null}
        <CreateCard application={props.applicationName} />
      </div>
    </div>
  );
};
export default CardList;
