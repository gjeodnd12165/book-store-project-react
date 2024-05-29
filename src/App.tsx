import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import { useContext } from "react"
import ThemeSwitcher from "./components/common/header/ThemeSwitcher"
import { BookStoreThemeContext } from "./context/BookStoreThemeContext"

function App() {
  const { themeName, toggleThemeName } = useContext(BookStoreThemeContext);

  return (
    <>
      <ThemeSwitcher themeName={themeName} setThemeName={toggleThemeName}/>
      <Layout>
        <Home />
      </Layout>
    </>
  )
}

export default App
