"use client";

import { createContext, useState } from "react";

// Creating a new Context object for theme management. This will be used to provide and consume the theme data in different components.
export const ThemeContext = createContext();

// Defining a ThemeProvider component. This component will provide the theme context to all of its child components.
export const ThemeProvider = ({ children }) => {
  // Using the useState hook to create a state variable 'mode' with a default value 'light'.
  const [mode, setMode] = useState("light");

  // Defining a toggle function that changes the theme mode between 'light' and 'dark'.
  const toggle = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Returning the JSX for ThemeProvider. It wraps the children components with ThemeContext.Provider.
  // The 'value' prop of the Provider is an object containing the 'toggle' function and the current 'mode'.
  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
