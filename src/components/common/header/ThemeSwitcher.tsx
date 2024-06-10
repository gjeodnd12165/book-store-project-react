import { TThemeName } from '@/style/theme'

interface Props {
  themeName: TThemeName;
  setThemeName: (themeName: TThemeName) => void;
}

function ThemeSwitcher({ themeName, setThemeName }: Props) {
  const toggleTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }

  return (
    <button onClick={toggleTheme}>{themeName}</button>
  )
}


export default ThemeSwitcher