import React, { useState } from "react";
import "./search.styles.scss";
import { UserContext } from "../../context/userContext";
import { CategoryContext } from "../../context/categoryContext";
import { Navbar, Form, Nav, FormControl } from "react-bootstrap";
import { ReactComponent as PageIcon } from "./icon.svg";

const Search = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    props.setSearchValue(e.target.value);
    e.preventDefault();
  };
  return (
    <Navbar className="search-nav " sticky="top" bg="light" expand="lg">
      <PageIcon />
      <span>&nbsp;&nbsp;</span>
      <h2 class="title">PassMan</h2>
      <Nav className="justify-content-end" style={{ width: "100%" }}>
        <Form className="search navbar-left">
          <FormControl
            type="text"
            placeholder="Search"
            value={value}
            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </Form>
      </Nav>
    </Navbar>
  );
};
export default Search;
