import "./App.css";

import { React,useState,useEffect,useContext } from "react";
import axios from "axios"
import { UserContext } from "./context/userContext";

import ListContainer from "./components/list-container/list-container.component";
import CreateCategory from "./components/create-category/create-category.component";
import Search from "./components/search/search.component";


const App = () => {
  const baseURL="http://localhost:3000";
  const [users, setUsers] = useContext(UserContext);
  useEffect(()=>{
    console.log("inside useEffect")
    axios.get(`${baseURL}/users`).then((res)=>{
      setUsers(res.data)
      
    })
  },[users])
  
  const [searchValue,setSearchValue] = useState('');
  
  return (
    
        <div className="App">
          <Search setSearchValue={setSearchValue}/>
          <ListContainer searchValue={searchValue}/>
          <CreateCategory/>
        </div>
     
  );
};

export default App;
