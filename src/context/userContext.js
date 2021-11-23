import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "user 1",
      application: "gmail",
      username: "Ashwin",
      password: "pass",
    },
    {
      id: 2,
      name: "user 2",
      application: "gmail",
      username: "Ashok",
      password: "password",
    },

    {
      id: 3,
      name: "user 3",
      application: "gmail",
      username: "Panama",
      password: "Mansjk",
    },
    {
      id: 4,
      name: "user 4",
      application: "Facebook",
      username: "Ahikija",
      password: "pas25@@sword",
    },
    {
      id: 5,
      name: "user 5",
      application: "Facebook",
      username: "Ahikijaaa",
      password: "pas25@@sword",
    },
  ]);
  
  return (
    <UserContext.Provider value={[users,setUsers]}>{props.children}</UserContext.Provider>
  );
};