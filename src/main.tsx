import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BookStoreThemeProvider } from './context/BookStoreThemeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BookStoreThemeProvider>
      <App />
    </BookStoreThemeProvider>
  </React.StrictMode>,
)
