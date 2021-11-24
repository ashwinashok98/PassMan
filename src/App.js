import "./App.css";
import { React, Component, useContext, useState } from "react";
import ListContainer from "./components/list-container/list-container.component";
import CreateCategory from "./components/create-category/create-category.component";
import Search from "./components/search/search.component";
import { UserProvider } from "./context/userContext";
import { CategoryProvider } from "./context/categoryContext";

const App = () => {
  const [searchValue,setSearchValue] = useState('');
  return (
    <UserProvider>
      <CategoryProvider>
        <div className="App">
          <Search setSearchValue={setSearchValue}/>
          <ListContainer searchValue={searchValue}/>
          <CreateCategory/>
        </div>
      </CategoryProvider>
    </UserProvider>
  );
};

export default App;
