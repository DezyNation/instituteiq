import React, { createContext, useContext, useState } from "react";

const FilesContext = createContext();

export const FilesProvider = ({ children }) => {
  return (
    <FilesContext.Provider
    value = {useState([])}
    >
      {children}
    </FilesContext.Provider>
  );
};

export const useFilesProvider = () => useContext(FilesContext);
