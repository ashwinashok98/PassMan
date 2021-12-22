import "./App.css";

import { React, useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";
import { UserContext } from "./context/userContext";
import { CategoryContext } from "./context/categoryContext";

import ListContainer from "./components/list-container/list-container.component";
import CreateCategory from "./components/create-category/create-category.component";
import Search from "./components/search/search.component";

const App = () => {
  const baseURL = "http://localhost:3000";
  const [users, setUsers] = useContext(UserContext);
  const [category, setCategory] = useContext(CategoryContext);
  


  const fetchData = (async () => {
    const userRes = await axios.get(`${baseURL}/users`);
    setUsers(userRes.data);
    
    const categoryRes = await axios.get(`${baseURL}/category`);
    let categories = categoryRes.data.map((cat) => {
      return cat.name;
    });
    setCategory(categories);
  });

  useEffect(() => {
    console.log("inside useEffect");

    fetchData();
  }, [users.length,category.length]);

  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <Search setSearchValue={setSearchValue} />
      <ListContainer searchValue={searchValue} />
      <CreateCategory />
    </div>
  );
};

export default App;
