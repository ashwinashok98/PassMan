import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ashwin",
      category: "gmail",
      username: "Ashwin",
      password: "pass",
    },
    {
      id: 2,
      name: "Akshay",
      category: "gmail",
      username: "Ashok",
      password: "password",
    },

    {
      id: 3,
      name: "ashok",
      category: "gmail",
      username: "Panama",
      password: "Mansjk",
    },
    {
      id: 4,
      name: "akshay",
      category: "Facebook",
      username: "Ahikija",
      password: "pas25@@sword",
    },
    {
      id: 5,
      name: "ashwin",
      category: "Facebook",
      username: "Ahikijaaa",
      password: "pas25@@sword",
    },
  ]);
  
  return (
    <UserContext.Provider value={[users,setUsers]}>{props.children}</UserContext.Provider>
  );
};
