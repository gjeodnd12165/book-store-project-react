import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import { QueryClientProvider } from "react-query"
import { queryClient } from "./api/queryClient"
import ToastContainer from "./components/common/toast/ToastContainer"

function App() {
  

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer />
    </QueryClientProvider>
  )
}

export default App
