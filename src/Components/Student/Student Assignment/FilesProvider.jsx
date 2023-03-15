import { useFormik } from "formik";
import React, { createContext, useContext, useState } from "react";

const FilesContext = createContext();

export const FilesProvider = ({ children }) => {
  const formikFilesProvider = useFormik({
    initialValues: {
      filesToBeUploaded: null,
    },
  });

  const handleFileUploadOrChange = (e) => {
    const filesRef = e.target.files;
    formikFilesProvider.setFieldValue("filesToBeUploaded", filesRef);
  };

  const handleDeleteItem = (elementToDelete) => {
    let copyOfFilesToBeUploaded = {};
    {
      formikFilesProvider.values.filesToBeUploaded &&
        Object.entries(formikFilesProvider.values.filesToBeUploaded).map(
          (fileElement, index) => {
            copyOfFilesToBeUploaded[index] = fileElement[1];
          }
        );
    }
    delete copyOfFilesToBeUploaded[elementToDelete];

    formikFilesProvider.setFieldValue(
      "filesToBeUploaded",
      copyOfFilesToBeUploaded
    );
  };

  const filesToBeUploaded = formikFilesProvider.values.filesToBeUploaded;

  return (
    <FilesContext.Provider
      value={[filesToBeUploaded, handleFileUploadOrChange, handleDeleteItem]}
    >
      {children}
    </FilesContext.Provider>
  );
};

export const useFilesProvider = () => useContext(FilesContext);
