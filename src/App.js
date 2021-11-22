import "./App.css";
import { React, Component, useContext } from "react";
import ListContainer from "./components/list-container/list-container.component";
import { UserProvider } from "./context/userContext";
import { ApplicationProvider } from "./context/applicationContext";
const App = () => {
  
  return (
    <UserProvider>
      <ApplicationProvider>
        <div className="App">
          <ListContainer />
        </div>
      </ApplicationProvider>
    </UserProvider>
  );
};

export default App;
