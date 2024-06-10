import { useContext } from "react"
import ThemeSwitcher from "./components/common/header/ThemeSwitcher"
import { BookStoreThemeContext } from "./context/BookStoreThemeContext"
import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import { QueryClientProvider } from "react-query"
import { queryClient } from "./api/queryClient"

function App() {
  const { themeName, toggleThemeName } = useContext(BookStoreThemeContext);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeSwitcher themeName={themeName} setThemeName={toggleThemeName}/>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
