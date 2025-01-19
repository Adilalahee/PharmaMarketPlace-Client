import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Route/router.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
    
    </RouterProvider>
        </QueryClientProvider>
        <Toaster position='top-right' reverseOrder={false}></Toaster>
      </HelmetProvider>
   
    </AuthProvider>
  
  </StrictMode>,
)
