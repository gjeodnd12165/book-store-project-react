import { BookStoreThemeContext } from '@/context/BookStoreThemeContext';
import { useContext } from 'react';

function ThemeSwitcher() {
  const { themeName, toggleThemeName } = useContext(BookStoreThemeContext);
  const toggleTheme = () => {
    toggleThemeName(themeName === 'light' ? 'dark' : 'light');
  }

  return (
    <button onClick={toggleTheme}>{themeName}</button>
  )
}


export default ThemeSwitcher