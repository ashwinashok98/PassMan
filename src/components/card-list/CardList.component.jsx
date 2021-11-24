import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.scss";
import CreateCard from "../create-card/create-card.component";

const CardList = (props) => {
  const userNumber = Object.keys(props.userList).length;

  return (
    <div className="card-list-name">
      <div className="list-name">{props.categoryName.toUpperCase()}</div>

      <div className="underline"></div>
      <div className="card-list">
        {userNumber > 0
          ? props.userList.map(({ id, ...otherUserProps }) => (
              <Card key={id} {...otherUserProps} id={id} />
              
            ))
          : null}
        <CreateCard category={props.categoryName} />
      </div>
    </div>
  );
};
export default CardList;
