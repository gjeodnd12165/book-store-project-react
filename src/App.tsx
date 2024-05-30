import { useContext } from "react"
import ThemeSwitcher from "./components/common/header/ThemeSwitcher"
import { BookStoreThemeContext } from "./context/BookStoreThemeContext"
import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"

function App() {
  const { themeName, toggleThemeName } = useContext(BookStoreThemeContext);

  return (
    <>
      <ThemeSwitcher themeName={themeName} setThemeName={toggleThemeName}/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
