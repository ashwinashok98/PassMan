import "./App.css";
import { React, Component, useContext } from "react";
import ListContainer from "./components/list-container/list-container.component";
import CreateCategory from "./components/create-category/create-category.component";
import { UserProvider } from "./context/userContext";
import { CategoryProvider } from "./context/categoryContext";
const App = () => {
  
  return (
    <UserProvider>
      <CategoryProvider>
        <div className="App">
          <ListContainer />
          <CreateCategory/>
        </div>
      </CategoryProvider>
    </UserProvider>
  );
};

export default App;
