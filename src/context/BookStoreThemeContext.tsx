import { createContext, ReactNode, useEffect, useState } from "react";
import { getTheme, TThemeName } from "../style/theme";
import { GlobalStyle } from "../style/global";
import { ThemeProvider } from "styled-components";

const DEFAULT_THEME_NAME = 'light' as const;
const THEME_LOCALSTORAGE_KEY = 'book_store_theme' as const;

interface IState {
  themeName: TThemeName;
  toggleThemeName: (themeName: TThemeName) => void;
}

const initialState: IState = {
  themeName: DEFAULT_THEME_NAME,
  toggleThemeName: () => {}
}

export const BookStoreThemeContext = createContext<IState>(initialState);

export const BookStoreThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeName, setThemeName] = useState<TThemeName>(DEFAULT_THEME_NAME);

  const toggleTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
    localStorage.setItem(
      THEME_LOCALSTORAGE_KEY,
      themeName === 'light' ? 'dark' : 'light'
    )
  }

  useEffect(() => {
    const savedThemeName = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as TThemeName;
    setThemeName(savedThemeName || DEFAULT_THEME_NAME);
  }, []);
  
  return (
    <BookStoreThemeContext.Provider value={{
      themeName: themeName,
      toggleThemeName: toggleTheme
    }}>
      <ThemeProvider theme={getTheme(themeName)}>
        <GlobalStyle themeName={themeName}/>
        {children}
      </ThemeProvider>
    </BookStoreThemeContext.Provider>
  )
}