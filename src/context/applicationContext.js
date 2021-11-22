import React, { createContext, useState } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = (props) => {
  const [application, setApplication] = useState(["gmail", "Facebook", "yah"]);
  
  return (
    <ApplicationContext.Provider value={[application, setApplication]}>
      {props.children}
    </ApplicationContext.Provider>
  );
};
