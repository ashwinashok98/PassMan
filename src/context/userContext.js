import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "user 1",
      category: "gmail",
      username: "Ashwin",
      password: "pass",
    },
    {
      id: 2,
      name: "user 2",
      category: "gmail",
      username: "Ashok",
      password: "password",
    },

    {
      id: 3,
      name: "user 3",
      category: "gmail",
      username: "Panama",
      password: "Mansjk",
    },
    {
      id: 4,
      name: "user 4",
      category: "Facebook",
      username: "Ahikija",
      password: "pas25@@sword",
    },
    {
      id: 5,
      name: "user 5",
      category: "Facebook",
      username: "Ahikijaaa",
      password: "pas25@@sword",
    },
  ]);
  
  return (
    <UserContext.Provider value={[users,setUsers]}>{props.children}</UserContext.Provider>
  );
};
