"use client";
import React, { createContext, useContext, useState } from "react";

const StoreContext = createContext(null);

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

export const StoreProvider = ({ children }) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const changeSection = (page) => {
    setCurrentSection(page);
  };

  const loadSection = (loaded) => {
    setIsPageLoaded(loaded);
  };

  const value = {
    isPageLoaded,
    currentSection,
    changeSection,
    loadSection,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
