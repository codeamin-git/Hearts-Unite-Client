import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes.jsx';
import AuthProvider from '../providers/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-7xl mx-auto font-lato'>
          <AuthProvider>
            <RouterProvider router={router} />
            <Toaster />
          </AuthProvider>
        </div>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
