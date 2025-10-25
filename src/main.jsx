import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './router/Router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'

import { Toaster } from 'react-hot-toast'
import CartProvider from './provider/CartContext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <AuthProvider>
        <CartProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }}
        />
        </CartProvider>
      </AuthProvider>
    
    
  </StrictMode>,
)
