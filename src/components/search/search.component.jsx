import React, { useState } from 'react';
import './search.styles.scss';
import { UserContext } from "../../context/userContext";
import { CategoryContext } from "../../context/categoryContext";
import {Navbar,NavDropdown,Form,Nav,Button,Container,FormControl} from'react-bootstrap';
import {ReactComponent as PageIcon} from './icon.svg'


const Search=(props)=>{
    const [value,setValue]=useState('');
    const handleChange=(e)=>{
        
        setValue(e.target.value);
        props.setSearchValue(e.target.value);
    }
    return(
<Navbar className="search-nav "  sticky="top" bg="light" expand="lg">
              <PageIcon/><span>&nbsp;&nbsp;</span><h2>PassMan</h2>
              <Nav className="justify-content-end" style={{ width: "100%" }}>
      <Form className="search navbar-left" >
        <FormControl
          type="text"
          placeholder="Search"  
          value={value}
          onChange={(e)=>{handleChange(e)}}
        />
        
      </Form>
      </Nav>
    
</Navbar>
)}
export default Search;