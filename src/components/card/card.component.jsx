import React from "react";

import "./card.styles.scss";

const Card = ({id,name,username,password}) => (
  <div className="card">
      
    <div className="card-title">
    <span>{name}</span>
      <div className="card-body">
        <form>
          <div className="username-input">
            <span>Username</span>
            <input
              type="text"
              placeholder="Username"
              id="username"
              value={username}
            />
          </div>

          <div className="password-input">
            <span>Password</span>
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}

            />
          </div>
        </form>
      </div>
    </div>
  </div>
);
export default Card;
