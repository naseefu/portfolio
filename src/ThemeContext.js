import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

// Function to get initial theme from localStorage or default to dark mode
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme === 'dark';
  }
  return true; // Default to dark mode
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme());

  useEffect(() => {
    // Apply theme to document on mount and whenever isDarkMode changes
    applyTheme(isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    // Apply theme to document on mount and whenever isDarkMode changes
    applyTheme(isDarkMode);
  }, [isDarkMode]);

  const applyTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
