// src/context/UserContext.jsx
import React, { createContext, useState } from "react";

export const DataContext = createContext();

function UserContext({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DataContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </DataContext.Provider>
  );
}

export default UserContext;
